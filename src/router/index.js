import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardView from "@/views/CardView.vue";
import Yepyep from "@/views/TestView.vue";
import PicView from "@/views/PicView.vue";
import CarView from "@/views/CarView.vue";
import card from "@/views/4CardView.vue";
import card_opg5 from "@/views/CardView_opg5.vue";
import opg6 from "@/views/opg6View.vue";
import opg7 from "@/views/opg7View.vue";
import opg8 from "@/views/opg8View.vue";
import opg9 from "@/views/opg9View.vue";
import opg999 from "@/views/opg999View.vue";
import opg10 from "@/views/opg10_View.vue";
// import Card from "@/components/cards/myEpicCard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/opg10",
    name: "metajaj",
    component: opg10,
  },
  {
    path: "/opg999",
    name: "jaj",
    component: opg999,
  },
  {
    path: "/opg9",
    name: "metadrit",
    component: opg9,
  },
  {
    path: "/opg8",
    name: "opg8",
    component: opg8,
  },
  {
    path: "/opg6",
    name: "Oppgave6",
    component: opg6,
  },
  {
    path: "/opg7",
    name: "opg7",
    component: opg7,
  },
  {
    path: "/opg5",
    name: "card_opg5",
    component: card_opg5,
  },
  {
    path: "/car",
    name: "bilbrombrom",
    component: CarView,
  },
  {
    path: "/4card",
    name: "card4",
    component: card,
  },
  {
    path: "/card",
    name: "card",
    component: CardView,
  },
  {
    path: "/yep",
    name: "yups",
    component: Yepyep,
  },
  {
    path: "/picture",
    name: "Picture",
    component: PicView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
