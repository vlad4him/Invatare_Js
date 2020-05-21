<template>
  <div class="profile">
    
    <b-row class="my-1">
      <b-col>
        <b-img :src="require('../views/download.jpg')" height="210"></b-img>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col lg="1" offset="5" class="mt-3">
        <b-input v-model="text" placeholder="John Alex"></b-input>
      </b-col>
      <b-row>
        <b-col lg="10" class="mt-3">
          <b-input v-model="text" placeholder="alexjohn@gmail.com"></b-input>
        </b-col>
      </b-row>
    </b-row>
    <b-row class="my-1">
      <b-col lg="1" offset="5" class="mt-3">
        <b-input v-model="text" placeholder="0771350103"></b-input>
      </b-col>
      <b-row>
        <b-col lg="10" class="mt-3">
          <b-input v-model="text" placeholder="Dogcat1!"></b-input>
        </b-col>
      </b-row>
    </b-row>
    <b-row class="my-1">
      <b-col lg="2" offset="5" class="mt-3">
        <b-button size="lg" variant="success">Save</b-button>
      </b-col>
    </b-row>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "profile",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      show: true
    };
  }
};
</script>
