import type { CSSProperties } from "react";
import symbol from "@/assets/simbolo.png";

const link: CSSProperties = { display: "flex", alignItems: "center", minHeight: 48, borderTop: "1px solid rgba(255,255,255,.08)", color: "#B9ACAE" };

export default function Footer() {
  return (
    <footer style={{ background: "#050304", borderTop: "1px solid rgba(255,255,255,.08)", padding: "48px 20px 32px 20px" }}>
      <a href="#topo" style={{ display: "flex", alignItems: "center", gap: 12 }} aria-label="Cherry Publicidade">
        <img src={symbol} alt="Símbolo Cherry" style={{ width: 42, height: 42, borderRadius: "50%", display: "block" }} />
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 23, letterSpacing: "-0.04em" }}>Cherry</span>
          <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 7, letterSpacing: "0.42em", marginTop: 4, opacity: 0.8 }}>PUBLICIDADE</span>
        </span>
      </a>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 28, fontSize: 15, fontWeight: 500 }}>
        <a href="#privacidade" style={link}>Política de Privacidade</a>
        <a href="#termos" style={link}>Termos de Uso</a>
        <a href="#cookies" style={{ ...link, borderBottom: "1px solid rgba(255,255,255,.08)" }}>Política de Cookies</a>
      </div>
      <div style={{ marginTop: 28, fontSize: 12, lineHeight: 1.7, color: "#7C6F72" }}>
        © 2026 Cherry Publicidade. Todos os direitos reservados.
        <br />
        Gerando negócios a anfitriões de Airbnb.
      </div>
    </footer>
  );
}
