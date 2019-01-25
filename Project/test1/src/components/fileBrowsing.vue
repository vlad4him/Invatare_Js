<template>
<div>
  <!-- Styled -->
  <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
</div>
</template>

<script>
export default {
  data () {
    return {
      file: null
    }
  }
}
</script>
