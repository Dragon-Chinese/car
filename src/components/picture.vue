<template>
  <div class="wrap pic">
        <div class="header">
            <span>颜色</span>
            <span>车款</span>
        </div>
        <div class="img_list">
            <ul v-for="(item , index) in picList" :key="index">
                <li v-for="(val , ind) in item.List" :key="ind">
                    <span :style="{'backgroundImage': `url(${val.Url.replace('{0}', val.LowSize)})`}"></span>
                    <router-link :to="{path:'/picpage' , query : {id : item.Id}}" v-if="!ind" @click.native="clickAll(item.Id)"> 
                        <p>{{item.Name}}</p>
                        <span>{{item.Count}}张 ></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- <Img v-show="true"/> -->
  </div>
</template>

<script>
import {mapActions , mapState ,mapMutations} from 'vuex'
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import Img from './picpage/img.vue'
export default {
  data () {
    return {

    }
  },
  methods : {
      ...mapActions({
          getImageList : 'getImageList',
          showAll : 'showAll'
      }),
      clickAll (id) {
            localStorage.setItem("pageid" , id)
            // console.log("id1...." ,id)
            this.showAll(id)
      },
  },
  computed : {
      ...mapState({
          picList : state => state.img.list
      })
  },
  mounted() {
    console.log(this.$store.state.img.list)
    this.getImageList(this.$route.query.id)
    localStorage.setItem("id" , this.$route.query.id)
     console.log(this.$refs.mySwiper)
  },
  components : {
      Img
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../css/pic.scss";
</style>
