<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="home_container">
    <div class="hero_banner">
      <div class="hero_banner_content">
        <div>
          <h2>Bem-vindo a MacsBet!</h2>
          <p>Cadastre-se e receba bônus de depósito</p>
        </div>

        <RouterLink to="/register" class="btn"> Cadastre-se </RouterLink>

        <ul class="roadmap">
          <li>
            <img src="../assets/other-icons/register-icon.svg" alt="" />
            Cadastre-se
          </li>
          <img
            class="separator"
            src="../assets/other-icons/separator.svg"
            alt=""
          />
          <li>
            <img src="../assets/other-icons/deposity-icon.svg" alt="" />
            Depositar
          </li>
          <img
            class="separator"
            src="../assets/other-icons/separator.svg"
            alt=""
          />
          <li>
            <img src="../assets/other-icons/bonus-icon.svg" alt="" />
            Ganhe Bônus!
          </li>
        </ul>
      </div>
      <img class="avatar" src="../assets/personagem.png" alt="" />
    </div>

    <div class="sports-casino-wrapper">
      <div class="cassino">
        <div>
          <h3>Cassino</h3>
          <p>
            Aproveite nossa seleção exclusiva de slots, dealers ao vivo e jogos
            originais.
          </p>
          <RouterLink to="/cassino" class="btn"> IR AO CASSINO </RouterLink>
        </div>
      </div>
      <div class="sports">
        <div>
          <h3>Esportes</h3>
          <p>
            Nossas apostas esportivas intuitivas são feitas para jogadores novos
            e experientes.
          </p>
          <RouterLink to="/esportes" class="btn"> IR PARA ESPORTES </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home_container {
  width: 100%;
}

.hero_banner {
  position: relative;
  background-position: center;
  background-size: cover;
  background-image: url("../assets/macs-banner.jpg");
  width: 100%;
  height: 400px;
  display: flex;
  padding: 4em;
}

.hero_banner::after {
  width: 100%;
  height: 100%;
  background-color: #050101c7;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}

.hero_banner_content .btn {
  max-width: 120px;
  text-align: center;
}

.hero_banner_content {
  position: relative;
  z-index: 99;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero_banner h2 {
  color: #fff;
  font-size: 2em;
}

.hero_banner p {
  color: #fff;
  font-size: 1.2em;
  margin: 0.4em 0;
}

.avatar {
  position: relative;
  z-index: 99;
}

.roadmap {
  color: #fff;
  display: flex;
  gap: 12px;
}

.sports-casino-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  color: #fff;
}

.sports-casino-wrapper p {
  font-size: 14px;
}

.cassino,
.sports {
  width: 48%;

  background-repeat: no-repeat;
  background-position: bottom right;
  background-color: #1a242d;

  & div {
    padding: 30px;
  }

  & p {
    max-width: 280px;
    margin: 2em 0 4em;
  }
}

.cassino {
  background-image: url("../assets/slot-image.png");
}

.sports {
  background-image: url("../assets/sports-image.png");
}

@media (max-width: 455px) {
  .avatar {
    display: none;
  }
  .hero_banner {
    padding: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
  }

  .roadmap li {
    font-size: 12px;
  }

  ul.roadmap {
    flex-direction: column;
  }

  img.separator {
    transform: rotate(90deg);
    width: 18px;
  }

  .sports-casino-wrapper {
    flex-direction: column;
    gap: 40px;
}

.cassino,
.sports {
  width: 100%;
}
}
</style>
