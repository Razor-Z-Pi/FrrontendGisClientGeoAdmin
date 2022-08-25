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
        <vs-tr
            v-for="optional in UserData"
            :key=optional.id
            :data="optional">
          <vs-td v-if="optional.email === UserEmail">
            <b>Здравствуй, {{optional.name}}</b>
          </vs-td>
        </vs-tr>
        <vs-avatar>
          <img src="../../../assets/user.png" width="25" alt="Аватар">
        </vs-avatar>
        <vs-button @click.prevent="logout" flat>Выйти</vs-button>
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
        <router-link class="LinkStyle" to="/map">Карта</router-link>
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
        <router-link class="LinkStyle" to="/articles">Статьи</router-link>
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
        <router-link class="LinkStyle" to="/profile">Пользователи</router-link>
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
import api from "@/components/Auth/JWT/api";

export default {
  data: () => ({
    active: 'home',
    activeSidebar: false,
    UserData: null,
    UserEmail: null
  }),

  mounted() {
    this.getUser()
  },

  methods: {
    logout() {
      api.post("http://127.0.0.1:8000/api/auth/logout")
          .then(res => {
            console.log(res);
            localStorage.removeItem("access_token");
            this.$router.push({name: "auth"});
          })
    },

    getUser() {
      this.UserEmail = localStorage.getItem("LoginSave");
      api.get("http://127.0.0.1:8000/api/auth/userOptional")
          .then( res => {
            this.UserData = res.data.data
          })
    },
  }
}
</script>

<style lang="stylus">
.LinkStyle
  text-decoration: none
  color: #2c3e50
</style>
