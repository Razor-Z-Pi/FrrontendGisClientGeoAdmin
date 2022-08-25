import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../components/Auth/Login/Login'
import admin from "../components/Admin/FormAdmin/FormAdmin"
import register from "../components/Auth/Register/Register"
import profile from "../components/User/Profile/profile"
import nopages from "../components/404/nopages"
import map from "../components/Map/MapView"
import articles from  "../components/Articles/articles"

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
  },
  {
    path: "/profile",
    name: "profile",
    component: profile
  },
  {
    path: "/map",
    name: "map",
    component: map
  },
  {
    path: "/articles",
    name: "articles",
    component: articles
  },
  {
    path: "*",
    name: "404",
    component: nopages
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach( (to, from, next ) => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    if (to.name === "auth" || to.name === "register") {
      return next()
    } else {
      return next({
        name: "map"
      })
    }
  }

  if (to.name === "auth" && accessToken) {
    return next({
      name: "map"
    })
  }

  next();
})

export default router
