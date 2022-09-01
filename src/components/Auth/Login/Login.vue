<template>
  <section class="container">
    <h1 class="Title">Авторизация</h1>

    <div class="Tower">
        <div class="con-form">
          <vs-input v-model="email" placeholder="Почта">
            <template #icon>
              @
            </template>
          </vs-input>
          <vs-input type="password" v-model="password" placeholder="Пароль">
            <template #icon>
              <img width="20" src="../../../assets/lock.png">
            </template>
          </vs-input>
          <div class="flex">
            <vs-checkbox success v-model="option2">
              <template #icon>
                <i class='bx bx-check-double'></i>
              </template>
              Запомнить
            </vs-checkbox>
            <a href="#">Забыли пароль?</a>
          </div>
          <div class="footer-dialog">
            <vs-button @click.prevent="login" block>
              Войти
            </vs-button>

            <div class="new">
              Нет аккаунта? <a href="#" @click.prevent="Register">Создать аккаунт!</a>
            </div>
          </div>
        </div>
        <div v-if="error">{{openNotification('top-left', 'danger')}}</div>
      </div>

    <template>
      <div
          v-if="hasOpenLoading"
          :class="{ hasOpenLoading  }">
        <div
            v-bind:key="i"
            v-for="(type, i) in types"
            :ref="`box${i}`"
            @click="handleClickLoading(type)"
            class="box-loading" />
      </div>
    </template>
  </section>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data: () => ({
    active: false,
    email: '',
    password: '',
    remember: false,
    option2: false,
    error: null,
    hasOpenLoading: false,
    UserRole: null,
    types: [
      'scale'
    ]
  }),

  methods: {
    login() {
      this.hasOpenLoading = true;
      axios.post("http://127.0.0.1:8000/api/auth/login", {
        email: this.email,
        password: this.password
      })
          .then( res => {
            if (this.option2 === true) {
              localStorage.setItem("LoginSave", this.email);
              localStorage.setItem("PasswordSave", this.password);
            }
            localStorage.setItem("LoginSave", this.email);
            localStorage.access_token = res.data.access_token;

            for (let item of this.UserRole) {
              if (item.email === this.email) {
                if (item.id_role == 1) {
                  this.$router.push({name: "usermap"})
                } if (item.id_role == 2) {
                  this.$router.push({name: "map"})
                }
              }
            }
          })
          .catch(error => {
            this.hasOpenLoading = false;
            this.error = error.response.data.error;
          })
    },

    openNotification(position = null, color) {
        this.$vs.notification({
        color,
        position,
        title: 'Внимание',
        text: this.error
      })
      this.error = null;
    },

    Register() {
      this.$router.push({name: 'register'})
    },

    handleClickLoading(type) {
      const loading = this.$vs.loading({
        type
      })
      this.hasOpenLoading = true
      setTimeout(() => {
        loading.close()
        this.hasOpenLoading = false
      }, 3000)
    },

    openLoading(type, ref) {
      this.$vs.loading({
        target: this.$refs[ref][0],
        text: type,
        type
      })
    },

    GetUser() {
      axios.get("http://127.0.0.1:8000/api/roles/user")
          .then(res => {
            this.UserRole = res.data.data;
          })
    },
  },

  mounted() {
    this.GetUser();
    this.types.forEach((type, i) => {
      this.openLoading(type, `box${i}`)
    })
  }
}
</script>

<style lang="stylus">

body
  display flex
  justify-content center
  align-items center

  margin-top 150px

.container
  width 500px
  height 300px

  padding 10px

  border 1px solid gray
  border-radius 100px
  transition box-shadow 0.5s linear

.container:hover
  box-shadow 2px 10px 10px gray

.Title
  text-align center
  font-size 40px
  margin 0
  padding 0


.Tower
  display flex
  justify-content center
  align-items center

  width 100%
  height 100%


/*Vuesax Auth*/

getColor(vsColor, alpha = 1)
  unquote("rgba(var(--vs-" + vsColor + "), " +alpha + ")")

getVar(var)
  unquote("var(--vs-" + var + ")")

.not-margin
  margin 0px
  font-weight normal
  padding 10px

.con-form
  width 500px

  .flex
    display flex
    align-items center
    justify-content space-between

    a
      font-size .8rem
      opacity .7

      &:hover
        opacity 1

  .vs-checkbox-label
    font-size .8rem

  .vs-input-content
    margin 10px 0px
    width calc(100%)

    .vs-input
      width 100%

.footer-dialog
  display flex
  align-items center
  justify-content center
  flex-direction column
  width calc(100%)

  .new
    margin 0px
    margin-top 20px
    padding: 0px
    font-size .7rem

    a
      color getColor('primary') !important
      margin-left 6px

      &:hover
        text-decoration underline

  .vs-button
    margin 0px


  .hasOpenLoading
    .box-loading
      opacity 0
      transform scale(.7)
  .box-loading
    width 120px
    height 120px
    position relative
    margin 5px
    border-radius 20px
    box-shadow 0px 10px 20px -10px rgba(0,0,0,.07)
    overflow hidden
    cursor pointer
    transition all .25s ease
    &:hover
      transform translate(0,-5px)
      box-shadow 0px 15px 20px -10px rgba(0,0,0,.09)
    >>>.vs-loading
      padding 0px
</style>
