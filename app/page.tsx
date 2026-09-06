import { EnterpriseProof } from "@/components/sections/enterprise-proof";
import { FeatureDuo } from "@/components/sections/feature-duo";
import { FinalCta } from "@/components/sections/final-cta";
import { FounderStatement } from "@/components/sections/founder-statement";
import { Governance } from "@/components/sections/governance";
import { GovernanceCapabilities } from "@/components/sections/governance-capabilities";
import { Hero } from "@/components/sections/hero";
import { LeaderVoices } from "@/components/sections/leader-voices";
import { OptimusScale } from "@/components/sections/optimus-scale";
import { OwnershipPath } from "@/components/sections/ownership-path";
import { PlatformGrid } from "@/components/sections/platform-grid";
import { ProofStrip } from "@/components/sections/proof-strip";
import { Reasons } from "@/components/sections/reasons";
import { Resources } from "@/components/sections/resources";
import { StackOverview } from "@/components/sections/stack-overview";
import { TrustCompliance } from "@/components/sections/trust-compliance";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProofStrip />
        <StackOverview />
        <Reasons />
        <OwnershipPath />
        <FeatureDuo />
        <PlatformGrid />
        <OptimusScale />
        <Governance />
        <GovernanceCapabilities />
        <EnterpriseProof />
        <LeaderVoices />
        <TrustCompliance />
        <Resources />
        <FounderStatement />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
