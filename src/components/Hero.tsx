import { useState } from "react";
import cherry from "@/assets/cherry-casa.png";
import { ACCENT, BLIP_POS, PINGS, roleLabel, type Persona } from "@/lib/data";
import BlurName from "./BlurName";

const MASK = "radial-gradient(ellipse 70% 70% at 50% 50%,#000 56%,transparent 100%)";

export default function Hero({ persona }: { persona: Persona }) {
  const [menu, setMenu] = useState(false);
  const pings = PINGS[persona];
  const pingStyles = [
    { justifyContent: "flex-end", top: 605, animationDelay: "-2s" },
    { justifyContent: "center", top: 727, animationDelay: "-4s" },
  ] as const;

  return (
    <section id="topo" style={{ position: "relative", background: "#050304", overflow: "hidden", height: 879 }}>
      <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: 619, width: 1100, height: 1100, marginLeft: -550, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(229,86,107,.4)", background: "radial-gradient(circle at 50% 50%,rgba(179,18,42,0) 55%,rgba(179,18,42,.22) 100%)" }} />
        <div style={{ position: "absolute", inset: "7%", borderRadius: "50%", border: "1px solid rgba(255,255,255,.1)" }} />
        <div style={{ position: "absolute", inset: "14%", borderRadius: "50%", border: "1px solid rgba(255,255,255,.08)" }} />
        <div style={{ position: "absolute", inset: "21%", borderRadius: "50%", border: "1px solid rgba(255,255,255,.06)" }} />
        <div className="sweep" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "conic-gradient(from 0deg at 50% 50%,rgba(229,86,107,0) 0deg,rgba(229,86,107,0) 280deg,rgba(229,86,107,.3) 357deg,rgba(255,200,205,.55) 360deg)" }} />
        {BLIP_POS.map((p, i) => (
          <span key={i} className="blip" style={{ left: `${p[0]}%`, top: `${p[1]}%`, transform: "translate(-50%,-50%)", animationDelay: `-${i * 0.7}s` }} />
        ))}
      </div>

      <div className="fl" aria-hidden="true" style={{ position: "absolute", left: "50%", top: -130, width: 700, marginLeft: -350, pointerEvents: "none" }}>
        <img src={cherry} alt="" style={{ width: "100%", display: "block", WebkitMaskImage: MASK, maskImage: MASK }} />
      </div>

      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 330, height: 250, pointerEvents: "none", background: "linear-gradient(rgba(5,3,4,0),rgba(5,3,4,.9) 30%,#050304 70%)" }} />

      <div style={{ position: "relative", padding: "0 20px" }}>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "20px 0" }}>
          <a href="#topo" style={{ display: "flex", alignItems: "center", gap: 12 }} aria-label="Cherry Publicidade">
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 23, letterSpacing: "-0.04em" }}>Cherry</span>
              <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 7, letterSpacing: "0.42em", marginTop: 4, opacity: 0.8 }}>PUBLICIDADE</span>
            </span>
          </a>
          <button
            type="button"
            onClick={() => setMenu((m) => !m)}
            aria-label="Abrir menu"
            aria-expanded={menu}
            style={{ width: 46, height: 46, borderRadius: "50%", border: 0, background: "rgba(255,255,255,.08)", color: "#F5F0EB", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </header>

        {menu && (
          <nav style={{ position: "absolute", left: 20, right: 20, top: 76, zIndex: 5, background: "rgba(14,8,10,.97)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 18, padding: 8, boxShadow: "0 30px 80px rgba(0,0,0,.7)" }}>
            <a href="#rota" onClick={() => setMenu(false)} style={{ display: "flex", alignItems: "center", minHeight: 52, padding: "0 16px", fontSize: 16, fontWeight: 600 }}>A rota</a>
            <a href="#painel" onClick={() => setMenu(false)} style={{ display: "flex", alignItems: "center", minHeight: 52, padding: "0 16px", fontSize: 16, fontWeight: 600, borderTop: "1px solid rgba(255,255,255,.08)" }}>Painel semanal</a>
            <a href="#caminho" onClick={() => setMenu(false)} style={{ display: "flex", alignItems: "center", minHeight: 52, padding: "0 16px", fontSize: 16, fontWeight: 600, borderTop: "1px solid rgba(255,255,255,.08)" }}>Monte seu caminho</a>
          </nav>
        )}

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: 4 }}>
          <div aria-hidden="true" style={{ height: 247 }} />

          <h1 className="h1" style={{ margin: 0, position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em", color: "#CFC4C4", lineHeight: 1.35 }}>Gerando clientes qualificados para</span>
            <span style={{ display: "block", fontSize: 44, lineHeight: 1.12, marginTop: 4, width: "100%", color: ACCENT }}>
              anfitriões e<br />prestadores.
            </span>
          </h1>
          <p style={{ margin: "14px 0 0 0", maxWidth: 310, fontSize: 14, lineHeight: 1.5, color: "#9E9093" }}>
            Mídia paga para quem vive de Airbnb, com métricas reais e acompanhamento semanal.
          </p>
          <a
            className="btn-p btn-fx"
            href="#caminho"
            style={{ marginTop: 26, background: "#B3122A", color: "#fff", fontWeight: 600, fontSize: 15, lineHeight: 1, textAlign: "center", borderRadius: 999, height: 42, minHeight: 42, padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: "0 8px 22px rgba(179,18,42,.4)" }}
          >
            Montar o meu caminho
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      {pings.map((lead, i) => (
        <div key={i} className="fl" style={{ position: "absolute", left: 0, right: 0, padding: "0 20px", display: "flex", justifyContent: pingStyles[i].justifyContent, top: pingStyles[i].top, animationDelay: pingStyles[i].animationDelay }}>
          <div style={{ width: "fit-content", maxWidth: "100%", background: "rgba(14,8,10,.92)", border: "1px solid rgba(255,255,255,.16)", borderRadius: 16, padding: "12px 16px 12px 14px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 24px 60px rgba(0,0,0,.6)" }}>
            <span style={{ flex: "none", width: 36, height: 36, borderRadius: "50%", background: "#B3122A", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.8A8 8 0 1 1 21 12z" />
              </svg>
            </span>
            <div style={{ minWidth: 0 }}>
              <div className="mono" style={{ fontSize: 9, color: ACCENT, letterSpacing: "0.1em" }}>NOVO LEAD · QUALIFICADO</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 3, whiteSpace: "nowrap" }}>
                <span>{roleLabel(persona, lead.f)}</span>
                <BlurName first={lead.first} last={lead.last} />
              </div>
              <div style={{ fontSize: 11, color: "#9E9093", marginTop: 2 }}>{lead.what}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: ACCENT, marginTop: 4 }}>Iniciar Imediatamente</div>
            </div>
          </div>
        </div>
      ))}
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 70, background: "linear-gradient(rgba(5,3,4,0),#050304)" }} />
    </section>
  );
}
