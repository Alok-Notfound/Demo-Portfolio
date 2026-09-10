/* ==========================================================================
   PROJECT FILTERING & MODAL CASE STUDY CONTROLLER
   assets/js/projects.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Dynamic Category Filtering
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');

      // Update tab active state
      filterTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Filter visible cards
      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. Case Study Modal Dialog
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalBody = document.getElementById('modal-body');

  const caseStudies = {
    'docusense-ai': {
      title: 'DocuSense AI: Document Intelligence Engine',
      category: 'AI & Intelligent Systems',
      challenge: 'Large technical manuals require accurate contextual retrieval while adhering strictly to token budgets and avoiding catastrophic hallucination.',
      architecture: 'Employs a tiered pipeline: LangChain chunking with token-aware sliding windows, vector embeddings cached in PostgreSQL via pgvector, and deterministic JSON Schema output verification.',
      solution: 'Sub-200ms query latency achieved with hybrid dense/sparse search and automated prompt evals across 500+ benchmark technical questions.',
      learnings: 'Model routing (dispatching simpler classification to compact models and complex reasoning to larger engines) reduced operational API cost by 62%.'
    },
    'metricflow': {
      title: 'MetricFlow: Real-Time Telemetry Dashboard',
      category: 'Web Development',
      challenge: 'Visualizing thousands of concurrent server telemetry data points without UI lag or memory leaks using zero third-party chart dependencies.',
      architecture: 'WebSocket binary transport decoded directly onto native SVG canvas layers with requestAnimationFrame batching and smooth spline calculations.',
      solution: 'Stable 60fps rendering under heavy load (1,000 updates/sec) with strict WCAG AA accessible tabular views for screen readers.',
      learnings: 'Native browser APIs often outperform heavy runtime frameworks when optimized for rendering pipelines and memory recycling.'
    },
    'netsentinel': {
      title: 'NetSentinel: OWASP Security Audit CLI',
      category: 'Security & Systems',
      challenge: 'Manual security verification of deployment headers and TLS configs is error-prone, slowing down release velocity.',
      architecture: 'Python socket and HTTP inspection daemon validating CSP, HSTS, X-Frame-Options, and TLS cipher strength against OWASP Top 10 recommendations.',
      solution: 'Generates structured JSON and human-readable markdown vulnerability audit sheets within 2.4 seconds per target endpoint.',
      learnings: 'Proactive developer tooling that runs locally before deployment prevents critical production security regressions.'
    },
    'promptcraft': {
      title: 'PromptCraft: Schema-Enforced LLM Playground',
      category: 'AI Applications',
      challenge: 'LLMs often generate inconsistent schema payloads under varied user inputs, breaking downstream microservice consumers.',
      architecture: 'Client-side JSON Schema validator running real-time AST parsing with dynamic token-cost calculating heuristics.',
      solution: 'Provides instant feedback loops for prompt engineering teams with zero server dependency.',
      learnings: 'Strict schema validation at the inference boundary eliminates 99% of downstream integration failures.'
    }
  };

  let lastActiveElement = null;

  document.querySelectorAll('.view-case-study').forEach((button) => {
    button.addEventListener('click', () => {
      const projectId = button.getAttribute('data-project-id');
      const study = caseStudies[projectId];

      if (study && modal) {
        lastActiveElement = button;
        if (modalTitle) modalTitle.textContent = study.title;
        if (modalCategory) modalCategory.textContent = study.category;
        if (modalBody) {
          modalBody.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div>
                <h4 style="font-family: var(--font-display); font-size: 1.25rem; color: var(--ink-primary); margin-bottom: 0.5rem;">The Challenge &amp; Constraints</h4>
                <p style="font-size: var(--fs-body-md); line-height: var(--lh-body-md); color: var(--ink-body);">${study.challenge}</p>
              </div>
              <div>
                <h4 style="font-family: var(--font-display); font-size: 1.25rem; color: var(--ink-primary); margin-bottom: 0.5rem;">Architectural System Design</h4>
                <p style="font-size: var(--fs-body-md); line-height: var(--lh-body-md); color: var(--ink-body);">${study.architecture}</p>
              </div>
              <div>
                <h4 style="font-family: var(--font-display); font-size: 1.25rem; color: var(--ink-primary); margin-bottom: 0.5rem;">Implementation &amp; Results</h4>
                <p style="font-size: var(--fs-body-md); line-height: var(--lh-body-md); color: var(--ink-body);">${study.solution}</p>
              </div>
              <div style="background-color: var(--canvas-bg); padding: 1.25rem; border-left: 2px solid var(--accent); border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
                <span class="label-caps" style="color: var(--accent); display: block; margin-bottom: 0.25rem;">Engineering Takeaways</span>
                <p style="font-size: var(--fs-body-sm); color: var(--ink-body);">${study.learnings}</p>
              </div>
            </div>
          `;
        }

        if (typeof modal.showModal === 'function') {
          modal.showModal();
        } else {
          modal.setAttribute('open', '');
        }
      }
    });
  });

  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', () => {
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
      if (lastActiveElement) lastActiveElement.focus();
    });
  }

  // Close when clicking modal backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      const dialogDimensions = modal.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        if (typeof modal.close === 'function') modal.close();
        if (lastActiveElement) lastActiveElement.focus();
      }
    });
  }
});
