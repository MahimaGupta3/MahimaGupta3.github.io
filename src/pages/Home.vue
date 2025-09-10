<template>
  <section class="hero">
    <div class="container hero-wrap">
      <h1 class="hero-title">Software Engineer — Backend · Cloud · AI</h1>
      <p class="hero-sub">
        I am an adaptive software engineer specializing in modern Python backend development with expertise in
        cloud-native architectures and AI/ML integration.
      </p>

      <div class="hero-actions">
        <!-- Dropdown button -->
        <div class="dropdown">
          <button class="btn btn--primary">Get in touch ▾</button>
          <div class="dropdown-content">
            <div class="dropdown-item">
              ✉️ <span>mahima03gupta@gmail.com</span>
            </div>
            <div class="dropdown-item">
              📞 <span>+1-425-628-9560</span>
            </div>
          </div>
        </div>

        <a class="btn btn--outline" href="/CV.pdf" download>Download CV</a>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="card">
        <h2 style="margin:0 0 12px 0">What I do</h2>
        <ul class="bullets">
          <li>
            Strong proficiency in building scalable microservices using <b>Flask</b> and <b>Django</b>, with hands-on
            experience in asynchronous task processing (<b>Celery</b> + <b>Redis</b>), service communication via
            <b>gRPC/Protocol Buffers</b>, and distributed systems design.
          </li>
          <li>
            Experienced in cloud technologies including <b>Azure</b> (App Services, Container Apps, OpenAI, Key Vault)
            and <b>Google Cloud Storage</b>, with proven ability to design and deploy containerized applications through
            <b>CI/CD</b> pipelines.
          </li>
          <li>
            Skilled in AI/ML implementation including <b>LLM integration</b> with Azure OpenAI, prompt engineering with
            <b>Langfuse</b> and reflection agents, and NLP processing using <b>spaCy</b>.
          </li>
          <li>
            Good understanding of front-end technologies for full-stack work: <b>Vue 3 + Vite</b>, JavaScript, HTML5,
            CSS3, jQuery, and Bootstrap.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
// no JS needed, dropdown handled by CSS
</script>

<style scoped>
.hero { background: transparent; }
.hero-wrap { padding: 24px 0 8px; }
.hero-title { font-size: clamp(28px, 3.6vw, 40px); margin: 0 0 10px 0; }
.hero-sub { color: var(--muted); max-width: 900px; margin: 0 0 16px 0; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

/* Dropdown styles */
.dropdown { position: relative; display: inline-block; }

.dropdown-content {
  display: none;
  position: absolute;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 8px;
  min-width: 260px;   /* wide enough for email */
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  z-index: 10;
  padding: 6px 0;
}

.dropdown-item {
  display: flex;              /* icon + text in row */
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  font-size: 0.95rem;
  color: var(--fg);
  white-space: nowrap;        /* prevent wrapping */
}

.dropdown:hover .dropdown-content { display: block; }

/* bullets */
.bullets { margin: 0 0 0 1.1rem; }
.bullets li { margin: 10px 0; }
</style>