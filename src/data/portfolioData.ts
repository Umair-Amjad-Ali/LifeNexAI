import { COLORS } from "@/constants/colors";

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  techStack: string[];
  image: string;
  status: string;
  liveUrl: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  accent: string;

  // Extended details
  longDescription: string;
  clientName: string;
  timeline: string;
  projectRole: string;

  // Problem & Solution
  problemStatement: string;
  solutionStatement: string;

  // Custom Sections
  engineeringHighlights: {
    title: string;
    description: string;
  }[];

  techStackDetails: {
    category: string;
    items: {
      name: string;
      reason: string;
    }[];
  }[];

  businessImpact: string[];
}

export const portfolioDetails: Record<string, ProjectDetail> = {
  fixora: {
    id: "fixora",
    title: "Fixora",
    subtitle: "Home Service Marketplace",
    category: "WEB PLATFORM",
    description:
      "A bilingual Arabic/English home services booking platform with real-time order tracking, provider dashboards, and full RTL support. Built for the Saudi Arabian market with seamless payment integration.",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "i18n",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    status: "LIVE",
    liveUrl: "https://fixora.sa",
    playStoreUrl: "",
    appStoreUrl: "",
    accent: COLORS.primary,

    longDescription:
      "Fixora is a next-generation home services marketplace that bridges the gap between local service providers and homeowners in Saudi Arabia. The platform supports complex operations including real-time service tracking, automated technician bidding, and secure online payments, all while handling localized Arabic RTL typography and cultural design systems flawlessly.",
    clientName: "Fixora KSA",
    timeline: "6 Months (2025)",
    projectRole: "Full-Stack Development & Architecture",

    problemStatement:
      "Developing a high-performance home services marketplace for the GCC region requires handling complex bilingual requirements (English/Arabic RTL). The key challenge was establishing real-time synchronization between service providers and customers under varying network conditions, alongside maintaining a seamless checkout experience with local payment gateways (Mada, Apple Pay).",
    solutionStatement:
      "We engineered a custom locale-routing system in Next.js that dynamically shifts layout direction (LTR to RTL) with zero flash of unstyled content (FOUC). To resolve network latency issues in real-time tracking, we built an event-driven synchronization engine using Socket.io on a Node.js cluster, backed by Redis for pub/sub state caching. Payment integration was implemented via a localized checkout API wrapping hyperpay/Mada protocols.",

    engineeringHighlights: [
      {
        title: "Dynamic RTL Direction Swapping",
        description:
          "Custom Tailwind configuration and Next.js middleware detecting locale headers to render pixel-perfect Arabic RTL layouts, adjusting grid orders, padding directions, and alignment metrics on the fly.",
      },
      {
        title: "Real-Time Dispatch Engine",
        description:
          "A WebSocket-driven state machine managing order lifecycle stages (Requested, Quoted, Scheduled, In-Route, Active, Completed) with automatic push notifications and fallback SMS alerts.",
      },
      {
        title: "Localized Financial Layer",
        description:
          "Integration with local Saudi payment gateways (Mada, STC Pay, Apple Pay) paired with a serverless invoice generation pipeline that produces compliant PDF tax invoices in both English and Arabic.",
      },
    ],

    techStackDetails: [
      {
        category: "Frontend Core",
        items: [
          {
            name: "Next.js & React",
            reason:
              "Leveraged for Server Components (RSC) to minimize initial JS bundle size and boost page load speeds for mobile web customers.",
          },
          {
            name: "Tailwind CSS",
            reason:
              "Provides dynamic LTR/RTL support through native utility prefixes, guaranteeing consistent design tokens.",
          },
        ],
      },
      {
        category: "Backend & Cache",
        items: [
          {
            name: "Node.js & Express",
            reason:
              "Serves as a robust, non-blocking I/O API gateway designed to handle concurrent WebSocket connections.",
          },
          {
            name: "Redis Caching",
            reason:
              "Maintains active provider coordinate states and web session tokens, reducing heavy database query overhead.",
          },
        ],
      },
      {
        category: "Data Layer",
        items: [
          {
            name: "MongoDB",
            reason:
              "Flexible document model allows storing variable service catalog items, customer ratings, and custom quote details without rigid schema migrations.",
          },
        ],
      },
    ],

    businessImpact: [
      {
        text: "35% Increase in booking completion rates due to intuitive localized checkout.",
      },
      {
        text: "< 2.5 Seconds page-load times on standard mobile devices in KSA.",
      },
      {
        text: "10,000+ Active monthly users onboarded within the first 90 days of launch.",
      },
    ].map((b) => b.text),
  },
  "battery-eye": {
    id: "battery-eye",
    title: "Battery Eye",
    subtitle: "Smart Battery Analytics",
    category: "MOBILE APP",
    description:
      "A smart battery monitoring app with advanced analytics, usage predictions, and health diagnostics. Published on the App Store with thousands of active users tracking their device health.",
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "Material Design"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    status: "DEPLOYED",
    liveUrl: "",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.voltmetrics.batteryeye",
    appStoreUrl: "https://apps.apple.com/app/battery-eye",
    accent: COLORS.accentLightBlue,

    longDescription:
      "Battery Eye is a comprehensive hardware analytics application designed for power users and device diagnostics specialists. Operating directly on iOS and Android platforms, the app hooks into low-level battery sensor APIs to read temperature, current, voltage, and charge cycle counts. This raw telemetry is processed locally to predict battery deterioration curves and flag background processes causing abnormal power drainage.",
    clientName: "VoltMetrics Lab",
    timeline: "4 Months (2025)",
    projectRole: "Lead Flutter Mobile Engineer",

    problemStatement:
      "Querying and logging high-frequency physical hardware metrics (like millivolt swings or microampere discharges) on a mobile device can degrade system performance and consume excessive memory. Running continuous regression models to estimate battery health degradation on the device's main thread caused noticeable frame drops and UI sluggishness.",
    solutionStatement:
      "We resolved performance bottlenecks by implementing a multi-threaded Dart Isolate architecture. The UI thread remains completely responsive at 120Hz while a background worker isolate executes numerical interpolation models and processes time-series data. We selected Hive DB as a local storage layer due to its memory-mapped file access, enabling sub-millisecond logging cycles with zero file system lock-outs.",

    engineeringHighlights: [
      {
        title: "Native Sensor Method Channels",
        description:
          "Custom Kotlin and Swift channels linking low-level platform APIs directly to Dart streams, allowing real-time query access to raw battery diagnostic parameters not exposed in basic SDKs.",
      },
      {
        title: "Multi-Isolate Analytics Engine",
        description:
          "Background threads running linear regression and anomaly detection algorithms to calculate the exact remaining cycle life of the device battery without blocking the UI thread.",
      },
      {
        title: "Ultra-Fast Offline Telemetry Cache",
        description:
          "Implemented memory-optimized Hive databases to store up to 30 days of 1-minute interval battery telemetry, enabling rapid, local SVG graph rendering.",
      },
    ],

    techStackDetails: [
      {
        category: "Framework & Architecture",
        items: [
          {
            name: "Flutter & Dart",
            reason:
              "Single codebase compiling to native iOS and Android modules while maintaining high-fidelity custom animations.",
          },
          {
            name: "flutter_bloc",
            reason:
              "Provides strict, unidirectional state management to handle asynchronous stream operations from hardware sensors.",
          },
        ],
      },
      {
        category: "Storage & Backend",
        items: [
          {
            name: "Hive NoSQL",
            reason:
              "No-overhead, pure-Dart local database storing key-value telemetry logs directly in memory-mapped files.",
          },
          {
            name: "Firebase Suite",
            reason:
              "Utilized for remote config updates, anonymous user authentication, and crash reporting metrics.",
          },
        ],
      },
    ],

    businessImpact: [
      {
        text: "Over 50k App Store downloads with a consistent 4.8-star review rating.",
      },
      {
        text: "92% Accuracy in forecasting battery health degradation curves over a 60-day trial.",
      },
      {
        text: "0% Main-thread lockups achieved, even during heavy log analytics cycles.",
      },
    ].map((b) => b.text),
  },
  "dhs-platform": {
    id: "dhs-platform",
    title: "DHS Platform",
    subtitle: "Enterprise Service Management",
    category: "ENTERPRISE",
    description:
      "A comprehensive home services management system with admin panels, technician assignment workflows, service tracking, and automated reporting designed for large-scale operations in Dammam.",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    status: "COMPLETED",
    liveUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    accent: "#10b981",

    longDescription:
      "DHS Platform (Dammam Home Services) is an enterprise resource planning and field service management portal engineered specifically for large-scale service logistics. The platform aggregates service requests, dynamically schedules field crews, optimizes geographic routing routes, and automates work order dispatching. Designed with high reliability in mind, it supports real-time field coordinates tracking and automatic inventory reconciliation.",
    clientName: "Dammam Home Services Co.",
    timeline: "8 Months (2024)",
    projectRole: "Principal Architect & Backend Lead",

    problemStatement:
      "Managing a workforce of over 300 roving technicians with manual dispatching sheets resulted in severe scheduling conflicts, massive travel times between jobs, and inaccurate billing logs. DHS needed an automated dispatch engine capable of routing field crews based on geographic proximity, technician credentials, tool inventory, and job priority.",
    solutionStatement:
      "We built a robust Next.js admin dashboard paired with a custom route-optimization API built on Node.js and PostgreSQL. We implemented a scheduling algorithm utilizing spatial database extensions (PostGIS) to calculate optimal routing clusters. Technicians access a mobile-responsive portal that registers their GPS coordinates, feeding live coordinates into the central dispatcher map.",

    engineeringHighlights: [
      {
        title: "Spatial Route Optimization",
        description:
          "Implemented PostgreSQL PostGIS extensions to perform geospatial queries, reducing average crew transit times by organizing jobs into geographic clusters.",
      },
      {
        title: "Dynamic Dispatch Board",
        description:
          "A drag-and-drop Gantt chart interface designed with React HTML5 Drag and Drop API, updating technician schedules and firing real-time worker alerts via serverless events.",
      },
      {
        title: "Automated Inventory Sync",
        description:
          "Connected the service ticket lifecycle to the spare parts inventory database, instantly reserving necessary parts upon work-order approval to prevent crew delays.",
      },
    ],

    techStackDetails: [
      {
        category: "Administrative Panel",
        items: [
          {
            name: "Next.js & TypeScript",
            reason:
              "Ensured maximum code safety, rapid search indexing for large customer tables, and instant static report builds.",
          },
          {
            name: "Prisma ORM",
            reason:
              "Auto-generated type-safe database clients representing complex join models between Technicians, Jobs, and Inventory.",
          },
        ],
      },
      {
        category: "Storage Layer",
        items: [
          {
            name: "PostgreSQL with PostGIS",
            reason:
              "Standard relational database chosen for acid-compliance, paired with spatial queries to locate nearest technicians.",
          },
        ],
      },
    ],

    businessImpact: [
      {
        text: "42% Reduction in average technician travel times across Eastern Province districts.",
      },
      {
        text: "Zero scheduling conflicts recorded after migrating to the automated dispatch board.",
      },
      {
        text: "30-minute reduction in average invoice processing time via automated PDF exports.",
      },
    ].map((b) => b.text),
  },
  "the-not-you": {
    id: "the-not-you",
    title: "The Not You",
    subtitle: "Emotion Management App",
    category: "MOBILE APP",
    description:
      "An innovative emotion management and addiction breaker app featuring glassmorphic 3D orb animations, wave-based mood tracking, guided meditation sessions, and personal growth analytics.",
    techStack: ["Flutter", "Dart", "Custom Animations", "Firebase", "Hive"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    status: "IN DEVELOPMENT",
    liveUrl: "",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.innerpeace.thenotyou",
    appStoreUrl: "https://apps.apple.com/app/the-not-you",
    accent: "#f59e0b",

    longDescription:
      "The Not You is a deeply personal, high-fidelity mobile application designed to help users identify addictive behaviors, regulate complex emotions, and build healthy habits. Moving away from standard checklist trackers, the app employs organic, soothing layouts and interactive micro-interactions. The core interface features an interactive, abstract floating glassmorphic orb that adapts its color, viscosity, and rotation speed based on the emotional inputs logged by the user.",
    clientName: "InnerPeace Technologies",
    timeline: "Active (Ongoing)",
    projectRole: "UI/UX & Mobile Animation Specialist",

    problemStatement:
      "Traditional mood trackers suffer from quick drop-offs because text inputs feel clinical. The challenge was to create an immersive, visual system representing human mood that is visually captivating, responds instantly to tactile touches, and runs at a consistent 60fps on both budget Android devices and high-end iPhones.",
    solutionStatement:
      "We built a completely custom Flutter canvas engine using the Canvas `CustomPainter` API to draw a physics-based, fluid liquid orb. The orb uses mathematical sine waves and spring-damping physics to morph, stretch, and flow in response to touch gestures. By utilizing hardware-accelerated Skia/Impeller rendering pipelines, we minimized garbage collection triggers and maintained a locked 60/120fps UI render rate.",

    engineeringHighlights: [
      {
        title: "Fluid Physics Canvas Engine",
        description:
          "A custom math engine mapping user touch vectors to wave equations, calculating dynamic deformations of a central SVG path to render fluid, gelatinous behavior.",
      },
      {
        title: "Tactile Glassmorphism Shading",
        description:
          "Crafted layered visual rendering involving blur filters, specular highlighting gradients, and internal shadows to mimic physical glass refractions in real-time.",
      },
      {
        title: "Encrypted Offline-First Journals",
        description:
          "Implemented AES-256 local database encryption using Hive DB to guarantee that sensitive user logs and journal descriptions are completely private to the physical device.",
      },
    ],

    techStackDetails: [
      {
        category: "Mobile Engine",
        items: [
          {
            name: "Flutter SDK",
            reason:
              "Enables direct, low-level canvas painting access via Impeller, ensuring consistent animation layouts across platforms.",
          },
          {
            name: "Riverpod",
            reason:
              "Selected for compile-safe, isolated state tracking, ensuring seamless updates between the meditation player and mood engine.",
          },
        ],
      },
      {
        category: "Security & Storage",
        items: [
          {
            name: "Hive (Encrypted)",
            reason:
              "Stores local diary logs with cryptographic keys stored inside iOS Keychain and Android Keystore.",
          },
        ],
      },
    ],

    businessImpact: [
      {
        text: "94% Beta user satisfaction rating, highlighting the relaxing nature of the interface.",
      },
      {
        text: "Consistent 120fps rendering on ProMotion displays with negligible thermal footprint.",
      },
      {
        text: "Robust user retention rate during alpha trials due to visual progress maps.",
      },
    ].map((b) => b.text),
  },
  "lifenex-ai": {
    id: "lifenex-ai",
    title: "LifeNex AI",
    subtitle: "Corporate AI Platform",
    category: "WEB PLATFORM",
    description:
      "This very website — a premium corporate platform showcasing AI-powered healthcare technology services, featuring live telemetry visualizations, alternating sections, and a full contact pipeline.",
    techStack: [
      "Next.js 16",
      "React 19",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    status: "LIVE",
    liveUrl: "https://lifenexai.com",
    playStoreUrl: "",
    appStoreUrl: "",
    accent: COLORS.primary,

    longDescription:
      "LifeNex AI is our corporate portfolio and client engagement pipeline. As a technology-first healthcare AI consultancy, we needed our platform to reflect the high-caliber engineering we deliver to clients. The site contains telemetry simulation widgets, complex responsive layouts, and interactive typography that dynamically demonstrates our capabilities in building enterprise-grade, clean, modern digital products.",
    clientName: "LifeNex AI (Internal Product)",
    timeline: "2 Months (2026)",
    projectRole: "Lead Product Designer & Frontend Dev",

    problemStatement:
      "Corporate web portals are often static and fail to capture the developer's tech stack capabilities. We wanted to build a portfolio website that visually communicates our technical excellence, maintains a high-end dark aesthetic, compiles to static assets, and loads under one second globally while retaining advanced scroll animations.",
    solutionStatement:
      "We built our website on the bleeding-edge Next.js 16 and React 19 stack. We styled the app using Tailwind CSS 4 to take advantage of its compiled CSS variable theme system and CSS parser performance. To ensure sub-second loads, we modularized interactive widgets as deferred client components, keeping the initial payload lightweight. All layout animations are implemented via Framer Motion with custom cubic-bezier curves.",

    engineeringHighlights: [
      {
        title: "Telemetry Stream Simulation",
        description:
          "Implemented lightweight mock data generator hooks that render active SVG waveforms and metrics at 60fps, showcasing live AI diagnostic feeds in a visual browser dashboard.",
      },
      {
        title: "Bento-Grid Showcase Layout",
        description:
          "Designed a responsive, visual dashboard showcasing services, stack, and case studies, fitting complex typography and badges neatly on all device sizes.",
      },
      {
        title: "Optimized Animation Pipeline",
        description:
          "Utilized Framer Motion's on-scroll features with hardware-accelerated transforms to achieve animations that scale beautifully without triggering DOM reflows.",
      },
    ],

    techStackDetails: [
      {
        category: "Client Architecture",
        items: [
          {
            name: "Next.js 16 (App Router)",
            reason:
              "Provides static site exports, route optimizations, and React 19 server side rendering capabilities.",
          },
          {
            name: "React 19 Core",
            reason:
              "Leverages the latest React compiler features to auto-memoize components and streamline state hooks.",
          },
        ],
      },
      {
        category: "Styling & Animations",
        items: [
          {
            name: "Tailwind CSS 4",
            reason:
              "Provides a powerful theme system, CSS variables, and rapid styling compilation with PostCSS.",
          },
          {
            name: "Framer Motion",
            reason:
              "Handles layout animations, interactive transitions, and scroll-linked telemetry reveals.",
          },
        ],
      },
    ],

    businessImpact: [
      { text: "98% PageSpeed performance score on Google Lighthouse audits." },
      {
        text: "Sub-500ms initial server response times due to optimized static routing.",
      },
      {
        text: "Stunning developer aesthetic that drives premium enterprise inquiry leads.",
      },
    ].map((b) => b.text),
  },
};
