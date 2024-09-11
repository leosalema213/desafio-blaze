import { GameState, Numero, ProgressElement } from "./interface";

export const loadingGame = (
  gameState: GameState,
  progressElement: ProgressElement
): void => {
  gameState.jogo = "loading";

  let lastTimeContador = performance.now();
  let lastTimeProgress = performance.now();

  const updateContador = (currentTime: number): void => {
    const deltaTime = currentTime - lastTimeContador;
    lastTimeContador = currentTime;

    if (gameState.contador > 0) {
      const decrementoPorSegundo = 1;
      const decremento = (decrementoPorSegundo * deltaTime) / 10;
      gameState.contador -= decremento;

      if (gameState.contador < 0) gameState.contador = 0;

      requestAnimationFrame(updateContador);
    }
  };

  const updateProgress = (currentTime: number): void => {
    const deltaTime = currentTime - lastTimeProgress;
    lastTimeProgress = currentTime;

    const incrementoPorSegundo = window.innerWidth <= 768 ? 0.83 : 1.31;
    const incremento = (incrementoPorSegundo * deltaTime) / 150;
    if (gameState.progress! <= 100) {
      gameState.progress! += incremento;
      if (gameState.progress! > 100) gameState.progress! = 100;

      progressElement.style.transform = `translateX(-${gameState.progress}%)`;

      requestAnimationFrame(updateProgress);
    }
  };

  setTimeout(() => {
    requestAnimationFrame(updateContador);
    requestAnimationFrame(updateProgress);
  }, 2000);

  setTimeout(() => {
    gameState.jogo = "true";
  }, 14000);
};

export function spinRolette(gameState: GameState, numero: Numero): void {
  gameState.jogo = "loading";

  const slider = document.querySelector<HTMLDivElement>(".slider_animation");

  const setTransform = (
    element: HTMLDivElement | null,
    xPosition: number,
    duration: number
  ): void => {
    if (element) {
      element.style.transform = `translateX(${xPosition}px)`;
      element.style.transitionDuration = `${duration}ms`;
    }
  };

  const initialTransitionDuration = 7800;
  const centerTransitionDuration = 1400;
  const gameResetDelay = 10000;
  let inicio = numero.cordenadas.inicio;
  let centro = numero.cordenadas.centro;

  if (window.innerWidth <= 768) {
    let diferenca = (768 - window.innerWidth) / 2;

    let inicioCalc = inicio - diferenca;
    let centroCalc = centro - diferenca;

    inicio = inicioCalc;
    centro = centroCalc;
  }

  setTransform(slider, inicio, initialTransitionDuration);

  setTimeout(() => {
    setTransform(slider, centro, centerTransitionDuration);

    gameState.resultado = numero.value;
    gameState.ultimosResultados?.unshift(numero.value);
  }, initialTransitionDuration);

  setTimeout(() => {
    gameState.jogo = "newGame";
  }, gameResetDelay);
}

export function differenceRouletteCenter() {
  const displayWidth = window.innerWidth;
  const slider = document.querySelector<HTMLDivElement>(
    "#roulette_slider .entries"
  );

  if (slider && displayWidth <= 768) {
    let difference: number = (768 - displayWidth) / 2;

    let newTranslate: number = -1145 - difference;

    slider.style.transform = `translateX(${newTranslate}px)`;
  } else {
    slider!.style.transform = `translateX(-1145px)`;
  }
}

export function reset(gameState: GameState): void {
  const slider = document.querySelector<HTMLDivElement>(".slider_animation");
  const progress = document.querySelector<HTMLDivElement>(".progress");

  gameState.resultado = 0;
  gameState.contador = 1200;
  gameState.progress = 0;

  if (slider) {
    differenceRouletteCenter();

    slider.style.transitionDuration = "1000ms";
  }

  if (progress) {
    progress.style.transform = "translateX(0)";
  }

  gameState.jogo = "false";
}
