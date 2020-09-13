<template>
  <div  class="header">
    <div class="wrapper">
      <div class="logo">Algorithm visualizer</div>
      <div class="nav"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  .header{
    height: 100px;
    width: 100%;
    background-color: #666666;
    .wrapper{
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      .logo{
        color: white;
        margin-left: 70px;
        height: 100%;
        width: 150px;
        font-family: "Verdana", sans-serif;
        font-weight: 500;
        font-size: 32px;
      }
      .nav{
        min-width: 100px;
        width: 100%;
        height: 100%;
      }
    }
  }


</style>
