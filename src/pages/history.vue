<template>
  <q-page class="flex flex-center page">
    <div class="col-12">
      <h3 class="text-center">A History of MATAI</h3>
    </div>
    <div class="col-12">
      <p>From humble beginnings in middle America, the MATAI Midwest Association of Technical Accident Investigators organization was organized in 1986 by Mike Adams, Ray Knight and Jon Wilson of Iowa.</p>
      <p>They started the idea of the organization and worked to develop the first group of individuals that would become the Founding Board of Directors</p>
    </div>
    <div class="col-12 ">
      <h5>A Look at a snippet of the first letter to the incoming Directors</h5>
      <q-img src="../../src/assets/history/firstNL.png" alt="first newsletter snippet" class="img-border shadow-3 q-mb-xl"/>
    </div>
    <div class="row ">
      <div class="col-6">
        <p>A proposed initial logo</p>
        <img src="../../src/assets/history/proposed.png" alt="proposed logo" class="shadow-3 q-mb-xl">
      </div>
      <div class="col-6">
        <p>The first logo used by the organization as shown in the meeting minutes of May 30, 1986.</p>
        <img src="../../src/assets/history/originalLogo.png" alt="first logo" class="shadow-3 q-mb-xl">
      </div>
    </div><!--row-->
    <div class="col-12 ">
      <p>In the first newsletter of 1987 there was discussions of the 1st Annual Meeting to be planned and a proposal for motorcycle sliding tests to be performed. As a part of this newsletter there were Acceleration Study data included for analysis purposes. </p>
      <p>In the 2nd newsletter of 1987 a brief history was narrated by authors Adams and Knight:</p>
      <img src="../../src/assets/history/mataiHistory.png" alt="history snippet" class="img-border shadow-3 q-mb-xl">
      <p>A continuing tradition of MATAI was first discussed in this newsletter as well -- how the organization depends on the active roll of its members:</p>
      <img src="../../src/assets/history/anyMember.png" alt="member involvement snippet" class="img-border shadow-3 q-mb-xl">
    </div>
    <div class="col-12 ">
      <p>The organization's first annual training session was held May 20-21, 1987 in Camp Dodge near Johnston, IA.</p>
      <img src="../../src/assets/history/firstTraining.png" alt="history snippet" class="img-border shadow-3 q-mb-xl">
      <p>The first <strong>Annual Meeting and Training Seminar</strong> (AMTS #1) was announced to be on May 17, 1988 at Ankeny, IA.</p>
      <img src="../../src/assets/history/trainingList88.png" alt="member involvement snippet" class="img-border shadow-3 q-mb-xl">
      <p>It is interesting to see the topics of the day and that many of those topics are still relevant today -- other than the 'video taped animations' of course.</p>
      <p>There is also mention of <a href="https://www.napars.org/">NAPARS</a>, the National Association of Professional Accident Reconstruction Specialists, Inc. -- which, first and foremost, is an even longer name than MATAI, at 77 characters if you include spaces! They are mentioned because they had proposed a potential partnership for a national bi-monthly newsletter since the printing and mailing of newsletters for these organizations was a significant undertaking and cost.</p>
      <p>In December 1988 NAPARS introduces the Accident Reconstruction Journal, which is still published to this day. Becoming a member of MATAI provides you with copies of this Journal back to 2013.</p>
    </div>
    <div class="col-12">
      <p>The third annual meeting - AMTS III - was held in Cedar Rapids, IA in May, 1990 and the newsletter reported over 100 members representing six states.</p>
      <p>The February 1991 newsletter informs the membership of training to be held in Council Bluffs (AMTS IV). The letter includes words from  <strong>Richard Yoder</strong> as President who is currently still actively engaged on the board in 2022!</p>
      <p>Interestingly there is also mention of a 'national certification' process moving forward and MATAI being a part of that effort. Think <a href="https://actar.org">ACTAR</a>!</p>
      <p>Continued conferences took place and in 1993 the newsletter took on a new look and feel as better technology took over things like word processing. </p>
      <img src="../../src/assets/history/1993NL.png" alt="member involvement snippet" class="img-border shadow-3 q-mb-xl">
      <p>In the Summer of 1993 it moved further into a newspaper style format and we notice the subtle removal of the Wyoming/Colorado shape from the logo.</p>
      <img src="../../src/assets/history/Summer93NL.png" alt="member involvement snippet" class="img-border shadow-3 q-mb-xl">
      <p>The Summer of '94 conference topic was School Bus crashes which was repeated again in 2019 with remote-controlled buses!</p>
      <img src="../../src/assets/history/Summer94NL.png" alt="member involvement snippet" class="img-border shadow-3 q-mb-xl">
    </div>

  </q-page>
</template>

<style lang="sass" scoped>
.page
  padding: 1em
p
  font-size: 20px
  margin-bottom: 1em
img
  width: 100%
.img-border
  width: 100%
.col-6
  padding: 1em
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'history'
})
</script>