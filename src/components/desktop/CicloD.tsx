import type { CSSProperties } from "react";
import { ACCENT, CYCLE_D } from "@/lib/data";

const node = (left: string, top: string): CSSProperties => ({
  position: "absolute", left, top, transform: "translate(-50%,-50%)", width: 52, height: 52, borderRadius: "50%",
  background: "#0F090B", border: "1.5px solid #E5566B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#F5F0EB",
});

export default function CicloD() {
  return (
    <section id="ciclo" style={{ background: "#080507", padding: "140px 0", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "center", border: "1px solid rgba(255,255,255,.14)", borderRadius: 24, background: "#0A0507", padding: 56, boxShadow: "0 -1px 0 rgba(229,86,107,.5) inset,0 50px 120px rgba(179,18,42,.2)" }}>
          <div style={{ flex: "1 1 420px", minWidth: 0 }}>
            <div className="eyebrow" style={{ color: ACCENT }}>Ciclo semanal</div>
            <h2 className="h2" style={{ margin: "20px 0 0 0", fontSize: "clamp(30px,3.6vw,52px)", whiteSpace: "nowrap" }}>
              Um ciclo <span style={{ color: "#7C6F72" }}>que nunca para.</span>
            </h2>
            <div style={{ marginTop: 36, borderTop: "1px solid rgba(255,255,255,.08)" }}>
              {CYCLE_D.map((c) => (
                <div key={c.n} style={{ display: "flex", gap: 20, alignItems: "baseline", padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                  <span className="mono" style={{ flex: "none", width: 150, fontSize: 12, letterSpacing: "0.12em", color: ACCENT }}>{c.n}</span>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.03em" }}>{c.t}</div>
                    <div style={{ marginTop: 6, fontSize: 15, lineHeight: 1.6, color: "#9E9093" }}>{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: "1 1 360px", minWidth: 0, display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 440, aspectRatio: "300 / 260" }}>
              <svg viewBox="0 0 300 260" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} aria-hidden="true">
                <circle cx="150" cy="130" r="90" fill="none" stroke="rgba(229,86,107,.4)" strokeWidth="1.5" />
                <circle className="flow" cx="150" cy="130" r="90" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 29" />
                <g fill="#E5566B">
                  <polygon points="-5,-5 5,0 -5,5" transform="translate(214,66) rotate(45)" />
                  <polygon points="-5,-5 5,0 -5,5" transform="translate(214,194) rotate(135)" />
                  <polygon points="-5,-5 5,0 -5,5" transform="translate(86,194) rotate(225)" />
                  <polygon points="-5,-5 5,0 -5,5" transform="translate(86,66) rotate(315)" />
                </g>
              </svg>
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", textAlign: "center" }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E5566B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 11a8.1 8.1 0 0 0-15.5-2m-.5-4v4h4" />
                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                </svg>
                <div style={{ fontSize: 18, fontWeight: 600, marginTop: 6 }}>Toda semana</div>
              </div>
              <span className="mono" style={node("50%", "15.38%")}>01</span>
              <span className="mono" style={node("80%", "50%")}>02</span>
              <span className="mono" style={node("50%", "84.62%")}>03</span>
              <span className="mono" style={node("20%", "50%")}>04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
