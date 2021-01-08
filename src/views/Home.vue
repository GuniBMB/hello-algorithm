<!--
 * @Description: 
 * @Author: BMB
 * @Date: 2020-12-24 11:11:51
 * @LastEditTime: 2020-12-29 11:33:02
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
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: 'rgba(153, 204, 153,0.2)',
            minHeight: '280px',
          }"
        >
          <a-form
            :form="form"
            :label-col="{ span: 1 }"
            :wrapper-col="{ span: 23 }"
          >
            <a-form-item label="参数">
              <a-input
                v-decorator="[
                  'note',
                  {
                    rules: [
                      { required: true, message: 'Please input your note!' },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item label="程序">
              <!-- <ACodeMirror /> -->
            </a-form-item>
            <a-form-item label="结果">
              <a-input
                v-decorator="[
                  'note',
                  {
                    rules: [
                      { required: true, message: 'Please input your note!' },
                    ],
                  },
                ]"
              />
            </a-form-item>
          </a-form>
          <!-- <codemirror v-model="code" :options="cmOptions"></codemirror> -->
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script id="script">
import GCONF from "./globle.config";
// import CodeMirror from "codemirror";
// import ACodeMirror from "../components/ACodeMirror";
import AlgorithmEngine from "../components/AlgorithmEngine";

export default {
  name: "Home",
  components: {
    // ACodeMirror,
  },
  data() {
    return {
      collapsed: false,
      curNav: null,
      subNavs: [],
      navs: [],
      form: null,
      code: "const a = 1",
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "text/javascript",
        theme: "base16-dark",
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      },
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
    this.doTest();
    // cm.foldCode(CodeMirror.Pos(13, 0));
    // console.log(cm);
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
    doCodemirror() {
      // var sc = document.getElementById("script");
      // var te = document.getElementById("code");
      // // te.value = (sc.textContent || sc.innerText || sc.innerHTML).replace(
      // //   /^\s*/,
      // //   ""
      // // );
      // // console.log("this.$refs.code", this.$refs.code);
      // let cm = CodeMirror.fromTextArea(te, {
      //   lineNumbers: true,
      //   mode: "javascript",
      //   lineWrapping: true,
      //   // mode: { name: "javascript", globalVars: true },
      //   // foldGutter: true,
      //   // theme: "night",
      //   // gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      // });
    },
    doTest() {
      let data = [7, 9, 2, 6, 5, 8];
      // let result = AlgorithmEngine.Sort.normalSort(data);
      AlgorithmEngine.Sort.insertSort(data);
      console.log(data);
      // console.log(result);
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
    .ant-layout-content {
      overflow-y: auto;
    }
  }
}
</style>