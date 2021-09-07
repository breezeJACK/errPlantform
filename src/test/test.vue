<template>
  <div id="test">
    <div v-for="(a,index) in list" :key="index">
        {{a}}
    </div>
  </div>
</template>

<script>


export default {
  name: "test",
  data(){
      return{list: []}
  },
  created(){
      for(let i=1;i<1000;i++){
           this.list.push(1111)
      }
     
  }
};
</script>

<style>

</style>
