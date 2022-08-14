import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";
import router from "../router/index";

Vue.use(Vuex);

export const userStore = {
  namespaced: true,
  state: {
    username: "",
    password: "",
    email: "",
    passwordConfirmed: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_Birth: "",
    profession: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    place_of_work: "",
    job: "",
  },
  getters: {},
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username;
    },
    SET_EMAIL(state, payload) {
      state.email = payload;
    },
    SET_PASSWORD(state, payload) {
      state.password = payload;
    },
    SET_FNAME(state, payload) {
      state.first_name = payload;
    },
    SET_MNAME(state, payload) {
      state.middle_name = payload;
    },
    SET_LNAME(state, payload) {
      state.last_name = payload;
    },
    SET_BDATE(state, payload) {
      state.date_of_Birth = payload;
    },
    SET_ADDRESS1(state, payload) {
      state.address = payload;
    },
    SET_ADDRESS2(state, payload) {
      state.address = payload;
    },
    SET_COUNTRY(state, payload) {
      state.country = payload;
    },
    SET_CITY(state, payload) {
      state.city = payload;
    },
    SET_OCCUPATION(state, payload) {
      state.profession = payload;
    },
    SET_JOB(state, payload) {
      state.job = payload;
    },
    SET_PWORK(state, payload) {
      state.place_of_work = payload;
    },
    SET_PHONE(state, payload) {
      state.phone = payload;
    },
  },
  actions: {
    async getRegistration({ state }) {
      let bodyFormData = new FormData();
      bodyFormData.append("username", state.username);
      bodyFormData.append("password", state.password);
      bodyFormData.append("email", state.email);
      bodyFormData.append("first_name", state.first_name);
      bodyFormData.append("last_name", state.last_name);
      bodyFormData.append("profession", state.profession);
      bodyFormData.append("date_of_Birth", state.date_of_Birth);
      bodyFormData.append("phone", state.phone);
      bodyFormData.append("address", state.address);
      bodyFormData.append("city", state.city);
      bodyFormData.append("country", state.country);
      bodyFormData.append("place_of_work", state.place_of_work);
      bodyFormData.append("job", state.job);
      await api
        .post("/auth/users/", bodyFormData)
        .then((response) => {
          console.log(response);
          // commit("a/REGISTER", response.data);
          router.push('/login')
        })
        .catch((error) => {
          console.log(error.data);
          console.log(error.username);
          console.log(error);
        });
    },
  },
};
