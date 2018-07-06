<template>
  <div ref="master" :class='"side_right " + masterCls' @touchmove.stop="touchMove" @touchstart.stop="touchStart" @touchend="touchEnd">
        <div class="Bar_list" v-for="(item , index) in SideList" :key="index">
            <p>{{item.GroupName}}</p>
            <ul>
               
                <li v-for="(val , index) in item.GroupList" :key="index" @click="sideData(item)"> 
                    <router-link :to="{path:'/detail', query : {num : val.SerialID}}"   >
                        <img :src="val.Picture" alt="">
                        <div class="Top">
                            <p>{{val.AliasName}}</p>
                            <span>{{val.DealerPrice}}</span>
                        </div>
                    </router-link>
                </li>
               
            </ul>
        </div>
  </div>
</template>

<script>
//  
export default {
  data () {
    return {

    }
  },
  props : {
      SideList : {
          type : Array
      },
      masterCls : {
          type : String
      },
      hideMaster : {
          type : Function
      }
  },
  methods : {
      touchStart(e) {
          this.startTouch = e.touches[0]
      },
      touchMove (e) {
          let touch = e.touches[0];
          let pageX = touch.pageX - this.startTouch.pageX;
          this.pageX = pageX;
          if(pageX<0) {

          }else {
              this.$refs.master.style = `transform:translate3d(${pageX}px, 0 ,0)`;
          }
      },
      touchEnd (e) {
          this.$refs.master.style = '';
          if(this.pageX < 100) {

          }else {
              this.hideMaster()
          }
      },
      sideData (item) {
          console.log(item)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../css/Right.min.css';
</style>
