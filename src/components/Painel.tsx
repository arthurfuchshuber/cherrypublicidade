import symbol from "@/assets/simbolo.png";
import { ACCENT, CHART_AREA, CHART_LINE, DAYS, FEED, KPIS, roleLabel, type Persona } from "@/lib/data";
import BlurName from "./BlurName";

export default function Painel({ persona }: { persona: Persona }) {
  const feed = FEED[persona];
  return (
    <section id="painel" style={{ background: "#080507", padding: "72px 20px", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div className="eyebrow" style={{ color: ACCENT }}>Torre de controle</div>
      <h2 className="h2" style={{ margin: "16px 0 0 0", fontSize: 25, whiteSpace: "nowrap" }}>
        Métricas reais, <span style={{ color: "#7C6F72" }}>toda semana.</span>
      </h2>
      <p style={{ margin: "8px 0 0 0", fontSize: 16, lineHeight: 1.6, color: "#B9ACAE" }}>
        A Cherry Publicidade analisa os números e ajusta as campanhas semanalmente.
      </p>

      <div style={{ marginTop: 40, border: "1px solid rgba(255,255,255,.14)", borderRadius: 22, background: "#0A0507", boxShadow: "0 -1px 0 rgba(229,86,107,.5) inset,0 40px 90px rgba(179,18,42,.2)", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src={symbol} alt="" style={{ width: 22, height: 22, borderRadius: "50%" }} />
            <span style={{ fontSize: 14, fontWeight: 600 }}>Painel Cherry</span>
          </div>
          <span className="mono" style={{ fontSize: 11, border: "1px solid rgba(255,255,255,.16)", borderRadius: 8, padding: "6px 10px", color: "#CFC4C4" }}>Semana 24–30/10</span>
        </div>

        <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {KPIS.map((k) => (
              <div key={k.l} style={{ flex: "1 1 130px", minWidth: 0, padding: 16, borderRadius: 14, background: "#0F090B", border: "1px solid rgba(255,255,255,.08)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "2px 6px" }}>
                  <span style={{ fontSize: 12, color: "#9E9093", fontWeight: 500 }}>{k.l}</span>
                </div>
                <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.04em", marginTop: 8 }}>{k.v}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: 16, borderRadius: 14, background: "#0F090B", border: "1px solid rgba(255,255,255,.08)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Leads por dia</span>
              <span className="mono" style={{ fontSize: 10, color: "#9E9093" }}>24 A 30/10</span>
            </div>
            <svg viewBox="0 0 640 220" preserveAspectRatio="none" style={{ width: "100%", height: 150, marginTop: 14, display: "block" }} role="img" aria-label="Leads por dia de 24 a 30 de outubro: 0, 1, 0, 6, 3, 2 e 3">
              <line x1="0" y1="40" x2="640" y2="40" stroke="rgba(255,255,255,.07)" />
              <line x1="0" y1="105" x2="640" y2="105" stroke="rgba(255,255,255,.07)" />
              <line x1="0" y1="170" x2="640" y2="170" stroke="rgba(255,255,255,.07)" />
              <path d={CHART_AREA} fill="#B3122A" fillOpacity="0.3" />
              <path d={CHART_LINE} strokeLinejoin="round" fill="none" stroke={ACCENT} strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
            </svg>
            <div className="mono" style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#7C6F72", marginTop: 8 }}>
              {DAYS.map((d) => (<span key={d}>{d}</span>))}
            </div>
          </div>

          <div style={{ padding: 16, borderRadius: 14, background: "#0F090B", border: "1px solid rgba(255,255,255,.08)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Exemplos de leads recebidos</span>
            </div>
            <div style={{ marginTop: 8, display: "flex", flexDirection: "column" }}>
              {feed.map((lead, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 0", borderTop: "1px solid rgba(255,255,255,.07)" }}>
                  <span style={{ flex: "none", width: 34, height: 34, borderRadius: "50%", background: "rgba(179,18,42,.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.8A8 8 0 1 1 21 12z" />
                    </svg>
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding: "3px 0", margin: "-3px 0" }}>
                      <span>{roleLabel(persona, lead.f)}</span>
                      <BlurName first={lead.first} last={lead.last} />
                    </div>
                    <div style={{ fontSize: 11, color: "#9E9093", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{lead.what}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: ACCENT, marginTop: 4 }}>Iniciar Imediatamente</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
