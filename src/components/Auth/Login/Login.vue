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
              <img src="../../../assets/lock.png" width="25" />
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
            <vs-button block>
              Войти
            </vs-button>

            <div class="new">
              Нет аккаунта? <a href="#">Создайть аккаунт!</a>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data: () => ({
    active: false,
    email: '',
    password: '',
    remember: false,
    option2: false,
  })
}
</script>

<style lang="stylus">

body
  display flex
  justify-content center
  align-items center

  margin 0 auto

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
</style>