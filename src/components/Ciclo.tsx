import type { CSSProperties } from "react";
import { ACCENT, CYCLE } from "@/lib/data";

const node = (left: string, top: string): CSSProperties => ({
  position: "absolute",
  left,
  top,
  transform: "translate(-50%,-50%)",
  width: 44,
  height: 44,
  borderRadius: "50%",
  background: "#0F090B",
  border: "1.5px solid #E5566B",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 13,
  color: "#F5F0EB",
});

export default function Ciclo() {
  return (
    <section id="ciclo" style={{ background: "#080507", padding: "72px 20px", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ marginTop: 0, border: "1px solid rgba(255,255,255,.14)", borderRadius: 22, background: "#0A0507", padding: "26px 18px 12px 18px", boxShadow: "0 -1px 0 rgba(229,86,107,.5) inset,0 40px 90px rgba(179,18,42,.2)" }}>
        <div className="eyebrow" style={{ color: ACCENT }}>Ciclo semanal</div>
        <h3 className="h2" style={{ margin: "10px 0 0 0", fontSize: 22, whiteSpace: "nowrap" }}>
          Um ciclo <span style={{ color: "#7C6F72" }}>que nunca para.</span>
        </h3>
        <div style={{ position: "relative", width: "100%", maxWidth: 300, aspectRatio: "300 / 260", margin: "12px auto 0 auto" }}>
          <svg viewBox="0 0 300 260" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} aria-hidden="true">
            <circle cx="150" cy="130" r="90" fill="none" stroke="rgba(229,86,107,.4)" strokeWidth="1.5" />
            <circle className="mflow" cx="150" cy="130" r="90" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 29" />
            <g fill="#E5566B">
              <polygon points="-5,-5 5,0 -5,5" transform="translate(214,66) rotate(45)" />
              <polygon points="-5,-5 5,0 -5,5" transform="translate(214,194) rotate(135)" />
              <polygon points="-5,-5 5,0 -5,5" transform="translate(86,194) rotate(225)" />
              <polygon points="-5,-5 5,0 -5,5" transform="translate(86,66) rotate(315)" />
            </g>
          </svg>
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", textAlign: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E5566B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 11a8.1 8.1 0 0 0-15.5-2m-.5-4v4h4" />
              <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
            </svg>
            <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>Toda semana</div>
          </div>
          <span className="mono" style={node("50%", "15.38%")}>01</span>
          <span className="mono" style={node("80%", "50%")}>02</span>
          <span className="mono" style={node("50%", "84.62%")}>03</span>
          <span className="mono" style={node("20%", "50%")}>04</span>
        </div>
        <div style={{ marginTop: 10, borderTop: "1px solid rgba(255,255,255,.08)" }}>
          {CYCLE.map((t, i) => (
            <div key={t} style={{ display: "flex", gap: 14, alignItems: "baseline", padding: "14px 0", ...(i < CYCLE.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,.07)" } : {}) }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: ACCENT }}>{`0${i + 1}`}</span>
              <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.02em" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
