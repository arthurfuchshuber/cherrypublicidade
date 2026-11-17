import symbol from "@/assets/simbolo.png";

export default function FooterD() {
  return (
    <footer style={{ background: "#050304", borderTop: "1px solid rgba(255,255,255,.08)", padding: "64px 0 36px 0" }}>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between", alignItems: "center" }}>
          <a href="#topo" style={{ display: "flex", alignItems: "center", gap: 14 }} aria-label="Cherry Publicidade">
            <img src={symbol} alt="Símbolo Cherry" style={{ width: 46, height: 46, borderRadius: "50%", display: "block" }} />
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 26, letterSpacing: "-0.04em" }}>Cherry</span>
              <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 8, letterSpacing: "0.42em", marginTop: 4, opacity: 0.8 }}>PUBLICIDADE</span>
            </span>
          </a>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, fontSize: 14, fontWeight: 500 }}>
            <a className="navl" href="#privacidade">Política de Privacidade</a>
            <a className="navl" href="#termos">Termos de Uso</a>
            <a className="navl" href="#cookies">Política de Cookies</a>
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.08)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", fontSize: 13, color: "#7C6F72" }}>
          <span>© 2026 Cherry Publicidade. Todos os direitos reservados.</span>
          <span>Gerando negócios a anfitriões de Airbnb.</span>
        </div>
      </div>
    </footer>
  );
}
