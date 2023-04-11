<template>
  <div>
    <div v-if='this.isMobile' class='nav'>
      <div class='nav-mobile'>
        <div class='nav-mobile-logo'>
          <router-link to='/'>
            <img src='@/assets/logo-black-text.svg' alt='logo'/>
          </router-link>
        </div>
        <div class='title'>{{ title }}</div>
        <div class='nav-menu' @click='onMobileMenuTap'>
          <img src='@/assets/icon_menu.svg'>
        </div>
      </div>
    </div>
    <div v-else class='nav'>
      <div class='nav-content'>
        <router-link to='/'>
          <img src='@/assets/logo-black-text.svg' alt='logo'/>
        </router-link>
        <div class='content'>
          <el-menu
            :default-active="activeIndex"
            class="nav-menu"
            text-color='#222'
            active-text-color='#0468d7'
            :ellipsis="false"
            mode="horizontal" @select='handleMenuSelect'>
            <el-menu-item v-for='item in menuList' :key='item.index' :index='item.index'>{{item.name}}</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Platform } from 'utils/platform.js'
export default {
  name: 'AppNavBar',
  data: function() {
    return {
      visible: false,
      activeIndex: '1',
      title: '文章',
      menuList: [
        {
          index: '1',
          path: 'articles',
          name: '文章'
        },
        {
          index: '2',
          path: '/game',
          name: '游戏'
        },
        {
          index: '3',
          path: '/about',
          name: '关于'
        }
      ],
      isShow: false,
      isMobile: Platform.isMobile()
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    onMobileMenuTap() {

    },
    handleMenuSelect(key) {
      // this.activeIndex = index;
      // this.$router.push({ path: this.menuList[index - 1].path });
      console.log(key)
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
  }
}
</script>

<style scoped lang='less'>
.nav-mobile {
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;

  .nav-mobile-logo {
    text-align: center;
    height: 30px;
    img {
      height: 30px;
    }
  }

  .title {
    flex: 1;
    font-size: 24px;
    color: #222222;
    padding: 0 10px 0 10px;
  }

  .nav-menu {
    font-size: 34px;
    color: #222222;
    height: 34px;

    img {
      height: 30px;
      color: #222222;
    }
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
  padding: 0 30px 0 30px;

  .nav-content {
    width: 100%;
    margin: 0 auto;
    padding: 10px 0 10px 0;
    display: flex;
    flex-direction: row;

    img {
      height: 40px;
    }
    a:hover {
      background: none !important;
    }

    .content {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-grow: 1;

      .nav-menu {
        font-weight: bold;
        font-size: 20px;
      }
    }
  }

  .logo {
    height: 40px;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }


  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  //鼠标悬浮时，子菜单的样式
  .el-menu-item:hover {
    outline: 0 !important;
    color: #0468d7 !important;
    background: none !important;
  }

  .el-menu-item.is-active {
    background: none !important;
  }
}
</style>