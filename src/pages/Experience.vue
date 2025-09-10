<template>
  <section>
    <div class="container">
      <h2>Experience</h2>

      <div class="accordion">

        <!-- Chekable -->
        <details class="acc-item" open>
          <summary class="acc-summary">
            <img src="../assets/logos/chekable.png" alt="Chekable logo" class="company-logo" />
            Backend Engineer — Chekable
            <span class="muted">· Lynnwood, US · Jan 2025 – Present</span>
          </summary>
          <div class="acc-panel">
            <ul class="bullets">
              <li>
                Architected and implemented <b>CI/CD pipelines</b> for Azure App Services and Container Apps,
                enabling automated deployments and reducing deployment time.
              </li>
              <li>
                Led <b>SOC2 compliance</b> initiative by migrating hardcoded configurations to Azure Pipeline
                Library and Azure Key Vault, ensuring secure credential management and meeting compliance requirements.
              </li>
              <li>
                Developed core <b>patent application generation</b> system that processes invention disclosures,
                meeting notes, citations, claims, and technical drawings through an AI-driven workflow.
              </li>
              <li>
                Built secure <b>document management</b> using Google Cloud Storage with encryption/decryption
                for sensitive legal documents.
              </li>
              <li>
                Integrated <b>Azure OpenAI</b> with <b>Langfuse</b> prompts and reflection agents to automatically
                generate patent sections (title, abstract, field of invention, background, summary, detailed descriptions).
              </li>
              <li>
                Implemented intelligent <b>claims processing</b> using <b>spaCy NLP</b> to identify and link
                technical terms with corresponding figures, improving navigation and review efficiency.
              </li>
              <li>
                Designed <b>MongoDB schemas</b> to store and retrieve generated patent sections and extracted terms,
                enabling quick versioning and search.
              </li>
              <li>
                Implemented asynchronous processing with <b>Celery</b> and <b>Redis</b> for long-running AI generation
                tasks (&gt; 2 minutes), allowing users to keep working while sections generate in the background.
              </li>
              <li>
                Designed a <b>microservices architecture</b> in Python (<b>Flask</b>) with <b>gRPC</b> and
                <b>Protocol Buffers</b> for robust inter-service communication.
              </li>
            </ul>
          </div>
        </details>

        <!-- WebMD -->
        <details class="acc-item">
          <summary class="acc-summary">
            <img src="../assets/logos/webmd.svg" alt="WebMD logo" class="company-logo" />
            Software Engineer — WebMD
            <span class="muted">· Mumbai, India · Oct 2021 – Sep 2023</span>
          </summary>
          <div class="acc-panel">
            <p>
              Developed performance engineering automation tools and dashboards to optimize website performance
              and streamline CI/CD workflows for WebMD's digital platforms.
            </p>

            <h4>Key Projects & Achievements</h4>
            <ul class="bullets">
              <li>
                <b>Helios API Load Test Automation Tool</b><br />
                – Built NodeJS-based automation solution integrated with GitLab CI/CD that dynamically generated JMeter scripts from <code>kubeconfig.json</code> files.<br />
                – Implemented quality gates blocking staging deployments on performance degradation.<br />
                – Automated test result notifications via Confluence integration.
              </li>
              <li>
                <b>Core Web Vitals (CWV) Automation Tool</b><br />
                – Designed automated monitoring using SpeedCurve APIs to validate frontend deployments against Google’s Core Web Vitals standards.<br />
                – Achieved ~30% improvement in overall website performance.<br />
                – Stored historical metrics in InfluxDB for trend analysis and baseline comparisons.
              </li>
              <li>
                <b>Approval Dashboard</b><br />
                – Created Vue3-based dashboard integrated with GitLab APIs for managing CWV pipeline failures.<br />
                – Enabled whitelisted users to review and retrigger failed pipeline stages.<br />
                – Reduced deployment delays and improved cross-team collaboration.
              </li>
            </ul>

            <h4>Technical Contributions</h4>
            <ul class="bullets">
              <li>Leveraged GitLab APIs to integrate automated testing and quality gates within CI/CD pipelines.</li>
              <li>Proficiently managed performance metrics using InfluxDB 2.x and 3.x databases.</li>
              <li>Collaborated with frontend and performance teams to enforce mandatory performance checks across repositories.</li>
            </ul>
          </div>
        </details>

      </div>
    </div>
  </section>
</template>

<script setup>
// no extra JS needed
</script>

<style scoped>
.company-logo {
  width: 22px;
  height: 22px;
  object-fit: contain;
  margin-right: 8px;
}
.acc-summary {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>