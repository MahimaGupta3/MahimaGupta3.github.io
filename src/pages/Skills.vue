<template>
  <section>
    <div class="container">
      <h2>Skills, Education & Certificates</h2>

      <div class="accordion">
        <!-- SKILLS -->
        <details class="acc-item" open>
          <summary class="acc-summary">Skills</summary>
          <div class="acc-panel">
            <!-- Nested groups rendered as icon grids -->
            <SkillGroup title="Languages" :items="langs" />
            <SkillGroup title="Cloud & DevOps" :items="cloud" />
            <SkillGroup title="Frameworks" :items="frameworks" />
            <SkillGroup title="Databases" :items="databases" />
            <SkillGroup title="AI / ML" :items="aiml" />
            <SkillGroup title="Tools" :items="tools" />
          </div>
        </details>

        <!-- EDUCATION -->
        <details class="acc-item">
          <summary class="acc-summary">Education</summary>
          <div class="acc-panel grid">
            <div class="card">
              <h3>Master of Engineering (EEE)</h3>
              <p class="muted">Auckland University of Technology — 2020</p>
            </div>
            <div class="card">
              <h3>Bachelor of Technology (ECE)</h3>
              <p class="muted">Dr. APJ Abdul Kalam Technical University — 2018</p>
            </div>
          </div>
        </details>

        <!-- CERTIFICATES -->
        <details class="acc-item">
          <summary class="acc-summary">Certificates</summary>
          <div class="acc-panel">
            <ul class="bullets">
              <li>IBM Data Analyst Professional Certificate — 2024</li>
              <li>Google Data Analytics Professional Certificate — 2024</li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillGroup from '../components/SkillGroup.vue'
import celeryLogo from '../assets/skills/celery.svg'
import spacyLogo from '../assets/skills/spacy.svg'
import gRPC from '../assets/skills/gRPC.svg'
// import azureDevOps from '../assets/skills/azuredevops.svg'
import azureAI from '../assets/skills/azure-ai.svg'
import langfuse from '../assets/skills/langfuse.svg'
import llm from '../assets/skills/llm.svg'
import speedcurve from '../assets/skills/speedcurve.png'

const langs = [
  { label: 'Python', icon: 'devicon-python-plain' },
  { label: 'JavaScript', icon: 'devicon-javascript-plain' },
  { label: 'NodeJS', icon: 'devicon-nodejs-plain' },
  { label: 'C/C++', icon: 'devicon-cplusplus-plain' },
  { label: 'HTML5', icon: 'devicon-html5-plain' },
  { label: 'CSS3', icon: 'devicon-css3-plain' },
]

const cloud = [
  { label: 'Azure', icon: 'devicon-azure-plain' },
  { label: 'GCP', icon: 'devicon-googlecloud-plain' },
  { label: 'Docker', icon: 'devicon-docker-plain' },
  { label: 'CI/CD', icon: 'devicon-gitlab-plain' }, // or github-plain
]

const frameworks = [
  { label: 'Flask', icon: 'devicon-flask-original' },
  { label: 'Django', icon: 'devicon-django-plain' },
  { label: 'Vue 3', icon: 'devicon-vuejs-plain' },
  { label: 'Celery', icon: celeryLogo, iconType: 'svg' }, // might fallback to generic if missing
  { label: 'gRPC', icon: gRPC, iconType: 'svg' },
]

const databases = [
  { label: 'MongoDB', icon: 'devicon-mongodb-plain' },
  { label: 'MySQL', icon: 'devicon-mysql-plain' },
  { label: 'InfluxDB', icon: 'devicon-influxdb-plain' },
  { label: 'Redis', icon: 'devicon-redis-plain' },
]

const aiml = [
  { label: 'Azure AI', icon: azureAI, iconType: 'svg' },
  { label: 'Langfuse', icon: langfuse, iconType: 'svg' },
  { label: 'LLM', icon: llm, iconType: 'svg' },
  { label: 'spaCy', icon: spacyLogo, iconType: 'svg' }, // fallback
]

const tools = [
  { label: 'Git', icon: 'devicon-git-plain' },
  { label: 'JMeter', icon: 'devicon-apache-plain' }, // fallback
  { label: 'Grafana', icon: 'devicon-grafana-plain' },
  { label: 'Kibana', icon: 'devicon-elasticsearch-plain' }, // Kibana not available, Elasticsearch instead
  { label: 'SpeedCurve', icon: speedcurve, iconType: 'svg' }, // fallback generic
]
</script>
