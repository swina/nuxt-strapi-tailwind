import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b5ec8f76 = () => interopDefault(import('..\\pages\\articles\\old._id.vue' /* webpackChunkName: "pages_articles_old._id" */))
const _9939e660 = () => interopDefault(import('..\\pages\\pages\\old._id.vue' /* webpackChunkName: "pages_pages_old._id" */))
const _d21158b4 = () => interopDefault(import('..\\pages\\articles\\_slug\\index.vue' /* webpackChunkName: "pages_articles__slug_index" */))
const _39564966 = () => interopDefault(import('..\\pages\\categories\\_id.vue' /* webpackChunkName: "pages_categories__id" */))
const _46f7c40a = () => interopDefault(import('..\\pages\\pages\\_slug\\index.vue' /* webpackChunkName: "pages_pages__slug_index" */))
const _d5c26d7e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles/old._id",
    component: _b5ec8f76,
    name: "articles-old._id"
  }, {
    path: "/pages/old._id",
    component: _9939e660,
    name: "pages-old._id"
  }, {
    path: "/articles/:slug?",
    component: _d21158b4,
    name: "articles-slug"
  }, {
    path: "/categories/:id?",
    component: _39564966,
    name: "categories-id"
  }, {
    path: "/pages/:slug?",
    component: _46f7c40a,
    name: "pages-slug"
  }, {
    path: "/",
    component: _d5c26d7e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
