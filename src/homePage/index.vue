<template>
  <div class="newHome">
    <div class="">
        <page-header></page-header>
        <router-view/>
    </div>
  </div>
</template>


<script>
import pageHeader from "@/components/headerTop";

export default {
  components: {
    pageHeader,
  },
  data() {
    return {
      navData: {}
    };
  },
  methods: {},
//   beforeRouteEnter(to, from, next) {
//     let { name } = to;
//     if (name == "index") {
//       let proKeyName = sessionStorage.getItem("proKeyName");
//       name = `${proKeyName}Index`;
//       if (proKeyName) {
//         next({ name });
//       } else {
//         next();
//       }
//     } else {
//       next();
//     }
//   }
};
</script>


<style scoped>
.newHome {
    width: 1200px;
    margin: 0 auto;
}
</style>
