import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  ru: {
    header: {
      navTop: ["Новости", "Контакты", "Личный Кабинет"],
      navBottom: [
        "Общество",
        "Конгрессы",
        "Образование",
        "Клинические протоколы",
        "Новости в медицине",
      ],
      menu: {
        society: "Общество",
        events: "Конгрессы",
        education: "Образование",
        protocols: "Клинические протоколы",
        news: "Новости в медицине",
      },
    },
    aboutUs: {
      title: "О нас",
      joinBtn: "Вступить",
      readMoreBtn: "Подробнее",
    },
    upcommingEvents: "Предстоящие мероприятия",
    becomeMember: {
      title: "Станьте частью сообщества!",
      readMoreBtn: "Узнать больше",
    },
    footer: {
      title: "АСРМ",
      menuGroups: [
        [
          "Меню",
          "Общество",
          "События",
          "Образование",
          "Клинические протоколы",
          "Новости в медицине",
        ],
        ["Членство", "Войти в мой кабинет", "Стать членом"],
        ["Ссылки", "European Lung Found", "European Respiratory System"],
        ["Пресса", "Press queries"],
      ],
      contactUs: "Свяжитесь с нами",
    },
    loginPage: {
      loginTitle: "Авторизация",
      login: "Войти",
      registration: "Создать аккаунт",
      username: "Имя пользователя",
      password: "Пароль",
      remember: "Запомнить меня",
      forget: "Забыли пароль?",
    },
    accountPage: {
      title: "Личный кабинет",
      accountSetting: "Настройки аккаунта",
      membership: "Членство",
      editInfo: "Редактировать",
      deleteAccount: "Удалить аккаунт",
      signOut: "Выйти",
      formDetails: [
        {}
      ]
    }
  },
  kz: {
    header: {
      navTop: ["Жаңалықтар", "Контактілер", "Аккаунт"],
      navBottom: [
        "Қоғам",
        "Оқиғалар",
        "Білім",
        "Клиникалық хаттамалар",
        "Жаңалықтар",
      ],
      menu: {
        society: "Қоғам",
        events: "Оқиғалар",
        education: "Білім",
        protocols: "Клиникалық хаттамалар",
        news: "Жаңалықтар",
      },
    },
    aboutUs: {
      title: "Біз туралы",
      joinBtn: "Кіру",
      readMoreBtn: "Оқу",
    },
    upcommingEvents: "Оқиғалар",
    becomeMember: {
      title: "Мүше болe!",
      readMoreBtn: "Оқу",
    },
    footer: {
      title: "АСРМ",
      menuGroups: [
        [
          "Меню",
          "Қоғам",
          "Оқиғалар",
          "Білім",
          "Клиникалық хаттамалар",
          "Жаңалықтар",
        ],
        ["Мүшелік", "Кіру", "Мүше болу"],
        ["Сілтемелер", "European Lung Found", "European Respiratory System"],
        ["БАҚ", "Press queries"],
      ],
      contactUs: "Бізбен хабарласыңыз",
    },
    loginPage: {
      loginTitle: "Login KZ",
      login: "Log in",
      registration: "Sign up",
      username: "Username",
      password: "Password",
      remember: "Remember me",
      forget: "Forgot password?",
    },
    accountPage: {
      title: "Личный кабинет KZ",
      accountSetting: "Настройки аккаунта",
      membership: "Членство",
      editInfo: "Редактировать",
      deleteAccount: "Удалить аккаунт",
      signOut: "Выйти"
    }
  },



  en: {
    header: {
      navTop: ["News", "Contacts", "Account"],
      navBottom: [
        "Society",
        "Events",
        "Education",
        "Clinical protocols",
        "News in medicine",
      ],
      menu: {
        society: "Society",
        events: "Events",
        education: "Education",
        protocols: "Clinical Protocols",
        news: "News in medicine",
      },
    },
    aboutUs: {
      title: "About us",
      joinBtn: "Join",
      readMoreBtn: "Read more",
    },
    upcommingEvents: "Upcomming events",
    becomeMember: {
      title: "Become member!",
      readMoreBtn: "Read more",
    },
    footer: {
      title: "ASRM",
      menuGroups: [
        [
          "Menu",
          "Society",
          "Events",
          "Education",
          "Clinical protocols",
          "News in medicine",
        ],
        ["Membership", "Log in", "Become member"],
        ["Links", "European Lung Found", "European Respiratory System"],
        ["Press", "Press queries"],
      ],
      contactUs: "Contact us",
    },
    loginPage: {
      loginTitle: "Login",
      login: "Log in",
      registration: "Sign up",
      username: "Username",
      password: "Password",
      remember: "Remember me",
      forget: "Forgot password?",
    },
    accountPage: {
      title: "Account",
      accountSetting: "Account settings",
      membership: "Membership",
      editInfo: "Edit information",
      deleteAccount: "Delete account",
      signOut: "Sign out"
    }
  },
};

const i18n = new VueI18n({
  locale: "ru", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});

export default i18n;
