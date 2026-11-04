/* ==========================================================================
   Stanley Predilla — portfolio interactions
   Vanilla JS: theme toggle, mobile menu, scrollspy, reveal, skills/projects
   rendering, project detail modal.
   ========================================================================== */

/* ---------- Icons (inline so they follow the theme via currentColor) ---------- */
const ICONS = {
  java: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><title>Java</title><path d="M11.915 0 11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551-.093.87 1.746 2.611 1.55 3.235-.198.625-1.304 1.408-1.014 1.939.1.188.823.011 1.277-.491a13.389 13.389 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232.372.563.956.911 1.667.911.397 0 .727-.114 1.024-.264.298-.149.571-.33.91-.5.68-.34 1.634-.666 3.53-.604 1.903.062 2.872.39 3.559.704.687.314 1.15.664 1.925.664.767 0 1.395-.336 1.807-.9.412-.563.631-1.33.72-2.24.06-.623.055-1.32 0-2.066.454.45 1.117.604 1.213.424.29-.53-.816-1.314-1.013-1.937-.198-.624 1.642-2.366 1.549-3.236-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942 2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942zM8.685 7.983a3.515 3.515 0 0 0-.145.997c0 1.951 1.6 3.55 3.55 3.55 1.95 0 3.55-1.598 3.55-3.55 0-.329-.046-.648-.132-.951.334.095.64.208.915.336a42.699 42.699 0 0 1 2.042 5.829c.678 2.545 1.01 4.92.846 6.607-.082.844-.29 1.51-.606 1.94-.315.431-.713.651-1.315.651-.593 0-.932-.27-1.673-.61-.741-.338-1.825-.694-3.792-.758-1.974-.064-3.073.293-3.821.669-.375.188-.659.373-.911.5s-.466.2-.752.2c-.53 0-.876-.209-1.16-.64-.285-.43-.474-1.101-.545-1.948-.141-1.693.176-4.069.823-6.614a43.155 43.155 0 0 1 1.934-5.783c.348-.167.749-.31 1.192-.425zm-3.382 4.362a.216.216 0 0 1 .13.031c-.166.56-.323 1.116-.463 1.665a33.849 33.849 0 0 0-.547 2.555 3.9 3.9 0 0 0-.2-.39c-.58-1.012-.914-1.642-1.16-2.08.315-.24 1.679-1.755 2.24-1.781zm13.394.01c.562.027 1.926 1.543 2.24 1.783-.246.438-.58 1.068-1.16 2.08a4.428 4.428 0 0 0-.163.309 32.354 32.354 0 0 0-.562-2.49 40.579 40.579 0 0 0-.482-1.652.216.216 0 0 1 .127-.03z"/></svg>',
  python: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>',
  html: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>',
  css: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><title>CSS</title><path d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"/></svg>',
  javascript: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>',
  sql: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.7" role="img" aria-hidden="true"><title>SQL database</title><ellipse cx="12" cy="5.5" rx="7.5" ry="3"/><path d="M4.5 5.5v13c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-13"/><path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3"/></svg>',
  git: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><title>Git</title><path d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"/></svg>',
  vscode: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.7" role="img" aria-hidden="true"><title>Visual Studio Code</title><rect x="2.5" y="4" width="19" height="16" rx="2.5"/><path d="M8.5 9.5 6 12l2.5 2.5M15.5 9.5 18 12l-2.5 2.5M13 8.5l-2 7"/></svg>',
  github: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" role="img" aria-hidden="true"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
};

/* ---------- Skills (IDEA.md section 7: icon + name + hover, no ratings) ---------- */
const SKILLS = [
  { name: "Java", icon: "java" },
  { name: "Python", icon: "python" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "SQL", icon: "sql" },
  { name: "Git", icon: "git" },
  { name: "Visual Studio Code", icon: "vscode" }
];

