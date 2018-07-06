<template>
  <div class="wrap detail">
      <header class="header">
          <img :src="ImgUrl" alt="">
          <p>{{list.pic_group_count}}张照片</p>
      </header>
      <nav class="nav">
          <div class="price">
              <p>{{!list.market_attribute.dealer_price ? null : list.market_attribute.dealer_price}}</p>
              <span>指导价{{list.market_attribute.official_refer_price}}</span>
          </div>
          <div class="Sub">
              <span> <router-link :to="{path:'/car', query : {CarId : All[0].car_id}}" >{{list.BottomEntranceTitle}}</router-link></span>
          </div>
      </nav>
     <ul class="Nav_List">
         <li v-if="!year" class="active">全部</li>
         <li v-else :class='item.show ? "active" : "" ' v-for='(item ,index) in year' :key="index" @click="click_data(item.year,index)">
             {{item.year}}
         </li>
     </ul>
     <main class="main">
         <ul>
             <li v-for="(item , index) in All" :key="index">
                 <p v-if="!item.exhaust_str" style="padding:0"></p>
                 <p v-else>{{item.exhaust_str}} / {{item.max_power_str}} {{item.inhale_type}}</p>
                 <div class="Smlz">
                     <div class="top">
                         <p>{{item.year}}款 {{item.car_name}}</p>
                         <span>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</span>
                         <div class="top_bot">
                             <span>指导价 {{item.market_attribute.official_refer_price}}</span>
                             <p>{{item.market_attribute.dealer_price_min}}起</p>
                         </div>
                     </div>
                     <p class="Submit"><router-link :to="{path:'/car', query : {CarId : item.car_id}}" >询问底价 </router-link></p>
                 </div>
            </li>
         </ul>
     </main>
     <footer class="footer">
         <p><router-link :to="{path:'/car', query : {CarId : All[0].car_id}}" >询问底价</router-link></p>
         <span>本地经销商为你报价</span>
     </footer>
  </div>
</template>
<script>
// pic_group_count
export default {
  data () {
    return {
        list :[],
        mainList : [],
        ImgUrl : '',
        year : [],
        All : []
    }
  },
  methods : {
      setDtata (body) {
            this.mainList = body.data.list;
            this.list = body.data;
            this.All = body.data.list;
            console.log(this.list)
            this.ImgUrl = this.list.CoverPhoto.replace("{0}" , this.list.CoverPhotoSize);
            let newYear = []
            this.list.list.forEach(item => {
                if(newYear.indexOf(item.market_attribute.year) === -1){
                    newYear.push(item.market_attribute.year)
                }else {
                    return;
                }
            });
            let Year_Show = []
            newYear.forEach(item=>{
                Year_Show.push({year : item , show : false})
            })
            Year_Show.unshift({year : "全部" , show : true})
            this.year = Year_Show;
      },
      click_data (val , index) {
          this.year.forEach(value => {
              value.show = false;
          })
            this.year[index].show = true;
          
          if(val === "全部") {
              this.All = this.mainList;
              return;
          }
          let newDate = [];
          this.mainList.forEach(item => {
              if(item.market_attribute.year == val) {
                  newDate.push(item)
              }
          })
          this.All = newDate;
      }
  },
  mounted() {
      fetch(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${this.$route.query.num}`)
      .then(res => {
          res.json().then(body => {
              if(body.code == 1) {
                  this.setDtata(body)     
              }else {
                  alert(body.msg)
              }
          })
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../css/detail.css';
</style>
