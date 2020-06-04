<template>
  <div class="header_title">
    <div class="logo-title area">
      <div class="logo left">
        <a href="https://test.sxqcwx.com/" target="_blank">首页</a>
      </div>
      <img :src="useriocn">
      <div class="links-list-wrap" data-spm="top-func-link">
        <ul class="links">
          <a>
            <li class="link shh">
              <div class="icon"></div>
              <div class="title">用户登录</div>
            </li>
          </a>
          <a>
            <li class="link sougou">
              <div class="icon"></div>
              <div class="title">用户注册</div>
            </li>
          </a>
          <a>
            <li class="link sohu_email">
              <div class="icon"></div>
              <div class="title">官方微信</div>
            </li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  var user = require('../assets/iocn/user.png');
  console.log(user)
export default {

  
  name: "HelloWorld",
  data() {
    return {
      useriocn: user,
    };
  },
  mounted() {
    this.initAmap();
  },
  methods: {
    initAmap() {
      this.postAxios("/api/findRegion2", {}, res => {
        console.log(res);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-title{
  height: 80px;
}
.area {
    width: 1200px;
    margin: 0 auto;
}
.logo{
    width: 548px;
    height: 64px;
    overflow: hidden;
    line-height: 500px;
    margin-top: 28px;
    background: url('http://vunion.sxqcwx.com/common/new.png') no-repeat 0 0;
}
.links-list-wrap {
    float: right;
    margin-top: 28px;
}
.links a {
  display: inline-block;
  color: #303030;
  text-decoration: none;
}
.link{
  position: relative;
  float: left;
  padding: 0 10px;
  cursor: pointer;
}
.link .icon{
  float: left;
  background-image:('/assets/iocn/user.png');
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
}
</style>
