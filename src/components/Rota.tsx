import { useState, type CSSProperties } from "react";
import symbol from "@/assets/simbolo.png";
import { ACCENT, KNOTS, STOP_COPY, STOP_TITLES, STOP_WHOS, type Persona } from "@/lib/data";

type Props = { persona: Persona };

const ROUTE = "M60 520C60 460 280 480 280 400S90 350 90 290S270 250 270 170S300 110 290 50";

export default function Rota({ persona }: Props) {
  const [stop, setStop] = useState(-1);
  const copy = STOP_COPY[persona];

  const open = stop >= 0;
  const ci = Math.max(stop, 0);
  const kk = KNOTS[ci];
  const xp = (kk[0] / 350) * 100;
  const yp = (kk[1] / 580) * 100;
  const above = yp >= 45;
  const bd = "rgba(255,255,255,.12)";
  const cherryCuida = STOP_WHOS[ci] === "Cherry";

  return (
    <section id="rota" style={{ background: "#050304", padding: "64px 20px 72px 20px" }}>
      <div className="eyebrow" style={{ color: ACCENT }}>A rota</div>
      <h2 className="h2" style={{ margin: "16px 0 0 0", fontSize: 25, whiteSpace: "nowrap" }}>
        O caminho <span style={{ color: "#7C6F72" }}>até o cliente.</span>
      </h2>
      <p style={{ margin: "8px 0 0 0", fontSize: 16, lineHeight: 1.6, color: "#9E9093" }}>Toque em uma parada para ver os detalhes.</p>
      <div className="card" style={{ marginTop: 36, borderRadius: 24, overflow: "hidden", boxShadow: "0 30px 90px rgba(179,18,42,.2)" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "350 / 580" }}>
          <svg viewBox="0 0 350 580" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} aria-hidden="true">
            <defs>
              <filter id="mgl" x="-30%" y="-10%" width="160%" height="120%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
            </defs>
            <rect width="350" height="580" fill="#090607" />
            <g stroke="rgba(255,255,255,.05)" strokeWidth="1">
              <path d="M0 116H350M0 232H350M0 348H350M0 464H350" />
              <path d="M117 0V580M233 0V580" />
            </g>
            <circle cx="290" cy="50" r="58" fill="rgba(179,18,42,.12)" stroke="rgba(229,86,107,.55)" strokeDasharray="4 7" />
            <path d={ROUTE} fill="none" stroke="#E5566B" strokeOpacity=".6" strokeWidth="10" filter="url(#mgl)" />
            <path d={ROUTE} fill="none" stroke="rgba(229,86,107,.4)" strokeWidth="5" strokeLinecap="round" />
            <path className="mflow" d={ROUTE} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 29" />
          </svg>
          <span className="mono" style={{ position: "absolute", right: 14, top: 8, fontSize: 10, letterSpacing: "0.14em", color: ACCENT }}>PRÓXIMO CLIENTE</span>

          {STOP_TITLES.map((title, i) => {
            const sel = stop === i;
            const done = i < stop;
            const last = i === 4;
            const k = KNOTS[i];
            const base: CSSProperties = { width: 46, height: 46, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", padding: 0, color: "#fff" };
            const btn: CSSProperties = sel
              ? { ...base, background: "#B3122A", border: "2px solid #fff" }
              : done
              ? { ...base, background: "rgba(229,86,107,.3)", border: "2px solid #E5566B" }
              : { ...base, background: "#0A0709", border: "2px solid rgba(229,86,107,.55)" };
            if (last) btn.overflow = "hidden";
            const lab: CSSProperties = {
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              whiteSpace: "nowrap",
              fontSize: 13,
              fontWeight: 600,
              textShadow: "0 2px 10px #000",
              color: sel ? "#fff" : "#B9ACAE",
              ...(k[2] === "r" ? { left: "100%", marginLeft: 12 } : { right: "100%", marginRight: 12 }),
            };
            return (
              <div key={i} style={{ position: "absolute", zIndex: 3, left: `${(k[0] / 350) * 100}%`, top: `${(k[1] / 580) * 100}%`, transform: "translate(-50%,-50%)" }}>
                {i === 0 && (
                  <span role="img" aria-label="Você está aqui" style={{ position: "absolute", left: -14, bottom: "calc(100% + 10px)", display: "flex", alignItems: "center", gap: 6, zIndex: 2 }}>
                    <svg className="pinb" width="26" height="33" viewBox="0 0 24 30" style={{ filter: "drop-shadow(0 4px 10px rgba(229,86,107,.65))" }} aria-hidden="true">
                      <path d="M12 1C6.5 1 2 5.4 2 10.8c0 7.2 10 18.2 10 18.2s10-11 10-18.2C22 5.4 17.5 1 12 1z" fill="#E5566B" />
                      <circle cx="12" cy="11" r="4" fill="#fff" />
                    </svg>
                    <span className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", fontWeight: 500, color: "#E5566B", whiteSpace: "nowrap" }}>VOCÊ</span>
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setStop(sel ? -1 : i)}
                  aria-label={`Parada ${i + 1}: ${title}`}
                  className={sel || (stop === -1 && i === 0) ? "halo" : ""}
                  style={btn}
                >
                  {last ? (
                    <img src={symbol} alt="" style={{ width: "100%", height: "100%", borderRadius: "50%", display: "block" }} />
                  ) : (
                    <span className="mono" style={{ fontSize: 13, fontWeight: 500 }}>{`0${i + 1}`}</span>
                  )}
                </button>
                <span style={lab}>{title}</span>
              </div>
            );
          })}

          {open && (
            <div style={{ position: "absolute", left: 0, right: 0, height: 0, zIndex: 6, top: `calc(${yp}% ${above ? "- 36px" : "+ 36px"})` }}>
              <div
                key={ci}
                className={ci % 2 === 0 ? "pop" : "pop2"}
                style={{
                  position: "absolute",
                  width: 276,
                  left: `clamp(12px,calc(${xp}% - 138px),calc(100% - 288px))`,
                  ...(above ? { bottom: 0 } : { top: 0 }),
                  background: "#0F090B",
                  border: `1px solid ${bd}`,
                  borderRadius: 18,
                  padding: "14px 16px",
                  boxShadow: "0 18px 44px rgba(0,0,0,.65)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginRight: 30 }} aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <span key={n} style={{ flex: 1, height: 3, borderRadius: 3, background: n <= ci ? "#E5566B" : "rgba(255,255,255,.14)" }} />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStop(-1)}
                  aria-label="Fechar"
                  style={{ position: "absolute", top: 0, right: 0, width: 44, height: 44, border: 0, background: "transparent", color: "#7C6F72", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
                <div style={{ marginTop: 14, fontSize: 17, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25 }}>{STOP_TITLES[ci]}</div>
                <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.55, color: "#B9ACAE" }}>{copy[ci].desc}</div>
                <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,.08)", display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, color: "#9E9093" }}>
                    {cherryCuida ? (
                      <img src={symbol} alt="" style={{ width: 20, height: 20, borderRadius: "50%", display: "block" }} />
                    ) : (
                      <span style={{ width: 20, height: 20, borderRadius: "50%", border: "1px solid rgba(255,255,255,.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F5F0EB" }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 21c1-4 4-6 8-6s7 2 8 6" />
                        </svg>
                      </span>
                    )}
                    {cherryCuida ? "A Cherry cuida" : "Você cuida"}
                  </span>
                  <span style={{ fontSize: 12, color: "#7C6F72" }}>
                    Métrica <span style={{ color: "#F5F0EB", fontWeight: 600 }}>· {copy[ci].metric}</span>
                  </span>
                </div>
              </div>
              <span
                key={`c${ci}`}
                className={ci % 2 === 0 ? "fi" : "fi2"}
                style={{
                  position: "absolute",
                  top: -6,
                  left: `${xp}%`,
                  width: 12,
                  height: 12,
                  background: "#0F090B",
                  transform: "translateX(-50%) rotate(45deg)",
                  ...(above
                    ? { borderRight: `1px solid ${bd}`, borderBottom: `1px solid ${bd}` }
                    : { borderLeft: `1px solid ${bd}`, borderTop: `1px solid ${bd}` }),
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
