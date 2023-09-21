<template>
  <q-page>
    <div class="q-pa-md row">
      <p>The Midwest Association of Technical Accident Investigators, <strong>MATAI</strong>, was formed to provide a professional affiliation of individuals dedicated to advancement in the technical aspects of motor vehicle traffic accident investigations.</p>
      <p>Through their affiliation with <strong>MATAI</strong>, professionals in the field of accident investigation discuss problem areas and work together to improve the process of accident investigation and the presentation of related evidence in court.</p>
      <p>An annual conference and general meeting is held each year so that members can get together to discuss activities of the past year in the reconstruction field and to prove that the various formulas and techniques used in the field are accurate. We also provide an annual training session over a 3-day period that provides instruction on a specialized topic. This is generally held opposite of the Annual Conference during the calendar year.</p>
      <p>Founded in 1986, <strong>MATAI</strong> was one of the original contributing organizations involved in the development and establishment of the Accreditation Commission for Traffic Accident Reconstruction (ACTAR). Currently, more than 46% of the MATAI membership is Accredited by ACTAR.</p>
      <q-chip color="teal" text-color="white" icon="bookmark">
        New
      </q-chip>
      <p>Our <a href="/history">history</a> page will bring you through the fascinating past of this organization. If you would like to contribute interesting tidbits of our history in the form of stories, good experiences, photos or otherwise please submit them to <a href="mailto:admin@matai.org">admin@matai.org</a>. Any contributions are greatly appreciated!</p>
      <p>A membership application in PDF format is available on the <a href="/join">Join</a> page. You may review membership requirements in the PDF.</p>
    </div>
    <div class="q-pa-md row " id="board">
      <div class="col-12 text-center">
        <h4 class="q-pa-none q-my-sm">MATAI Board of Directors</h4>
      </div>
      <div class="row justify-center"> <!-- CARD LIST-->
        <q-card
          v-for="boardmember in boardmembers"
          :key="boardmember"
          :class="boardmember.class"
          class="col-12 col-sm-5 q-ma-md"
          flat
          bordered
        >
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs col-7">
              <div class="text-overline">{{boardmember.title}}</div>
              <div class="text-h5 q-mt-sm q-mb-xs">{{boardmember.name}}</div>
              <div class="q-mt-sm q-mb-xs">
                <a
                :key="boardmember.email"
                :href="boardmember.email">Email
                </a>
              </div>
              <!-- <div class="text-caption text-primary">
                {{boardmember.name}} has been {{boardmember.title}} since {{boardmember.yos}}.
              </div> -->
              <div class="text-primary">
                {{boardmember.phone1}}
              </div>
            </q-card-section>
            <q-card-section class="col-5 flex flex-center">
              <q-img
                class="rounded-borders memberImg"
                :src="boardmember.photo"
              />
            </q-card-section>
          </q-card-section>
        </q-card> <!-- END CARD -->
      </div>

      <div class="col-12">
        <h5>Contact MATAI</h5>
        <h6>MATAI</h6>
        <h6>PO Box 92</h6>
        <h6>Johnston, IA 50131</h6>
        <h6><a href="tel:515-321-4381">515-321-4381</a></h6>
        <h6><a href="mailto:info@matai.org">info@matai.org</a></h6>
        <br>
      </div>
      <div class="col-12 q-mb-lg">
        <q-btn
            to="/memberlist"
            unelevated
            class="q-py-md q-px-lg"
            color="accent"
            label="member list"
            text-color="black"
          />
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
p
  font-size: 20px

.bg-officer
  background-color: lightblue
  color: black

.my-dir-p
  background-color: #3c69b3
  color: white

.memberImg
  height: 200px

h6
  margin-top: .15em
  margin-bottom: .15em
</style>
<script>

import { defineComponent } from 'vue';


export default defineComponent({
  name: 'About',
  data() {
    return {
      boardmembers: [
        {
          name: 'Chris Starrett',
          title: 'President',
          email: 'mailto: starrett@dps.state.ia.us',
          phone1: '641-990-4245',
          phone2: '',
          yos: '2020',
          photo: '/img/starrett.jpg',
          bio: 'This is bio text if needed',
          class: 'bg-officer'
        },
        {
          name: 'Chris Mannel',
          title: 'Vice President',
          email: 'mailto: chris@nar-llc.com',
          phone1: '531-444-9348',
          phone2: '',
          yos: '2022',
          photo: '/img/mannel.jpg',
          bio: 'This is bio text if needed',
          class: 'bg-officer'
        },
        {
          name: 'Kirk Lundgren',
          title: 'Secretary/Treasurer',
          email: 'mailto: secretary@matai.org',
          phone1: '515-321-4381',
          phone2: '',
          yos: '2019',
          photo: '/img/lundgren.jpg',
          bio: 'This is bio text if needed',
          class: 'bg-officer'
        },
        {
          name: 'Drew Bolzer',
          title: 'Board Member',
          email: 'mailto: dbolzer@lancaster.ne.gov',
          phone1: '402-450-6627',
          phone2: '',
          yos: '2018',
          photo: '/img/bolzer.jpg',
          bio: 'This is bio text if needed',
        },
        {
          name: 'Dave Hallman',
          title: 'Board Member',
          email: 'mailto: david@hallmanengineering.com',
          phone1: '',
          phone2: '',
          yos: '2021',
          photo: '/img/hallman.jpg',
          bio: 'This is bio text if needed'
        },
        {
          name: 'Timothy Schoolmaster',
          title: 'Board Member',
          email: 'mailto: tschoolmaster@gmail.com',
          phone1: '',
          phone2: '',
          yos: '2020',
          photo: '/img/schoolmaster.jpg',
          bio: 'This is bio text if needed'
        },
        {
          name: 'Charles J. Tassoul',
          title: 'Board Member',
          email: 'mailto: cjtklj@hotmail.com',
          phone1: '920-475-2975',
          phone2: '',
          yos: '2019',
          photo: '/img/tassoul.jpg',
          bio: 'This is bio text if needed'
        },
        {
          name: 'Richard D. Yoder',
          title: 'Board Member',
          email: 'mailto: RDYoder117@msn.com',
          phone1: '319-573-1170',
          phone2: '',
          yos: '1987',
          photo: '/img/yoder.jpg',
          bio: 'This is bio text if needed'
        },
        {
          name: 'John Mobley',
          title: 'Board Member',
          email: 'mailto: nsp616@gmail.com',
          phone1: '402-616-7391',
          phone2: '',
          yos: '2020',
          photo: '/img/mobley.jpg',
          bio: 'This is bio text if needed'
        },
        {
          name: 'Mike Adams',
          title: 'Founding Director',
          email: 'mailto: aka@goldfieldaccess.net',
          phone1: '515-332-5313',
          phone2: '',
          yos: '1987',
          photo: '/img/mike_adams.jpg',
          bio: 'This is bio text if needed',
          class: 'my-dir-p'
        },
      ]
    }
  }

})
</script>
