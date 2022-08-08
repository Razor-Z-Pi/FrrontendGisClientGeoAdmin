import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../components/Auth/Login/Login'
import admin from "../components/Admin/FormAdmin/FormAdmin"
import register from "../components/Auth/Register/Register"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'auth',
    component: auth
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: "/register",
    name: "register",
    component: register
  }
]

const router = new VueRouter({
  routes
})

export default router
