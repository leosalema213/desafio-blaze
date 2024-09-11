<template>
  <header>
    <div class="container">
      <div class="left">
        <div class="menu">
          <img src="../assets/menu-icon.svg" alt="" />
        </div>
        <a href="#"
          ><img
            class="logo_desktop"
            src="../assets//logo.cf45d2ad.svg"
            alt=""
          />
          <img class="logo_mobile" src="../assets/logo_mobile.svg" alt="" />
        </a>
      </div>
      <div class="content">
        <nav class="subcategory_container">
          <ul>
            <li class="subcategory_item active">
              <a href="#">
                <img src="../assets/cassino-icon.svg" alt="" />
                Cassino
              </a>
            </li>
            <li class="subcategory_item">
              <a href="#">
                <img src="../assets/esporte-icon.svg" alt="" />
                Esportes
              </a>
            </li>
          </ul>
        </nav>

        <nav class="routes">
          <ul>
            <li>
              <a href="#">Entrar</a>
            </li>
            <li>
              <a class="btn" href="#">Cadastre-se</a>
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

.subcategory_item {
  justify-content: center;
  height: 70px;
  padding: 0 1rem;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.6s ease-out;

  &:hover {
    border-color: rgb(241, 44, 76);
  }

  &.active {
    border-color: rgb(241, 44, 76);
  }
}

.subcategory_item img {
  width: 16px;
  height: 16px;
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
  }

  .logo_desktop {
    display: none;
  }

  .menu {
    display: none;
  }
}
</style>
