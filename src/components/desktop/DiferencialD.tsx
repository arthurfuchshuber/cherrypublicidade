import { ACCENT } from "@/lib/data";

const DOTS = Array.from({ length: 15 }, (_, i) => i);
const CHEAP = new Set([3, 11]);
const CHERRY = new Set(Array.from({ length: 10 }, (_, i) => i));
const dot = (on: boolean) => ({
  width: 22, height: 22, borderRadius: "50%",
  background: on ? ACCENT : "rgba(255,255,255,.14)",
  ...(on ? { boxShadow: "0 0 12px rgba(229,86,107,.6)" } : {}),
});
const grid = { display: "grid", gridTemplateColumns: "repeat(5,22px)", gap: 14, flex: "none" } as const;
const POINTS = ["Formulário filtra região, tipo e quantidade de imóveis", "Só chega quem tem interesse real", "A sua equipe fala só com quem quer fechar"];

export default function DiferencialD() {
  return (
    <section id="diferencial" style={{ background: "#050304", padding: "140px 0" }}>
      <div className="wrap">
        <div>
          <div className="eyebrow" style={{ color: ACCENT }}>Nosso diferencial</div>
          <h2 className="h2" style={{ margin: "20px 0 0 0", fontSize: "clamp(34px,4.4vw,64px)", whiteSpace: "nowrap" }}>
            Qualidade, <span style={{ color: "#7C6F72" }}>não volume.</span>
          </h2>
          <p style={{ margin: "10px 0 0 0", fontSize: 19, lineHeight: 1.6, color: "#B9ACAE" }}>
            Lead barato custa caro: a sua equipe gasta energia qualificando contatos que nunca vão fechar.
          </p>
        </div>

        <div style={{ marginTop: 72, display: "flex", flexWrap: "wrap", gap: 20, alignItems: "stretch" }}>
          <div style={{ flex: "1 1 440px", minWidth: 0, padding: "36px 32px", borderRadius: 24, background: "#0A0507", border: "1px solid rgba(255,255,255,.1)", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <span className="mono" style={{ fontSize: 12, letterSpacing: "0.14em", color: "#7C6F72" }}>LEAD BARATO</span>
              <span className="mono" style={{ fontSize: 13, border: "1px solid rgba(255,255,255,.16)", borderRadius: 8, padding: "6px 11px", color: "#9E9093" }}>R$ 5 / lead</span>
            </div>
            <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 32 }}>
              <div style={grid}>{DOTS.map((i) => <span key={i} style={dot(CHEAP.has(i))} />)}</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.1, color: "#9E9093" }}>2 de 15</div>
                <div style={{ fontSize: 15, lineHeight: 1.4, color: "#7C6F72", marginTop: 6 }}>têm interesse real</div>
              </div>
            </div>
            <div style={{ marginTop: 28, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,.07)", fontSize: 16, lineHeight: 1.55, color: "#9E9093" }}>
              A sua equipe perde tempo e energia filtrando contato por contato.
            </div>
            <div className="mono" style={{ marginTop: "auto", paddingTop: 20, fontSize: 11, letterSpacing: "0.12em", color: "#5E5255" }}>EXEMPLO ILUSTRATIVO</div>
          </div>

          <div className="vs" aria-hidden="true" style={{ flex: "none", alignSelf: "center", width: 56, height: 56, borderRadius: "50%", border: "1px solid rgba(255,255,255,.14)", background: "#0A0507", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="mono" style={{ fontSize: 12, letterSpacing: "0.14em", color: "#7C6F72" }}>VS</span>
          </div>

          <div style={{ flex: "1 1 440px", minWidth: 0, padding: "36px 32px", borderRadius: 24, background: "#0A0507", border: "1px solid rgba(229,86,107,.5)", boxShadow: "0 -1px 0 rgba(229,86,107,.5) inset,0 40px 100px rgba(179,18,42,.2)", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <span className="mono" style={{ fontSize: 12, letterSpacing: "0.14em", color: ACCENT }}>LEAD CHERRY</span>
              <span className="mono" style={{ fontSize: 13, border: "1px solid rgba(229,86,107,.5)", borderRadius: 8, padding: "6px 11px", color: "#F5F0EB" }}>R$ 32,44 / lead</span>
            </div>
            <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 32 }}>
              <div style={grid}>{DOTS.map((i) => <span key={i} style={dot(CHERRY.has(i))} />)}</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.1 }}>10 de 15</div>
                <div style={{ fontSize: 15, lineHeight: 1.4, color: "#B9ACAE", marginTop: 6 }}>querem iniciar imediatamente</div>
              </div>
            </div>
            <div style={{ marginTop: 28, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,.08)", display: "flex", flexDirection: "column", gap: 12 }}>
              {POINTS.map((t) => (
                <div key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 16, lineHeight: 1.5, color: "#CFC4C4" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: 3 }}>
                    <path d="M5 12l4.5 4.5L19 7" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
            <div className="mono" style={{ marginTop: "auto", paddingTop: 20, fontSize: 11, letterSpacing: "0.12em", color: "#7C6F72" }}>DADOS REAIS · SEMANA 24–30/10</div>
          </div>
        </div>

        <h3 className="h2" style={{ margin: "72px 0 0 0", fontSize: "clamp(26px,3vw,40px)", textAlign: "center" }}>
          Pague pelo cliente certo, <span style={{ color: "#7C6F72" }}>não pelo clique mais barato.</span>
        </h3>
      </div>
    </section>
  );
}
