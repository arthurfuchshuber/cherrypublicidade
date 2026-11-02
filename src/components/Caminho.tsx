import { useEffect, useState, type CSSProperties } from "react";
import { ACCENT, GOALS, STRUCTS, type Persona } from "@/lib/data";

const optStyle = (sel: boolean): CSSProperties => ({
  textAlign: "left",
  minHeight: 60,
  padding: "12px 18px",
  borderRadius: 14,
  fontSize: 15,
  fontWeight: 600,
  lineHeight: 1.35,
  color: "#F5F0EB",
  ...(sel
    ? { background: "rgba(179,18,42,.35)", border: "1px solid #E5566B" }
    : { background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.14)" }),
});

const input: CSSProperties = {
  minHeight: 56,
  border: "1px solid rgba(255,255,255,.16)",
  borderRadius: 14,
  padding: "0 18px",
  fontSize: 16,
  background: "rgba(255,255,255,.05)",
  color: "#F5F0EB",
};

const sr: CSSProperties = { position: "absolute", left: -9999 };
const h3: CSSProperties = { margin: "24px 0 0 0", fontSize: 25, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.25, whiteSpace: "nowrap" };

export default function Caminho({ persona }: { persona: Persona }) {
  const host = persona === "host";
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState(-1);
  const [struct, setStruct] = useState(-1);
  const [sent, setSent] = useState(false);

  useEffect(() => setGoal(-1), [persona]);

  const goals = GOALS[persona];
  const canNext = (step === 0 && goal >= 0) || (step === 1 && struct >= 0) || step === 2;
  const next = () => {
    if (!canNext) return;
    if (step < 2) setStep(step + 1);
    else setSent(true);
  };

  const dot = (on: boolean): CSSProperties => ({ width: 28, height: 4, borderRadius: 4, background: on ? "#E5566B" : "rgba(255,255,255,.14)" });
  const nextStyle: CSSProperties = {
    minHeight: 58,
    border: 0,
    borderRadius: 999,
    fontSize: 16,
    fontWeight: 600,
    color: "#fff",
    ...(canNext
      ? { background: "#B3122A", boxShadow: "0 14px 36px rgba(179,18,42,.4)" }
      : { background: "#3A2226", color: "#8F7C80", cursor: "not-allowed" }),
  };

  return (
    <section id="caminho" style={{ background: "#050304", padding: "72px 20px", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div className="eyebrow" style={{ color: ACCENT }}>Diagnóstico em 3 passos</div>

      <div className="card" style={{ marginTop: 12, padding: "26px 20px", borderRadius: 22, boxShadow: "0 30px 80px rgba(179,18,42,.2)" }}>
        {!sent ? (
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={dot(step >= 0)} />
                <span style={dot(step >= 1)} />
                <span style={dot(step >= 2)} />
              </div>
              <span className="mono" style={{ fontSize: 11, color: "#9E9093", letterSpacing: "0.1em" }}>PASSO {step + 1} / 3</span>
            </div>

            {step === 0 && (
              <div>
                <h3 style={h3}>O que você quer agora?</h3>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  {goals.map((t, i) => (
                    <button key={t} type="button" onClick={() => setGoal(i)} style={optStyle(goal === i)}>{t}</button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 style={h3}>Como é o seu atendimento?</h3>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  {STRUCTS.map((t, i) => (
                    <button key={t} type="button" onClick={() => setStruct(i)} style={optStyle(struct === i)}>{t}</button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 style={h3}>Onde enviamos o caminho?</h3>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                  <label htmlFor="m-nome" style={sr}>Seu nome</label>
                  <input id="m-nome" type="text" placeholder="Seu nome" style={input} />
                  <label htmlFor="m-reg" style={sr}>Cidade ou região onde quer crescer</label>
                  <input id="m-reg" type="text" placeholder="Cidade ou região onde quer crescer" style={input} />
                  <label htmlFor="m-wpp" style={sr}>WhatsApp</label>
                  <input id="m-wpp" type="tel" placeholder="WhatsApp" style={input} />
                </div>
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
              <button type="button" className="btn-p" onClick={next} style={nextStyle}>
                {step < 2 ? "Continuar" : "Abrir meu caminho"}
              </button>
              {step > 0 && (
                <button type="button" onClick={() => setStep(Math.max(0, step - 1))} style={{ minHeight: 52, border: 0, background: "transparent", color: "#B9ACAE", borderRadius: 999, fontSize: 15, fontWeight: 600 }}>
                  Voltar
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(229,86,107,.4)", background: "rgba(229,86,107,.1)", borderRadius: 999, padding: "8px 14px", fontSize: 12, fontWeight: 600 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12l4.5 4.5L19 7" />
              </svg>
              Caminho montado
            </div>
            <h3 style={{ margin: "22px 0 0 0", fontSize: 27, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.25 }}>
              Pronto. A Cherry fala com você pelo WhatsApp.
            </h3>
            <div style={{ marginTop: 22, border: "1px solid rgba(255,255,255,.12)", borderRadius: 14, padding: "4px 16px", background: "#0F090B" }}>
              <div style={{ padding: "13px 0", fontSize: 13 }}>
                <div style={{ color: "#9E9093" }}>Perfil</div>
                <div style={{ fontWeight: 600, marginTop: 4, fontSize: 14 }}>{host ? "Anfitrião ou gestor de imóveis" : "Prestador de serviços para Airbnb"}</div>
              </div>
              <div style={{ padding: "13px 0", borderTop: "1px solid rgba(255,255,255,.07)", fontSize: 13 }}>
                <div style={{ color: "#9E9093" }}>Objetivo</div>
                <div style={{ fontWeight: 600, marginTop: 4, fontSize: 14 }}>{goal >= 0 ? goals[goal] : ""}</div>
              </div>
              <div style={{ padding: "13px 0", borderTop: "1px solid rgba(255,255,255,.07)", fontSize: 13 }}>
                <div style={{ color: "#9E9093" }}>Atendimento</div>
                <div style={{ fontWeight: 600, marginTop: 4, fontSize: 14 }}>{struct >= 0 ? STRUCTS[struct] : ""}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
