<template>
  <div class="wrap pic">
        <ul v-for="(item , index) in picList" :key="index">
            <li v-for="(val , ind) in item.List" :key="ind">
                <img  :src='val.Url.replace("{0}", val.LowSize)'  alt="">
                <div v-if="ind == 0">
                    <p>{{item.Name}}</p>
                    <span>{{item.Count}}</span>
                </div>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
        picList : []
    }
  },
  methods : {
      
  },
  mounted() {
     
     fetch(`https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${this.$route.query.id}`)
     .then (res => {
         res.json().then(body => {
             if(body.code == 1) {
                 this.picList = body.data;
                 console.log(this.picList)
             }else {
                 alert(body.msg)
             }
         })
     })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/pic.min.css";
</style>
