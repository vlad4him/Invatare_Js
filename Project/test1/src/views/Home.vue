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

export default {
  name: 'home',
  components: {
    Header,
    Footer
  },
  data () {
    return ({
      show: true,
      videos: [ {
        iframe: '<iframe width="280" height="175" src="https://www.youtube.com/embed/SENWjQ08oO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'Making Your Dream Game - Resource Drop #5 [Indie Game Development]',
        descr: 'Hey everyone! In this video we discuss 4 key questions which may lead you to having success in making your dream game. We\'re using an article from the lead developer of the Godot engine as inspiration for this video make sure to read it as it has many great points! I hope you find these game development tips useful! I really enjoy developing resource drop. These videos take quite a while to develop due to research, writing a script and all of the video editing so I hope you enjoy it! If you enjoyed my video consider supporting my Patreon: https://www.patreon.com/matthew_palaje'
      }, {
        iframe: '<iframe width="280" height="175" src="https://www.youtube.com/embed/LiWTCVU57rA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'The $100,000 PC LIVES!',
        descr: 'Check out the Massdrop x Sennheiser HD 6XX Headphones at https://dro.ps/linustechtips-hd6xx-3 Check out the Thermaltake A500 case on Amazon at https://lmg.gg/tta500 Buy Intel Xeon on Amazon: http://geni.us/huvVq1F Buy keyboards on Amazon: http://geni.us/9s2Kwm Discuss on the forum: https://linustechtips.com/main/topic/... Our Affiliates, Referral Programs, and Sponsors: https://linustechtips.com/main/topic/... Get Private Internet Access today at http://geni.us/7lLuafK Linus Tech Tips merchandise at http://www.LTTStore.com/ Linus Tech Tips posters at http://crowdmade.com/linustechtips Our Test Benches on Amazon: https://www.amazon.com/shop/linustech... Our production gear: http://geni.us/cvOS'
      },
      {
        iframe: '<iframe width="280" height="175" src="https://www.youtube.com/embed/vbLGiaAzoQo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'Can I FIX this $10,000 CPU??',
        descr: 'Check out the Massdrop x HIFIMAN HE4XX Planar Magnetic Headphones at https://dro.ps/linus-he4xx Monitor and manage your PC in real-time with Pulseway! Create your free account today at https://lmg.gg/pulseway Buy Intel Xeon CPUs on Amazon: https://lmg.gg/amazonxeon Discuss on the forum: https://linustechtips.com/main/topic/... Our Affiliates, Referral Programs, and Sponsors: https://linustechtips.com/main/topic/... Get Private Internet Access today at http://geni.us/7lLuafK'
      },
      {
        iframe: '<iframe width="280" height="175" src="https://www.youtube.com/embed/z6hQqgvGI4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'Vue.js 2.0 In 60 Minutes',
        descr: 'UPDATED VERSION - https://www.youtube.com/watch?v=Wy9q2... In this crash course we will cover all of the fundamentals of the Vue.js 2.0 JavaScript framework. Vue-cli Declarative Rendering Directives Conditionals & Loops Events & Input Templates Components Properties vue-router vue-resource FULL VUE.JS COURSE: https://www.eduonix.com/affiliates/id... For more on this video and others, visit http://www.traversymedia.com SUPPORT THIS CHANNEL WITH A CUP OF COFFEE PER MONTH: http://www.patreon.com/traversymedia ONE TIME DONATIONS: http://www.paypal.me/traversymedia'
      },
      {
        iframe: '<iframe width="280" height="175" src="https://www.youtube.com/embed/Y30VF3cSIYQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'The Legend of Question Six - Numberphile',
        descr: 'Free trial at Great Courses Plus: http://ow.ly/7Hh2302dIFt More links & stuff in full description below ↓↓↓ Simon Pampena discusses the famous Question 6 from the 1988 International Mathematical Olympiad. More links below... Second part of this video: https://youtu.be/L0Vj_7Y2-xY International Mathematical Olympiad (includes links to all previous Olympiad results and papers): https://www.imo-official.org Simon Pampena: https://twitter.com/mathemaniac Terence Tao: http://www.math.ucla.edu/~tao/ (thanks to him for the photos) Support us on Patreon: http://www.patreon.com/numberphile '
      },
      {
        iframe: '<iframe width="280" height="175" src="https://www.youtube.com/embed/L0Vj_7Y2-xY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'The Return of the Legend of Question Six - Numberphile',
        descr: 'Extra footage... first video is at: https://youtu.be/Y30VF3cSIYQ Featuring Simon Pampena (@mathemaniac). More links below.... More Simon videos: http://bit.ly/Pampena_Videos Zvezda videos: http://bit.ly/zvezda_videos Question 6 from the IMO in 1988, held in Australia. International Mathematical Olympiad (includes links to all previous Olympiad results and papers): https://www.imo-official.org Wikipedia on Vieta Jumping: https://en.wikipedia.org/wiki/Vieta_j... (includes some stuff on Question 6) Answer on the Art of Problem Solving: http://bit.ly/2bv85ZQ Another paper on the problem: http://bit.ly/2bexvsR '
      },
      {
        iframe: '<iframe width="280" height="175" src="https://www.youtube.com/embed/QHydkEARVKE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'Bobby Fischer\'s 21-move brilliancy',
        descr: 'Bobby Fischer creates a chess masterpiece in only 21 moves against Robert Eugene Byrne, an International Master, at the 1963/1964 United States Chess Championship, held in New York. At 20 years young, Grandmaster Robert James Fischer was already among the world\'s very best chess players. In this brilliancy, Fischer demonstrates how to inject multiple imbalances into a highly symmetrical position, how to properly highlight these differences to benefit oneself, and how to accurately assess the true value of the pieces as they rest on the board. PGN: 1. d4 Nf6 2. c4 g6 3. g3 { E60 King\'s Indian Defense: Fianchetto Variation, Immediate Fianchetto } c6 4. Bg2 d5 5. cxd5 cxd5 6. Nc3 Bg7 7. e3 O-O 8. Nge2 Nc6 9. O-O b6 10. b3 Ba6 11. Ba3 Re8 12. Qd2 e5 13. dxe5 Nxe5 14. Rfd1 Nd3 15. Qc2 Nxf2 16. Kxf2 Ng4+ 17. Kg1 Nxe3 18. Qd2 Nxg2 19. Kxg2 d4 20. Nxd4 Bb7+ 21. Kf1 Qd7 '
      },
      {
        iframe: '<iframe width="280" height="175" src="https://www.youtube.com/embed/rdm-tAIkuBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'Beyond IMPOSSIBLE Mentalism Magic Trick CONFUSES Penn & Teller!',
        descr: 'Morgan and West return and try to fool Penn and Teller with this impossible mentalism trick. I hope you enjoyed this great performance. Subscribe for more Penn and Teller fool us videos and card/magic trick performance and tutorial videos. How to enter $100 Amazon Gift Card Giveaway: 1. Subscribe to the channel 2. Like the video 3. Comment something you like about this video or my channel. 10 winners will be announced in a video very soon. Best of luck! Feel free to email me about possible collaborations, video suggestions, or questions about YouTube: mltmagictricks@gmail.com'
      }] })
  },
  mounted () {
    // Trebuie sa aduci datele.
    //  Dupa ce le aduceai
    // this.show = true
  }
}
</script>
