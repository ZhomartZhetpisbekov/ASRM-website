import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";
import router from "../router/index";
import { userStore } from "./user.module";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { a: userStore },
  state: {
    loginPassed: true,
    currentLanguage: localStorage.getItem("currentLanguage")
      ? localStorage.getItem("currentLanguage")
      : "ru",
    news: [],
    article: [],
    group: [],
    categoryDetails: [],
    searchResults: [],
    aboutUs: [],
    membership: [],
    userInfo: {},
    isPremiumUser: false,
    menu: {
      pages: {
        headerNavTop: [
          { name: "Новости", path: "news", routerName: "News" },
          { name: "Контакты", path: "contacts", routerName: "Information" },
          { name: "Личный Кабинет", path: "account", routerName: "Account" },
        ],
        headerNavBottom: [
          {
            name: "Общество",
            path: "society",
            routerName: "Information",
          },
          {
            name: "События",
            path: "events",
            routerName: "Information",
          },
          {
            name: "Образование",
            path: "education",
            routerName: "Information",
          },
          {
            name: "Клинические протоколы",
            path: "protocols",
            routerName: "Information",
          },
          {
            name: "Новости в медицине",
            path: "news",
            routerName: "News",
          },
        ],
      },
    },
  },
  getters: {
    headerTopItems(state) {
      return state.menu.pages.headerNavTop;
    },
    headerBottomItems(state) {
      return state.menu.pages.headerNavBottom;
    },
    headerAllItems(state) {
      return [
        ...state.menu.pages.headerNavTop,
        ...state.menu.pages.headerNavBottom,
      ];
    },
    // headerBottomChildren(state, payload) {
    //   return state.menu.pages.headerNavBottom[payload];
    // },
  },
  mutations: {
    SET_ABOUT_US(state, aboutUs) {
      state.aboutUs = aboutUs;
    },
    SET_MEMBERSHIP(state, membership) {
      state.membership = membership;
    },
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ARTICLE(state, article) {
      state.article = article;
    },
    SET_GROUP(state, group) {
      state.group = group;
    },
    EMPTY_GROUP(state) {
      state.group = [];
    },
    SET_CATEGORY_DETAILS(state, categoryDetails) {
      state.categoryDetails = categoryDetails;
    },
    SET_LANG(state, lang) {
      localStorage.setItem("currentLanguage", lang);
      state.currentLanguage = lang;
    },
    SET_SEARCH_RESULTS(state, payload) {
      state.searchResults = payload;
    },
    LOGIN(state, resp) {
      // $cookies.set("token", resp.access);
      // console.log(resp);
      localStorage.setItem("token", resp.auth_token);
      state.login = true;
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
    SET_IS_PREMIUM(state, isPremiumUser) {
      state.isPremiumUser = isPremiumUser;
    }
  },
  actions: {
    async getAboutUs({ commit, state }) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/index/about-us`)
        .then((res) => {
          commit("SET_ABOUT_US", res.data);
        });
    },
    async getMembership({ commit, state }) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/index/membership`)
        .then((res) => {
          commit("SET_MEMBERSHIP", res.data);
        });
    },
    async getNews({ commit, state }) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/news`)
        .then((res) => {
          commit("SET_NEWS", res.data);
          // console.log('store_actions', res.data);
          // return res.data;
        });
    },
    async getArticle({ commit }, id) {
      return await api.get(`/api/v1/news/${id}`).then((res) => {
        commit("SET_ARTICLE", res.data);
        // console.log(res.data);
        // return res.data
      });
    },
    async getGroup({ commit, state }, group) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/${group}`)
        .then((res) => {
          commit("SET_GROUP", res.data);
        });
    },
    async getCategoryDetails({ commit, state }, payload) {
      return await api
        .get(
          `/api/v1/${state.currentLanguage}/${payload.group}/${payload.category}`
        )
        .then((res) => {
          commit("SET_CATEGORY_DETAILS", res.data);
        });
    },
    async getSearchResults({ commit, state }, payload) {
      return await api
        .get(`/api/v1/${state.currentLanguage}/search/${payload}`)
        .then((res) => {
          commit("SET_SEARCH_RESULTS", res.data);
        });
    },
    loginUser({ commit, state }, user) {
      let bodyFormData = new FormData();
      bodyFormData.append("username", user.email);
      bodyFormData.append("password", user.password);
      api
        .post("auth/token/login", bodyFormData)
        .then((response) => {
          console.log(response.data);
          commit("LOGIN", response.data);
          state.loginPassed = true;
          router.push("/account");
          // console.log("Log in!");
        })
        .catch((error) => {
          console.log("Password or email incorrect!\n");
          console.log(error);
          state.loginPassed = false;
          // this.state.loginEr = "Неправильный пароль !";
        });
    },
    getUserInformation({ commit }) {
      var config = {
        method: "get",
        url: `${api.defaults.baseURL}/auth/users/me`,
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      };
      axios(config)
        .then(function(response) {
          commit("SET_USER_INFO", response.data);
          console.log(response.data);
          // commit("SET_IS_PREMIUM", response.data.)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    userLogOut() {
      localStorage.removeItem("token");
      router.push("/login");
    },

    // registerUser({ commit }, user) {
    //   api
    //     .post("register", {
    //       email: user.email,
    //       password: user.password,
    //     })
    //     .then((response) => {
    //       commit("REGISTER", response.data);
    //     });
    // },
    // loginUser({ commit }, user) {
    //   api
    //     .post("login", {
    //       email: user.email,
    //       password: user.password,
    //     })
    //     .then((response) => {
    //       commit("LOGIN", response.data.data);
    //       router.push("/orders");
    //       console.log("Log in!");
    //     })
    //     .catch((error) => {
    //       console.log("Password or email incorrect!\n");
    //       console.log("");
    //       console.log(error);
    //       this.state.loginEr = "Неправильный пароль !";
    //     });
    // },
    // goto({ commit }, id) {
    //   commit("SCROLLING", id);
    // },
  },
});
