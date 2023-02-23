<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Router from "./router/routes";
</script>

<template>
  <div class="page">
    <div class="left">
      <RouterLink :to="route.path" v-for="route in Object.values(Router)">{{ route.name }}</RouterLink>
    </div>
    <RouterView class='right' />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.page {
  width: 100vW;
  display: flex;
  flex-direction: row;
}

.left {
  width: 150px;
  height: 100vh;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  background-color: #2B1484;
  box-sizing: border-box;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-bottom: 24px;
}

.right {
  margin-left: 150px;
  width: 100vW;
  height: 100vH;
}

a {
  width: 100%;
  text-align: left;
  color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 24px;
}

@media (max-width: 1024px) {}
</style>
