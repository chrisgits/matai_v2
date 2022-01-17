<template>
  <div class="member-card">
    <div class="row justify-evenly">
      <div class="col-4">
        <span>{{member.name}}</span>
      </div>
      <div class="col-4">
        <span>{{member.organization}}</span>
      </div>
      <div class="col-2 gt-xs">
        <span>{{member.location}}</span>
      </div>
      <div class="col-1">
        <span>{{member.ACTAR}}</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    member: Object
  }
}
</script>

<style lang="scss" scoped>
.member-card {
  padding: .25em 0em;
}
</style>