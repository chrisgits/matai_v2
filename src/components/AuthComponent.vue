<template>
  <div style="max-width: 450px">
    <template v-if="tab === 'register'">
      <div class="text-center q-mb-lg">Sign up with</div>
    </template>
    <template v-else>
      <div class="text-center q-mb-lg">Sign in with</div>
    </template>
    <div class="flex flex-center">
      <q-btn class="flex flex-center q-px-lg q-py-sm q-mb-md" color="primary" size="md"  label="Google" 
        @click="google" 
      />
    </div>
    <template v-if="tab === 'register'">
      <p class="text-center">Sign up with credentials</p>
    </template>
    <template v-else>
      <p class="text-center">Sign in with credentials</p>
    </template>

    <q-form @submit="submitForm">
      <q-input outlined class="q-mb-md" type="email" label="Email" v-model="formData.email" />
      <q-input outlined class="q-mb-md" type="password" label="Password" v-model="formData.password" />
      <div class="row">
        <q-space />
        <q-btn type="submit" color="primary" :label="tab" />
      </div>
    </q-form>
    <div class="text-center q-my-md">
      <q-btn flat label="Forgot Password?" color="green" class="text-capitalize rounded-borders"
        v-if="tab !== 'register'" @click="forgotPassword" />
    </div>
    <q-dialog v-model="resetPwdDialog">
      <ForgotPassword />
    </q-dialog>
  </div>
</template>

<script>
import ForgotPassword from "./ForgotPassword.vue";
import firebase from 'firebase/compat/app';
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import 'firebase/firestore';

const auth = getAuth();

export default {
  name: "AuthComponent",
  props: ['tab'],
  components: { ForgotPassword },
  data (){
    return {
      formData: {
        email: '',
        password: ''
      },
      resetPwdDialog: false
    }
  },
  methods: {
    submitForm () {
      if (this.tab === 'login') {
         this.signInExistingUser(this.formData.email, this.formData.password)
      } else {
        this.createUser(this.formData.email, this.formData.password)
      }
    },
    google () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log('result', result)
        this.$q.notify({message: 'Sign In Success.'})
        this.$router.push('/members')
      })
      .catch(error => console.log('error',error))
    },
    signInExistingUser (email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          this.$q.notify({message: 'Sign In Success.'})
          this.$router.push('/members')
        })
        .catch(error => { console.log(error)})
    },
    createUser(auth, email, password) {
      createUserWithEmailAndPassword(auth, email, password) 
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          this.$q.notify({message: 'Sign In Success.'})
          this.$router.push('/members')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          })
        }
  }
}  
</script>
