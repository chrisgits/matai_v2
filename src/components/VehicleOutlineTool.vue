<template>
  <div class="q-pa-md">
    <q-card class="q-pa-md">
      <div class="text-h6 q-mb-md">Vehicle Perimeter Tool – Box-Based Input</div>

      <!-- Box Dimensions -->
      <div class="q-gutter-sm row q-mb-md">
        <q-input v-model.number="box.length" label="Box Length (ft)" type="number" class="col-3" />
        <q-input v-model.number="box.width" label="Box Width (ft)" type="number" class="col-3" />
      </div>

      <!-- Measurement Input -->
      <div class="q-gutter-sm row items-start q-mb-lg">
        <div class="col-2">
          <div class="q-gutter-sm column" style="position: relative;">
            <q-input
              class="q-mb-sm"
              v-model.number="newPoint.perim"
              label="Perimeter Offset (ft)"
              type="number"
              ref="pointInputRef"
              :error="newPoint.perim > boxPerimeter"
            />
            <div
              v-if="newPoint.perim > boxPerimeter"
              class="text-negative text-caption"
              style="position: absolute; bottom: -1.2em; left: 0;"
            >
              ⚠️ Exceeds box perimeter ({{ boxPerimeter }} ft)
            </div>
          </div>
        </div>
        <div class="col-2">
          <q-input v-model.number="newPoint.inward" label="Inward Distance (ft)" type="number" class="col" />
        </div>
        <div class="col-3">
          <q-input v-model="newPoint.comment" label="Comment" class="col" />
        </div>
        <div class="col-2">
          <q-btn size="large" color="primary" label="Add Point" @click="addPoint" />
        </div>

      </div>

      <!-- Action Buttons -->
      <div class="q-mb-md row q-gutter-sm">
        <q-btn color="green" label="Export CSV" @click="exportCSV" />
        <q-btn color="negative" label="Clear All" @click="clearAll" />
      </div>

      <!-- Canvas for Plot -->
      <canvas
        ref="canvas"
        :width="canvasSize"
        :height="canvasSize"
        class="q-mb-md"
        style="border:1px solid #ccc;"
      />

      <!-- Data Table -->
      <q-table
        :rows="computedPoints"
        :columns="columns"
        row-key="comment"
        flat
        bordered
        dense
        title="Computed Points"
      >
        <template v-slot:body-cell-delete="props">
          <q-td text-align="center">
            <q-btn
              dense flat round
              icon="delete"
              color="red"
              @click="deletePoint(props.row)"
            />
          </q-td>
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';

const box = ref({ length: 20, width: 8 });
const newPoint = ref({ perim: 0, inward: 0, comment: '' });
const rawPoints = ref([]);
const pointInputRef = ref(null);
const boxPerimeter = computed(() => 2 * (box.value.length + box.value.width));

const canvas = ref(null);
const canvasSize = 500;
const margin = 20;

const columns = [
  { name: 'x', label: 'X (ft)', field: row => row.x.toFixed(2), align: 'right' },
  { name: 'y', label: 'Y (ft)', field: row => row.y.toFixed(2), align: 'right' },
  { name: 'perim', label: 'Perimeter (ft)', field: 'perim', align: 'right' },
  { name: 'inward', label: 'Inward (ft)', field: 'inward', align: 'right' },
  { name: 'comment', label: 'Comment', field: 'comment' },
  {
    name: 'delete',
    label: '',
    align: 'center',
    field: 'comment',
    sortable: false,
    style: 'width: 40px'
  }
];

const computedPoints = computed(() => {
  return rawPoints.value
    .map(p => {
      const { x, y } = computeXY(p.perim, p.inward);
      return { ...p, x, y };
    })
    .sort((a, b) => a.perim - b.perim);
});


function computeXY(perim, inward) {
  const L = box.value.length;
  const W = box.value.width;
  const P = 2 * (L + W);
  let offset = perim % P;
  let x = 0, y = 0;

  if (offset <= L) {
    x = inward;
    y = L - offset;
  } else if (offset <= L + W) {
    x = offset - L;
    y = inward;
  } else if (offset <= 2 * L + W) {
    x = W - inward;
    y = offset - (L + W);
  } else {
    x = P - offset;
    y = L - inward;
  }

  return { x, y };
}

function addPoint() {
  rawPoints.value.push({ ...newPoint.value });
  newPoint.value = { perim: 0, inward: 0, comment: '' };
  nextTick(() => {
    draw();
    const inputEl = pointInputRef.value?.$el?.querySelector('input');
    if (inputEl) {
      inputEl.focus();
      inputEl.select(); // selects all text in the input
    }
  });
}

function deletePoint(row) {
  const index = rawPoints.value.findIndex(
    p => p.perim === row.perim && p.inward === row.inward && p.comment === row.comment
  );
  if (index !== -1) {
    rawPoints.value.splice(index, 1);
  }
}

function clearAll() {
  rawPoints.value = [];
}

function exportCSV() {
  const header = 'Perimeter (ft),Inward (ft),X (ft),Y (ft),Comment\n';
  const rows = computedPoints.value
    .map(p => `${p.perim},${p.inward},${p.x.toFixed(2)},${p.y.toFixed(2)},"${p.comment}"`)
    .join('\n');
  const blob = new Blob([header + rows], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'vehicle_points.csv';
  a.click();
}

function draw() {
  const ctx = canvas.value.getContext('2d');
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  const W = box.value.width;
  const L = box.value.length;
  const maxDrawingSize = canvasSize - 2 * margin;



  const scaleX = maxDrawingSize / W;
  const scaleY = maxDrawingSize / L;
  const dynamicScale = Math.min(scaleX, scaleY);

  const boxPixelWidth = W * dynamicScale;
  const boxPixelHeight = L * dynamicScale;

  const offsetX = (canvasSize - boxPixelWidth) / 2;
  const offsetY = (canvasSize - boxPixelHeight) / 2;

  const toCanvasCoords = (x, y) => [
    offsetX + x * dynamicScale,
    offsetY + (L - y) * dynamicScale
  ];

  // Draw box
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 1;
  ctx.strokeRect(offsetX, offsetY, boxPixelWidth, boxPixelHeight);

  // Draw vehicle outline
  ctx.beginPath();
  computedPoints.value.forEach((p, i) => {
    const [cx, cy] = toCanvasCoords(p.x, p.y);
    if (i === 0) ctx.moveTo(cx, cy);
    else ctx.lineTo(cx, cy);
  });

  if (computedPoints.value.length > 1) {
    const [fx, fy] = toCanvasCoords(computedPoints.value[0].x, computedPoints.value[0].y);
    ctx.lineTo(fx, fy);
  }

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw points
  computedPoints.value.forEach(p => {
    const [cx, cy] = toCanvasCoords(p.x, p.y);
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
  });
}

watch([box, rawPoints], draw, { deep: true });
onMounted(draw);
</script>
