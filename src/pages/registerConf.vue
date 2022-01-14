<template>
  <q-page>
    <div class="row">
      <div class="col-12">
        <h4>2022 Conference Registration</h4>
        <h6>Join us for the 2022 Conference in Des Moines Iowa which will feature CMV related crash testing and insights. Fill in the form below to register and submit payment.</h6>
        <div class="col-12 text-center">
          <div class="q-gutter-y-md column" style="max-width: 400px">
            <q-form
              name="confreg2022"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              >
              <q-input type="hidden" name="form-name" value="confreg2022" />
              <q-input
                outlined
                v-model="firstname"
                label="First Name"               
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                outlined
                v-model="lastname"
                label="Last Name"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                outlined
                v-model="email"
                label="Email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'registerConf'
})
</script>
