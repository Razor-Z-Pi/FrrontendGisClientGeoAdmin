<template>
  <section>
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
          <router-link class="LinkStyle" to="/usermap">Карта</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="home">
          <template #icon>
            <img src="../../../assets/user.png" width="25" alt="Карта"/>
          </template>
          <router-link class="LinkStyle" to="/usermain">Профиль</router-link>
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
  </section>
</template>

<script>
import api from "@/components/Auth/JWT/api";

export default {
  name: "MainForm",
  data: () => ({
    activeSidebar: false,
    UserData: null,
    UserEmail: null
  }),

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
  },

  mounted() {
    this.getUser();
  }
}
</script>

<style scoped>

</style>