<template>
  <div class="img_chil" @click='hideSwiper' :index="index">
        <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item , index) in list" :key="index">
                    <img :src="item.Url.replace('{0}', item.HighSize)">
                </swiper-slide>
        </swiper>
  </div>
</template>

<script>
import {mapActions , mapState ,mapMutations} from 'vuex';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  data () {
    return {
    }
  },
  beforeUpdate () {
      this.swiper.slideTo(this.index)
  },
  methods : {
        ...mapActions({
          showSwiper : 'showSwiper'
      }),
      hideSwiper () {
          this.showSwiper(false)
      }
  },
  props : {
      index : {
          type : Number
      }
  },
  mounted() {
      
  },
  computed : {
      ...mapState({
          list : state => state.img.cateimg,
      }),
          swiperOption(){
          return {}
        },
        swiper () {
            return this.$refs.mySwiper.swiper
        }
  },
    components : {
       swiper,
       swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.img_chil {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,1);
        display: flex;
        align-items: center;
        img{
            width: 100%;
        }
}
</style>
