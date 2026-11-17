import { useState, type CSSProperties } from "react";
import cherry from "@/assets/cherry-casa.png";
import { ACCENT, GOALS_D, STRUCTS } from "@/lib/data";

const optStyle = (sel: boolean): CSSProperties => ({
  textAlign: "left", minHeight: 62, padding: "0 22px", borderRadius: 14, fontSize: 16, fontWeight: 600, color: "#F5F0EB",
  ...(sel ? { background: "rgba(179,18,42,.35)", border: "1px solid #E5566B" } : { background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.14)" }),
});
const input: CSSProperties = { minHeight: 58, border: "1px solid rgba(255,255,255,.16)", borderRadius: 14, padding: "0 20px", fontSize: 16, background: "rgba(255,255,255,.05)", color: "#F5F0EB" };
const sr: CSSProperties = { position: "absolute", left: -9999 };
const h3: CSSProperties = { margin: "30px 0 0 0", fontSize: 30, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.25 };
const MASK = "radial-gradient(ellipse 72% 72% at 50% 50%,#000 58%,transparent 100%)";

export default function CaminhoD() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState(-1);
  const [struct, setStruct] = useState(-1);
  const [sent, setSent] = useState(false);

  const canNext = (step === 0 && goal >= 0) || (step === 1 && struct >= 0) || step === 2;
  const next = () => {
    if (!canNext) return;
    if (step < 2) setStep(step + 1);
    else setSent(true);
  };
  const dot = (on: boolean): CSSProperties => ({ width: 34, height: 4, borderRadius: 4, background: on ? "#E5566B" : "rgba(255,255,255,.14)" });
  const nextStyle: CSSProperties = {
    flex: 1, minHeight: 56, border: 0, borderRadius: 999, fontSize: 16, fontWeight: 600, color: "#fff",
    ...(canNext ? { background: "#B3122A", boxShadow: "0 14px 36px rgba(179,18,42,.4)" } : { background: "#3A2226", color: "#8F7C80", cursor: "not-allowed" }),
  };

  return (
    <section id="caminho" style={{ background: "#050304", padding: "140px 0", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div className="wrap">
        <div>
          <div className="eyebrow" style={{ color: ACCENT }}>Diagnóstico em 3 passos</div>
          <h2 className="h2" style={{ margin: "20px 0 0 0", fontSize: "clamp(34px,4.4vw,64px)", whiteSpace: "nowrap" }}>
            Monte o seu <span style={{ color: "#7C6F72" }}>caminho.</span>
          </h2>
          <p style={{ margin: "10px 0 0 0", fontSize: 19, lineHeight: 1.6, color: "#B9ACAE" }}>É assim que a Cherry trabalha: o contato chega qualificado. Responda e você também chega.</p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 56, marginTop: 72, alignItems: "center" }}>
          <div style={{ flex: "1 1 380px", minWidth: 0, display: "flex", justifyContent: "center", position: "relative" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", width: 560, height: 560, margin: "-280px 0 0 -280px", background: "radial-gradient(circle,rgba(179,18,42,.4),rgba(179,18,42,0) 65%)" }} />
            <img src={cherry} alt="Cereja com uma casa iluminada em seu interior" style={{ position: "relative", width: "100%", maxWidth: 440, display: "block", WebkitMaskImage: MASK, maskImage: MASK }} />
          </div>

          <div className="card" style={{ flex: "1.2 1 480px", minWidth: 0, padding: 40, borderRadius: 24, boxShadow: "0 40px 100px rgba(179,18,42,.2)" }}>
            {!sent ? (
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span style={dot(step >= 0)} /><span style={dot(step >= 1)} /><span style={dot(step >= 2)} />
                  </div>
                  <span className="mono" style={{ fontSize: 12, color: "#9E9093", letterSpacing: "0.1em" }}>PASSO {step + 1} / 3</span>
                </div>

                {step === 0 && (
                  <div>
                    <h3 style={h3}>O que você quer agora?</h3>
                    <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 12 }}>
                      {GOALS_D.map((t, i) => <button key={t} type="button" className="opt" onClick={() => setGoal(i)} style={optStyle(goal === i)}>{t}</button>)}
                    </div>
                  </div>
                )}
                {step === 1 && (
                  <div>
                    <h3 style={h3}>Como é o seu atendimento aos leads?</h3>
                    <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 12 }}>
                      {STRUCTS.map((t, i) => <button key={t} type="button" className="opt" onClick={() => setStruct(i)} style={optStyle(struct === i)}>{t}</button>)}
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <h3 style={h3}>Para onde enviamos o seu caminho?</h3>
                    <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 14 }}>
                      <label htmlFor="f-nome" style={sr}>Seu nome</label>
                      <input id="f-nome" type="text" placeholder="Seu nome" style={input} />
                      <label htmlFor="f-reg" style={sr}>Cidade ou região onde quer crescer</label>
                      <input id="f-reg" type="text" placeholder="Cidade ou região onde quer crescer" style={input} />
                      <label htmlFor="f-wpp" style={sr}>WhatsApp</label>
                      <input id="f-wpp" type="tel" placeholder="WhatsApp" style={input} />
                    </div>
                  </div>
                )}

                <div style={{ display: "flex", gap: 12, marginTop: 30, alignItems: "center" }}>
                  {step > 0 && (
                    <button type="button" className="btn-g" onClick={() => setStep(Math.max(0, step - 1))} style={{ minHeight: 56, padding: "0 26px", border: "1px solid rgba(255,255,255,.2)", background: "transparent", color: "#F5F0EB", borderRadius: 999, fontSize: 15, fontWeight: 600 }}>
                      Voltar
                    </button>
                  )}
                  <button type="button" className="btn-p" onClick={next} style={nextStyle}>{step < 2 ? "Continuar" : "Abrir meu caminho"}</button>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1px solid rgba(229,86,107,.4)", background: "rgba(229,86,107,.1)", borderRadius: 999, padding: "9px 16px", fontSize: 13, fontWeight: 600 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l4.5 4.5L19 7" /></svg>
                  Caminho montado
                </div>
                <h3 style={{ margin: "26px 0 0 0", fontSize: 34, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.25 }}>Pronto. A Cherry fala com você pelo WhatsApp.</h3>
                <div style={{ marginTop: 28, border: "1px solid rgba(255,255,255,.12)", borderRadius: 14, padding: "6px 20px", background: "#0F090B" }}>
                  {[["Perfil", "Anfitrião ou gestor de imóveis"], ["Objetivo", goal >= 0 ? GOALS_D[goal] : ""], ["Atendimento", struct >= 0 ? STRUCTS[struct] : ""]].map(([k, v], i) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "14px 0", fontSize: 14, ...(i ? { borderTop: "1px solid rgba(255,255,255,.07)" } : {}) }}>
                      <span style={{ color: "#9E9093" }}>{k}</span>
                      <span style={{ fontWeight: 600, textAlign: "right" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
