<template>
  <section class="container">
      <div class="error">
        <h1>
          404
        </h1>
        <p>
          Такой странице не существует! Вернитесь в панель администратора
        </p>
        <div class="buttonBack">
          <vs-button
              danger
              border
              :active="active == 2"
              @click.prevent="Back"
              style="width: 300px"
          >
            Назад
          </vs-button>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "nopages",
  data:() => ({
    active: 0
  }),

  methods: {
    Back() {
       this.$router.push({name: "admin"});
    }
  }
}
</script>

<style lang="stylus">
.error
  font-size 26px

.buttonBack
  display flex
  justify-content center
</style>
