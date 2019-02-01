<template>
  <div>
    <b-row>
      <b-col> Header</b-col>
    </b-row>
    <b-row v-if="show">
      <b-col cols="3" v-for="(video, key) in videos" :key="key">
        <div v-html="video.iframe"></div>
        <div>{{video.title}}</div>
        <div>{{video.descr}}</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col> Footer </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
//title
//vizualizari
//link
//comentu-ri

export default {
  name: 'home',
  components: {
  
  },
  data () {
    return ({ 
      show: false,
      videos: [{
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/D7jlOyccgl8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'The Ultimate Guide to Drawing Anime',
        descr: `The Ultimate Guide you'll need for drawing Anime characters, fanarts or even your own original character`
      }, {
        iframe: '',
        title: 'Titrlu 2',
        descr: ''
      }, {
        iframe: '',
        title: 'Titlu 2',
        descr: ''
      }]})
  },
  mounted () {
    //Trebuie sa aduci datele.
    // Dupa ce le aduceai
    // this.show = true
  }
}
</script>
