<template>
  <b-container>
    <b-row class="my-1">
      <b-col lg="2" offset="3" class="mt-3">
        <label class="float-left">Enter name:</label>
      </b-col>
      <b-col lg="4" class="mt-3">
        <b-input v-model="text"></b-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col lg="2" offset="3" class="mt-3">
        <label class="float-left">Enter password:</label>
      </b-col>
      <b-col lg="4" class="mt-3">
        <b-input v-model="text"></b-input>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col lg="4" offset-lg="5">
        <b-button class="float-left w-25" variant="success">Login</b-button>
        <b-link to="SignUp"><b-button class="float-right w-25" variant="success">Register</b-button></b-link>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      types: ["email", "password"]
    }
  }
}
</script>
