export const metadata = { title: "Use Cases — DocWorx AI" };

export default function UseCases() {
    const items = [
        {
            title: "Cardiology practices",
            body: "Improve cath lab and E/M coding accuracy with STT and real time edits."
        },
        {
            title: "Skilled nursing (SNF)",
            body: "Automate claims from encounter notes and monitor payer responses."
        },
        {
            title: "Hospital revenue ops",
            body: "Queue based worklists and insights reduce DNFB and A/R days."
        }
    ];

    return (
        <div className="container-max py-16">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Use Cases</h1>
            <p className="mt-4 text-ink-600 max-w-2xl">
                Discover how DocWorx AI transforms healthcare operations across different specialties and settings.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {items.map((item) => (
                    <div key={item.title} className="card p-6">
                        <h2 className="font-semibold">{item.title}</h2>
                        <p className="mt-2 text-ink-600">{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}