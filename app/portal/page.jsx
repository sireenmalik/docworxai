export const metadata = { title: "Partner Portal — DocWorx AI" };

export default function Portal() {
  return (
    <div className="container-max py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Partner Portal</h1>
      <p className="mt-4 text-ink-600 max-w-2xl">
        Request sandbox access. We will email API credentials after a quick verification.
      </p>
      <form className="mt-8 card p-6 space-y-4" method="post" action="https://formspree.io/f/xbldqyrr">
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input name="company" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required/>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Contact name</label>
            <input name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required/>
          </div>
          <div>
            <label className="block text-sm font-medium">Work email</label>
            <input name="email" type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required/>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Primary integration goal</label>
          <select name="goal" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            <option>Create claims</option>
            <option>Status tracking</option>
            <option>Webhooks</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Notes</label>
          <textarea name="notes" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Tell us about your workflow…" />
        </div>
        <button className="btn btn-primary" type="submit">Request access</button>
        <p className="text-xs text-ink-300">Powered by Formspree • replace with your preferred form handler</p>
      </form>
    </div>
  );
}
