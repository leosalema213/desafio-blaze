<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <div>
    <Header />
    <main>
      <div class="content">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
