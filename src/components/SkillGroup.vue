<template>
    <details class="acc-item">
      <summary class="acc-summary">{{ title }}</summary>
      <div class="acc-panel">
        <div class="skill-grid">
          <div v-for="s in items" :key="s.label" class="skill">
            <!-- If the item has an SVG path, use <img>, else use devicon -->
            <img v-if="s.iconType === 'svg'" :src="s.icon" :alt="s.label" class="skill-icon-img" />
            <i v-else :class="`${s.icon} colored skill-icon`"></i>
            <span class="skill-label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </details>
  </template>
  
  <script setup>
  defineProps({
    title: { type: String, required: true },
    // items: [{ label, icon, iconType }]
    items: { type: Array, required: true }
  })
  </script>
  
  <style scoped>
  .skill-grid {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    align-items: start;
  }
  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 10px;
  }
  .skill-icon {
    font-size: 36px;
    line-height: 1;
  }
  .skill-icon-img {
    width: 36px;
    height: 36px;
    object-fit: contain;
  }
  .skill-label {
    font-size: 0.95rem;
    text-align: center;
  }
  </style>