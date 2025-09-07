export const metadata = { title: "Use Cases — DocWorx AI" };

export default function UseCases() {
    const items = [
        { title: "Cardiology practices", body: "Improve cath lab and E/M coding accuracy with STT and real time edits." },
        { title: "Skilled nursing (SNF)", body: "Automate claims from encounter notes and monitor payer responses." },
        { title: "Hospital revenue ops", body: "Queue based worklists and insights reduce DNFB and A/R days." }
    ];
    return (
        <div className="container-max py-16">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Use Cases</h1>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((i) => (
                    <div key={i.title} className="card p-6">
                        <h3 className="font-semibold">{i.title}</h3>
                        <p className="mt-2 text-neutral-700">{i.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
