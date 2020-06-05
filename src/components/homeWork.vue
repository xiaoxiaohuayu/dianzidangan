<template>
    <div class="box_server">
        <div class="ifBCPub" style="margin-right: 29px;">
            <span>公共服务</span>
        </div>
        <div ref="publicservice" class="publicservice" v-for="(i,index) in meunbarList" :key="i.index" 
        @mouseover="overShow(index,i)"
        @mouseout="outHide(index,i)">
            <!-- <div class="zw_server" :class=" ? : "></div> -->
            <span class="title_server">{{ i.text }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'homeWork',
        data(){
        return{
            meunbarList:[
                {text:"政策法规",},
                {text:"车主服务",},
                {text:"企业服务",},
                // {text:"办事指南",},
                // {text:"信誉考核",},
                // {text:"优秀企业展示",},
            ], 
            isText:false,
        }
    },
    created() {
        
    },
    mounted() {
        // console.log('Current Swiper instance object', this.swiper);
        this.$nextTick(()=>{
            this.swiperLoop()
        })
    },
    computed: {
 
    },
    methods:{
        overShow(index,e){
            console.log(index,this.$refs.publicservice);
            this.$refs.publicservice[index].children[0].style = 'display: none;'
        },
        outHide(index,e){
            this.$refs.publicservice[index].children[0].style = 'display: blck;'
        }
    },
    updated: function () {

    }
}
</script>
<style scoped>
.publicservice{
    background: #fff;
    width: 162px;
    height: 142px;
    display: inline-block;
}
.publicservice:hover{
    background-image: url('~@/assets/iocn/zwfw.png');
    background-repeat: no-repeat;
    background-position-x: 0px;
    background-position-y: 0px;
    box-shadow: 0 1px 5px #888;
    background-size: 100%;
    border-radius: 6px;
    cursor: pointer;
}
.publicservice{
    position: relative;
    background: #fff;
    background-image: url('~@/assets/iocn/zwfw1.png');
    background-repeat: no-repeat;
    background-position-x: 36px;
    background-position-y: 21px;
    box-shadow: 0 1px 5px #888;
    background-size: 54%;
    border-radius: 6px;
    text-align: center;
    margin: 0 14px 0px 14px;
}
.zw_server{
    width: 162px;
    height: 142px;
    /* border: 1px solid; */
    background-image: url('~@/assets/iocn/zwfw.png');
    background-repeat: no-repeat;
    /* background-position-x: 25px;
    background-position-y: 21px; */
    box-shadow: 0 1px 5px #888;
    background-size: 100%;
    border-radius: 6px;
    cursor: pointer;
}
.title_server{
    margin: 0 auto;
    position: absolute;
    bottom: 14px;
    left: 54px;
    font-size: 14px;
}
</style>