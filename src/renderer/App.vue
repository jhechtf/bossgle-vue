<template>
  <div id="app" class="main container-fluid">
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: 'bossgle-app'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  @import '~bootstrap/scss/bootstrap.scss';
  html,body{
    height:100% !important;
    /*Need the body and HTML tag to take up as much space as they are allowed to.*/
    font-family:"Open Sans", sans-serif;
  }
  body{
    display:flex;
    flex-direction:column;
    /*need this for the columns / board to take up the visual element*/
  }
  @for $i from 1 through 7{
    h#{$i}{
      font-weight:bold;
    }
  }
  body > .main{
    flex:1 1 80%;
    min-height:100%;
  }
  /* CSS */
</style>
