import { photos } from "../lib/media";

/** Ponto unico de edicao do conteudo do site. */
export const couple = {
  bride: "Carla",
  groom: "Breno",
  hashtag: "#BrenoECarla2027",
};

export const wedding = {
  // 03 de janeiro de 2027, domingo, 16h
  date: new Date(2027, 0, 3, 16, 0, 0),
  dateLabel: "03 de janeiro de 2027",
  dateShort: "03 . 01 . 2027",
  weekday: "Domingo",
  time: "16:00",
  city: "Rochedo",
  state: "MS",
};

/** Confirmacao de presenca acontece fora do site, no Vou TB. */
export const rsvpUrl = "https://voutb.com.br/confirmar/142687/breno-e-carla";

/**
 * WhatsApp para sugestoes de musica e recados.
 * `digits` e o numero em formato internacional, sem sinais, usado no link
 * wa.me. Se o numero mudar, ajuste `digits` e `label` juntos.
 */
export const whatsapp = {
  digits: "556784025271",
  label: "(67) 8402-5271",
};

/** Monta o link do WhatsApp ja com a primeira mensagem digitada. */
export const whatsappLink = (message) =>
  `https://wa.me/${whatsapp.digits}` +
  (message ? `?text=${encodeURIComponent(message)}` : "");

export const whatsappUrl = whatsappLink(
  "Oi! Vi o site do casamento de Breno e Carla e queria falar com voces.",
);

export const whatsappSuggestionUrl = whatsappLink(
  "Oi! Queria sugerir uma musica para a playlist do casamento: ",
);

export const navigation = [
  { id: "convite", label: "O convite" },
  { id: "grande-dia", label: "O grande dia" },
  { id: "galeria", label: "Galeria" },
  { route: "/playlist", label: "Playlist" },
  { route: "/presentes", label: "Presentes" },
];

export const ceremony = {
  eyebrow: "Domingo, 16:00 horas",
  title: "A cerimônia",
  place: "Salão do Reino das Testemunhas de Jeová",
  address: "R. Antônio Lúcio, 666, Parque dos Diamantes, Rochedo/MS",
  note: "Pedimos a gentileza de chegar com 30 minutos de antecedência.",
  mapsUrl: "https://maps.app.goo.gl/otYFqPzEPED7C5xu8",
};

/** Orientacao de traje, com uma sugestao para cada convidado. */
export const dressCode = {
  title: "Traje social",
  intro: "",
  items: [
    {
      icon: "dress",
      title: "Para os homens",
      text: "O traje pode ser social com terno e gravata, ou algo mais leve, como uma combinação de calça de sarja elegante com camisa social.",
    },
    {
      icon: "dress",
      title: "Para as mulheres",
      text: "Sugerimos vestidos longos ou midi e sapatos confortáveis.",
    },
  ],
};

export const infoCards = [
  {
    icon: "clock",
    title: "Chegue com antecedência",
    text: "Esteja no salão se possível 30 minutos antes para se acomodar com calma.",
  },
  {
    icon: "pin",
    title: "Como chegar",
    text: "O salão fica no Parque dos Diamantes, em Rochedo. Fica cerca de 1 hora de Campo Grande.",
  },
];

/**
 * Galeria em mosaico. `span` diz o formato do bloco na grade:
 * "wide" ocupa duas colunas (foto deitada) e "tall" ocupa uma (foto em pe).
 * A ordem abaixo faz os blocos se encaixarem sem sobra, no celular e no
 * desktop. Trocar a ordem quebra o encaixe.
 */
export const gallery = [
  { ...photos.abraco, span: "wide" },
  { ...photos.pedido, span: "tall" },
  { ...photos.banco, span: "tall" },

  { ...photos.maos, span: "tall" },
  { ...photos.caminho, span: "tall" },
  { ...photos.beijo, span: "wide" },

  { ...photos.entardecer, span: "wide" },
  { ...photos.piquenique, span: "tall" },
  { ...photos.flor, span: "tall" },
];

export const playlist = {
  embedUrl:
    "https://open.spotify.com/embed/playlist/5feKZY1YnaDq9zxknr0gjl?utm_source=generator&theme=0",
  openUrl: "https://open.spotify.com/playlist/5feKZY1YnaDq9zxknr0gjl",
};
