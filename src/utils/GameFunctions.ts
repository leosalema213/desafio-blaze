import { GameState, Numero, ProgressElement } from "./interface";

export const loadingGame = (
  gameState: GameState,
  progressElement: ProgressElement
): void => {
  gameState.jogo = "loading";

  const updateContador = (): void => {
    if (gameState.contador > 0) {
      gameState.contador--;
      requestAnimationFrame(updateContador);
    }
  };

  const updateProgress = (): void => {
    if (gameState.progress! <= 100) {
      gameState.progress!++;
      progressElement.style.transform = `translateX(-${gameState.progress}%)`;
      setTimeout(() => {
        requestAnimationFrame(updateProgress);
      }, 76);
    }
  };

  setTimeout(() => {
    requestAnimationFrame(updateContador);
    updateProgress();
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
