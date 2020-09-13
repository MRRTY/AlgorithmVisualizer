<template>
  <div id="app" class="general">
    <Header/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style>
  body{
    margin: 0;
  }
  .general{
    width: 100%;
    height: calc(100vh - 160px);
  }
</style>
