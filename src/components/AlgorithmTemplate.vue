<!--
 * @Description: 
 * @Author: BMB
 * @Date: 2020-12-24 19:12:00
 * @LastEditTime: 2020-12-24 19:14:08
 * @LastEditors: BMB
-->
<template>
  <div class="at-container">
    <a-input
      v-decorator="[
        'note',
        { rules: [{ required: true, message: 'Please input your note!' }] },
      ]"
    />
    <a-input
      v-decorator="[
        'note',
        { rules: [{ required: true, message: 'Please input your note!' }] },
      ]"
    />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    //   params:[]
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.at-container {
}
</style>