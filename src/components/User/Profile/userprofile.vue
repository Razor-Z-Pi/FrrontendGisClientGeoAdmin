<template>
  <div>
    <usermain/>
    <div class="center content-inputs">
      <vs-input v-model="value" placeholder="Фамилия" />
    </div>
    <div class="center content-inputs">
      <vs-input v-model="value" placeholder="Имя" />
    </div>
    <div class="center content-inputs">
      <vs-input v-model="value" placeholder="Отчество" />
    </div>
  </div>
</template>

<script>
import usermain from "../MainForm/MainForm";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "userprofile",

  components: {
    usermain
  }
}
</script>

<style scoped>

</style>