/* ---------- Projects (IDEA.md section 8 — content from the actual repos) ---------- */
const PROJECTS = [
  {
    name: "Nestr",
    type: "Full-Stack Development",
    short: "An activity-logging application that gamifies productivity. Completing tasks hatches randomly generated pixel creatures, collected in your personal nest.",
    role: "Full-Stack Developer",
    roleNote: "independently developed the entire application: frontend, backend, and overall implementation.",
    tech: ["React", "Vite", "JavaScript", "Express", "PostgreSQL", "CSS"],
    image: "assets/img/nestr.png",
    imageAlt: "Screenshot of the Nestr main screen",
    github: "https://github.com/Staniscoding-ui/Nestr",
    modal: {
      overview: "Nestr turns everyday productivity into a collection game. Users log activities with a title, description and date; completing an activity hatches a random pixel creature, and every hatched creature joins the user's personal nest. Built as a React + Vite client on top of an Express API with PostgreSQL persistence.",
      features: [
        "Log activities with a title, description and date",
        "Completing an activity hatches a random pixel creature",
        "Hatched creatures collect and grow in the user's nest",
        "Express API with health and readiness endpoints (/healthz, /readyz)",
        "SQL schema and seed scripts for reproducible local setup"
      ],
      tech: "React, Vite, JavaScript, Express, PostgreSQL, CSS",
      challenges: [
        "Designing the PostgreSQL schema so each completed activity maps to exactly one randomly assigned creature",
        "Separating client and server cleanly, with a repository layer handling all database access",
        "Managing environment variables and CORS across two independently run apps",
        "Making local setup reproducible for other machines via schema and seed SQL scripts"
      ],
      lessons: [
        "How the pieces of a full-stack app fit together: React frontend, HTTP requests, Express validation, SQL persistence",
        "Keeping secrets (database passwords) out of the repository using .env templates",
        "Small health/readiness endpoints make debugging a two-process app dramatically easier"
      ]
    }
  },
  {
    name: "Traffic Sign Classifier",
    type: "Machine Learning / AI",
    short: "Classifies traffic signs from the GTSRB dataset across 43 categories using a custom CNN, plus NLP, Reinforcement Learning and SVM components.",
    role: "Integration Lead & Project Leadership",
    roleNote: "led the integration of the project's components and helped guide the team throughout development.",
    tech: ["Python", "CNN", "SVM", "NLP", "Reinforcement Learning"],
    image: null,
    github: "https://github.com/ZelhaDev/TSC-Model",
    modal: {
      overview: "A Python pipeline that classifies road traffic signs from the German Traffic Sign Recognition Benchmark (GTSRB, 43 classes, 50k+ images). It integrates four components: a from-scratch residual CNN, a TextCNN for natural-language sign descriptions, a Q-learning grid-world agent bridged to CNN predictions, and a HOG + RBF SVM baseline. The full pipeline (training, evaluation, ablations, error analysis, Grad-CAM) reproduces from a single run.sh.",
      features: [
        "Custom residual CNN (residual blocks, BatchNorm, Global Average Pooling) trained with cosine LR scheduling and early stopping",
        "TextCNN mapping predicted class IDs to plain-language sign descriptions (75.36% validation accuracy)",
        "Q-learning agent navigating a 5x5 grid world whose rewards are modified by traffic signs, trained across 3 seeds",
        "SVM baseline on HOG features: 81.97% test accuracy (0.75 macro-F1)",
        "Evaluation suite: confusion matrices, ROC/PR curves, ablation studies, per-class error analysis, Grad-CAM visualisations"
      ],
      tech: "Python, PyTorch, scikit-learn, Gymnasium, OpenCV, CNN, SVM, NLP, Reinforcement Learning",
      challenges: [
        "Integrating four independently developed components (CNN, NLP, RL, SVM) into one coherent pipeline",
        "Class imbalance across GTSRB's 43 classes, addressed with weighted loss",
        "Bridging CNN predictions into the RL environment so grid-world sign placement follows real model output",
        "The deep CNN trailed the classical SVM baseline on test accuracy; running structured ablations (augmentation, learning rate, depth) to understand why rather than hiding it"
      ],
      lessons: [
        "A strong classical baseline is not optional: the HOG+SVM model outperformed the from-scratch CNN and reframed the project's conclusions",
        "Multi-seed evaluation and confidence bands say more about an RL agent than a single lucky run",
        "Centralising hyperparameters in one config and shipping a one-command reproduce script pays for itself immediately"
      ]
    }
  },
  {
    name: "FitMetricsApp",
    type: "Flutter Application / Wellness",
    short: "A wellness application for monitoring fitness progress and maintaining healthy habits: BMI calculations, progress tracking, weekly reports and recommended workouts.",
    role: "Flutter Frontend Developer",
    roleNote: "implemented the Progress Tracker and Weekly Report features, contributing to the app's UI and functionality.",
    tech: ["Flutter", "Dart"],
    image: null,
    github: "https://github.com/Kair1NG/FitMetricsApp",
    modal: {
      overview: "FitMetricsApp is a Flutter wellness application that helps users monitor fitness progress and maintain healthy habits. Its features include a BMI calculator, progress tracking, wellness checks, BMI and weekly reports, and recommended workout libraries. Developed by a five-person team with divided feature ownership.",
      features: [
        "BMI calculator with instant categorised results",
        "Progress Tracker: logging and visualising fitness progress over time (my feature)",
        "Weekly Report: summarising the user's week of activity and metrics (my feature)",
        "Wellness checks and recommended workout libraries",
        "Profile features (login and registration) built by teammates"
      ],
      tech: "Flutter, Dart",
      challenges: [
        "Building UI that fits the app's existing design system and state, rather than designing in isolation",
        "Keeping the Progress Tracker and Weekly Report consistent with data produced by other members' features (e.g. BMI calculations)",
        "Coordinating five people working on separate features inside one shared Flutter codebase"
      ],
      lessons: [
        "Working inside a shared codebase: scoping my own features cleanly while staying compatible with the rest of the app",
        "Flutter's widget model and how Dart state flows through it",
        "Feature ownership in a team: clear boundaries between the Progress Tracker, Weekly Report and teammates' modules"
      ]
    }
  }
];

