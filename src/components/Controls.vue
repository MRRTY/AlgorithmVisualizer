<template>
  <div class="wrapper">
    <ui-select
        class="algo-select"
        v-model="localOptionsValue"
        :options="selectOptions"
    ></ui-select>
    <ui-textbox
        class="algo-textbox"
        v-model="localData"
    ></ui-textbox>

    <ui-button
        class="algo-button"
        @click="onVisualizeClick"
    >Visualize</ui-button>
  </div>
</template>

<script>
import {UiSelect, UiButton, UiTextbox} from "keen-ui";

export default {
  name: "Controls",
  comments:{
    UiSelect,
    UiTextbox,
    UiButton
  },
  data(){
    return {
      selectOptions:[{label:"Babble Sort", value:"bubbleSort"}, {label:"Merge Sort", value: "mergeSort"}],
      optionsValue:{label:"Babble Sort", value:"bubbleSort"}
    }
  },
  computed:{
    localData:{
      get(){
        return this.data;
      },
      set(value){
        this.$emit("update:data", value);
      }

    },
    localOptionsValue:{
      get(){
        return this.optionsValue;
      },
      set(value){
        this.optionsValue = value;
      }
    }
  },
  methods:{
    onVisualizeClick(){
      this.$emit("update:")
    }
  },
  props:{
    data:{
      type: String,
      default : () => ""
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    margin-left: 50px;
    margin-right: 50px;
    width: calc(100% - 100px);
    height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    .algo-select{
      width: 200px;
      min-width: 100px;
    }
    .algo-textbox{
      padding-left: 10px;
      padding-right: 10px;
      width: calc(100% - 300px);
      min-width: 100px;
    }
    .algo-button{
      width: 75px;
    }

  }
</style>