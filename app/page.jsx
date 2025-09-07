import Link from "next/link";
import { Logos } from "@/components/Logos";
import { CheckIcon } from "@/components/icons";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container-max py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="badge mb-4">DocWorx AI Partners</span>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Shape the future of medical billing
              </h1>
              <p className="mt-6 text-ink-500 leading-7">
                Join DocWorx AI as an early innovation partner. Our AI agents automate coding, streamline claim creation and accelerate collections so healthcare teams can focus on care not paperwork.
              </p>
              <div className="mt-8 flex gap-3">
                <Link href="/partners" className="btn btn-primary">Partner with us</Link>
                <Link href="/api" className="btn btn-ghost">Explore APIs</Link>
              </div>

              <ul className="mt-10 space-y-3 text-ink-700">
                {[
                  "Built on FHIR and HL7, ready for modern EHR integration",
                  "Streamlined claim generation with compliance guardrails",
                  "Clearinghouse and payer connectivity in progress with priorities set by partners",
                  "Compliance first: HIPAA ready, SOC2 in progress",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 text-brand-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <div className="rounded-lg bg-surface-100 p-4">
                <pre className="text-sm overflow-x-auto">
{`POST /v1/claims
Authorization: Bearer <token>
Content-Type: application/json

{
  "encounterId": "a1b2-...",
  "diagnoses": [{"code": "I25.10"}],
  "procedures": [{"code": "93458","modifiers":["26"]}],
  "notes": "Stable angina; PCI planned"
}`}
                </pre>
              </div>
              <p className="mt-4 text-sm text-ink-500">Simple secure APIs to generate and track claims in real time.</p>
            </div>
          </div>
          <Logos className="mt-16" />
        </div>
      </section>
    </div>
  );
}
