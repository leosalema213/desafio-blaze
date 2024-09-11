<script setup lang="ts">
const props = defineProps<{
  ultimosResultados: number[];
}>();
</script>

<template>
  <div class="roulette_recent">
    <h3>Giros Anteriores</h3>
    <div class="roulette_previous casino-recent">
      <div class="entries">
        <div v-for="estado in props.ultimosResultados" class="entry">
          <div class="roulette_tile">
            <div
              v-if="estado != 15"
              class="sm_box black"
              :class="{
                red: estado % 2,
                white: estado == 15,
              }"
            >
              <div class="number">
                {{ estado }}
              </div>
            </div>
            <div v-else class="sm_box white" style="background-color: white">
              <img src="../../assets/roulette-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.roulette_recent {
  padding: 16px 24px;
  width: 100%;
  text-align: left;
  position: relative;
}

.roulette_recent h3 {
  font-size: 12px;
  font-weight: 600;
  color: #bcbfc7;
  text-transform: uppercase;
  margin: 0;
}

.roulette_previous .casino-recent,
.entry .roulette_tile,
.roulette_tile .sm_box,
.sm_box .number {
  display: flex;
  align-items: center;
}

.roulette_previous .casino-recent {
  justify-content: space-between;
  text-transform: uppercase;
  flex-grow: 1;
  position: relative;
  margin-top: 8px;
  width: 100%;
}

.roulette_previous .entries {
  display: flex;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  flex-direction: row-reverse;
  min-height: 32px;
}

.roulette_previous .entries .entry {
  display: flex;
  margin-left: 0;
  margin-right: 0;
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;
}

.entry .roulette_tile {
  justify-content: center;
}

.roulette_tile .sm_box {
  height: 32px;
  width: 32px;
  border-radius: 4px;
  justify-content: center;
  margin-right: 8px;

  &.black {
    background-color: #262f3c;
  }

  &.red {
    background-color: #f12c4c;
  }

  &.white {
    background-color: #fff !important;
  }

  & img {
    width: 60%;
  }
}

.sm_box .number {
  font-size: 9px;
  letter-spacing: -0.5px;
  color: #bcbfc7;
  padding: 0;
  border: 2px solid #bcbfc7;
  width: 18px;
  height: 18px;
  justify-content: center;
  margin-top: -1px;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .roulette_recent {
    & h3 {
      display: none;
    }
  }
}
</style>
