import Link from "next/link";

export const metadata = { title: "Partner with DocWorx AI" };

export default function Partners() {
  return (
    <div className="container-max py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Why partner early with DocWorx AI</h1>
      <p className="mt-4 max-w-2xl text-ink-600">
        We are onboarding EHRs clearinghouses billing services and device makers that want to move fast. Early partners do not just integrate with our APIs they shape them. Your workflows and feedback will guide our launch roadmap.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {[
          { title: "EHRs and EMRs", body: "Embed real time coding and claim creation with FHIR subscriptions and REST hooks." },
          { title: "Clearinghouses and Payers", body: "Prioritize your connectivity with our early integration pipeline." },
          { title: "Billing Companies", body: "Pilot automation tools to increase clean claim rates and reduce time to payment." },
          { title: "Device and AI Vendors", body: "Convert structured data into compliant claims and billable events." },
        ].map((c) => (
          <div key={c.title} className="card p-6">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="mt-2 text-ink-600">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 card p-6">
        <h2 className="text-xl font-semibold">Integration options</h2>
        <ul className="mt-3 list-disc pl-5 text-ink-700 space-y-1">
          <li>FHIR R4 (Claim Encounter Coverage ExplanationOfBenefit)</li>
          <li>REST webhooks for events: <code>encounter.created</code> <code>claim.submitted</code> <code>payment.posted</code></li>
          <li>Batch SFTP for large file drops</li>
          <li>OAuth2.1 client credentials for server to server trust</li>
        </ul>
        <div className="mt-6 flex gap-3">
          <Link href="/api" className="btn btn-primary">View API Docs</Link>
          <Link href="/portal" className="btn btn-ghost">Request Sandbox</Link>
        </div>
      </div>
    </div>
  );
}
