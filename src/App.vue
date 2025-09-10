<template>
  <div class="app-wrap">
    <SiteHeader />
    <main class="page-wrap">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>