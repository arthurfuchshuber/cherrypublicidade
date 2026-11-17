import cherry from "@/assets/cherry-casa.png";
import symbol from "@/assets/simbolo.png";
import { ACCENT, BLIP_POS_D, PINGS_D, roleLabel } from "@/lib/data";
import BlurName from "../BlurName";

const MASK = "radial-gradient(ellipse 70% 70% at 50% 50%,#000 56%,transparent 100%)";
const PING_POS = [
  { left: "4%", top: 840, delay: "0s" },
  { right: "4%", top: 870, delay: "-2s" },
  { left: "15%", top: 950, delay: "-4s" },
  { right: "15%", top: 980, delay: "-1s" },
] as const;
const DUST = [
  ["33%", 150, "0s"], ["38%", 330, "-1s"], ["44%", 70, "-2s"], ["57%", 110, "-3s"],
  ["62%", 300, "-1.5s"], ["67%", 190, "-2.5s"], ["41%", 430, "-3.5s"], ["60%", 450, "-0.5s"],
] as const;
const NAV = [
  ["#diferencial", "Nosso diferencial"],
  ["#painel", "Painel semanal"],
  ["#rota", "A rota"],
  ["#caminho", "Monte seu caminho"],
] as const;

export default function HeroD() {
  return (
    <section id="topo" style={{ position: "relative", background: "#050304", overflow: "hidden", height: 1160 }}>
      <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: 850, width: 1700, height: 1700, marginLeft: -850, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(229,86,107,.35)", background: "radial-gradient(circle at 50% 50%,rgba(179,18,42,0) 58%,rgba(179,18,42,.2) 100%)" }} />
        <div style={{ position: "absolute", inset: "6%", borderRadius: "50%", border: "1px solid rgba(255,255,255,.1)" }} />
        <div style={{ position: "absolute", inset: "12%", borderRadius: "50%", border: "1px solid rgba(255,255,255,.08)" }} />
        <div style={{ position: "absolute", inset: "18%", borderRadius: "50%", border: "1px solid rgba(255,255,255,.06)" }} />
        <div className="sweep" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "conic-gradient(from 0deg at 50% 50%,rgba(229,86,107,0) 0deg,rgba(229,86,107,0) 280deg,rgba(229,86,107,.3) 357deg,rgba(255,200,205,.55) 360deg)" }} />
        {BLIP_POS_D.map((p, i) => (
          <span key={i} className="blip" style={{ left: `${p[0]}%`, top: `${p[1]}%`, transform: "translate(-50%,-50%)", animationDelay: `-${i * 0.7}s` }} />
        ))}
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: -240, width: 1000, height: 700, transform: "translateX(-50%)", background: "radial-gradient(ellipse at 50% 50%,rgba(179,18,42,.35),rgba(179,18,42,0) 65%)" }} />

      {PINGS_D.map((lead, i) => {
        const pos = PING_POS[i]!;
        return (
          <div key={i} className="fl" style={{ position: "absolute", zIndex: 5, top: pos.top, animationDelay: pos.delay, ...("left" in pos ? { left: pos.left } : { right: pos.right }) }}>
            <div style={{ width: "fit-content", maxWidth: "100%", background: "rgba(14,8,10,.9)", borderRadius: 20, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14, boxShadow: "inset 0 0 0 1px rgba(255,255,255,.1),0 24px 60px rgba(0,0,0,.6)" }}>
              <span style={{ flex: "none", width: 44, height: 44, borderRadius: "50%", background: "#B3122A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.8A8 8 0 1 1 21 12z" />
                </svg>
              </span>
              <div style={{ minWidth: 230, textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Novo lead qualificado</div>
                <div style={{ fontSize: 13, color: "#B9ACAE", marginTop: 3, whiteSpace: "nowrap" }}>
                  <span>{roleLabel("host", lead.f)}</span>
                  <BlurName first={lead.first} last={lead.last} />
                </div>
                <div style={{ fontSize: 12, color: "#7C6F72", marginTop: 2 }}>{lead.what}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: ACCENT, marginTop: 4 }}>Iniciar Imediatamente</div>
              </div>
              <span style={{ flex: "none", fontSize: 12, fontWeight: 700, background: "#B3122A", color: "#fff", borderRadius: 999, padding: "7px 12px" }}>Responder</span>
            </div>
          </div>
        );
      })}

      <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: 0, width: 620, height: 640, marginLeft: -310, background: "linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,0))", clipPath: "polygon(42% 0,58% 0,100% 100%,0 100%)", filter: "blur(12px)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: 430, width: 620, height: 100, marginLeft: -310, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(179,18,42,.55),rgba(179,18,42,0) 70%)", pointerEvents: "none" }} />
      {DUST.map(([left, top, delay], i) => (
        <span key={i} className="dust" aria-hidden="true" style={{ left, top, animationDelay: delay }} />
      ))}
      <div className="fl" aria-hidden="true" style={{ position: "absolute", left: "50%", top: -20, width: 640, marginLeft: -320, pointerEvents: "none" }}>
        <img src={cherry} alt="" style={{ width: "100%", display: "block", WebkitMaskImage: MASK, maskImage: MASK }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: 420, height: 260, pointerEvents: "none", background: "linear-gradient(rgba(5,3,4,0),rgba(5,3,4,.9) 30%,#050304 70%)" }} />

      <div className="wrap" style={{ position: "relative" }}>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "26px 0", flexWrap: "wrap" }}>
          <a href="#topo" style={{ display: "flex", alignItems: "center", gap: 14 }} aria-label="Cherry Publicidade">
            <img src={symbol} alt="Símbolo Cherry" style={{ width: 46, height: 46, borderRadius: "50%", display: "block" }} />
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 26, letterSpacing: "-0.04em" }}>Cherry</span>
              <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 8, letterSpacing: "0.42em", marginTop: 4, opacity: 0.8 }}>PUBLICIDADE</span>
            </span>
          </a>
          <nav style={{ display: "flex", gap: 6, fontSize: 14, fontWeight: 500, border: "1px solid rgba(255,255,255,.1)", background: "rgba(12,7,9,.7)", borderRadius: 999, padding: 6 }}>
            {NAV.map(([href, label]) => (
              <a key={href} className="navl" href={href} style={{ padding: "9px 18px", borderRadius: 999 }}>{label}</a>
            ))}
          </nav>
          <a className="btn-p" href="#caminho" style={{ background: "rgba(255,255,255,.08)", color: "#fff", fontWeight: 600, fontSize: 14, padding: "0 22px", borderRadius: 999, height: 44, display: "inline-flex", alignItems: "center", boxShadow: "inset 0 1px 0 rgba(255,255,255,.28)" }}>
            Falar com a Cherry
          </a>
        </header>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "342px 0 0 0", position: "relative" }}>
          <h1 className="h1" style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: "clamp(20px,2.4vw,34px)", fontWeight: 500, letterSpacing: "-0.02em", color: "#D8CDCD", lineHeight: 1.2 }}>Gerando clientes qualificados para</span>
            <span style={{ display: "block", fontSize: "clamp(54px,10.4vw,152px)", lineHeight: 1.16, marginTop: 2, width: "100%", color: ACCENT }}>anfitriões.</span>
          </h1>
          <p style={{ margin: "26px 0 0 0", fontSize: "clamp(16px,1.4vw,20px)", lineHeight: 1.6, color: "#B9ACAE" }}>
            Mídia paga para quem vive de Airbnb, com métricas reais e acompanhamento semanal.
          </p>
          <a className="btn-p btn-fx btn-glass" href="#caminho" style={{ marginTop: 34 }}>
            Montar o meu caminho
            <span className="gc">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 180, background: "linear-gradient(rgba(5,3,4,0),#050304)" }} />
    </section>
  );
}
