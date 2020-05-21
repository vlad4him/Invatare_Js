<template>
  <div>
    <input type="text" v-model="videosName" @keyup.enter="addVideo">
    
      <b-row  v-if="show">
      <b-col  v-for="(video, key) in videos" :key="key">
        <div  v-html="video.iframe"></div>
        <div >{{video.title}}</div>
        <div><b-btn v-b-toggle.collapse class="m-1">Show more</b-btn></div>
         <b-collapse id="collapse">
    <b-card>
      {{video.descr}}
    </b-card>
  </b-collapse>
      </b-col>
    </b-row>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

const baseURL = "https://online-database-dc0e3.firebaseio.com/"

export default {
  name: 'home',
  components: {
    Header,
    Footer
  },
  data () {
    return ({
      show: true,
      data: [],
      videosName: '' })
  },
  async created(){
     
    
    try {
      const res = await axios.get(baseURL)
      this.videos = res.data;
    } catch(e) {
      console.error(e)
    }
  },
   methods:{
    async addVideo() {
      const res = await axios.post(baseURL, { iframe: this.videosName })

      this.videos = [...this.videos, res.data]

      this.videosName = ''
    }
  }
}

</script>
