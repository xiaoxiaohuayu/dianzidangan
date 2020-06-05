<template>
    <div class="meun_list">
        <ul >
            <li v-for="i in meunbarList" :key="i.key">{{ i.text }}</li>
        </ul>
        <div class="swiper_banner">
            <swiper v-if="imglist.length>1" ref="mySwiper" 
                :options="swiperOptions">
                <swiper-slide v-for="i in imglist" :key="i.key">
                    <img :src="i.src">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name:'menubar',
    data(){
        return{
        swiperOptions: {
            notNextTick: true,
            pagination: '.swiper-pagination',
            autoplay:{
                delay:1500,
                disableOnInteraction:false
            },
            speed: 300,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        },
        meunbarList:[
            {text:"首页",to:'/',isActive:true,key:'0'},
            {text:"电子健康档案",to:'/index',isActive:false,key:'1'},
            {text:"维修救援",to:'/rescue',isActive:false,key:'3'},
            {text:"配件溯源",to:'/retrospect',isActive:false,key:'4'},
            {text:"I/M系统",to:'/imsystem',isActive:false,key:'5'},
            {text:"企业服务",to:'/retrospect',isActive:false,key:'6'},
            {text:"档案中心",to:'/archivalCar',isActive:false,key:'7'},
            {text:"企业查询",to:'/company',isActive:false,key:'8'},
            {text:"联系我们",to:'/about',isActive:false,key:'9'}, 
        ], 
        imglist:[
            {src:'https://test.sxqcwx.com/images/sysuploadimagespath/1565862070992.jpg',key:0},
            {src:'https://test.sxqcwx.com/images/sysuploadimagespath/1565862078043.jpg',key:1},
            {src:'https://test.sxqcwx.com/images/sysuploadimagespath/1590983490540.jpg',key:2}
        ]          
        }
    },
    created() {
        
    },
    mounted() {
        console.log('Current Swiper instance object', this.swiper);
        this.$nextTick(()=>{
            this.swiperLoop()
        })
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods:{
        swiperLoop(){
            this.$nextTick(()=>{
                this.swiper.slideTo(3, 1000, false);
            })
        }
    },
    updated: function () {
        // this.$nextTick(()=>{
        //     this.swiper.slideTo(3, 1000, false);
        // })
    }
}
// {text:"首页",to:'/',isActive:true,key:'0'},
// {text:"电子健康档案",to:'/index',isActive:false,key:'1'},
// /*          {text:"结算单系统",to:'/settlement',isActive:false,key:'2'},*/
// {text:"维修救援",to:'/rescue',isActive:false,key:'3'},
// {text:"配件溯源",to:'/retrospect',isActive:false,key:'4'},
// {text:"I/M系统",to:'/imsystem',isActive:false,key:'5'},
// {text:"企业服务",to:'/retrospect',isActive:false,key:'6'},
// {text:"档案中心",to:'/archivalCar',isActive:false,key:'7'},
// {text:"企业查询",to:'/company',isActive:false,key:'8'},
// {text:"联系我们",to:'/about',isActive:false,key:'9'},
</script>
<style scoped>
.meun_list{
/* overflow: hidden; */
}
.meun_list ul{
overflow: hidden;
/* background-image: linear-gradient( 0deg, #97ABFF 10%, #123597 100%); */
background-image: linear-gradient( 0deg, #ABDCFF 10%, #0396FF 100%);
border-radius: 8px;
margin-bottom: 12px;
}
.meun_list li{
    /* float: left; */
    display: inline-block;
    margin: 0 30px 0 30px;
    text-align: center;
    font-size: 18px;
    /* border: 1px solid; */
    color: #fff;
    cursor: pointer;
}
.swiper_banner{
    height: 300px;
    /* border: 1px solid; */
}
.swiper_banner img{
    width: 100%;
}
.swiper-container{
    height: 100%;
}
</style>