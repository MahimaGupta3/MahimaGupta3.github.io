<template>
    <section>
      <div class="container">
        <h2>Contact</h2>
        <p class="muted">Prefer email or text? Quick links below, or send a message.</p>
  
        <div class="card-grid">
          <a class="card" href="mailto:mahima03gupta@gmail.com"><strong>Email</strong><br/>mahima03gupta@gmail.com</a>
          <a class="card" href="tel:+14256289560"><strong>Text / Call</strong><br/>+1-425-628-9560</a>
        </div>
  
        <!-- Static-friendly form (Formspree). Replace action with your endpoint -->
        <form class="card contact-form" method="POST" action="https://formspree.io/f/your-endpoint-id">
          <h3>Send a message</h3>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="5" placeholder="How can I help?" required></textarea>
          <!-- Honeypot -->
          <input type="text" name="company" class="hp" autocomplete="off" tabindex="-1" aria-hidden="true" />
          <button type="submit" class="btn">Send</button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .hp{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}
  </style>