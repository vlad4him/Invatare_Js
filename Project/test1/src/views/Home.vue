<template>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <fileBrowsing></fileBrowsing>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import fileBrowsing from '@/components/fileBrowsing.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    fileBrowsing
  }
}
</script>
