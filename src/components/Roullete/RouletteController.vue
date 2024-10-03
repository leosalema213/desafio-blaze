<script setup>
import { reactive, ref, onMounted } from "vue";

const state = reactive({
  color: "",
  isFocused: false,
  amount: null,
});

function changeState(color) {
  state.color = color;
}

function handleFocus() {
  state.isFocused = true;
}

function doubleValue() {
  let value = state.amount * 2;

  value = value.toFixed(2);

  value = value.replace(/^(\d{0,5})(\.\d{0,2})?.*$/, "$1$2");

  state.amount = value;
}

function formatAmount(e) {
  let value = e.target.value;

  // Usa uma expressão regular para limitar o número de dígitos antes e depois do ponto
  value = value.replace(/^(\d{0,5})(\.\d{0,2})?.*$/, "$1$2");

  // Atualiza o v-model com o valor formatado
  this.state.amount = value;
}

function halveValue() {
  let value = state.amount / 2;

  value = value.toFixed(2);

  value = value.replace(/^(\d{0,5})(\.\d{0,2})?.*$/, "$1$2");

  state.amount = value;
}

function handleBlur() {
  if (state.amount == "" || state.amount == 0) {
    state.amount = null;

    state.isFocused = false;
  }
}

const myInput = ref(null);
const inputContainer = ref(null);
</script>

<template>
  <div class="roullete_controler">
    <div class="tabbed_nav">
      <button class="tabbed_button active">Normal</button>
      <button class="tabbed_button">Auto</button>
    </div>
    <div class="inputs_wrapper">
      <div class="input_row">
        <div
          ref="inputContainer"
          class="input_field_wrapper"
          :class="{ filled: state.isFocused }"
        >
          <span class="label">Quantia</span>
          <input
            @focus="handleFocus"
            @blur="handleBlur"
            @input="(e) => formatAmount(e)"
            v-model="state.amount"
            ref="myInput"
            type="number"
          />
        </div>

        <button @click="halveValue" class="half" style="border-radius: 4px">
          ½
        </button>
        <button @click="doubleValue" class="double" style="border-radius: 4px">
          2x
        </button>
      </div>

      <div class="select_color">
        <p>Selecionar Cor</p>
        <div class="buttons_container">
          <div
            @click="() => changeState('red')"
            :class="{ active_red: state.color == 'red' }"
          >
            <button class="red">x2</button>
          </div>
          <div :class="{ active_white: state.color === 'white' }">
            <button @click="() => changeState('white')" class="white">
              x14
            </button>
          </div>
          <div :class="{ active_black: state.color === 'black' }">
            <button @click="() => changeState('black')" class="black">
              x2
            </button>
          </div>
        </div>
      </div>

      <button class="btn">Começar o jogo</button>
    </div>
  </div>
</template>

<style scoped>
.roullete_controler {
  padding: 16px 24px;
  height: 100%;
  width: 30%;
  border-right: 1px solid #323b45;
}

.game_wrapper {
  height: 100%;
  width: 70%;
}

.roulette,
.roulette-recent {
  padding: 12px;
}

.tabbed_nav {
  display: flex;
  justify-content: center;
  padding: 4px;
  margin-bottom: 16px;
  background-color: #1b242f;
  border: 1px solid #323b45;
  border-radius: 4px;
}

.tabbed_button {
  background-color: transparent;
  border: none;
  color: #fff;
  width: 50%;
  font-size: 12px;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 6px;

  &.active {
    background-color: #0f1923;
  }
}

.input_row,
button.half,
button.double,
.buttons_container,
.buttons_container div button {
  display: flex;
  align-items: center;
}

.input_row {
  margin-bottom: 16px;
  justify-content: space-between;
}

.input_field_wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  position: relative;
  background: #0f1923;
  border: 1px solid transparent;
  height: 48px;
  border-radius: 4px;
  flex-direction: column;
  padding: 5px 0 5px 16px;
  cursor: text;
  border-radius: 4px;
}

.input_field_wrapper .label {
  font-size: 10px;
  height: 15px;
  font-weight: 700;
  text-transform: capitalize;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: left;
  transition: all 0.2s ease;
  pointer-events: none;
  color: #fff;
}

.input_field_wrapper.filled .label {
  transform: scale(0.7);
  -webkit-transform-origin: top left;
  transform-origin: top left;
  top: 8px;
  transition: all 0.2s ease;
  font-size: 12px;
}

.input_field_wrapper input {
  padding: 10px 0 0;
  font-size: 12px;
  width: 90%;
  border: none;
  border-radius: 3px;
  outline: none;
  background-color: initial;
  font-weight: 600 !important;
  appearance: textfield;
  color: #fff;

  &.filled {
    margin-top: 14px;
  }
}

button.half,
button.double {
  justify-content: center;
  width: 20%;
  height: 48px;
  border: 1px solid #323b45;
  background-color: #1a242d;
  font-weight: 600;
  text-transform: capitalize;
  transition: background 0.2s;
  color: #acb1cd;
  cursor: pointer;
}

button.half {
  font-size: 18px;
}

button.double {
  font-size: 12px;
}

.buttons_container {
  justify-content: space-around;
  width: 100%;
  margin-top: 8px;
  gap: 4px;
}

.select_color p {
  font-size: 14px;
  color: #bcbfc7;
}

.buttons_container div {
  width: calc(33.33333% - 2.66667px);
  border-radius: 4px;
  border: 2px solid transparent;

  &.active_red {
    border-color: #fff;
    padding: 2px;

    & button {
      border-radius: 0;
    }
  }

  &.active_black {
    border-color: #fff;
    padding: 2px;

    & button {
      border-radius: 0;
    }
  }

  &.active_white {
    border-color: #3399ff;
    padding: 2px;

    & button {
      border-radius: 0;
    }
  }
}

.buttons_container div button {
  justify-content: center;
  border-radius: 4px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  height: 46px;
  width: 100%;
  border: none;
  cursor: pointer;

  &.red {
    background-color: #3399ff;
    color: #fff;
  }

  &.white {
    background-color: #fff;
    color: #3399ff;
  }

  &.black {
    background-color: #343b4a;
    color: #fff;
  }
}

.btn {
  width: 100%;
  margin-top: 26px;
}
</style>
