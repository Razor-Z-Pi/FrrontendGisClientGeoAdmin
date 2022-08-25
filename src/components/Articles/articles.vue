<template>
  <section>
    <admin/>
    <div class="AdminCardBoxArticles">
      <div class="CardBoxArticles">
        <vs-input style="width: 300px; margin: 0 auto" placeholder="Название статьи" />
        <Label>
          Описание:
          <br>
        <textarea style="width: 300px; height: 150px"></textarea>
        </Label>
      </div>

      <div class="BoxAddInfo">
        <vs-select
            filter
            multiple
            placeholder="Теги"
            v-model="tegi"
        >
          <vs-option label="Vuesax" value="1">
            Фотографии
          </vs-option>
          <vs-option label="Vue" value="2">
            Геология
          </vs-option>
          <vs-option label="Javascript" value="3">
            Геодезия
          </vs-option>
          <vs-option label="Sass" value="4">
            Карты
          </vs-option>
          <vs-option label="Typescript" value="5">
            Бизнес
          </vs-option>
        </vs-select>
        <vs-input style="width: 300px; margin: 0 auto" placeholder="Название раздела" />
        <vs-input style="width: 300px; margin: 0 auto" placeholder="Название тематики" />
        <vs-button
            danger
            border
            :active="active == 1"
            @click="active = 1"
        >
          Создать
        </vs-button>
      </div>
    </div>
  </section>
</template>

<script>
import admin from "../Admin/FormAdmin/FormAdmin"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "articles",
  components : {
    admin,
  },

  data: () =>  ({
    tegi: [],
    active: null
  })
}
</script>

<style>

.AdminCardBoxArticles {
  display: flex;
  justify-content: center;

  width: 1920px;

  padding: 30px;

  border: 3px solid grey;
  border-radius: 50px;
}

.CardBoxArticles {
  display: flex;
  flex-direction: column;
  justify-content: start;

  margin-left: 30px;

  width: 300px;
  height: 300px;
}

.BoxAddInfo {
  margin: 10px;
}
</style>