/* ---------- Render skills ---------- */
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-card reveal">
      <div class="skill-icon">${ICONS[s.icon]}</div>
      <span class="skill-name">${s.name}</span>
    </div>
  `).join("");
}

/* ---------- Render project cards ---------- */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card reveal" data-index="${i}">
      <div class="project-media">
        ${p.image
          ? `<img src="${p.image}" alt="${p.imageAlt}" loading="lazy">`
          : `<div class="project-media-placeholder">
               <svg viewBox="0 0 100 100" width="54" height="54" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                 <polygon points="50,5 90,30 90,70 50,95 10,70 10,30"/>
                 <polygon points="50,25 82,42.5 18,42.5"/>
               </svg>
               <span>${p.name}</span>
               <small>Project visual coming soon</small>
             </div>`}
      </div>
      <div class="project-body">
        <div class="project-header">
          <h3 class="project-name">${p.name}</h3>
          <span class="project-type">${p.type}</span>
        </div>
        <p class="project-description">${p.short}</p>
        <p class="project-role"><strong>${p.role}</strong> <span>${p.roleNote}</span></p>
        <div class="project-tags">
          ${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="project-actions">
          <button class="btn btn-secondary" data-open="${i}" aria-haspopup="dialog">View Details</button>
          <a class="gh-link" href="${p.github}" target="_blank" rel="noopener noreferrer" aria-label="${p.name} on GitHub">${ICONS.github}</a>
        </div>
      </div>
    </article>
  `).join("");
}

