export type Persona = "host" | "prest";

export const ACCENT = "#E5566B";

export const SLOT_WORDS = ["anfitriões.", "prestadores.", "anfitriões."];

export const BLIP_POS: [number, number][] = [
  [34, 20],
  [44, 11],
  [54, 7],
  [64, 12],
  [72, 20],
  [26, 22],
];

export type Lead = { first: string; last: string; what: string; f: boolean };

const L = (first: string, last: string, what: string, f: boolean): Lead => ({ first, last, what, f });

export const FEED: Record<Persona, Lead[]> = {
  host: [
    L("Marcos", "Silveira", "Studio até 35 m² · Campo Belo · SP", false),
    L("Camila", "Rezende", "Apartamento +2 quartos · Ipiranga · SP", true),
  ],
  prest: [
    L("Bruno", "Teixeira", "2 imóveis · Liberdade · SP · limpeza", false),
    L("Larissa", "Monteiro", "3 imóveis · Santana · SP · manutenção", true),
  ],
};

export const PINGS: Record<Persona, Lead[]> = {
  host: [
    L("Eduardo", "Figueiredo", "Studio até 35 m² · Jardim São Paulo · SP", false),
    L("Beatriz", "Cardoso", "Apartamento +2 quartos · Liberdade · SP", true),
  ],
  prest: [
    L("Rafael", "Nascimento", "2 imóveis · Vila Romana · SP · limpeza", false),
    L("Aline", "Barbosa", "1 imóvel · Liberdade · SP · fotos", true),
  ],
};

export const roleLabel = (persona: Persona, f: boolean) =>
  persona === "host" ? (f ? "Proprietária: " : "Proprietário: ") : f ? "Anfitriã: " : "Anfitrião: ";

export const STOP_TITLES = ["Diagnóstico", "Anúncio", "Qualificação", "Lead na sua mão", "Contrato"];
export const STOP_WHOS = ["Cherry", "Cherry", "Cherry", "Você", "Você"];
export const KNOTS: [number, number, "r" | "l"][] = [
  [60, 520, "r"],
  [280, 400, "l"],
  [90, 290, "r"],
  [270, 170, "l"],
  [290, 50, "l"],
];

export const STOP_COPY: Record<Persona, { desc: string; metric: string }[]> = {
  host: [
    { desc: "Mapeamos a sua operação, as regiões onde você quer crescer e o perfil de proprietário ideal. Definimos a oferta de gestão que faz o dono do imóvel se interessar.", metric: "Oferta de gestão definida" },
    { desc: "Anúncios no ar nas redes sociais, falando com donos de imóveis da região certa, com a mensagem de rentabilidade e tranquilidade da sua gestão.", metric: "Custo por lead" },
    { desc: "O formulário filtra região, tipo e quantidade de imóveis e momento de decisão. Só chega até você proprietário com real interesse em gestão.", metric: "Leads qualificados" },
    { desc: "O proprietário chega pronto para você abordar. Entre em contato rápido, apresente a sua proposta de gestão e tire as dúvidas dele.", metric: "Taxa de resposta" },
    { desc: "Você fecha o contrato de gestão. A Cherry mede o custo por imóvel captado e usa esse dado para otimizar as campanhas da semana seguinte.", metric: "Custo por imóvel captado" },
  ],
  prest: [
    { desc: "Mapeamos o seu serviço, a região que você atende e o perfil de anfitrião ideal. Definimos a oferta que mostra por que contratar você, e não outro prestador.", metric: "Oferta de serviço definida" },
    { desc: "Anúncios no ar nas redes sociais, falando com anfitriões e gestores da sua região que precisam de limpeza, manutenção, fotografia e mais.", metric: "Custo por lead" },
    { desc: "O formulário filtra região, número de imóveis e o serviço de que o anfitrião precisa. Só chega até você quem realmente quer contratar.", metric: "Leads qualificados" },
    { desc: "O anfitrião chega pronto para você responder, orçar e combinar a data. Quanto mais rápido o retorno, maiores as chances de fechar.", metric: "Taxa de resposta" },
    { desc: "Você fecha o serviço e pode transformá-lo em contrato recorrente. A Cherry mede o custo por serviço fechado e otimiza as campanhas da semana seguinte.", metric: "Custo por serviço fechado" },
  ],
};

export const KPIS = [
  { l: "Investimento", v: "R$ 486,59" },
  { l: "Leads Gerados", v: "15" },
  { l: "Custo por Lead", v: "R$ 32,44" },
  { l: "Interesse Imediato", v: "67%" },
];

