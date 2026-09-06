export const metrics = [
  { value: "1,000+", label: "Agents live in production" },
  { value: "95%", label: "Savings vs frontier LLM API costs" },
  { value: "85%", label: "Projects reaching production" },
  { value: "0%", label: "Data leaving your environment" },
  { value: "500+", label: "Enterprise customers" },
] as const;

export const reasons = [
  {
    index: "01",
    title: "Your AI spend has no ceiling, and no return",
    body:
      "At enterprise volume, recurring inference costs become infrastructure economics. Owning more of the runtime changes the curve.",
    metric: "95%",
    metricLabel: "Cost reduction vs frontier API costs at enterprise volume",
  },
  {
    index: "02",
    title: "Your competitive advantage leaves your walls every day",
    body:
      "Prompts contain pricing logic, methodologies and operating knowledge. Sovereignty gives that intelligence a clear perimeter.",
    metric: "0%",
    metricLabel: "Data that should ever leave your environment",
  },
  {
    index: "03",
    title: "Your board is asking who is accountable for AI decisions",
    body:
      "Identity, policy, evaluation and audit need to exist inside the architecture so consequential actions can be reconstructed.",
    metric: "100%",
    metricLabel: "Audit trail on every agent decision, no exceptions",
  },
] as const;

export const ownershipSteps = [
  {
    index: "01",
    title: "Govern what you have",
    description: "Connect existing agents. Control them from one plane.",
    label: "Control Plane",
  },
  {
    index: "02",
    title: "Ship reliably",
    description: "Nitro production modules close the gap to production.",
    label: "Nitro",
  },
  {
    index: "03",
    title: "Own your models",
    description: "Fine-tune open source LLMs on your own data.",
    label: "Lyzr LLMs",
  },
  {
    index: "04",
    title: "Own the hardware",
    description: "Optimus on-prem. Zero external calls. Full sovereignty.",
    label: "Optimus",
  },
] as const;

export const stackCards = [
  {
    name: "Lyzr Agent Platform",
    kicker: "Agentic OS + Control Plane",
    status: "Live now",
    stat: "1,000+",
    statLabel: "Agents live in production",
    kind: "platform" as const,
  },
  {
    name: "Lyzr Nitro",
    kicker: "Production modules for hyperscaler platforms",
    status: "Live now",
    stat: "50k",
    statLabel: "Simulations before production",
    kind: "nitro" as const,
  },
  {
    name: "Lyzr LLMs",
    kicker: "Open source models built for responsible AI",
    status: "Coming",
    stat: "Own",
    statLabel: "Models fine-tuned on your data",
    kind: "models" as const,
  },
  {
    name: "Lyzr Optimus",
    kicker: "The on-prem agent factory",
    status: "Shipping Q4",
    stat: "10k",
    statLabel: "Concurrent users at Max scale",
    kind: "optimus" as const,
  },
  {
    name: "Governance",
    kicker: "Accountability at runtime",
    status: "Always on",
    stat: "100%",
    statLabel: "Decision trace coverage",
    kind: "governance" as const,
  },
] as const;

export const governanceChecks = [
  "Every agent registered, identity-mapped, and fully auditable from day one",
  "Evaluation gate before production, nothing ships unevaluated",
  "Step-level traces on every run, every decision reconstructable",
  "Entitlement policy enforced at runtime, per-agent, per-context",
  "Your data, your infrastructure, your audit, zero external dependency",
] as const;

export const customerStories = [
  {
    company: "Accenture",
    title: "Reimagining corporate venture capital",
    body:
      "A production Agentic OS spanning sourcing, evaluation, diligence and investment memo workflows.",
    metrics: [["200+", "Agents in Production"], ["15+", "VC Functions Automated"]],
  },
  {
    company: "WTW",
    title: "Reimagining retirement advisory",
    body:
      "A governed retirement advisor designed for enterprise compliance, traceability and long-running production use.",
    metrics: [["1 Yr+", "In Production"], ["100%", "Compliant"]],
  },
  {
    company: "Hitachi",
    title: "Marketing content at enterprise scale",
    body:
      "An AgentHub that turns knowledge-base inputs into multi-format content without the manual handoffs.",
    metrics: [["4×", "Content Output"], ["Live", "In Production"]],
  },
] as const;
export const optimusTiers = [
  {
    id: "personal",
    name: "Optimus Personal",
    audience: "For CXOs",
    scale: "Personal",
    description: "Personal intelligence workstation. Desk-ready. Fully offline.",
  },
  {
    id: "micro",
    name: "Optimus Micro",
    audience: "500 concurrent users",
    scale: "500",
    description: "Focused teams. Room-ready.",
  },
  {
    id: "mini",
    name: "Optimus Mini",
    audience: "2,000 concurrent users",
    scale: "2,000",
    description: "Mid-market. 4U, liquid-cooled.",
  },
  {
    id: "max",
    name: "Optimus Max",
    audience: "10,000 concurrent users",
    scale: "10,000",
    description: "Full enterprise sovereignty at scale.",
  },
] as const;

