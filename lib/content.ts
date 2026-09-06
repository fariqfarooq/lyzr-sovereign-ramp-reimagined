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
