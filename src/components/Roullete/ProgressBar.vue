<script setup lang="ts">
const props = defineProps<{
  contador: number;
  resultado: number | undefined;
}>();
</script>

<template>
  <div class="progress-bar">
    <div class="progress-view">
      <div class="progress"></div>
    </div>
    <div v-if="props.contador > 0" class="time_left">
      Girando em <span>{{ Math.round(props.contador) / 100 }}</span>
    </div>
    <div v-else-if="props.resultado != 0" class="time_text">
      Macs Girou <span>{{ props.resultado }}!</span>
    </div>
    <div v-else class="time_text">
      <span>Girando...</span>
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  height: 38px;
  background-color: #262f3c;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
}

.progress-bar .progress {
  width: calc(100% - 16px);
  z-index: 0;
  position: absolute;
  transition: 0.3s ease;
  top: 0;
  bottom: 0;
  height: 22px;
  background-color: #3399FF;
  border-radius: 4px;
}

.progress-bar .time_left {
  z-index: 1;
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  width: 100px;
  gap: 4px;
  text-align: center;
  color: #fff;
  position: absolute;
}

.progress-bar .time_text {
  font-size: 16px;
  font-weight: 600;
  gap: 4px;
  text-align: center;
  color: #fff;
  position: absolute;
}

.progress-view {
  border-radius: 4px;
  position: relative;
  width: 100%;
  height: 22px;
  overflow: hidden;
  border-radius: 4px;
}
</style>
