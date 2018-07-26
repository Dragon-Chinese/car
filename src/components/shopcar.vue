<template>
  <div class="wrap car">
    <header><p>可向多个商家咨询最低价，商家及时回复</p></header>
    <div class="header">
        <img :src="data.details.serial.Picture" alt="">
        <div class="right">
            <p>{{data.details.serial.AliasName}}</p>
            <span>{{data.details.market_attribute.year}}款 {{data.details.car_name}}</span>
        </div>
    </div>
    <div class="self-info"><p class="tip">个人信息</p>
        <ul>
            <li><span>姓名</span> <input type="text" placeholder="输入你的真实中文姓名" maxlength="4"></li>
            <li><span>手机</span> <input type="tel" placeholder="输入你的真实手机号码" maxlength="11"></li>
            <li><span>城市</span> <span>北京</span></li>
        </ul> 
        <div class="quotation"><button data-hover="hover">询最低价</button></div>
    </div>
    <p class="tip">选择报价经销商</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
  },
  mounted() {
    fetch(
      `https://baojia.chelun.com/v2-dealer-alllist.html?carId=${
        this.$route.query.CarId
      }&cityId=201`
    ).then(res => {
      res.json().then(body => {
        this.data = body.data;
        console.log(this.data);
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../css/car.scss";
</style>