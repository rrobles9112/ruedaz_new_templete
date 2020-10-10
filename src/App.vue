<template>
  <div id="app">
    <router-view/>

    <back-to-top bottom="50px" right="50px">
      <div class="scroll-top scroll-to-target primary-bg text-white" data-target="html">
        <span class="fas fa-hand-point-up"></span>
      </div>
    </back-to-top>

  </div>

</template>

<script>
  import BackToTop from 'vue-backtotop'


  export default {
    components: { BackToTop }
  }
</script>


<style lang="scss">
</style>
