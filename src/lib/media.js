/**
 * Fotos que moram em `public/assets`. Usamos BASE_URL para que os caminhos
 * continuem corretos quando o site e publicado em /Save-the-Date/.
 */
const base = import.meta.env.BASE_URL;

export const photo = (file) => `${base}assets/${file}`;

/**
 * Catalogo das fotos do casal. `w` e `h` sao as medidas reais do arquivo:
 * entram no atributo width/height da imagem para reservar o espaco certo
 * (sem CLS) e para que o navegador nunca deforme a foto.
 */
const make = (file, w, h, alt) => ({ src: photo(file), w, h, ratio: `${w}/${h}`, alt });

export const photos = {
  banco: make(
    "20260821_140933.jpg",
    722,
    963,
    "Breno e Carla sentados em um banco no jardim, olhando um para o outro",
  ),
  flor: make(
    "20260821_142039.jpg",
    1080,
    963,
    "Breno entregando uma flor para Carla em frente a um canteiro florido",
  ),
  abraco: make("20260821_143401.jpg", 1284, 963, "Breno e Carla abracados no jardim japones"),
  maos: make("20260821_143807.jpg", 722, 963, "Maos dadas de Breno e Carla"),
  caminho: make(
    "20260821_145138.jpg",
    664,
    963,
    "Breno e Carla caminhando de maos dadas por uma trilha",
  ),
  beijo: make(
    "20260821_145451.jpg",
    1284,
    963,
    "Breno beijando a testa de Carla sob as arvores do jardim",
  ),
  pedido: make(
    "20260821_145807.jpg",
    722,
    963,
    "Breno ajoelhado fazendo o pedido de casamento para Carla, com a alianca na mao",
  ),
  piquenique: make(
    "20260821_154012.jpg",
    722,
    963,
    "Breno e Carla sentados sobre uma manta em um piquenique",
  ),
  entardecer: make(
    "20260821_163121.jpg",
    1284,
    963,
    "Breno e Carla de costas, sentados juntos no fim da tarde",
  ),
};
