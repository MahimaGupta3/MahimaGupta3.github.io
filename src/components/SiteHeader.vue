<template>
    <header class="site-header">
      <div class="container header-bar">
        <RouterLink class="brand" to="/">
          <span class="logo-dot" aria-hidden="true">●</span> Mahima Gupta
        </RouterLink>
  
        <nav aria-label="Main" class="main-nav">
          <RouterLink to="/" :class="{ active: $route.name === 'home' }">Home</RouterLink>
          <RouterLink to="/skills" :class="{ active: $route.name === 'skills' }">Skills</RouterLink>
          <RouterLink to="/experience" :class="{ active: $route.name === 'experience' }">Experience</RouterLink>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  </script>