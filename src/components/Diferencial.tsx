import { ACCENT } from "@/lib/data";

const DOT = 16;
const dotStyle = (on: boolean) => ({
  width: DOT,
  height: DOT,
  borderRadius: "50%",
  background: on ? ACCENT : "rgba(255,255,255,.14)",
  ...(on ? { boxShadow: "0 0 10px rgba(229,86,107,.6)" } : {}),
});

const grid = { display: "grid", gridTemplateColumns: `repeat(5,${DOT}px)`, gap: 10, flex: "none" } as const;

// 15 bolinhas por card: 2 destacadas (exemplo ilustrativo) x 10 (dados reais da semana 24–30/10)
const CHEAP = new Set([3, 11]);
const CHERRY = new Set(Array.from({ length: 10 }, (_, i) => i));
const DOTS = Array.from({ length: 15 }, (_, i) => i);

const CHERRY_POINTS = [
  "Formulário filtra região, tipo e quantidade de imóveis",
  "Só chega quem tem interesse real",
  "A sua equipe fala só com quem quer fechar",
];

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: 2 }}>
    <path d="M5 12l4.5 4.5L19 7" />
  </svg>
);

export default function Diferencial() {
  return (
    <section id="diferencial" style={{ background: "#050304", padding: "72px 20px" }}>
      <div className="eyebrow" style={{ color: ACCENT }}>Nosso diferencial</div>
      <h2 className="h2" style={{ margin: "16px 0 0 0", fontSize: 25, whiteSpace: "nowrap" }}>
        Qualidade, <span style={{ color: "#7C6F72" }}>não volume.</span>
      </h2>
      <p style={{ margin: "8px 0 0 0", fontSize: 16, lineHeight: 1.6, color: "#B9ACAE" }}>
        Lead barato custa caro: a sua equipe gasta energia qualificando contatos que nunca vão fechar.
      </p>

      <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ padding: "20px 18px", borderRadius: 20, background: "#0A0507", border: "1px solid rgba(255,255,255,.1)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <span className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "#7C6F72" }}>LEAD BARATO</span>
            <span className="mono" style={{ fontSize: 11, border: "1px solid rgba(255,255,255,.16)", borderRadius: 8, padding: "5px 9px", color: "#9E9093" }}>R$ 5 / lead</span>
          </div>
          <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 20 }}>
            <div style={grid}>{DOTS.map((i) => <span key={i} style={dotStyle(CHEAP.has(i))} />)}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.04em", color: "#9E9093" }}>2 de 15</div>
              <div style={{ fontSize: 12, lineHeight: 1.4, color: "#7C6F72", marginTop: 4 }}>têm interesse real</div>
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,.07)", fontSize: 13, lineHeight: 1.55, color: "#9E9093" }}>
            A sua equipe perde tempo e energia filtrando contato por contato.
          </div>
          <div className="mono" style={{ marginTop: 12, fontSize: 9, letterSpacing: "0.12em", color: "#5E5255" }}>EXEMPLO ILUSTRATIVO</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }} aria-hidden="true">
          <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,.08)" }} />
          <span className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "#7C6F72" }}>VS</span>
          <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,.08)" }} />
        </div>

        <div style={{ padding: "20px 18px", borderRadius: 20, background: "#0A0507", border: "1px solid rgba(229,86,107,.5)", boxShadow: "0 -1px 0 rgba(229,86,107,.5) inset,0 30px 80px rgba(179,18,42,.2)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <span className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: ACCENT }}>LEAD CHERRY</span>
            <span className="mono" style={{ fontSize: 11, border: "1px solid rgba(229,86,107,.5)", borderRadius: 8, padding: "5px 9px", color: "#F5F0EB" }}>R$ 32,44 / lead</span>
          </div>
          <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 20 }}>
            <div style={grid}>{DOTS.map((i) => <span key={i} style={dotStyle(CHERRY.has(i))} />)}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.04em" }}>10 de 15</div>
              <div style={{ fontSize: 12, lineHeight: 1.4, color: "#B9ACAE", marginTop: 4 }}>querem iniciar imediatamente</div>
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,.08)", display: "flex", flexDirection: "column", gap: 10 }}>
            {CHERRY_POINTS.map((t) => (
              <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, lineHeight: 1.5, color: "#CFC4C4" }}>
                <Check />
                {t}
              </div>
            ))}
          </div>
          <div className="mono" style={{ marginTop: 14, fontSize: 9, letterSpacing: "0.12em", color: "#7C6F72" }}>DADOS REAIS · SEMANA 24–30/10</div>
        </div>
      </div>

      <h3 className="h2" style={{ margin: "32px 0 0 0", fontSize: 22 }}>
        Pague pelo cliente certo, <span style={{ color: "#7C6F72" }}>não pelo clique mais barato.</span>
      </h3>
    </section>
  );
}
