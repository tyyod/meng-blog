<template>
  <div class='container'>
    <AppNavBar />
    <div class='content'>
    </div>
  </div>
</template>

<script>
import AppNavBar from 'components/AppNavBar.vue'
export default {
  name: "Home",
  components: { AppNavBar},
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

<style scoped lang="less">

.site-logo {
  text-align: center;
  color: #FFFFFF;

  img {
    width: 116px;
    height: 38px;
  }
}

.flex-grow {
  flex-grow: 1;
}
</style>
