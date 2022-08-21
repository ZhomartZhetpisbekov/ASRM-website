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
    diploma: null,
    phone: "",
    address: "",
    city: "",
    country: "",
    place_of_work: "",
    job: "",
    regError: false,
    errorMsg: "Username or Mail already in use",
  },
  getters: {
    get_error(state) {
      return state.regError;
    },
  },
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
    SET_CONFIRMED_PASSWORD(state, payload) {
      state.passwordConfirmed = payload;
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
      if (state.password !== state.passwordConfirmed) {
        state.regError = true;
        state.errorMsg = "Passwords don't match";
        return;
      }
      let bodyFormData = new FormData();
      bodyFormData.append("username", state.username);
      bodyFormData.append("password", state.password);
      bodyFormData.append("email", state.email);
      bodyFormData.append("first_name", state.first_name);
      bodyFormData.append("last_name", state.last_name);
      bodyFormData.append("fatherland", state.middle_name);
      bodyFormData.append("profession", state.profession);
      // bodyFormData.append("diploma", state.diploma);
      bodyFormData.append("date_of_Birth", state.date_of_Birth);
      bodyFormData.append("phone", state.phone);
      bodyFormData.append("address", state.address);
      bodyFormData.append("city", state.city);
      bodyFormData.append("country", state.country);
      bodyFormData.append("place_of_work", state.place_of_work);
      bodyFormData.append("job", state.job);
      console.log(bodyFormData);
      await api
        .post("/auth/users/", bodyFormData)
        .then((response) => {
          console.log(response);
          state.regError = false;
          alert("Подтвердите почту!");
          // commit("a/REGISTER", response.data);
          router.push("/login");
        })
        .catch((error) => {
          state.regError = true;
          state.errorMsg = "Username or Mail are already in use!";
          // console.log(error.data);
          // console.log(error.username);
          console.log(error);
        });
    },
    async modifyUser({ state }) {
      let bodyFormData = new FormData();
      // bodyFormData.append("username", state.username);
      bodyFormData.append("email", state.email);
      bodyFormData.append("first_name", state.first_name);
      bodyFormData.append("last_name", state.last_name);
      bodyFormData.append("fatherland", state.middle_name);
      bodyFormData.append("profession", state.profession);
      bodyFormData.append("diploma", state.diploma);
      bodyFormData.append("date_of_Birth", state.date_of_Birth);
      bodyFormData.append("phone", state.phone);
      bodyFormData.append("address", state.address);
      bodyFormData.append("city", state.city);
      bodyFormData.append("country", state.country);
      bodyFormData.append("place_of_work", state.place_of_work);
      bodyFormData.append("job", state.job);
      for (var pair of bodyFormData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      await api
        .put("auth/users/me", bodyFormData, {headers: {'Authorization': 'token ${localStorage.getItem("token")}'}})
        .then(() => {
          console.log("posted successfully");
        })
        .catch((error) => console.log(error));
    },
  },
};
