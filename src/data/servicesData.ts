// data/servicesData.ts

export interface Feature {
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  iconName: "brain" | "globe" | "smartphone" | "cloud" | "heart" | "shield";
  features: Feature[];
  techStack: string[];
  metrics: Metric[];
}

export const servicesList: ServiceData[] = [
  {
    id: "ai-intelligence",
    title: "AI & Machine Learning",
    subtitle: "Clinical Decision Support & Neural Pipelines",
    tagline: "Automating clinical insights with high-performance neural computing.",
    description:
      "We design and train customized machine learning models that integrate directly into EHR, laboratory, and clinical workflows. From computer vision systems diagnosing medical imagery to custom LLMs parsing unstructured physician notes, we build compliant AI.",
    iconName: "brain",
    features: [
      {
        title: "Medical Image Analysis",
        description: "Vision Transformers (ViTs) and CNNs trained for automated segmentation of MRI, CT, and X-ray images.",
      },
      {
        title: "Clinical NLP & LLMs",
        description: "Custom fine-tuned large language models for medical transcription, text summarization, and EHR auto-fill.",
      },
      {
        title: "Predictive Health Analytics",
        description: "Biomedical time-series forecasting models to predict patient deterioration and ICU readmission rates.",
      },
      {
        title: "Vector Embeddings & RAG",
        description: "Secure, local semantic search across millions of medical publications and institutional guidelines.",
      },
    ],
    techStack: ["PyTorch", "Hugging Face", "FastAPI", "PostgreSQL (pgvector)", "Docker", "NVIDIA CUDA"],
    metrics: [
      { value: "99.4%", label: "Segment Accuracy" },
      { value: "RAG-ready", label: "Local Database" },
      { value: "<150ms", label: "Model Inference" },
    ],
  },
  {
    id: "web-development",
    title: "Web Applications",
    subtitle: "Scalable Next.js Ecosystems & Portals",
    tagline: "Engineered for zero-delay patient data delivery and clinical control.",
    description:
      "We build high-performance, real-time web platforms that serve as doctor portals, patient portals, and administrator dashboards. We leverage Next.js, React, and server-side rendering to create snappy interfaces that scale dynamically.",
    iconName: "globe",
    features: [
      {
        title: "Next.js App Router Architecture",
        description: "Server Components and streaming rendering for instantaneous data display and high SEO visibility.",
      },
      {
        title: "Real-Time WebSockets",
        description: "Live dashboard telemetry, streaming patient monitor updates, and instant clinical collaboration spaces.",
      },
      {
        title: "Micro-Frontend Systems",
        description: "Decoupled Webpack Module Federation to allow independent teams to deploy features in parallel.",
      },
      {
        title: "Headless CMS Integration",
        description: "Structured content models that decouple publishing workflows from frontend rendering performance.",
      },
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Socket.io"],
    metrics: [
      { value: "99.99%", label: "Client Uptime" },
      { value: "100/100", label: "Lighthouse Performance" },
      { value: "SEO-First", label: "SSR Optimization" },
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    subtitle: "Cross-Platform Flutter & React Native Suite",
    tagline: "Seamless on-the-go biometric tracking and offline health records.",
    description:
      "Our mobile engineering team delivers smooth, 60fps applications for iOS and Android. We utilize cross-platform codebases to speed up time-to-market while ensuring absolute reliability, offline data sync, and hardware sensor integration.",
    iconName: "smartphone",
    features: [
      {
        title: "Offline-First Sync Engine",
        description: "Bi-directional SQLite-to-Cloud sync that ensures clinical apps remain fully functional without internet.",
      },
      {
        title: "Hardware Telemetry Integrations",
        description: "Deep-level native bridges to access biometric scanners, BLE medical devices, GPS, and camera hardware.",
      },
      {
        title: "Custom Interactive Widgets",
        description: "Tailor-made Flutter canvas rendering for medical charts, anatomical sketches, and visual timelines.",
      },
      {
        title: "Continuous OTA Updates",
        description: "Over-the-air patch delivery via EAS and CodePush for instant critical security fixes and UI updates.",
      },
    ],
    techStack: ["Flutter", "React Native", "Dart", "Swift", "Kotlin", "SQLite", "Bluetooth LE"],
    metrics: [
      { value: "60 FPS", label: "UI Rendering" },
      { value: "Dual App", label: "iOS & Android Support" },
      { value: "Zero-Data", label: "Offline-Capable" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Secure AWS/GCP Infrastructures & CI/CD",
    tagline: "Self-healing infrastructures compliant with global medical data standards.",
    description:
      "We design high-availability, containerized server architectures with automated scaling, active logging, and military-grade security encryption. We build infrastructures in Terraform to ensure your deployments are reproducible.",
    iconName: "cloud",
    features: [
      {
        title: "Infrastructure as Code (IaC)",
        description: "Fully automated cloud provisioning using Terraform, making multi-region replication easy.",
      },
      {
        title: "Kubernetes Orchestration",
        description: "Self-healing, auto-scaling EKS/GKE cluster architectures for microservice decoupling.",
      },
      {
        title: "Zero-Trust Private Networks",
        description: "Strict VPC configurations, secure IAM role scoping, and private DB subnets with zero public exposure.",
      },
      {
        title: "CI/CD Deployment Pipelines",
        description: "Automated testing, linting, security scanning, and Canary deployments using GitHub Actions.",
      },
    ],
    techStack: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus & Grafana"],
    metrics: [
      { value: "99.999%", label: "Service SLA" },
      { value: "Zero-Trust", label: "Cloud Access Model" },
      { value: "Automated", label: "CI/CD Flow" },
    ],
  },
  {
    id: "healthcare-integrations",
    title: "Healthcare Digitalization",
    subtitle: "FHIR, HL7 Protocols & EMR/EHR Sync",
    tagline: "Unified HL7 FHIR pipelines bridging legacy health networks.",
    description:
      "We bridge the gap between modern cloud services and legacy healthcare systems. Our integrations conform to international standards like HL7 and FHIR, allowing medical data to flow securely between providers and applications.",
    iconName: "heart",
    features: [
      {
        title: "FHIR API Architectures",
        description: "Building custom rest APIs conforming to HL7 FHIR (R4) specifications for medical record sharing.",
      },
      {
        title: "Epic & Cerner Integrations",
        description: "Smart on FHIR apps that embed directly within EHR layouts for doctors to access secondary dashboards.",
      },
      {
        title: "Secure FHIR Datastores",
        description: "Database configurations supporting structured patient resources, diagnostic reports, and encounters.",
      },
      {
        title: "Legacy HL7 Parsing Pipelines",
        description: "Serverless data processors that convert incoming HL7 v2 messages into structured JSON records.",
      },
    ],
    techStack: ["HL7 FHIR R4", "SMART on FHIR", "Hapi FHIR", "Node.js", "Python", "AWS HealthLake"],
    metrics: [
      { value: "FHIR-R4", label: "Compliance Standard" },
      { value: "Epic/Cerner", label: "Integration Ready" },
      { value: "128-bit", label: "Data De-identification" },
    ],
  },
  {
    id: "compliance-security",
    title: "Compliance & Security",
    subtitle: "HIPAA, GDPR Compliance & Penetration Auditing",
    tagline: "Military-grade data protection audits and automated vulnerability protection.",
    description:
      "Security is not a checkbox; it is the core foundation of our engineering workflow. We construct audit logs, end-to-end database encryption keys, and role-based access architectures to ensure compliance with HIPAA, GDPR, and SOC2.",
    iconName: "shield",
    features: [
      {
        title: "HIPAA & GDPR Compliance",
        description: "Data handling frameworks incorporating patient consent controls, data minimization, and audit logging.",
      },
      {
        title: "End-to-End Encryption",
        description: "AES-256 bit database encryption at rest, TLS 1.3 encryption in transit, and client-side key storage.",
      },
      {
        title: "Active Security Auditing",
        description: "Continuous vulnerability scanning, automated penetration testing, and centralized syslog telemetry.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description: "Fine-grained permission structures allowing doctors, nurses, and admins to access only permitted records.",
      },
    ],
    techStack: ["OAuth2 / OIDC", "Auth0 / Keycloak", "AWS KMS", "Wazuh SIEM", "OWASP ZAP", "HashiCorp Vault"],
    metrics: [
      { value: "SOC2/HIPAA", label: "Audit-Ready" },
      { value: "AES-256", label: "Encryption Core" },
      { value: "24/7/365", label: "SIEM Monitoring" },
    ],
  },
];

// Backward compatibility bindings
export const webData = {
  title: servicesList[1].title,
  subtitle: servicesList[1].subtitle,
  description: servicesList[1].description,
  features: servicesList[1].features,
};

export const mobileData = {
  title: servicesList[2].title,
  subtitle: servicesList[2].subtitle,
  description: servicesList[2].description,
  features: servicesList[2].features,
};

export const aiData = {
  title: servicesList[0].title,
  subtitle: servicesList[0].subtitle,
  description: servicesList[0].description,
  features: servicesList[0].features,
};
