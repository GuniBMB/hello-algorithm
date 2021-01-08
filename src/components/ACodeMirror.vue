<!--
 * @Description: 
 * @Author: BMB
 * @Date: 2020-12-25 08:52:19
 * @LastEditTime: 2020-12-25 14:59:43
 * @LastEditors: BMB
-->
<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <vue-codemirror v-model="code" :options="cmOptions"></vue-codemirror>

  <!-- or to manually control the datasynchronization（或者手动控制数据流，需要像这样手动监听changed事件） -->
  <!-- <codemirror
    ref="myCm"
    :value="code"
    :options="cmOptions"
    @ready="onCmReady"
    @focus="onCmFocus"
    @input="onCmCodeChange"
  >
  </codemirror> -->
</template>
 
<script>
// language js
// import "codemirror/mode/javascript/javascript.js";
//  import "codemirror/mode/javascript/javascript.js";
// theme css
// import "codemirror/theme/base16-dark.css";
// more codemirror resources
// import 'codemirror/some-resource...'
export default {
  data() {
    return {
      code: "const a = 10",
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "text/javascript",
        theme: "base16-dark",
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      },
    };
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focus!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    },
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    },
  },
  mounted() {
    console.log("this is current codemirror object", this.codemirror);
    // you can use this.codemirror to do something...
  },
};
</script>