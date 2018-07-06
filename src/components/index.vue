<template>
  <div class="wrap">
        <div class="box" ref="box">
          <List :list="list" :getData="get_data"/>
        </div>   
        <Letter :letter="letter" :changeLetter="changeLetter"/>
       
        <Side :SideList="Side_List" :masterCls="masterCls" :hideMaster="hideMaster"/>
  </div>
</template>

<script>
import Side from './subpage/sidebar.vue'
import List from './subpage/List.vue'
import Letter from './subpage/letter.vue'
export default {
  data () {
    return {
      list : [],
      letter : [],
      Side_List : [],
      masterCls : ''
    }
  },
  components : {
    List,
    Letter,
    Side
  },
  methods : {
      getDate () {
        fetch('https://baojia.chelun.com/v2-car-getMasterBrandList.html?_1530689113045')
        .then(res => {
            res.json().then(body => {
              if(body.code == 1) {
                  this.list = body.data;
                  this.setData(body.data);
              }else{
                alert(body.msg)
              }
            })
        })
      },
      setData (data) {
        let letter = [],
            newData = [];
          data.forEach(item => {
            let Letter = item.Spelling.substring(0, 1)
            if(letter.indexOf(Letter) === -1){
              letter.push(Letter)
              newData.push({
                spelling : Letter,
                list : [item]
              })
            }else{
              newData.forEach((value , key) => {
                if(Letter == value.spelling){
                  value.list.push(item)
                }
              })
            }
          });
          letter.unshift("#")
        this.list = newData;
        this.letter = letter
      },
      get_data (item) {
        fetch(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${item.MasterID}`)
        .then(res=>{
          res.json().then(body => {
            if(body.code == 1) {
              this.Side_List = body.data;
              this.masterCls = 'active'
            }else {
              alert(body.msg)
            }
          })
        })
      },
      hideMaster () {
        this.masterCls = '';
      },
      changeLetter (letter) {
        if(letter == "#") {
            return;
        }
        let scrollTop = document.querySelector(`#${letter}`).offsetTop;
        console.log(scrollTop)
        this.$refs.box.scrollTop = scrollTop
      }

  },
  mounted() {
     this.getDate()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/index.min.css";
</style>
