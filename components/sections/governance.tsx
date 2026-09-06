import { Check, Fingerprint, ScanSearch, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { governanceChecks } from "@/lib/content";

export function Governance() {
  return (
    <section id="governance" className="section-space scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="Governance"
          title="Governance in your hands. Accountability in every decision"
          body="Runtime controls matter because the audit trail has to survive the moment an agent makes a consequential decision."
        />

        <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-[18px] border border-[var(--border-medium)] bg-parch p-4 sm:p-6">
              <div className="rounded-[14px] border border-[var(--border-medium)] bg-white p-4 shadow-[0_18px_48px_rgba(42,31,26,.07)] sm:p-5">
                <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-4">
                  <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-[9px] bg-cream text-primary"><ScanSearch className="h-4 w-4" strokeWidth={1.6} /></span><div><p className="text-[13px] font-medium">Agent run · RUN-84021</p><p className="mt-0.5 text-[10px] text-[var(--fg-38)]">Runtime evaluation</p></div></div>
                  <span className="rounded-full bg-cream px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-primary">evaluating</span>
                </div>

                <div className="mt-3 grid gap-2">
                  {governanceChecks.map((check, index) => (
                    <div key={check} className="group relative overflow-hidden rounded-[10px] border border-[var(--border-soft)] bg-white px-4 py-3.5">
                      <div className="status-scan absolute inset-x-0 bottom-0 h-[2px] bg-primary" style={{ animationDelay: `${index * 0.55}s` }} />
                      <div className="relative flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-[7px] bg-parch text-primary">{index === 0 ? <Fingerprint className="h-3.5 w-3.5" /> : <ShieldCheck className="h-3.5 w-3.5" />}</span>
                          <p className="max-w-[52ch] text-[11px] leading-5 text-[var(--fg-72)]">{check}</p>
                        </div>
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cream text-primary"><Check className="h-3 w-3" /></span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between rounded-[10px] bg-primary-deep px-4 py-3.5 text-white">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/55">Status</span>
                  <span className="text-[12px] font-medium">Production approved</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.07}>
            <div className="flex h-full min-h-[430px] flex-col lg:min-h-[520px] justify-between rounded-[18px] border border-[var(--border-medium)] bg-primary-deep p-6 text-white sm:p-7">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">Infrastructure-level control</p>
                <h3 className="mt-8 max-w-[12ch] text-[clamp(2.2rem,3.8vw,3.7rem)] font-normal leading-[0.99] tracking-[-0.05em]">Not a policy document. An architectural fact.</h3>
                <p className="mt-5 max-w-md text-[14px] leading-6 text-white/62">Identity, evaluation, entitlements and traces run with the agent instead of living in a separate governance checklist.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-white/12 pt-6">
                <div><p className="text-3xl font-medium tracking-[-0.045em]">50k</p><p className="mt-1 text-[10px] leading-4 text-white/50">simulations before production</p></div>
                <div><p className="text-3xl font-medium tracking-[-0.045em]">100%</p><p className="mt-1 text-[10px] leading-4 text-white/50">decision trace coverage</p></div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
