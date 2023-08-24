<template lang="pug">
article(class='text', v-html='data')
</template>

<script lang="ts">
  export default { props: ['data'] }
</script>

<style scoped lang="scss">
  .text {
    width: 100%;
    max-width: 884px;
    margin: 0 auto;
  }
</style>