export const optimusMaxSpecs = [
  ["Concurrent users", "10,000"],
  ["Form factor", "Enterprise rack"],
  ["Agents", "1M+"],
  ["Models", "Full fleet · LLMs, voice, multimodal"],
  ["External API calls", "Zero"],
] as const;

export const governanceCapabilities = [
  {
    title: "Hallucination Guard",
    body: "Every output checked before it reaches a user. Active detection and blocking on every call.",
  },
  {
    title: "PII Detection",
    body: "Sensitive data masked before it moves between systems. Architecture, not policy.",
  },
  {
    title: "Bias Evaluation",
    body: "Models evaluated against your domain and use case, not generic benchmarks.",
  },
  {
    title: "Immutable Audit Trail",
    body: "Every decision logged, timestamped, and reconstructable. Automatically.",
  },
  {
    title: "Entitlement Policy",
    body: "Fine-grained runtime access control, what every agent can read, write, and trigger.",
  },
  {
    title: "Simulation Gate",
    body: "50,000 scenarios before production. No agent ships unevaluated.",
  },
] as const;

export const leaderQuotes = [
  {
    quote:
      "We refuse to share our underwriting handbook with any shared infrastructure. Lyzr gave us the first credible answer, not a policy promise, an architectural one.",
    role: "Chief Information Officer",
    company: "Global Insurance Enterprise",
  },
  {
    quote:
      "Every quarter we watched our AI spend escalate with no ceiling. Owning our inference hardware was the only way to break that curve. Optimus is that answer.",
    role: "Chief Financial Officer",
    company: "Enterprise Financial Services",
  },
  {
    quote:
      "The conversation shifted from how do we use AI to how do we own the AI that runs our business. Lyzr is the only platform where that is actually possible end to end.",
    role: "Chief Digital Officer",
    company: "Global Technology Enterprise",
  },
] as const;

export const complianceBadges = [
  "GDPR Compliant",
  "SOC 2 Type II",
  "ISO 27001 Certified",
  "HIPAA Compliant",
  "CCPA",
] as const;

export const resources = [
  {
    type: "Playbook",
    title: "How to Build Your Agentic AI Roadmap in 2026",
    description: "Agentic AI Roadmap 2026",
    href: "https://www.lyzr.ai/playbook/agentic-ai-roadmap/",
    asset: "/visuals/roadmap.webp",
  },
  {
    type: "Template",
    title: "101 Enterprise AI Use Cases You Can Deploy Today",
    description:
      "Inside: 100+ production-ready AI agent use cases across Marketing, Sales, HR, Banking, Insurance.",
    href: "https://www.lyzr.ai/template/101-ai-use-cases/",
    asset: "/visuals/usecases.webp",
  },
  {
    type: "Playbook",
    title: "How to take agents to production",
    description: "A practical guide to turn AI prototypes into reliable, production-ready agents",
    href: "https://www.lyzr.ai/playbook/how-to-take-agents-to-production/",
    asset: "/visuals/production.webp",
  },
] as const;

export const footerGroups = [
  {
    title: "Company",
    links: [
      ["About Us", "https://www.lyzr.ai/about-us/"],
      ["Wall of Love", "https://www.lyzr.ai/wall-of-love/"],
      ["Pricing", "https://www.lyzr.ai/pricing/"],
      ["News", "https://www.lyzr.ai/resources/newsroom/"],
      ["Careers", "https://careers.lyzr.ai/"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Banking", "https://www.lyzr.ai/banking-ai-agent-amadeo/"],
      ["Insurance", "https://www.lyzr.ai/insurance-ai-agent-benjie/"],
      ["Sales", "https://www.lyzr.ai/sales-agents/"],
      ["Marketing", "https://www.lyzr.ai/marketing-agents/"],
      ["HR", "https://www.lyzr.ai/hr-agents/"],
    ],
  },
  {
    title: "Platform",
    links: [
      ["Agent Studio", "https://studio.lyzr.ai/"],
      ["Responsible AI", "https://www.lyzr.ai/responsible-ai/"],
      ["Enterprise", "https://www.lyzr.ai/enterprise/"],
      ["AWS partnership", "https://www.lyzr.ai/partnership/aws/"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "https://www.lyzr.ai/blog/"],
      ["Webinars", "https://www.lyzr.ai/webinars/"],
      ["Courses", "https://university.lyzr.ai/"],
      ["Research", "https://www.lyzr.ai/research/"],
      ["Analyst Recognition", "https://www.lyzr.ai/lyzr-analyst-recognition/"],
    ],
  },
] as const;
