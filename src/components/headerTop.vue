<template>
  <div class="header_title">
    <div class="logo-title area">
      <div class="logo left">
        <!-- <a href="https://test.sxqcwx.com/" target="_blank">首页</a> -->
      </div>
      <div class="links-list-wrap clear">
        <ul class="links">
          <a>
            <li class="link shh">
              <div class="icon">
                <img :src="useriocn">
              </div>
              <div class="title">用户登录</div>
            </li>
          </a>
          <a>
            <li class="link register">
              <div class="icon">
                <img :src="useriocn">
              </div>
              <div class="title">用户注册</div>
            </li>
          </a>
          <a>
            <li class="link wechat" 
            @mouseover="overShow"
            @mouseout="outHide">
              <div class="icon">
                <img :src="useriocn">
              </div>
              <div class="title">官方微信</div>
              <img :src="wechat" class="wechatcode" :class="isshow ? null : 'isshow'">
            </li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
var user = require('../assets/iocn/user.png');
var wechat = require('../assets/img/wechat.jpg');
export default {
  name: "HelloWorld",
  data() {
    return {
      useriocn: user,
      wechat:wechat,
      isshow:false,
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
      this.getAxios('/api/maintenancerecord/countList',null,res => {
        console.log(res)
      });
    },
    overShow(){
      this.isshow = true
    },
    outHide(){
      this.isshow = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_title{
  margin-bottom: 16px;
}
.logo-title{
  height: 80px;
}
.area {
    width: 1200px;
    margin: 0 auto;
}
.logo{
    width: 548px;
    height: 50px;
    overflow: hidden;
    line-height: 500px;
    margin-top: 28px;
    background: url('http://vunion.sxqcwx.com/common/new.png') no-repeat 0 0;
    background-size: 88%;
}
.links-list-wrap {
    float: right;
    margin-top: 38px;
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
  width: 88px;
  font-size: 16px;
  line-height: 17px;
}
.link .icon{
  float: left;
  background-image:('/assets/iocn/user.png');
  width: 17px;
  height: 17px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
}
.wechatcode{
  width: 100px;
  position: absolute;
  left: -2px;
}
.isshow{
  display: none;
}
</style>
