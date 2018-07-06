<template>
  <div class="List">
      <div :class="item.spelling" class='car_list' v-for = "(item , index) in list" :id="item.spelling" :key="index">
        <p>{{item.spelling}}</p>
        <ul>
          <li v-for="(val , index) in item.list" :key="index" @click="getData(val)">
            <img  v-lazy="val.CoverPhoto" alt="">
            <span>{{val.Name}}</span>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props : {
      list : {
          type : Array,
          default : []
      },
      getData : {
          type : Function
      }
  },
  component : {

  },
  methods : {

  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
