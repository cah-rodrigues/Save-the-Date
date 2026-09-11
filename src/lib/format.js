const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const money = (value) => brl.format(value);

export const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
