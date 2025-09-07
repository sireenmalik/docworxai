import Link from "next/link";

export const metadata = { title: "API Docs — DocWorx AI" };

export default function APIDocs() {
  return (
    <div className="container-max py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">API Documentation</h1>
      <p className="mt-4 text-ink-600 max-w-2xl">
        REST endpoints to create claims track status and receive webhooks.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="font-semibold">Quickstart</h2>
          <ol className="list-decimal pl-5 mt-2 text-ink-700 space-y-1">
            <li>Request a sandbox key in the <Link className="text-brand-700 underline" href="/portal">Partner Portal</Link>.</li>
            <li>Send your first claim to <code>POST /v1/claims</code>.</li>
            <li>Subscribe to the webhook events you need.</li>
          </ol>
          <div className="mt-4 rounded-lg bg-surface-100 p-4 overflow-x-auto">
            <pre className="text-sm">
{`curl -X POST https://api.docworx.ai/v1/claims \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d @claim.json`}
            </pre>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="font-semibold">OpenAPI</h2>
          <p className="mt-2 text-ink-600">Import this spec into Postman or Swagger UI.</p>
          <Link href="/openapi.yaml" className="btn btn-primary mt-4 w-fit">Download openapi.yaml</Link>
        </div>
      </div>
    </div>
  );
}
