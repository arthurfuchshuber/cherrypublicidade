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
