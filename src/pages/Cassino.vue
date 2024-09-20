<script setup>
import { cassinoList } from "../utils/cassinoList";
</script>

<template>
  <div class="game_list_container">
    <h2>Todos os jogos</h2>

    <ul class="game_list">
      <li class="game" v-for="game in cassinoList" :key="game">
        <RouterLink :to="`/cassino/${game.link}`">
          <img :src="game.image" :alt="`icon-${game.name}`" />
          {{ game.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #fff;
  text-align: center;
}

.game_list_container {
  width: 100%;
}

.game_list {
  display: flex;
  align-items: center;
  margin-top: 2em;
}

.game {
  padding: 12px 24px;
  gap: 12px;
  background-color: #0f1923;
  transition: .3s;


  &:hover {
    box-shadow: 0px 0px 16px #ffffff0c;
    background-color: #ffffff0c;
    transition: .3s;
  }
}

.game a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game img {
  max-width: 80px;
  margin-bottom: 12px;
}
</style>
