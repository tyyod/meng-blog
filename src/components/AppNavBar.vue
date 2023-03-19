<template>
  <div>
    <div v-if='this.isMobile' class='nav'>
      <div class='nav-mobile'>
        <div class='nav-mobile-logo'>
          <router-link to='/'>
            <img class='logo' src='@/assets/logo.svg'/>
          </router-link>
        </div>
        <div class='title'>{{title}}</div>
        <div class='menu' @click='handleMenuClick'>
          <i class='el-icon-menu'></i>
        </div>
      </div>
    </div>
    <div v-else class='nav'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavBar',
  data() {
    return {
      visible: false,
      activeIndex: "0",
      title: "",
      menuList: [
        {
          index: "1",
          path: "articles",
          name: "文章",
        },
        {
          index: "2",
          path: "/game",
          name: "游戏",
        },
        {
          index: "3",
          path: "/about",
          name: "关于",
        },
      ],
      isShow: false,
      isMobile: Platform.isMobile(),
    }
  },
  methods: {
    handleMenuClick() {

    }
  }
}
</script>

<style scoped lang='less'>
.nav-mobile {
  display: flex;
  line-height: 60px;
  .nav-mobile-logo {
    flex: 1;
    text-align: center;
    margin-left: 10px;
  }
  .title {
    flex: 3;
    font-size: 24px;
  }
  .menu {
    flex: 1;
    margin-right: 10px;
    font-size: 34px;
    color: #409eff;
  }
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: #fff;

  .nav-content {
    width: 1200px;
    margin: 0 auto;
  }

  .logo {
    height: 50px;
    border-radius: 50%;
    margin: 5px 0 0;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }

  .el-menu--horizontal > .el-menu-item {
    cursor: pointer;
    color: #333;
  }

  .nav-right {
    position: relative;
    padding-top: 15px;
    text-align: right;

    .el-dropdown {
      cursor: pointer;
      padding-right: 60px;
    }

    .user-img {
      position: absolute;
      top: -15px;
      right: 0;
      width: 50px;
      border-radius: 50%;
    }
  }
}
</style>