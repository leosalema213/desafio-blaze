<script setup></script>

<template>
  <div class="register_container">
    <h2>Entre na sua conta</h2>

    <form>
      <label>
        <span>Email: </span>
        <input type="text" required />
      </label>
      <label>
        <span>Senha: </span>
        <input type="password" required/>
      </label>

      <button class="btn" type="submit">Entrar</button>
    </form>
  </div>
</template>

<style scoped>
.register_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

h2,
p {
  color: #fff;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 400px;
  margin: 2em 0;
}

form input {
  padding: 1em 20px 1em 70px;
  width: 400px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: 0.3s;

  &.confirm_password {
    padding: 1em 20px 1em 170px;
  }

  &:focus {
    border-color: #3399ff;
    box-shadow: 0px 0px 8px #3399ff70;
    transition: 0.3s;
  }
}

label {
  position: relative;
}

label span {
  position: absolute;
  left: 1em;
  top: 50%;
  translate: 0 -50%;
}

@media (max-width: 455px) {
  form {
    width: 100%;
  }

  form input {
    width: 100%;
    padding: 1em 20px 1em 60px;
  }

  form input .confirm_password {
    padding: 1em 20px 1em 146px;
  }

  label span {
    font-size: 14px;
  }
}
</style>
