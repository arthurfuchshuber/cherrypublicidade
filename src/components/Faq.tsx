import { useState } from "react";
import { ACCENT } from "@/lib/data";

const ITEMS: [string, string][] = [
  [
    "Por que o lead da Cherry custa mais que um lead de R$ 5?",
    "Porque o foco é qualidade, não volume. O formulário filtra região, tipo e quantidade de imóveis, então chega até você só quem tem interesse real. Na semana 24–30/10, 10 de 15 leads queriam iniciar imediatamente.",
  ],
  [
    "Como sei que o lead é qualificado?",
    "Cada contato passa pelo filtro do formulário antes de chegar até você. Depois, você sinaliza a qualidade de cada lead e a Cherry ajusta a campanha na semana seguinte.",
  ],
  [
    "Preciso ter equipe comercial?",
    "Não. Você pode atender os leads sozinho(a) ou com a sua equipe. No diagnóstico, você conta como é o seu atendimento e o caminho é montado a partir dele.",
  ],
  [
    "Como acompanho os resultados?",
    "Pelo painel semanal, com investimento, leads gerados, custo por lead e interesse imediato, e pelo relatório semanal com o que entrou e o que mudou.",
  ],
  [
    "O que acontece depois do diagnóstico?",
    "A Cherry fala com você pelo WhatsApp para apresentar o caminho montado para o seu perfil.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ background: "#050304", padding: "72px 20px", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div className="eyebrow" style={{ color: ACCENT }}>Perguntas frequentes</div>
      <h2 className="h2" style={{ margin: "16px 0 0 0", fontSize: 25, whiteSpace: "nowrap" }}>
        Tire as suas <span style={{ color: "#7C6F72" }}>dúvidas.</span>
      </h2>
      <p style={{ margin: "8px 0 0 0", fontSize: 16, lineHeight: 1.6, color: "#B9ACAE" }}>O que mais perguntam antes de começar.</p>

      <div style={{ marginTop: 36, border: "1px solid rgba(255,255,255,.14)", borderRadius: 22, background: "#0A0507", padding: "0 18px", overflow: "hidden" }}>
        {ITEMS.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <div key={q} style={i ? { borderTop: "1px solid rgba(255,255,255,.08)" } : undefined}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                style={{ width: "100%", minHeight: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, textAlign: "left", padding: "14px 0", border: 0, background: "transparent", color: "#F5F0EB", fontSize: 16, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.35 }}
              >
                <span>{q}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", transition: "transform .2s", transform: isOpen ? "rotate(180deg)" : "none" }}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {isOpen && <div className="fi" style={{ padding: "0 0 20px 0", fontSize: 14, lineHeight: 1.65, color: "#B9ACAE" }}>{a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
