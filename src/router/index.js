import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/views/HomePage.vue";
import InformationPage from "../components/views/InformationPage.vue";
import NewsPage from "../components/views/NewsPage.vue";
import ArticlePage from "../components/views/ArticlePage.vue";
import EventArticlePage from "../components/views/EventArticlePage";
import EventsPage from "../components/views/EventsPage.vue";
import LoginPage from "../components/views/LoginPage.vue";
import RegistrationPage from "../components/views/RegistrationPage";
import ActivationPage from "../components/views/ActivationPage";
import AccountPage from "../components/views/AccountPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/news",
    name: "News",
    component: NewsPage,
  },
  {
    path: "/news/:id",
    name: "Article",
    component: ArticlePage,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    props: true,
  },
  {
    path: "/register",
    name: "Registration",
    component: RegistrationPage,
    props: true,
  },
  {
    path: "/activation/:uid?/:token?",
    name: "Activation",
    component: ActivationPage,
    props: true,
  },
  {
    path: "/account/:section?/:resetEntity?",
    name: "Account",
    component: AccountPage,
    props: true,
  },
  {
    path: "/events/:category?",
    name: "Events",
    component: EventsPage,
    props: true,
  },
  {
    path: "/events/:category/:article",
    name: "EventArticle",
    component: EventArticlePage,
    props: true,
  },
  {
    path: "/:name/:category?",
    name: "Information",
    component: InformationPage,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0, behavior: 'smooth'};
  }
});

export default router;
