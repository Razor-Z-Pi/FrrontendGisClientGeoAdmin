<template>
  <div>
    <admin />
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th>
            Имя
          </vs-th>
          <vs-th>
            Почта
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
            :key="i"
            v-for="(tr, i) in UserOptional"
            :data="tr"
        >
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
            {{ tr.email }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import admin from "../../Admin/FormAdmin/FormAdmin"
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
    }
  }
}
</script>

<style scoped>

</style>
