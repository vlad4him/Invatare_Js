<template>
  <div>
    <Header />
      <b-row  v-if="show">
      <b-col  v-for="(video, key) in videos" :key="key">
        <div  v-html="video.iframe"></div>
        <div >{{video.title}}</div>
        <div><b-btn v-b-toggle.collapse2 class="m-1">Show more</b-btn></div>
         <b-collapse id="collapse2">
    <b-card>
      {{video.descr}}
    </b-card>
  </b-collapse>
      </b-col>
    </b-row>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  },
  data () {
    return ({
      show: true,
      videos: [] })
  },
  mounted () {
    var self = this
    console.log('==========')
    console.log(this)
    console.log('==========')
    console.log('Before axiox')
    axios.get('https://api.myjson.com/bins/xydd4')
      .then(function (response) {
        console.log(response)
        console.log('===as da das d===')
        console.log(self)
        console.log('======asda dsa ds===')
        self.videos = response.data
      //  console.log("In axios")
      })
      .catch(function (error) {
        console.log(error)
      })
  // console.log("After axios")
    //  console.log("======= ========")
    //  console.log(JSON.stringify(this.videos))
    //  https://api.myjson.com/bins/xydd4
  }
}

</script>
