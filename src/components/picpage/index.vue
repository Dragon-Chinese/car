<template>
  <div class="wrap picPage">
         <div class="img-detail" @scroll="scrollAll">
            <ul ref="ul">
                <li v-for="(value, key) in list" :key="key">
                    <span @click="clickSwiper(key)" :style="{'backgroundImage': `url(${value.Url.replace('{0}', value.LowSize)})`}"></span>
                </li>
            </ul>
        </div>
        <Img :index="index" v-if="ishowSwiper"/>
  </div>
  
</template>

<script>
import 'swiper/dist/css/swiper.css';
import {mapActions , mapState} from 'vuex';
import Img from './img.vue';
export default {
  data () {
    return {
        index : 0
    }
  },
  methods : {
      ...mapActions({
          getCateimg : 'getCateimg',
          showSwiper : 'showSwiper',
      }),
      scrollAll (e) {
             let scrollHeight = this.$refs.ul.getBoundingClientRect().height - window.innerHeight;
            let current = e.target.scrollTop;
            if (current > (scrollHeight-20)){
                // 加载下一页数据
                this.getCateimg()
            }
      },
      clickSwiper (index) {
          console.log(index)
          this.showSwiper(true)
          this.index = index
          console.log("index.." , this.index)
      }
  },
  computed : {
      ...mapState({
          list : state => state.img.cateimg,
          ishowSwiper : state => state.img.isshowSwiper
      })
  },
  mounted() {
       this.getCateimg(this.$router.history.current.query.id)
  },
  components : {
      Img
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .img-detail{
        overflow: hidden;
        position: absolute;
        background: #fff;
        height:100%;
        top: 0;
        bottom: 0;
        width: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        ul{
            border-bottom: .4rem solid #f4f4f4;
             overflow: hidden;
              position: relative;
             margin: 0;
             li{
                position: relative;
                float: left;
                margin-right: .04rem;
                width: 2.46rem;
                height: 2.46rem;
                padding: 0;
                margin-bottom: .06rem;
                list-style: none;
                &>span{
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    display: inline-block;
             }
           }
        }
    }
</style>
