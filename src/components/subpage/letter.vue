<template>
   <div class="letter" @touchstart="touchStart" @touchmove="touchMove">
           <span v-for="(item , index) in letter" :key="index">
             {{item}}
           </span>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props : {
      letter : {
          type : Array
      },
      changeLetter : {
          type : Function
      }
  },
  component : {

  },
  methods : {
      touchStart (e) {
          this.height = window.innerWidth/750*100*0.4;
          this.offsetTop = (window.innerHeight - this.height*this.letter.length)/2;
          this.BoxScroll(e)
      },
      touchMove (e) {
          this.BoxScroll(e)
      },
      BoxScroll (e) {
          let touch = e.touches[0];
          let index = Math.floor((touch.pageY - this.offsetTop)/this.height)
          if(index < 0) {
              index = 0;
          }else if(index > this.letter.length-1){
              index = this.letter.length-1
          }
          this.changeLetter(this.letter[index])
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
