<template>
  <div class="tile" :class="{selected: chosen}" @click="selectTile()">
    {{value}} &ndash; {{chosen? 'yes' : 'no'}}
  </div>
</template>
<script>
  export default {
    props:{
      value:{
        type:String,
        required:true
      }
    },
    data(){
      return {
        letter: this.value,
        chosen:false
      }
    },
    methods:{
      selectTile(){
        if(this.chosen) return false;
        //If this tile has already been chosen, nope.
        console.log(this.chosen);
        this.chosen = true;
        //flip chosen value
        this.$store.dispatch('check_word', {letter:this.value,tile:this});
        //store to the current board
      }
    }
  }
</script>
<style>
  .tile{
    box-sizing:border-box;
    margin:0 10px 5px 10px;
    flex:0 0 calc(25% - 20px);
    text-align:center;
    font-weight:bold;
    text-transform:upper;
    font-size:2rem;
    border-radius:10px;
    padding:20px 0 20px;
    border:1px solid $gray-800;
    box-shadow: 3px 3px 8px rgba(0,0,0,0.4),
      inset 3px 3px 8px rgba(255,255,255,0.3),
      inset 3px -3px 4px rgba(0,0,0,0.4);
  }
  .selected{
    background-color:red !important;
  }
</style>
