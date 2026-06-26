window.RESUME_DATA = {
  "profile": {
    "name": "Arthur Pan",
    "headline": "Software Development Engineer Intern",
    "location": "Pittsburgh, US",
    "summary": "Arthur Pan is a Software Development Engineer Intern. Experience includes work with GBase General Technology, Sserly Software, Stanford University — IDEAL Lab. Selected projects include GraphRAG Knowledge Assistant, Multi-Agent Code Review Bot, Mini-GPT Pretraining from Scratch. Research output includes peer-reviewed publications."
  },
  "contact_note": "Reachable by email or phone.",
  "contacts": [
    {
      "type": "email",
      "label": "Email",
      "value": "arthurp@andrew.cmu.edu",
      "href": "mailto:arthurp@andrew.cmu.edu"
    },
    {
      "type": "phone",
      "label": "Phone",
      "value": "+1 (412) 589-8948",
      "href": "tel:+14125898948"
    },
    {
      "type": "location",
      "label": "Location",
      "value": "Pittsburgh, US",
      "href": ""
    }
  ],
  "focus_tags": [
    "AI Engineering",
    "Full-stack Development",
    "Backend Systems",
    "Data Systems",
    "Research"
  ],
  "stats": [
    {
      "value": "98%",
      "label": "monitoring with Prometheus + Grafana and ensured CI reliability via pytest with 98% covera"
    },
    {
      "value": "81%",
      "label": "esigned an LLM-as-judge evaluation pipeline that improved retrieval hit-rate by 81%. ● Eng"
    },
    {
      "value": "60%",
      "label": "king on the backend with concurrency control, reducing annotation turnaround by 60%. ● Tra"
    },
    {
      "value": "87.3%",
      "label": "erance uptake via cosine similarity of adjacent-utterance embeddings, achieving 87.3% F1 o"
    }
  ],
  "education": [
    {
      "school": "Carnegie Mellon University",
      "degree": "M.S. in Artificial Intelligence and Innovation",
      "period": "Aug. 2026 - Jul. 2028",
      "details": []
    },
    {
      "school": "University of Edinburgh",
      "degree": "B.E. in Electronics and Computer Science (First Class Honours)",
      "period": "Sep. 2021 - Jul. 2025",
      "details": []
    }
  ],
  "experience": [
    {
      "organization": "GBase General Technology",
      "role": "Software Development Engineer Intern",
      "period": "Feb. 2026 - May 2026",
      "location": "",
      "bullets": [
        "Built 13 RESTful APIs and data pipelines (Python, Django, PostgreSQL) to ingest, store, and manage customer-support queries.",
        "Implemented JWT-based authentication via custom Django middleware handling cross-origin requests and fine-grained permission",
        "evaluation; leveraged Redis and Celery for session caching, token blacklisting, and TTL-based expiration.",
        "Refactored the customer-support service into a layered Controller–Service–Repository architecture with an Adapter pattern, unifying",
        "heterogeneous data sources with inconsistent schemas.",
        "Instrumented health monitoring with Prometheus + Grafana and ensured CI reliability via pytest with 98% coverage on auth, adapters,",
        "LLM services, and API endpoints with mocked external dependencies."
      ]
    },
    {
      "organization": "Sserly Software",
      "role": "Software Development Engineer Intern",
      "period": "Oct. 2025 - Jan. 2026",
      "location": "",
      "bullets": [
        "Core engineer on the TutorMesh web platform (React, TypeScript, Node.js); shipped end-to-end features including tutor search &",
        "filtering, booking/scheduling, messaging, and Stripe-based payments.",
        "Hardened the booking & payment flow against concurrency and failure: idempotency keys on Stripe charges to prevent duplicate",
        "payments, optimistic locking on time-slot reservation to eliminate double-booking, and webhook retry to reconcile payment state.",
        "Implemented a high-concurrency, fault-tolerant ID generator producing monotonically increasing numbers via a segment-based design",
        "that pre-fetches number ranges from MySQL and caches them locally to minimize database round-trips.",
        "Guaranteed atomic segment allocation under concurrent access via Node.js's event-loop model with an async mutex, sustaining",
        "high-throughput ID generation across multiple business units."
      ]
    },
    {
      "organization": "Stanford University — IDEAL Lab",
      "role": "Software Development & Research Assistant",
      "period": "Sep. 2024 - Apr. 2025",
      "location": "",
      "bullets": [
        "Developed a multi-agent Socratic AI tutoring platform with Java and Spring AI, orchestrating a supervisor and 5 specialized sub-agents",
        "in a bounded-loop runtime with WebFlux SSE streaming.",
        "Designed a dual-model scheduling layer with Resilience4j circuit-breaking, routing between a fine-tuned Qwen2.5 via QLoRA and a",
        "commercial API based on task complexity with timeout failover.",
        "Integrated a Chroma vector store for course-material chunking/embedding with per-student memory window recall, and designed an",
        "LLM-as-judge evaluation pipeline that improved retrieval hit-rate by 81%.",
        "Engineered MCP-based tool orchestration (file/email/reporting) with a risk-detection agent pushing instructor alerts via Spring Mail, plus",
        "Spring Security RBAC and Docker Compose deployment."
      ]
    },
    {
      "organization": "Stanford University — EduNLP Lab",
      "role": "Software Development & Research Assistant",
      "period": "Dec. 2024 - Aug. 2025",
      "location": "",
      "bullets": [
        "Built EduCoder, an open-source educational transcript annotation system in Next.js/TypeScript addressing tooling gaps in NLP",
        "annotation workflows; accepted to ACL 2026.",
        "Achieved conflict-free multi-annotator editing and inter-annotator agreement tracking on the backend with concurrency control, reducing",
        "annotation turnaround by 60%.",
        "Trained and productionized a sentence-transformer model as a FastAPI service to predict student utterance uptake via cosine similarity",
        "of adjacent-utterance embeddings, achieving 87.3% F1 on the Dialogue Act dataset."
      ]
    }
  ],
  "projects": [
    {
      "name": "GraphRAG Knowledge Assistant",
      "type": "Project",
      "description": "Neo4j, Graph Construction, Hybrid Retrieval, Entity Linking, Re-ranking, LLM Synthesis",
      "technologies": [
        "Neo4j",
        "Graph Construction",
        "Hybrid Retrieval",
        "Entity Linking",
        "Re-ranking",
        "LLM Synthesis"
      ],
      "link": ""
    },
    {
      "name": "Multi-Agent Code Review Bot",
      "type": "Project",
      "description": "LangGraph, Tool Calling, AST Parsing, Static Analysis, GitHub Webhooks, Structured Output",
      "technologies": [
        "LangGraph",
        "Tool Calling",
        "AST Parsing",
        "Static Analysis",
        "GitHub Webhooks",
        "Structured Output"
      ],
      "link": ""
    },
    {
      "name": "Mini-GPT Pretraining from Scratch",
      "type": "Project",
      "description": "Byte-Pair Encoding, Multi-Head Attention, RoPE, KV-Cache, Mixed-Precision Training",
      "technologies": [
        "Byte-Pair Encoding",
        "Multi-Head Attention",
        "RoPE",
        "KV-Cache",
        "Mixed-Precision Training"
      ],
      "link": ""
    },
    {
      "name": "Distributed KV Storage System",
      "type": "Project",
      "description": "Raft, RocksDB, B-Tree, Hash Engine, Async Apply, ReadIndex, FollowerRead",
      "technologies": [
        "Raft",
        "RocksDB",
        "B-Tree",
        "Hash Engine",
        "Async Apply",
        "ReadIndex",
        "FollowerRead"
      ],
      "link": ""
    },
    {
      "name": "Relational DBMS (Bustub)",
      "type": "Project",
      "description": "Buffer Pool, Extendible Hash, B+Tree, Volcano Execution, Multi-Version Concurrency Control",
      "technologies": [
        "Buffer Pool",
        "Extendible Hash",
        "B+Tree",
        "Volcano Execution",
        "Multi-Version Concurrency Control"
      ],
      "link": ""
    }
  ],
  "publications": [
    "G. Pan, et al. A Cost-Benefit Analysis of On-Premise LLM Deployment: Breaking Even with Commercial LLM Services. IEEE Big Data.",
    "S. Ashraf, J. Malamut, …, G. Pan, et al. EduCoder: An Open-Source Annotation System for Education Transcript Data. ACL 2026.",
    "B. W. Domingue, M. Braginsky, …, G. Pan, et al. An Introduction to the Item Response Warehouse (IRW): A Resource for Enhancing",
    "Data Usage in Psychometrics. Behavior Research Methods, 2025.",
    "Y. Gao, …, G. Pan, et al. Survey of GenAI Intelligence Powered Human-Data Interfaces in Big Data Systems. IEEE Big Data."
  ],
  "awards": [],
  "skills": [
    {
      "group": "Languages",
      "items": [
        "Python",
        "JavaScript/TypeScript",
        "Java",
        "C/C++",
        "SQL",
        "HTML/CSS"
      ]
    },
    {
      "group": "Frameworks & Libraries",
      "items": [
        "Spring Boot",
        "Django",
        "Flask",
        "Express.js",
        "Next.js",
        "React",
        "Angular",
        "PyTorch",
        "TensorFlow"
      ]
    },
    {
      "group": "Databases & Services",
      "items": [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Docker",
        "Kubernetes",
        "Git",
        "AWS"
      ]
    },
    {
      "group": "AI / ML",
      "items": [
        "LangChain",
        "Spring AI",
        "Transformer",
        "BERT",
        "GPT",
        "Gemini",
        "CNN",
        "ViT",
        "RAG",
        "Diffusion"
      ]
    }
  ]
};
