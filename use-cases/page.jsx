export const metadata = { title: "Use Cases — DocWorx AI" };

export default function UseCases() {
    const items = [
        { title: "Cardiology practices", body: "Improve cath lab and E/M coding accuracy with STT and real time edits." },
        { title: "Skilled nursing (SNF)", body: "Automate claims from encounter notes and monitor payer responses." },
        { title: "Hospital revenue ops", body: "Queue based worklists and insights reduce DNFB and A/R days." }
    ];
    return (
        <div className="container">
            <h1>Use Cases</h1>
            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                {items.map((i) => (
                    <div key={i.title} className="card">
                        <h3 style={{ fontWeight: 600 }}>{i.title}</h3>
                        <p>{i.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
