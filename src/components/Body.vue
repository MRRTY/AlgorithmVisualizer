<template>
  <div class="body">
    <Controls
      :data.sync="data"
    ></Controls>

  </div>
</template>

<script>
import Controls from "@/components/Controls";
export default {
  name: "Body",
  components:{
    Controls
  },
  data(){
    return {
      data:""
    }
  }

}
</script>

<style lang="scss" scoped>
  .body{
    width: 100%;
    height: 100%;

  }
</style>