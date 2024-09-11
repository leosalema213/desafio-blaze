<script setup lang="ts">

const props = defineProps<{
  color: 'red' | 'black' | 'white';
}>();

</script>

<template>
  <div class="card_container">
    <div class="card">
      <div class="card_header">
        <span v-if="props.color == 'red'">Vitória 2X</span>
        <span v-else-if="props.color == 'black'">Vitória 2X</span>
        <span v-else="props.color == 'white'">Vitória 14X</span>
        <div class="roulette_tile">
          <img
            v-if="props.color == 'red'"
            class="sm_box"
            alt=""
            src="../../assets/bets-icons/bets-red.svg"
          />
          <img
            v-if="props.color == 'black'"
            class="sm_box"
            alt=""
            src="../../assets/bets-icons/bets-black.svg"
          />
          <img
            v-if="props.color == 'white'"
            class="sm_box"
            alt=""
            src="../../assets/bets-icons/bets-white.svg"
          />
        </div>
      </div>
      <div class="card_body">
        <div class="total">
          <p>Total apostas</p>
          <div class="counter"><span> R$ 100,00 </span></div>
        </div>
        <div class="entries">
          <div class="entries_header">
            <p>Usuário</p>
            <p>Quantia</p>
          </div>
          <div class="entry">
            <div class="username">
              <div class="user_rank">
                <img alt="rank" src="../../assets/ranks/rank-gold.svg" />
              </div>
              <a class="user_profile_link" href="#">jõao</a>
            </div>
            <div class="amount">R$ 100,00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card_container {
  padding: 0 16px;
  flex-basis: 33.33%;
  max-width: 33.33%;
}

.card {
  margin-top: 20px;
  transition: all 1s ease;
  border-radius: 8px;
  box-shadow: 0 5px 20px 0 rgba(6, 10, 14, 0.25);
  background-color: #1a242d;
  padding: 0 16px;
}

.card_header,
.entries .entries_header,
.card_body .total,
.entries .entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card_header {
  height: 80px;
  background: none;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border-bottom: 1px solid #323b45;
  padding-left: 8px;
}

.user_rank,
.roulette_tile,
.sm_box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card_body {
  width: 100%;
  padding-bottom: 16px;
}

.card_body .total {
  margin-top: 18px;
  font-size: 12px;
  color: #fff;
  padding: 0 8px;
}

.entries .entries_header {
  margin-top: 24px;
  height: 32px;
  border-radius: 4px;
  background-color: #262f3c;
  font-size: 12px;
  font-weight: 600;
  color: #bcbfc7;
  padding: 0 16px;
}
.entries .entry {
  padding: 16px;
  border-bottom: 1px solid #323b45;
}
.entry .username {
  font-size: 12px;
  font-weight: 500;
  color: #aab0c3;
  text-align: left;
  padding-right: 15px;
  display: flex;
  align-items: center;
}

.user_rank {
  font-size: 12px;
  font-weight: 600;
}

.user_rank img {
  margin-right: 8px;
}

.user_profile_link {
  display: block;
  text-overflow: ellipsis;
  max-width: 120px;
  overflow: hidden;
}

.entry .amount {
  font-size: 12px;
  font-weight: 500;
  color: #fff;
}

.sm_box {
  width: 35px !important;
  height: 35px !important;
}

@media (max-width: 768px) {
  .card_container[data-v-bf65d6c8] {
    flex-basis: 100%;
    max-width: 100%;
  }
}
</style>
