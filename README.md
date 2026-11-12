:root {
  --bg: #0c1220;
  --bg-soft: #111b2d;
  --panel: rgba(17, 27, 45, 0.88);
  --panel-strong: #1e2a40;
  --text: #eaf3ff;
  --muted: #a8bfd6;
  --border: rgba(180, 200, 255, 0.14);
  --primary: #5ac3ff;
  --secondary: #8be0c9;
  --accent: #ef9bd8;
  --danger: #ff7d7d;
  --warning: #fccf7a;
  --success: #80f7b5;
  --shadow: 0 18px 45px rgba(5, 10, 22, 0.42);
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-height: 100vh;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: linear-gradient(145deg, #090f1a 0%, #111d30 60%, #0a1428 100%);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button, input, textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 280px 1fr;
}

.app-shell.rtl {
  direction: rtl;
}

.sidebar {
  background: rgba(9, 16, 28, 0.9);
  border-right: 1px solid var(--border);
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.75rem 0.5rem;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #0b1628;
  font-weight: 800;
}

.brand-block h1 {
  margin: 0;
  font-size: 1.1rem;
}

.brand-block small {
  color: var(--muted);
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item,
.lang,
.organ-btn,
.primary-btn,
.secondary-btn,
.medicine-item,
.library-card button {
  transition: 0.2s ease;
}

.nav-item {
  background: transparent;
  border: 1px solid transparent;
  color: var(--text);
  padding: 0.8rem 0.9rem;
  border-radius: 12px;
  text-align: left;
}

.nav-item.active {
  background: rgba(90, 195, 255, 0.14);
  border-color: rgba(90, 195, 255, 0.4);
}

.mini-card,
.panel,
.hero-card,
.metric-card,
.module-card,
.library-card,
.admin-card {
  border: 1px solid var(--border);
  background: rgba(18, 28, 45, 0.92);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.mini-card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.language-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.lang {
  border-radius: 10px;
  border: 1px solid var(--border);
  background: #0f1728;
  color: var(--text);
  padding: 0.45rem 0.6rem;
}

.lang.active {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #0b1424;
  border-color: transparent;
}

.content-area {
  padding: 1.5rem;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}

.eyebrow {
  margin: 0 0 0.2rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
}

.topbar h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2.3rem);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.primary-btn,
.secondary-btn {
  border-radius: 12px;
  padding: 0.8rem 1rem;
  border: 1px solid transparent;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #09161e;
  font-weight: 700;
}

.secondary-btn {
  background: rgba(255,255,255,0.02);
  border-color: var(--border);
  color: var(--text);
}

.page-section {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}

.hero-grid,
.two-col,
.anatomy-layout,
.admin-grid,
.library-grid,
.module-grid,
.stats-grid {
  display: grid;
  gap: 1rem;
}

.hero-grid {
  grid-template-columns: 1.7fr 1fr;
}

.hero-card {
  padding: 1.2rem;
}

.hero-card.large {
  min-height: 220px;
  background: linear-gradient(135deg, rgba(90,195,255,0.12), rgba(139,224,201,0.08));
}

.hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-pill {
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(128,247,181,0.2);
  color: var(--success);
  font-size: 0.75rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1.7rem;
}

.hero-stats div {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.hero-stats strong {
  font-size: clamp(1.5rem, 2vw, 2.3rem);
}

.hero-card input,
.panel input,
.panel textarea {
  width: 100%;
  padding: 0.8rem 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(6, 12, 23, 0.7);
  color: var(--text);
  margin-top: 0.75rem;
}

.chip-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.chip-list li {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.4rem 0.7rem;
  color: var(--muted);
}

.stats-grid {
  grid-template-columns: repeat(4, minmax(200px, 1fr));
}

.metric-card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.metric-card.purple { border-color: rgba(196, 132, 255, 0.3); }
.metric-card.blue { border-color: rgba(90, 195, 255, 0.3); }
.metric-card.amber { border-color: rgba(252, 207, 122, 0.3); }
.metric-card.green { border-color: rgba(128, 247, 181, 0.3); }

.metric-card strong {
  font-size: 1.8rem;
}

.module-grid {
  grid-template-columns: repeat(5, minmax(150px, 1fr));
}

.module-card {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 72px;
}

.two-col {
  grid-template-columns: 1.2fr 1fr;
}

.anatomy-layout {
  grid-template-columns: 1.3fr 0.7fr;
}

.panel {
  padding: 1rem;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.panel-header h3,
.detail-panel h3,
.library-card h3,
.admin-card h3 {
  margin: 0;
}

.medicine-list,
.patient-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 0.75rem;
}

.medicine-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.8rem 0.9rem;
  color: var(--text);
}

.medicine-item.active {
  border-color: rgba(90,195,255,0.45);
  background: rgba(90,195,255,0.1);
}

.medicine-item small,
.patient-row small,
.detail-panel small,
.info-list {
  color: var(--muted);
}

.meta-row {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 0.7rem 0 1rem;
  color: var(--muted);
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.library-grid,
.admin-grid {
  grid-template-columns: repeat(4, minmax(180px, 1fr));
}

.library-card,
.admin-card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.library-card button {
  width: fit-content;
  background: rgba(255,255,255,0.02);
  color: var(--text);
  border-radius: 10px;
  border: 1px solid var(--border);
  padding: 0.6rem 0.8rem;
}

.three-anatomy-canvas {
  width: 100%;
  min-height: 360px;
  margin: 1rem 0;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: radial-gradient(circle at center, rgba(90,195,255,0.12), rgba(7,13,23,0.8));
}

.organ-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.organ-btn {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.55rem 0.7rem;
  border-radius: 10px;
}

.organ-btn.active {
  border-color: rgba(90,195,255,0.45);
  background: rgba(90,195,255,0.08);
}

textarea {
  width: 100%;
  resize: vertical;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(6, 12, 23, 0.7);
  color: var(--text);
  padding: 1rem;
}

.action-row {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.voice-demo {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.voice-demo ul {
  margin: 0.6rem 0 0;
  padding-left: 1.1rem;
  color: var(--muted);
}

pre {
  white-space: pre-wrap;
  margin: 0;
  color: var(--text);
  line-height: 1.6;
}

.patient-row {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: center;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.8rem 0.9rem;
}

.site-footer {
  margin-top: 1.5rem;
  padding: 1rem 0.2rem 0;
  border-top: 1px solid var(--border);
  color: var(--muted);
}

@media (max-width: 1024px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .hero-grid,
  .two-col,
  .anatomy-layout,
  .library-grid,
  .admin-grid,
  .module-grid,
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 720px) {
  .content-area {
    padding: 1rem;
  }

  .hero-grid,
  .two-col,
  .anatomy-layout,
  .library-grid,
  .admin-grid,
  .module-grid,
  .stats-grid,
  .header-actions,
  .action-row,
  .meta-row,
  .topbar {
    grid-template-columns: 1fr;
    display: grid;
  }

  .header-actions,
  .action-row {
    width: 100%;
  }

  .brand-block {
    flex-direction: column;
    align-items: flex-start;
  }
}
