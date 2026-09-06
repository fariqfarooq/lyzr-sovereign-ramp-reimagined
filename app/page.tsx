import { EnterpriseProof } from "@/components/sections/enterprise-proof";
import { FeatureDuo } from "@/components/sections/feature-duo";
import { FinalCta } from "@/components/sections/final-cta";
import { Governance } from "@/components/sections/governance";
import { Hero } from "@/components/sections/hero";
import { OwnershipPath } from "@/components/sections/ownership-path";
import { PlatformGrid } from "@/components/sections/platform-grid";
import { ProofStrip } from "@/components/sections/proof-strip";
import { Reasons } from "@/components/sections/reasons";
import { StackOverview } from "@/components/sections/stack-overview";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { GovernanceProductDemo } from "@/components/sections/governance-product-demo";

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
<GovernanceProductDemo />
        <PlatformGrid />
        <Governance />
        <EnterpriseProof />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
