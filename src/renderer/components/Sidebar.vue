<template>
  <div class="col-3 bg-success">
    <h2>Bossgle</h2>
    <ul>
      <li v-for="word in words"> {{word}} </li>
    </ul>
  </div>
</template>
<script>
  export default{
    computed:{
      words(){
        return this.$store.state.Board.used_words;
      }
    }
  }
</script>
<style></style>
