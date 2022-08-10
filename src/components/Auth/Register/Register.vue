<template>
  <section class="container">
    <h1 class="Title">Регистрация</h1>
    <div class="RegisterInput">
      <vs-input v-model="name" type="text" placeholder="Имя">
        <template #icon>
          :)
        </template>
      </vs-input>

      <vs-input v-model="email" type="email" placeholder="Почта">
        <template #icon>
          @
        </template>
      </vs-input>

      <vs-input type="password" class="inputText" icon-after v-model="password" placeholder="Пароль">
        <template #icon>
          #
        </template>
      </vs-input>

      <vs-input type="password" class="inputText" icon-after v-model="passwordRemove" placeholder="Повторите пароль">
        <template #icon>
          ?
        </template>
      </vs-input>
    </div>

    <div class="ButtonCenter">
      <vs-button
          color="rgb(59,222,200)"
          gradient
          @click="store()"
      >
        >> Регистрация
      </vs-button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data: () => ({
    name: '',
    email: '',
    password: '',
    passwordRemove: ''
  }),

  methods: {
    store() {
      axios.post("http://127.0.0.1:8000/api/users", {
        name: this.name,
        email: this.email,
        password: this.password,
        passwordRemove: this.passwordRemove
        })
          .then(res => {
            console.log(res);
            localStorage.setItem("access_token", res.data.access_token);
            this.$router.push({name: "admin"});
          })
    }
  }
}
</script>

<style lang="stylus">
.RegisterInput
  display flex
  flex-direction column
  justify-content center

  margin 10px

.vs-input-content
  margin 10px 0px
  width calc(100%)

.vs-input
  width 100%

.ButtonCenter
  display flex
  justify-content center

  font-weight bold

  margin 5px
</style>
