<template>
  <div id="board" class="row h-100">
    <sidebar></sidebar>
    <tiles></tiles>
  </div>
</template>
<script>
  import Sidebar from './Sidebar.vue';
  import Tiles from './Tiles.vue';

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  export default {
    components: {
      Sidebar,
      Tiles
    },
    mounted() {
      //Here is the initialization for the board.
      //Realistically we could have put this anywhere, but we decided on putting it here.

      console.log(this.$store.state);
      for (var i = 0,str; i<16;i++){
        str = String.fromCharCode(randomIntFromInterval(65,90));
        console.log(str);
        this.$store.commit('add_letter_to_board',str);
      }
    }
  }

</script>
<style>
  #board{
    flex:1 1 auto;

  }
</style>
