import symbol from "@/assets/simbolo.png";
import { ACCENT, CHART_AREA, CHART_LINE, DAYS, FEED_D, KPIS, KPI_SPARK, roleLabel } from "@/lib/data";
import BlurName from "../BlurName";

export default function PainelD() {
  return (
    <section id="painel" style={{ background: "#080507", padding: "140px 0", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div className="wrap">
        <div>
          <div className="eyebrow" style={{ color: ACCENT }}>Torre de controle</div>
          <h2 className="h2" style={{ margin: "20px 0 0 0", fontSize: "clamp(34px,4.4vw,64px)", whiteSpace: "nowrap" }}>
            Métricas reais, <span style={{ color: "#7C6F72" }}>toda semana.</span>
          </h2>
          <p style={{ margin: "10px 0 0 0", fontSize: 19, lineHeight: 1.6, color: "#B9ACAE" }}>A Cherry Publicidade analisa os números e ajusta as campanhas semanalmente.</p>
        </div>

        <div style={{ marginTop: 72, border: "1px solid rgba(255,255,255,.14)", borderRadius: 24, background: "#0A0507", boxShadow: "0 -1px 0 rgba(229,86,107,.5) inset,0 50px 120px rgba(179,18,42,.2)", overflow: "hidden" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src={symbol} alt="" style={{ width: 24, height: 24, borderRadius: "50%" }} />
              <span style={{ fontSize: 14, fontWeight: 600 }}>Painel Cherry</span>
            </div>
            <div style={{ display: "flex", gap: 4, fontSize: 13, fontWeight: 500, color: "#9E9093" }}>
              <span style={{ padding: "7px 14px", borderRadius: 8, background: "rgba(255,255,255,.08)", color: "#fff" }}>Visão geral</span>
              <span style={{ padding: "7px 14px" }}>Campanhas</span>
              <span style={{ padding: "7px 14px" }}>Leads</span>
              <span style={{ padding: "7px 14px" }}>Relatórios</span>
            </div>
            <span className="mono" style={{ fontSize: 12, border: "1px solid rgba(255,255,255,.16)", borderRadius: 8, padding: "7px 12px", color: "#CFC4C4" }}>Semana 24–30/10</span>
          </div>

          <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {KPIS.map((k, i) => (
                <div key={k.l} style={{ flex: "1 1 200px", minWidth: 0, padding: 20, borderRadius: 14, background: "#0F090B", border: "1px solid rgba(255,255,255,.08)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 13, color: "#9E9093", fontWeight: 500 }}>{k.l}</span>
                  </div>
                  <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.04em", marginTop: 10 }}>{k.v}</div>
                  <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: "100%", height: 34, marginTop: 10, display: "block" }} aria-hidden="true">
                    <path d={KPI_SPARK[i]} fill="none" stroke={ACCENT} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <div style={{ flex: "1.5 1 440px", minWidth: 0, padding: 22, borderRadius: 14, background: "#0F090B", border: "1px solid rgba(255,255,255,.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>Leads por dia</span>
                  <span className="mono" style={{ fontSize: 11, color: "#9E9093" }}>24 A 30/10</span>
                </div>
                <svg viewBox="0 0 640 220" preserveAspectRatio="none" style={{ width: "100%", height: 210, marginTop: 18, display: "block" }} role="img" aria-label="Leads por dia de 24 a 30 de outubro: 0, 1, 0, 6, 3, 2 e 3">
                  <line x1="0" y1="40" x2="640" y2="40" stroke="rgba(255,255,255,.07)" />
                  <line x1="0" y1="95" x2="640" y2="95" stroke="rgba(255,255,255,.07)" />
                  <line x1="0" y1="150" x2="640" y2="150" stroke="rgba(255,255,255,.07)" />
                  <line x1="0" y1="205" x2="640" y2="205" stroke="rgba(255,255,255,.07)" />
                  <path d="M0 205 L106.7 177.5 L213.3 205 L320 40 L426.7 122.5 L533.3 150 L640 122.5 L640 220 L0 220 Z" fill="#B3122A" fillOpacity="0.3" />
                  <path d="M0 205 L106.7 177.5 L213.3 205 L320 40 L426.7 122.5 L533.3 150 L640 122.5" strokeLinejoin="round" fill="none" stroke={ACCENT} strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
                </svg>
                <div className="mono" style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#7C6F72", marginTop: 10 }}>
                  {DAYS.map((d) => <span key={d}>{d}</span>)}
                </div>
              </div>

              <div style={{ flex: "1 1 340px", minWidth: 0, padding: 22, borderRadius: 14, background: "#0F090B", border: "1px solid rgba(255,255,255,.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>Exemplos de leads recebidos</span>
                </div>
                <div style={{ marginTop: 12, display: "flex", flexDirection: "column" }}>
                  {FEED_D.map((lead, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 0", borderTop: "1px solid rgba(255,255,255,.07)" }}>
                      <span style={{ flex: "none", width: 34, height: 34, borderRadius: "50%", background: "rgba(179,18,42,.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.8A8 8 0 1 1 21 12z" />
                        </svg>
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding: "3px 0", margin: "-3px 0" }}>
                          <span>{roleLabel("host", lead.f)}</span>
                          <BlurName first={lead.first} last={lead.last} />
                        </div>
                        <div style={{ fontSize: 12, color: "#9E9093", marginTop: 2 }}>{lead.what}</div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: ACCENT, marginTop: 4 }}>Iniciar Imediatamente</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 64 }}>
          <a className="btn-p btn-fx btn-glass" href="#caminho">
            Montar o meu caminho
            <span className="gc">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
