import { useState } from "react";
import { ACCENT, FAQ_ITEMS } from "@/lib/data";

export default function FaqD() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ background: "#050304", padding: "140px 0", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div className="wrap">
        <div>
          <div className="eyebrow" style={{ color: ACCENT }}>Perguntas frequentes</div>
          <h2 className="h2" style={{ margin: "20px 0 0 0", fontSize: "clamp(34px,4.4vw,64px)", whiteSpace: "nowrap" }}>
            Tire as suas <span style={{ color: "#7C6F72" }}>dúvidas.</span>
          </h2>
          <p style={{ margin: "10px 0 0 0", fontSize: 19, lineHeight: 1.6, color: "#B9ACAE" }}>O que mais perguntam antes de começar.</p>
        </div>

        <div style={{ marginTop: 72, border: "1px solid rgba(255,255,255,.14)", borderRadius: 24, background: "#0A0507", padding: "0 40px", overflow: "hidden" }}>
          {FAQ_ITEMS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} style={i ? { borderTop: "1px solid rgba(255,255,255,.08)" } : undefined}>
                <button
                  type="button"
                  className="opt"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{ width: "100%", minHeight: 84, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, textAlign: "left", padding: "20px 0", border: 0, background: "transparent", color: "#F5F0EB", fontSize: 21, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.35 }}
                >
                  <span>{q}</span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", transition: "transform .2s", transform: isOpen ? "rotate(180deg)" : "none" }}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && <div className="fi" style={{ padding: "0 0 28px 0", maxWidth: 820, fontSize: 16, lineHeight: 1.7, color: "#B9ACAE" }}>{a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
