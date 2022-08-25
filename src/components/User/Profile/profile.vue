<template>
  <div class="AdminContainer">
    <admin />
    <vs-button
        success
        flat
        :active="activeCreate == 1"
        @click="activeCreate = 1"
    >
      Добавить
    </vs-button>
    <vs-table class="TableForm">
      <template #thead>
        <vs-tr>
          <vs-th>
            id
          </vs-th>
          <vs-th>
            Имя
          </vs-th>
          <vs-th>
            Почта
          </vs-th>
          <vs-th>
            Действия
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
            v-for="tr in UserOptional"
            :key=tr.id
            :data="tr"
        >
          <vs-td >
            {{ tr.id }}
          </vs-td>
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
            {{ tr.email }}
          </vs-td>
          <vs-td>
            <vs-button
                icon
                color="rgb(59,222,200)"
                gradient
                :active="activeBtn == 6"
                @click="active=!active, GetEdit(tr)"
            >
              Редактирование
            </vs-button>
            <vs-button
                icon
                color="danger"
                gradient
                :active="activeBtn == 6"
                @click="activeDelete=!activeDelete"
            >
              Удалить
            </vs-button>

            <vs-dialog square v-model="activeDelete">
              <template #header>
                <h4 class="not-margin">
                  Удаление!!! Внимание
                </h4>
              </template>
              <template #footer>
                <div class="footer-dialog">
                  <vs-button @click="Delete(tr.id)" block>
                    Удалить
                  </vs-button>
                </div>
              </template>
            </vs-dialog>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>

    <vs-dialog square v-model="active">
      <template #header>
        <h4 class="not-margin">
          Редактирование
        </h4>
      </template>

      <div class="center content-inputs">
        <vs-input type="text" v-model="name" placeholder="Имя" />
      </div>

      <div class="center content-inputs">
        <vs-input type="email" v-model="email" placeholder="Почта" />
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button @click="Update" block>
            Принять
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <vs-dialog square v-model="activeCreate">
      <template #header>
        <h4 class="not-margin">
          Создание пользователя
        </h4>
      </template>

      <div class="center content-inputs">
        <vs-input type="text" v-model="nameCreate" placeholder="Имя" />
      </div>

      <div class="center content-inputs">
        <vs-input type="email" v-model="emailCreate" placeholder="Почта" />
      </div>

      <div class="center content-inputs">
        <vs-input type="password" v-model="passwordCreate" placeholder="Пароль" />
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button @click="Update" block>
            Создать
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import admin from "../../Admin/FormAdmin/FormAdmin";
import api from "@/components/Auth/JWT/api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "profile",

  components: {
    // eslint-disable-next-line vue/no-unused-components
    admin,
  },

  data: () => {
    return {
      UserOptional: null,
      activeBtn: 0,
      active: false,
      activeDelete: false,
      activeCreate: false,
      input1: '',
      input2: '',
      checkbox1: false,
      name: "",
      email: "",
      nameCreate: "",
      emailCreate: "",
      passwordCreate: ""
    }
  },

  mounted() {
    this.getUser()
  },

  methods: {
    getUser() {
      api.get("http://127.0.0.1:8000/api/auth/userOptional")
          .then( res => {
            this.UserOptional = res.data.data
          })
    },

    Update() {
      api.put("http://127.0.0.1:8000/api/users", {
        id: this.id,
        name: this.name,
        email: this.email,
      })
          .then(res => {
            console.log(res);
          })
    },

    Delete(id) {
      alert(id);
      api.delete(`http://127.0.0.1:8000/api/users/${id}`)
          .then(res => {
            this.activeDelete = false;
            console.log(res);
          })
    },

    GetEdit(data) {
      this.id = data.id;
      this.name = data.name;
      this.email = data.email;
    }
  }
}
</script>

<style lang="stylus">
html
  box-sizing border-box

body
  margin 0

a
  text-decoration none
</style>
