import { Entrada } from "../utils/interface";

export const entradas = (): Entrada[] => {
  const entradas: Entrada[] = [];
  let valor = 1;
  let centro = 312;

  for (let i = 1; i <= 225; i++) {
    const item: Entrada = {
      value: valor,
      cordenadas: {
        centro: centro,
        inicio: centro + 40,
        fim: centro - 50, // Correção de "+ -50" para apenas "- 50"
      },
    };
    entradas.push(item);

    valor++;

    if (valor === 16) {
      valor = 1;
    }
    centro = centro - 104;
  }

  return entradas;
};
