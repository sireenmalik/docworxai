export function Logos({ className = "" }) {
  const logos = ["epic","cerner","allscripts","pcc","cognito","aws"];
  return (
    <div className={className}>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center opacity-60">
        {logos.map((name) => (
          <div key={name} className="h-8 bg-surface-200 rounded" title={name} />
        ))}
      </div>
    </div>
  );
}
