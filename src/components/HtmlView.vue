<template>
  <div class="html-container">
    <iframe id="html-view" :src="viewUrl" v-if="!showImg"></iframe>
    <img src="../assets/error.jpg" v-if="showImg" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import axios from "axios";
// ts 泛型形式定义
interface Props {
  url: string;
}
const props = defineProps<Props>();

const viewUrl: any = computed(() => props.url);
let showImg = ref(false);
function error() {}
onMounted(() => {
   
});
</script>
<style lang="less" scoped>
.html-container {
  width: 100%;
  height: 100%;
  #html-view {
    width: 100%;
    height: 100%;
    border: 0px;
    overflow: hidden;
  }
  img {
    position: absolute;
    width: 100%;
    max-height: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
