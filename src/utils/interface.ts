export interface GameState {
  jogo: "true" | "false" | "loading" | "newGame";
  contador: number;
  entradas: Entrada[];
  progress?: number;
  ultimosResultados?: number[];
  resultado?: number;
}

export interface Numero {
  value: number;
  cordenadas: {
    inicio: number;
    centro: number;
  };
}

export interface ProgressElement {
  style: {
    transform: string;
  };
}

export interface Coordenadas {
  centro: number;
  inicio: number;
  fim: number;
}

export interface Entrada {
  value: number;
  cordenadas: Coordenadas;
}
