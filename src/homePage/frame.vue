<template>
  <div class="newHome">
    <div class="el-container">
      <!--头部-->
      <page-header class="header" :propNavData="navData"></page-header>
      <router-view/>
      <side-tools-bar></side-tools-bar>
      <index-tools-bar></index-tools-bar>
      <!--底部-->
      <page-footer class="footer"></page-footer>
    </div>
  </div>
</template>


<script>
import pageHeader from "./components/homeHeader";
import pageFooter from "./components/homeFooter";
import sideToolsBar from "@/components/frontStage/sideToolsBar";
import indexToolsBar from "@/components/frontStage/indexToolsBar";
export default {
  components: {
    pageHeader,
    pageFooter,
    sideToolsBar,
    indexToolsBar
  },
  data() {
    return {
      navData: {}
    };
  },
  methods: {},
  beforeRouteEnter(to, from, next) {
    let { name } = to;
    if (name == "index") {
      let proKeyName = sessionStorage.getItem("proKeyName");
      name = `${proKeyName}Index`;
      if (proKeyName) {
        next({ name });
      } else {
        next();
      }
    } else {
      next();
    }
  }
};
</script>


<style scoped>
.newHome {
  height: 100%;
}
.newHome .el-container {
  background-color: #fff;
  height: 100%;
}
</style>
