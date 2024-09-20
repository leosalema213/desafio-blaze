<script setup lang="ts">
import { reactive, onMounted } from "vue";
import CardBets from "./Roullete/CardBets.vue";
import RoulettController from "./Roullete/RouletteController.vue";
import Roulette from "./Roullete/Roulette.vue";
import RoulettResults from "./Roullete/RoletteResults.vue";

import { entradas } from "../utils/entradas.ts";
import {
  loadingGame,
  spinRolette,
  reset,
  differenceRouletteCenter,
} from "../utils/GameFunctions.ts";
import { Entrada, GameState } from "../utils/interface.ts";

const gameState = reactive<GameState>({
  jogo: "false",
  contador: 1200,
  entradas: entradas(),
  progress: 0,
  ultimosResultados: [],
  resultado: 0,
});

function sortearNumero(max: number, min: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numeroSorteado(numero: number): Entrada {
  return gameState.entradas[numero];
}

// Função para iniciar o jogo
function startGame(): number {
  const progress = document.querySelector(".progress") as HTMLElement;

  const gameLoop = setInterval(() => {
    switch (gameState.jogo) {
      case "true":
        const numero = numeroSorteado(sortearNumero(134, 120));
        spinRolette(gameState, numero);
        break;

      case "false":
        loadingGame(gameState, progress);
        break;

      case "loading":
        break;

      case "newGame":
        reset(gameState);
        break;
    }
  }, 1000);

  return gameLoop;
}

// Executa ao montar o componente
onMounted(() => {
  differenceRouletteCenter();

  startGame();
});
</script>

<template>
  <div class="content">
    <div class="double_container">
      <div class="game_controller">
        <RoulettController />

        <div class="game_wrapper">
          <Roulette
            :resultado="gameState.resultado"
            :contador="gameState.contador"
            :entradas="gameState.entradas"
            :jogo="gameState.jogo"
          />
          <RoulettResults :ultimosResultados="gameState.ultimosResultados" />
        </div>
      </div>
      <div class="bets_container">
        <div class="bets_header">
          <div class="bets_title"><span>APOSTAS</span></div>
          <div class="separator"></div>
        </div>
        <div class="bets_body">
          <CardBets :color="'red'" />
          <CardBets :color="'white'" />
          <CardBets :color="'black'" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.double_container {
  width: 100%;
}

.game_controller {
  display: flex;
  background-color: #1a242d;
  height: 449px !important;
  width: 100%;
  border-radius: 8px;
}

.content {
  justify-content: space-between;
}

.game_wrapper {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 70%;
}

.bets_container {
  display: flex;
  flex-direction: column;
  background-color: #1a242d;
  height: 449px !important;
  width: 100%;
  border-radius: 8px;
  margin-top: 48px;
  padding: 0 48px;
}

.bets_header {
  flex-direction: row;
  margin-top: 38px;
  display: flex;
}

.bets_title {
  width: 100px;
  padding: 0 15px 10px;
  border-bottom: 2px solid rgb(241, 44, 76);
  text-align: center;
}

.separator {
  border-bottom: 2px solid #323b45;
  flex-grow: 1;
  padding: 0 15px 10px;
}

.bets_title > span {
  font-weight: 800;
  font-size: 12px;
  line-height: 24px;
  margin-bottom: 18px;
  display: inline-block;
  color: #fff;
}

.bets_body {
  width: 100%;
  display: flex;
}

@media (max-width: 1100px) {
  .game_controller {
    flex-direction: column-reverse;
    align-items: center;
    height: 100% !important;
  }

  .game_wrapper {
    flex-direction: column-reverse;
    max-width: 726px;
    width: 100%;
  }

  #roulette {
    padding: 0;
  }

  .roullete_controler {
    width: 100%;
    max-width: 726px;
    border-right: none;
    padding: 20px 0;
  }
}

@media (max-width: 768px) {
  .bets_body {
    flex-direction: column;
  }

  .content {
    padding: 0;
  }

  .bets_container {
    height: 100% !important;
    padding: 0px 12px 30px;
  }

  .game_controller {
    flex-direction: column-reverse;
    height: 100% !important;
  }

  .roullete_controler {
    padding: 20px;
  }
  .game_wrapper {
    padding: 20px;
    width: 100%;
    flex-direction: column-reverse;
  }
}
</style>
