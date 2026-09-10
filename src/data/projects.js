export const projectsData = [
  {
    id: 'docusense-ai',
    title: 'DocuSense AI: Document Intelligence Engine',
    category: 'ai',
    categoryLabel: 'AI & Intelligent Apps',
    badge: 'Production Engine',
    tagline: 'RAG Architecture • Context Window Optimization • Vector Search',
    description: 'High-throughput document query and synthesis engine combining OpenAI embeddings with hybrid vector search, delivering sub-200ms answer retrieval across complex multi-page architectural documentation.',
    highlights: [
      'Chunked document pipeline with token-budgeted re-ranking algorithms.',
      'Zero hallucination guardrails using deterministic schema validation.'
    ],
    aiLeverage: 'Engineered with custom prompt evaluation harnesses and Claude API pipelines to validate reasoning fidelity.',
    stack: ['Python', 'FastAPI', 'OpenAI API', 'TypeScript', 'PostgreSQL'],
    links: {
      github: 'https://github.com'
    },
    caseStudy: {
      challenge: 'Large technical manuals require accurate contextual retrieval while adhering strictly to token budgets and avoiding catastrophic hallucination.',
      architecture: 'Employs a tiered pipeline: LangChain chunking with token-aware sliding windows, vector embeddings cached in PostgreSQL via pgvector, and deterministic JSON Schema output verification.',
      solution: 'Sub-200ms query latency achieved with hybrid dense/sparse search and automated prompt evals across 500+ benchmark technical questions.',
      learnings: 'Model routing (dispatching simpler classification to compact models and complex reasoning to larger engines) reduced operational API cost by 62%.'
    }
  },
  {
    id: 'metricflow',
    title: 'MetricFlow: Real-Time Telemetry Dashboard',
    category: 'web',
    categoryLabel: 'Web Development',
    badge: 'Full-Stack SaaS',
    tagline: 'Reactive State • WebSocket Streaming • Component Architecture',
    description: 'Low-latency distributed systems telemetry visualization dashboard built with vanilla web components and lightweight SVG graph renderers, eliminating heavy charting library bloat.',
    highlights: [
      '60fps continuous stream rendering handling 1,000+ datapoints/sec.',
      'Full keyboard navigation and WCAG 2.1 AA accessible data tables.'
    ],
    aiLeverage: 'Utilized AI copilot assistants to generate extensive generative mock datasets and stress-test suite cases.',
    stack: ['JavaScript', 'WebSockets', 'CSS Grid', 'Node.js', 'Redis'],
    links: {
      github: 'https://github.com'
    },
    caseStudy: {
      challenge: 'Visualizing thousands of concurrent server telemetry data points without UI lag or memory leaks using zero third-party chart dependencies.',
      architecture: 'WebSocket binary transport decoded directly onto native SVG canvas layers with requestAnimationFrame batching and smooth spline calculations.',
      solution: 'Stable 60fps rendering under heavy load (1,000 updates/sec) with strict WCAG AA accessible tabular views for screen readers.',
      learnings: 'Native browser APIs often outperform heavy runtime frameworks when optimized for rendering pipelines and memory recycling.'
    }
  },
  {
    id: 'netsentinel',
    title: 'NetSentinel: OWASP Security Audit CLI',
    category: 'security',
    categoryLabel: 'Security & Systems',
    badge: 'Audit Utility',
    tagline: 'Static Review • Header Analysis • Automated Remediation',
    description: 'Automated security inspection utility that scans HTTP response headers, analyzes SSL/TLS cipher suites, and verifies content security policies (CSP) against known OWASP vulnerability baselines.',
    highlights: [
      'Instant vulnerability classification scoring (High / Medium / Low).',
      'Generates actionable markdown compliance reports for engineers.'
    ],
    aiLeverage: 'Fine-tuned prompt pipeline to translate raw CVE alerts into plain-English remediation guides.',
    stack: ['Python', 'Socket Programming', 'OWASP', 'CLI Engine'],
    links: {
      github: 'https://github.com'
    },
    caseStudy: {
      challenge: 'Manual security verification of deployment headers and TLS configs is error-prone, slowing down release velocity.',
      architecture: 'Python socket and HTTP inspection daemon validating CSP, HSTS, X-Frame-Options, and TLS cipher strength against OWASP Top 10 recommendations.',
      solution: 'Generates structured JSON and human-readable markdown vulnerability audit sheets within 2.4 seconds per target endpoint.',
      learnings: 'Proactive developer tooling that runs locally before deployment prevents critical production security regressions.'
    }
  },
  {
    id: 'promptcraft',
    title: 'PromptCraft: Schema-Enforced LLM Playground',
    category: 'ai',
    categoryLabel: 'AI Applications',
    badge: 'Developer Tool',
    tagline: 'Function Calling • Zod / JSON Schema • Live Preview',
    description: 'Interactive workbench for engineering and stress-testing structured JSON outputs from large language models, ensuring 100% type reliability prior to production deployment.',
    highlights: [
      'Zero-dependency client-side validator with schema auto-generation.',
      'Instant cost estimation based on dynamic input/output tokenization.'
    ],
    aiLeverage: 'Created automated prompt iteration benchmarking suites using script runners.',
    stack: ['TypeScript', 'React', 'JSON Schema', 'Node.js'],
    links: {
      github: 'https://github.com'
    },
    caseStudy: {
      challenge: 'LLMs often generate inconsistent schema payloads under varied user inputs, breaking downstream microservice consumers.',
      architecture: 'Client-side JSON Schema validator running real-time AST parsing with dynamic token-cost calculating heuristics.',
      solution: 'Provides instant feedback loops for prompt engineering teams with zero server dependency.',
      learnings: 'Strict schema validation at the inference boundary eliminates 99% of downstream integration failures.'
    }
  }
];
