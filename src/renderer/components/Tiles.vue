<template>
  <div class="col-9 pl-3">
   <current-letters></current-letters>
    <div class="row pl-4">
      <tile v-for="tile in tiles" :value="tile"></tile>
    </div>
  </div>
</template>
<script>
  import Tile from './Tile.vue';
  import CurrentLetters from './CurrentLetters'
  export default{
    computed:{
      tiles(){
        console.log(this.$store.state.Board);
        return this.$store.state.Board.board;
      }
    },
    components:{
      Tile,
      CurrentLetters
    }
  }
</script>
<source>
