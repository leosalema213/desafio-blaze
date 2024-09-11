<script setup lang="ts">
import Progress from "./ProgressBar.vue";

import { Entrada } from "../../utils/interface.ts";

import { differenceRouletteCenter } from "../../utils/GameFunctions";

const props = defineProps<{
  contador: number;
  entradas: Entrada[];
  resultado: number;
  jogo: "true" | "false" | "loading" | "newGame";
}>();

window.addEventListener("resize", function () {
  differenceRouletteCenter();
});
</script>

<template>
  <div id="roulette">
    <div class="game">
      <div id="roulette_timer">
        <Progress :contador="props.contador" :resultado="props.resultado" />
      </div>
      <div id="roulette_slider" :class="props.jogo">
        <div class="selector"></div>

        <div class="wrapper">
          <div id="roulette_slider_entries" class="entries slider_animation">
            <div v-for="entry in entradas" :key="entry.value">
              <div class="tile_wrapper" style="background-color: black">
                <div class="roulette_tile">
                  <div
                    v-if="entry.value != 15"
                    class="lg_box black"
                    :class="{
                      red: entry.value % 2,
                      white: entry.value == 15,
                    }"
                  >
                    <div class="number">
                      {{ entry.value }}
                    </div>
                  </div>
                  <div
                    v-else
                    class="lg_box white"
                    style="background-color: white"
                  >
                    <img src="../../assets/roulette-icon.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#roulette {
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 0;
  position: relative;
}

.game {
  overflow: hidden;
  width: 100%;
  background-color: #0f1923;
  border-radius: 4px;
}

#roulette_timer {
  padding: 24px 24px 0;
  width: 100%;
  border-radius: 4px;
  z-index: 99;
  position: relative;
}

#roulette_slider {
  position: relative;
  transition: all 1s ease;
  opacity: 1;
  margin-bottom: 96px;
  margin-top: 74px;
  width: 100% !important;

  &.loading,
  &.newGame,
  &.false {
    opacity: 0.2;
  }
}

#roulette_slider .selector,
.roulette_tile,
#roulette .lg_box,
#roulette .lg_box .number {
  display: flex;
  align-items: center;
  justify-content: center;
}

#roulette_slider .selector {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 4px;
  height: 160px;
  background-color: #fff;
  z-index: 1;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-dd;
}

#roulette_slider .tile_wrapper {
  border-radius: 4px;
}

#roulette_slider .wrapper {
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
}

#roulette_slider .entries {
  display: flex;
  transform: translateX(-1145px);

  transition-duration: 2200ms;
  transition-delay: 0ms;
}

.roulette_tile {
  padding: 0 4px;
}

#roulette .lg_box {
  width: 96px;
  height: 96px;
  border-radius: 4px;

  &.black {
    background-color: #262f3c;
  }

  &.red {
    background-color: #f12c4c;
  }

  &.white {
    background-color: #fff !important;
  }
}

#roulette .lg_box .number {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 4px solid #fff;
  font-size: 18px;
  letter-spacing: -1px;
  color: #fff;
}
</style>
