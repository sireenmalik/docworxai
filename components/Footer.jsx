export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-max py-10 text-sm text-ink-500 flex flex-col sm:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} DocWorx AI. All rights reserved.</p>
        <p className="text-ink-300">HIPAA ready • SOC2 in progress • FHIR R4</p>
      </div>
    </footer>
  );
}
