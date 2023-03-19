<template>
  <div class="container">
    <AppNavBar/>
<!--    <div class="layout">-->
<!--      <router-view />-->
<!--      <CustomSlider v-if="state.isShowSlider"></CustomSlider>-->
<!--    </div>-->
<!--    <ArrowUp></ArrowUp>-->
    <!-- <Footer v-if="isShowNav"></Footer> -->
  </div>
</template>

<script>
import AppNavBar from '@/components/AppNavBar'
export default {
  name: "Home",
  components: { AppNavBar },
  data() {
    return {
      state: {
        isShowNav: true,
        isShowSlider: false,
      }
    }
  },
  watch: {

  },
  methods: {
  }
}
</script>

<style scoped>
</style>
