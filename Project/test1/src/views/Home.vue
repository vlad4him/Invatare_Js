<template>
  <div>
    <b-row>
      <b-col> Header</b-col>
    </b-row>
    <b-row v-if="show">
      <b-col cols="3" v-for="(video, key) in videos" :key="key">
        <div v-html="video.iframe"></div>
        <div>{{video.title}}</div>
        <div><b-btn v-b-toggle.collapse2 class="m-1">Show more</b-btn></div>
         <b-collapse id="collapse2">
    <b-card>
      {{video.descr}}
    </b-card>
  </b-collapse>
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
      show: true,
      videos: [{
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/D7jlOyccgl8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'The Ultimate Guide to Drawing Anime',
        descr: `The Ultimate Guide you'll need for drawing Anime characters, fanarts or even your own original character`
      }, {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SENWjQ08oO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'Making Your Dream Game - Resource Drop #5 [Indie Game Development]',
        descr: 'Hey everyone! In this video we discuss 4 key questions which may lead you to having success in making your dream game. We\'re using an article from the lead developer of the Godot engine as inspiration for this video make sure to read it as it has many great points! I hope you find these game development tips useful! I really enjoy developing resource drop. These videos take quite a while to develop due to research, writing a script and all of the video editing so I hope you enjoy it! If you enjoyed my video consider supporting my Patreon: https://www.patreon.com/matthew_palaje'
      }, {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LiWTCVU57rA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'The $100,000 PC LIVES!',
        descr: 'Check out the Massdrop x Sennheiser HD 6XX Headphones at https://dro.ps/linustechtips-hd6xx-3 Check out the Thermaltake A500 case on Amazon at https://lmg.gg/tta500 Buy Intel Xeon on Amazon: http://geni.us/huvVq1F Buy keyboards on Amazon: http://geni.us/9s2Kwm Discuss on the forum: https://linustechtips.com/main/topic/... Our Affiliates, Referral Programs, and Sponsors: https://linustechtips.com/main/topic/... Get Private Internet Access today at http://geni.us/7lLuafK Linus Tech Tips merchandise at http://www.LTTStore.com/ Linus Tech Tips posters at http://crowdmade.com/linustechtips Our Test Benches on Amazon: https://www.amazon.com/shop/linustech... Our production gear: http://geni.us/cvOS'
      },
      {
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vbLGiaAzoQo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'Can I FIX this $10,000 CPU??',
        descr: 'Check out the Massdrop x HIFIMAN HE4XX Planar Magnetic Headphones at https://dro.ps/linus-he4xx Monitor and manage your PC in real-time with Pulseway! Create your free account today at https://lmg.gg/pulseway Buy Intel Xeon CPUs on Amazon: https://lmg.gg/amazonxeon Discuss on the forum: https://linustechtips.com/main/topic/... Our Affiliates, Referral Programs, and Sponsors: https://linustechtips.com/main/topic/... Get Private Internet Access today at http://geni.us/7lLuafK'
      }] })
  },
  mounted () {
    // Trebuie sa aduci datele.
    //  Dupa ce le aduceai
    // this.show = true
  }
}
</script>