export const DAYS = ["Sáb", "Dom", "Seg", "Ter", "Qua", "Qui", "Sex"];
export const CHART_AREA = "M0 200 L106.7 173.3 L213.3 200 L320 40 L426.7 120 L533.3 146.7 L640 120 L640 220 L0 220 Z";
export const CHART_LINE = "M0 200 L106.7 173.3 L213.3 200 L320 40 L426.7 120 L533.3 146.7 L640 120";

export const CYCLE = ["Leitura dos números", "Otimização", "Relatório semanal", "Feedback dos leads"];

export const GOALS: Record<Persona, string[]> = {
  host: ["Captar mais imóveis para gerenciar.", "Expandir para uma nova região", "Aumentar o meu portfólio de Airbnb."],
  prest: ["Conseguir mais clientes na minha região", "Expandir para novas cidades", "Fechar contratos recorrentes"],
};
export const STRUCTS = ["Atendo os leads sozinho(a)", "Tenho equipe comercial", "Opero em várias cidades"];

// ===== Desktop =====
export const BLIP_POS_D: [number, number][] = [[24, 19], [36, 12], [48, 7], [60, 11], [70, 6], [80, 17], [16, 18], [54, 18], [42, 19]];

export const FEED_D: Lead[] = [
  L("Marcos", "Silveira", "Studio até 35 m² · Campo Belo · SP", false),
  L("Camila", "Rezende", "Apartamento +2 quartos · Ipiranga · SP", true),
  L("Ricardo", "Moreira", "Casa em condomínio · Santana · SP", false),
  L("Juliana", "Prado", "Studio até 35 m² · Vila Romana · SP", true),
];

export const PINGS_D: Lead[] = [
  L("Eduardo", "Figueiredo", "Studio até 35 m² · Jardim São Paulo · SP", false),
  L("Beatriz", "Cardoso", "Apartamento +2 quartos · Liberdade · SP", true),
  L("Thiago", "Albuquerque", "Casa em rua pública · Centro · SP", false),
  L("Renata", "Carvalho", "Casa em condomínio · Ipiranga · SP", true),
];

export const STOP_POS_D: [number, number][] = [[7.5, 80.6], [30, 61.3], [53.3, 48.4], [75, 54.8], [92.5, 21]];

export const KPI_SPARK = [
  "M0 24 L14 20 L28 22 L42 15 L56 17 L70 10 L84 12 L100 4",
  "M0 26 L14 22 L28 18 L42 20 L56 12 L70 14 L84 7 L100 5",
  "M0 6 L14 9 L28 8 L42 14 L56 12 L70 18 L84 17 L100 24",
  "M0 20 L14 22 L28 16 L42 17 L56 11 L70 13 L84 6 L100 8",
];

export const CYCLE_D = [
  { n: "01 / LEITURA", t: "Leitura dos números", d: "Investimento, leads, custo por lead e qualidade dos contatos." },
  { n: "02 / AJUSTE", t: "Otimização", d: "Ajustes em criativos, públicos e orçamento com base nos dados." },
  { n: "03 / RELATÓRIO", t: "Relatório semanal", d: "Resumo claro do que entrou, do que mudou e do que vem a seguir." },
  { n: "04 / ALINHAMENTO", t: "Feedback dos leads", d: "Você sinaliza a qualidade e a Cherry ajusta a campanha na sequência." },
];

export const GOALS_D = ["Captar mais imóveis para a minha gestão", "Expandir para uma nova região", "Aumentar o meu portfólio de Airbnb."];

export const FAQ_ITEMS: [string, string][] = [
  ["Por que o lead da Cherry custa mais que um lead de R$ 5?", "Porque o foco é qualidade, não volume. O formulário filtra região, tipo e quantidade de imóveis, então chega até você só quem tem interesse real. Na semana 24–30/10, 10 de 15 leads queriam iniciar imediatamente."],
  ["Como sei que o lead é qualificado?", "Cada contato passa pelo filtro do formulário antes de chegar até você. Depois, você sinaliza a qualidade de cada lead e a Cherry ajusta a campanha na semana seguinte."],
  ["Preciso ter equipe comercial?", "Não. Você pode atender os leads sozinho(a) ou com a sua equipe. No diagnóstico, você conta como é o seu atendimento e o caminho é montado a partir dele."],
  ["Como acompanho os resultados?", "Pelo painel semanal, com investimento, leads gerados, custo por lead e interesse imediato, e pelo relatório semanal com o que entrou e o que mudou."],
  ["O que acontece depois do diagnóstico?", "A Cherry fala com você pelo WhatsApp para apresentar o caminho montado para o seu perfil."],
];
