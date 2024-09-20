<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="container">
      <div class="left">
        <div class="menu">
          <img src="../assets/menu-icon.svg" alt="" />
        </div>

        <RouterLink to="/"
          ><img class="logo_desktop" src="../assets/logo.png" alt="" />
          <img class="logo_mobile" src="../assets/logo.png" alt=""
        /></RouterLink>
      </div>
      <div class="content">
        <nav class="subcategory_container">
          <ul>
            <li class="subcategory_item">
              <RouterLink to="/cassino" exact-active-class="active">
                <img src="../assets/cassino-icon.svg" alt="" />
                Cassino
              </RouterLink>
            </li>
            <li class="subcategory_item">
              <RouterLink to="/esportes" exact-active-class="active">
                <img src="../assets/esporte-icon.svg" alt="" />
                Esportes
              </RouterLink>
            </li>
          </ul>
        </nav>

        <nav class="routes">
          <ul>
            <li>
              
              <li>
              <RouterLink to="/login" > Entrar </RouterLink>
            </li>
            </li>
            <li>
              <RouterLink to="/register" class="btn"> Cadastre-se </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 70px;
  border-bottom: 1px solid #323b45;
}

.left,
.container,
.content,
.menu,
.subcategory_item,
.subcategory_item a {
  display: flex;
  align-items: center;
}

.left {
  position: absolute;
  margin-left: 20px;

  & a {
    margin-right: 48px;
  }
}

.container {
  justify-content: space-between;
  height: 100%;
}

.content {
  justify-content: space-between;
  padding: 0 16px;
  max-width: 1104px;
  margin: 0 auto;
  width: 100%;
}

.subcategory_container ul,
.routes ul {
  display: flex;
  gap: 36px;
}

.routes li {
  display: flex;
  align-items: center;
}

.menu {
  justify-content: center;
  cursor: pointer;
  margin-right: 16px;
  height: 40px;
  width: 40px;
  margin-left: 12px;
  border-radius: 50%;

  &:hover {
    background-color: #1a242d;
  }
}

.logo_mobile {
  display: none;
}

.subcategory_item a {
  justify-content: center;
  height: 70px;
  padding: 0 1rem;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.6s ease-out;
  
  &:hover {
    border-color: #3399ff;
  }
}

& a.active {
  border-color: #3399ff;
}

.subcategory_item img {
  width: 16px;
  height: 16px;
}

.logo_desktop {
  width: 80px;
}

.subcategory_item a {
  gap: 8px;
}

@media (max-width: 1400px) {
  .left {
    position: relative !important;
  }
}

@media (max-width: 768px) {
  .subcategory_container {
    display: none;
  }

  .content {
    margin: 0;
    width: auto;
  }

  .logo_mobile {
    display: block;
    width: 60px;
  }

  .logo_desktop {
    display: none;
  }

  .menu {
    display: none;
  }
}
</style>
