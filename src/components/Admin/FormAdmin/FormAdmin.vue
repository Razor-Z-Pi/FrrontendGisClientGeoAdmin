<template>
  <div class="hidden">
    <vs-navbar shadow square center-collapsed v-model="active">
      <template #left>
        <vs-button @click="activeSidebar = !activeSidebar" flat icon>
          <img src="../../../assets/menuBurger.png" width="25" alt="Меню навигации"/>
          <div style="color: black">Меню</div>
        </vs-button>
      </template>
      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <vs-sidebar
        absolute
        v-model="active"
        :open.sync="activeSidebar"
    >
      <template #logo>
        <div style="font-weight: bold">ООО ТЕРРА</div>
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <img src="../../../assets/gis.png" width="25" alt="Карта"/>
        </template>
        Карта
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <img src="../../../assets/magazine.png" width="25" alt="Лицензии"/>
        </template>
        Лицензии
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <img src="../../../assets/magazine.png" width="25" alt="Услуги"/>
            </template>
            Услуги
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          #1
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          #2
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
          #3
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <img src="../../../assets/help.png" width="25" alt="Поддержка"/>
            </template>
            Поддержка
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="github">
          Чат
        </vs-sidebar-item>
        <vs-sidebar-item id="codepen">
          Контакты
        </vs-sidebar-item>
        <vs-sidebar-item id="discord">
          Вопросы
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item id="donate">
        <template #icon>
          <i class='bx bxs-donate-heart'></i>
        </template>
        Статьи
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <i class='bx bx-drink'></i>
        </template>
        Магазин
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
          <template #icon>
            <img src="../../../assets/user.png" width="25" alt="Профиль"/>
          </template>
        <router-link to="/profile">Профиль</router-link>
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar badge-color="danger" badge-position="top-right">
            <img src="../../../assets/message.png" width="10" alt="Сообщение"/>

            <template #badge>
              0
            </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'home',
    activeSidebar: false
  })
}
</script>

<style scoped>

</style>
