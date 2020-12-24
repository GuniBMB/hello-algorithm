<!--
 * @Description: 
 * @Author: BMB
 * @Date: 2020-12-24 11:11:51
 * @LastEditTime: 2020-12-24 19:06:40
 * @LastEditors: BMB
-->
<template>
  <div class="home">
    <a-layout>
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo"><span>HELLO ALGORITHM</span></div>
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          @select="changeNav"
        >
          <!-- <a-menu-item v-for="nav in navs" :key="nav.code">
            <a-icon type="user" />
            <span>{{ nav.name }}</span>
          </a-menu-item> -->
          <a-sub-menu
            v-for="nav in navs"
            :key="nav.code"
            @titleClick="changeNav"
          >
            <span slot="title"
              ><a-icon type="user" /><span>{{ nav.name }}</span></span
            >
            <a-menu-item v-for="subNav in nav.subNavs" :key="subNav.code">
              {{ subNav.name }}
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header
          style="background: rgba(153, 204, 153, 0.2); padding: 0px 10px"
        >
          <span>{{ curAlgorim }}</span>
          <!-- <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          /> -->
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: 'rgba(153, 204, 153,0.2)',
            minHeight: '280px',
          }"
        >
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import GCONF from "./globle.config";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      collapsed: false,
      curNav: null,
      subNavs: [],
      navs: [],
      // curAlgorim: "",
    };
  },
  computed: {
    curAlgorim: function () {
      return "二分法";
    },
  },
  created() {
    this.iniParams();
  },
  mounted() {
    this.iniSubNavs();
  },
  methods: {
    iniParams() {
      this.navs = GCONF.algorithmGroups;
    },
    changeNav(evt) {
      this.curNav = evt.key;
      this.iniSubNavs();
    },
    iniSubNavs() {
      this.navs = this.navs.map((nav) => {
        nav.subNavs = GCONF.algorithms.filter((a) => a.group == nav.code);
        return nav;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  .ant-layout {
    height: 100%;
    .ant-layout-sider {
      background: rgb(204, 102, 0);
      .logo {
        color: rgba(255, 255, 255, 0.7);
        height: 32px;
        background: #339933;
        margin: 16px;
        border-radius: 3px;
        line-height: 32px;
        font-family: 华文行楷;
        letter-spacing: 2px;
      }
      .ant-menu {
        background: #cc6600;
        color: rgba(255, 255, 255, 0.7);
        .ant-menu-submenu {
          &.ant-menu-submenu-open {
            background-color: #ff9900;
            color: rgba(255, 255, 255, 0.7);
            /deep/ul {
              background-color: rgba(255, 255, 255, 0.9);
            }
          }
          &:hover {
            background-color: #ff9900;
            color: rgba(255, 255, 255, 0.7);
          }

          &.ant-menu-item-selected {
            background-color: #ff9900;
            color: rgba(255, 255, 255, 0.7);
            &::after {
              opacity: 0;
            }
          }
          span:hover {
            color: rgba(255, 255, 255, 0.7);
          }
          text-align: left;
          font-family: cursive;
          font-weight: 500;
        }
      }
    }
    .ant-layout-header {
      margin: 0px 16px;
      text-align: left;
      font-size: 18px;
    }
  }
}
</style>