<template>
  <div class="row bg-secondary py-3 mb-3">
    <div class="col">
      <h3>Current Letters</h3>
    </div>
    <div class="col-8">
      <span class="text-input">{{current}}</span>
    </div>
  </div>
</template>
<script>
  export default{
    computed:{
      current(){
        return this.$store.state.Board.current.join('');
      }
    }
  }
</script>
<style>
  .text-input{
    letter-spacing:3px;
    font-size:1.3rem;
    font-weight:bold;
  }
</style>
