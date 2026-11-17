import { useState, type CSSProperties } from "react";
import symbol from "@/assets/simbolo.png";
import { ACCENT, STOP_COPY, STOP_POS_D, STOP_TITLES, STOP_WHOS } from "@/lib/data";

const ROUTE = "M90 500C220 500 240 380 360 380S520 260 640 300S780 440 900 340S1040 180 1110 130";
const REGIONS: [number, number, string][] = [[150, 250, "CAMPO BELO"], [470, 470, "IPIRANGA"], [760, 200, "SANTANA"], [980, 520, "LIBERDADE"]];

export default function RotaD() {
  const [stop, setStop] = useState(-1);
  const copy = STOP_COPY.host;
  const open = stop >= 0;
  const ci = Math.max(stop, 0);
  const [xp, yp] = STOP_POS_D[ci]!;
  const above = yp >= 52;
  const bd = "rgba(255,255,255,.12)";
  const cherryCuida = STOP_WHOS[ci] === "Cherry";

  return (
    <section id="rota" style={{ background: "#050304", padding: "140px 0", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div className="wrap">
        <div>
          <div className="eyebrow" style={{ color: ACCENT }}>A rota</div>
          <h2 className="h2" style={{ margin: "20px 0 0 0", fontSize: "clamp(34px,4.4vw,64px)", whiteSpace: "nowrap" }}>
            O caminho <span style={{ color: "#7C6F72" }}>até o cliente.</span>
          </h2>
          <p style={{ margin: "10px 0 0 0", fontSize: 19, lineHeight: 1.6, color: "#B9ACAE" }}>
            Toque em cada parada para ver o que a Cherry faz, o que fica com você e qual métrica é acompanhada.
          </p>
        </div>

        <div className="card" style={{ marginTop: 72, borderRadius: 24, overflow: "hidden", position: "relative", boxShadow: "0 40px 120px rgba(179,18,42,.16)" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "1200 / 620", minHeight: 340 }}>
            <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} aria-hidden="true">
              <defs>
                <filter id="gl" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="7" />
                </filter>
              </defs>
              <rect width="1200" height="620" fill="#090607" />
              <g stroke="rgba(255,255,255,.05)" strokeWidth="1">
                <path d="M0 80H1200M0 150H1200M0 220H1200M0 290H1200M0 360H1200M0 430H1200M0 500H1200M0 570H1200" />
                <path d="M100 0V620M200 0V620M300 0V620M400 0V620M500 0V620M600 0V620M700 0V620M800 0V620M900 0V620M1000 0V620M1100 0V620" />
              </g>
              <g stroke="rgba(255,255,255,.08)" strokeWidth="1.5" fill="none">
                <path d="M0 600L520 0" />
                <path d="M300 620L1000 0" />
                <path d="M700 620L1200 140" />
              </g>
              <g stroke="rgba(255,255,255,.12)" strokeWidth="3" fill="none">
                <path d="M0 330C300 300 600 380 1200 280" />
                <path d="M560 0C540 200 620 400 600 620" />
              </g>
              <circle cx="1110" cy="130" r="98" fill="rgba(179,18,42,.1)" stroke="rgba(229,86,107,.55)" strokeDasharray="4 7" />
              <g fontFamily="JetBrains Mono, monospace" fontSize="11" fill="rgba(255,255,255,.28)" letterSpacing="1.5">
                {REGIONS.map(([x, y, t]) => <text key={t} x={x} y={y}>{t}</text>)}
              </g>
              <path d={ROUTE} fill="none" stroke="#E5566B" strokeOpacity=".55" strokeWidth="10" filter="url(#gl)" />
              <path d={ROUTE} fill="none" stroke="rgba(229,86,107,.35)" strokeWidth="5" strokeLinecap="round" />
              <path className="flow" d={ROUTE} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 29" />
            </svg>
            <span className="mono" style={{ position: "absolute", left: "92.5%", top: "3.2%", transform: "translateX(-50%)", fontSize: 11, letterSpacing: "0.14em", color: ACCENT }}>PRÓXIMO CLIENTE</span>

            {STOP_TITLES.map((title, i) => {
              const sel = stop === i;
              const done = i < stop;
              const last = i === 4;
              const base: CSSProperties = { width: 46, height: 46, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", padding: 0, color: "#fff" };
              const btn: CSSProperties = sel
                ? { ...base, background: "#B3122A", border: "2px solid #fff" }
                : done
                ? { ...base, background: "rgba(229,86,107,.3)", border: "2px solid #E5566B" }
                : { ...base, background: "#0A0709", border: "2px solid rgba(229,86,107,.55)" };
              if (last) btn.overflow = "hidden";
              return (
                <div key={i} style={{ position: "absolute", zIndex: 3, left: `${STOP_POS_D[i]![0]}%`, top: `${STOP_POS_D[i]![1]}%`, transform: "translate(-50%,-50%)" }}>
                  {i === 0 && (
                    <span role="img" aria-label="Você está aqui" style={{ position: "absolute", left: -16, bottom: "calc(100% + 12px)", display: "flex", alignItems: "center", gap: 8, zIndex: 2 }}>
                      <svg className="pinb" width="30" height="38" viewBox="0 0 24 30" style={{ filter: "drop-shadow(0 4px 10px rgba(229,86,107,.65))" }} aria-hidden="true">
                        <path d="M12 1C6.5 1 2 5.4 2 10.8c0 7.2 10 18.2 10 18.2s10-11 10-18.2C22 5.4 17.5 1 12 1z" fill="#E5566B" />
                        <circle cx="12" cy="11" r="4" fill="#fff" />
                      </svg>
                      <span className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", fontWeight: 500, color: "#E5566B", whiteSpace: "nowrap" }}>VOCÊ</span>
                    </span>
                  )}
                  <button type="button" onClick={() => setStop(sel ? -1 : i)} aria-label={`Parada ${i + 1}: ${title}`} className={sel || (stop === -1 && i === 0) ? "halo" : ""} style={btn}>
                    {last ? <img src={symbol} alt="" style={{ width: "100%", height: "100%", borderRadius: "50%", display: "block" }} /> : <span className="mono" style={{ fontSize: 13, fontWeight: 500 }}>{`0${i + 1}`}</span>}
                  </button>
                  <span style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 12, whiteSpace: "nowrap", fontSize: 13, fontWeight: 600, color: sel ? "#fff" : "#9E9093" }}>{title}</span>
                </div>
              );
            })}

            {open && (
              <div style={{ position: "absolute", left: 0, right: 0, height: 0, zIndex: 6, top: `calc(${yp}% ${above ? "- 40px" : "+ 40px"})` }}>
                <div
                  key={ci}
                  className={ci % 2 === 0 ? "pop" : "pop2"}
                  style={{
                    position: "absolute", width: 340,
                    left: `clamp(16px,calc(${xp}% - 170px),calc(100% - 356px))`,
                    ...(above ? { bottom: 0 } : { top: 0 }),
                    background: "#0F090B", border: `1px solid ${bd}`, borderRadius: 20, padding: "18px 20px", boxShadow: "0 22px 56px rgba(0,0,0,.7)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginRight: 34 }} aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((n) => <span key={n} style={{ flex: 1, height: 3, borderRadius: 3, background: n <= ci ? "#E5566B" : "rgba(255,255,255,.14)" }} />)}
                  </div>
                  <button type="button" onClick={() => setStop(-1)} aria-label="Fechar" style={{ position: "absolute", top: 2, right: 2, width: 44, height: 44, border: 0, background: "transparent", color: "#7C6F72", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
                  </button>
                  <div style={{ marginTop: 16, fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25 }}>{STOP_TITLES[ci]}</div>
                  <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6, color: "#B9ACAE" }}>{copy[ci]!.desc}</div>
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,.08)", display: "flex", flexDirection: "column", gap: 9 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, color: "#9E9093" }}>
                      {cherryCuida ? (
                        <img src={symbol} alt="" style={{ width: 22, height: 22, borderRadius: "50%", display: "block" }} />
                      ) : (
                        <span style={{ width: 22, height: 22, borderRadius: "50%", border: "1px solid rgba(255,255,255,.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F5F0EB" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 4-6 8-6s7 2 8 6" /></svg>
                        </span>
                      )}
                      {cherryCuida ? "A Cherry cuida" : "Você cuida"}
                    </span>
                    <span style={{ fontSize: 13, color: "#7C6F72" }}>
                      Métrica <span style={{ color: "#F5F0EB", fontWeight: 600 }}>· {copy[ci]!.metric}</span>
                    </span>
                  </div>
                </div>
                <span
                  key={`c${ci}`}
                  className={ci % 2 === 0 ? "fi" : "fi2"}
                  style={{
                    position: "absolute", top: -6, left: `${xp}%`, width: 12, height: 12, background: "#0F090B", transform: "translateX(-50%) rotate(45deg)",
                    ...(above ? { borderRight: `1px solid ${bd}`, borderBottom: `1px solid ${bd}` } : { borderLeft: `1px solid ${bd}`, borderTop: `1px solid ${bd}` }),
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