/* ---------- Modal ---------- */
const modal = {
  el: document.getElementById("modal-overlay"),
  title: document.getElementById("modal-title"),
  body: document.getElementById("modal-body"),
  github: document.getElementById("modal-github"),
  lastFocus: null,

  open(index) {
    const p = PROJECTS[index];
    if (!p || !p.modal) return;
    this.lastFocus = document.activeElement;
    this.title.textContent = p.name;
    this.github.href = p.github;
    this.body.innerHTML = `
      <p class="modal-type">${p.type}</p>
      <div class="modal-section">
        <h4>Overview</h4>
        <p>${p.modal.overview}</p>
      </div>
      <div class="modal-section">
        <h4>Main Functionalities</h4>
        <ul>${p.modal.features.map(f => `<li>${f}</li>`).join("")}</ul>
      </div>
      <div class="modal-section">
        <h4>Technologies Used</h4>
        <div class="modal-tags">
          ${p.modal.tech.split(",").map(t => `<span class="tag">${t.trim()}</span>`).join("")}
        </div>
      </div>
      <div class="modal-section">
        <h4>Development Challenges</h4>
        <ul>${p.modal.challenges.map(c => `<li>${c}</li>`).join("")}</ul>
      </div>
      <div class="modal-section">
        <h4>Lessons Learned</h4>
        <ul>${p.modal.lessons.map(l => `<li>${l}</li>`).join("")}</ul>
      </div>
    `;
    this.el.hidden = false;
    requestAnimationFrame(() => this.el.classList.add("visible"));
    document.body.style.overflow = "hidden";
    this.el.querySelector(".modal-content").scrollTop = 0;
    document.getElementById("modal-close").focus();
  },

  close() {
    this.el.classList.remove("visible");
    document.body.style.overflow = "";
    setTimeout(() => { this.el.hidden = true; }, 280);
    if (this.lastFocus) this.lastFocus.focus();
  }
};

function initModal() {
  if (!modal.el) return;
  document.getElementById("projects-grid").addEventListener("click", e => {
    const btn = e.target.closest("[data-open]");
    if (btn) modal.open(Number(btn.dataset.open));
  });
  document.getElementById("modal-close").addEventListener("click", () => modal.close());
  modal.el.addEventListener("click", e => {
    if (e.target === modal.el) modal.close();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !modal.el.hidden) modal.close();
  });
}

/* ---------- Theme toggle (dark default, persists) ---------- */
function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  if (saved === "light" || (!saved && prefersLight)) {
    root.setAttribute("data-theme", "light");
  }
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const light = root.getAttribute("data-theme") === "light";
      root.setAttribute("data-theme", light ? "dark" : "light");
      localStorage.setItem("theme", light ? "dark" : "light");
    });
  }
}

/* ---------- Mobile hamburger menu ---------- */
function initMenu() {
  const burger = document.getElementById("hamburger");
  const links = document.getElementById("nav-links");
  if (!burger || !links) return;
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", e => {
    if (e.target.closest("a")) {
      links.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---------- Scrollspy: purple highlight for the active nav item ---------- */
function initScrollspy() {
  const map = {
    home: document.querySelector('a[data-section="home"]'),
    about: document.querySelector('a[data-section="about"]'),
    projects: document.querySelector('a[data-section="projects"]'),
    skills: document.querySelector('a[data-section="skills"]'),
    contact: document.querySelector('a[data-section="contact"]')
  };
  const targets = ["home", "about", "skills", "projects", "contact"]
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id === "hero" ? "home" : entry.target.id;
      Object.entries(map).forEach(([key, link]) => {
        if (link) link.classList.toggle("active", key === id);
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  targets.forEach(t => observer.observe(t));
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
}

/* ---------- Copy email ---------- */
function initContactLinks() {
  const button = document.querySelector("[data-copy-email]");
  if (!button) return;
  button.addEventListener("click", async () => {
    const email = button.dataset.copyEmail;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    button.textContent = "Copied!";
    window.setTimeout(() => { button.textContent = "Email"; }, 1600);
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  initTheme();
  initMenu();
  initModal();
  initScrollspy();
  initReveal();
  initContactLinks();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
