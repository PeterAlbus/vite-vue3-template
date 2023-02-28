<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import HtmlView from "../components/HtmlView.vue";

onMounted(async () => {});
</script>

<template>
  <main>
    <div class="container">Hello Vite！</div>
  </main>
</template>

<style lang="less" scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-weight: bold;
    overflow: hidden;
  }
}
</style>
