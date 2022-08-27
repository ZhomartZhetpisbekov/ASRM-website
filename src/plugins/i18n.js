import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  ru: {
    header: {
      navTop: ["Новости", "Контакты", "Личный Кабинет"],
      navBottom: [
        "Общество",
        "Конференции",
        "Мероприятия",
        "Клинические протоколы",
        "Новости в медицине",
      ],
      menu: {
        society: "Общество",
        conference: "Конференции",
        events: "Мероприятия",
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
    events: {
      upcoming: "Предстоящие мероприятия",
      archive: "Архив мероприятий",
      educational: "Образовательные программы для пациентов",
    },
    footer: {
      title: "АСРМ",
      menuGroups: [
        [
          "Меню",
          "Общество",
          "Конференции",
          "Мероприятия",
          "Клинические протоколы",
          "Новости в медицине",
        ],
        ["Членство", "Войти в мой кабинет", "Вступить в сообщество"],
        ["Ссылки", "European Lung Found", "European Respiratory System"],
        ["Пресса", "Press queries"],
      ],
      media: 'Медиа',
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
      newAcc: "Новый пользователь? Создайте аккаунт!",
    },
    registrationPage: {
      regTitle: "Создать аккаунт",
      accountInfo: {
        title: "Информация об аккаунте",
        username: "Имя пользователя",
        email: "Почта",
        password: "Пароль",
        passwordConfirm: "Потвердите пароль",
      },
      personalInfo: {
        title: "Личная информация",
        fname: "Имя",
        mname: "Отчество",
        lname: "Фамилия",
        dob: "Дата рождения",
      },
      address: {
        title: "Адрес",
        address1: "Адрес проживания 1",
        address2: "Адрес проживания 2",
        country: "Страна",
        city: "Город",
      },
      workInfo: {
        title: "Информация о работе",
        occupation: "Профессия",
        jobTitle: "Должность",
        placeOfWork: "Место работы",
        phone: "Номер телефона",
      },
    },
    accountPage: {
      title: "Личный кабинет",
      accountSetting: "Настройки аккаунта",
      membership: "Членство",
      editInfo: "Редактировать",
      deleteAccount: "Удалить аккаунт",
      signOut: "Выйти",
      formDetails: [{}],
    },
  },
  kz: {
    header: {
      navTop: ["Жаңалықтар", "Контактілер", "Аккаунт"],
      navBottom: [
        "Қоғам",
        "Конференции",
        "Мероприятия",
        "Клиникалық хаттамалар",
        "Жаңалықтар",
      ],
      menu: {
        society: "Қоғам",
        conference: "Конференции",
        events: "Мероприятия",
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
    events: {
      upcoming: "Алдағы оқиғалар",
      archive: "Оқиғалар мұрағаты",
      educational: "Пациенттерге арналған білім беру бағдарламалары",
    },
    footer: {
      title: "АСРМ",
      menuGroups: [
        [
          "Меню",
          "Қоғам",
          "Конференции",
          "Мероприятия",
          "Клиникалық хаттамалар",
          "Жаңалықтар",
        ],
        ["Мүшелік", "Кіру", "Мүше болу"],
        ["Сілтемелер", "European Lung Found", "European Respiratory System"],
        ["БАҚ", "Press queries"],
      ],
      media: 'Медиа',
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
      newAcc: "New user? Create an account!",
    },
    registrationPage: {
      regTitle: "Создать аккаунт",
      accountInfo: {
        title: "Информация об аккаунте",
        username: "Имя пользователя",
        email: "Почта",
        password: "Пароль",
        passwordConfirm: "Потвердите пароль",
      },
      personalInfo: {
        title: "Личная информация",
        fname: "Имя",
        mname: "Отчество",
        lname: "Фамилия",
        dob: "Дата рождения",
      },
      address: {
        title: "Адрес",
        address1: "Адрес проживания 1",
        address2: "Адрес проживания 2",
        country: "Страна",
        city: "Город",
      },
      workInfo: {
        title: "Информация о работе",
        occupation: "Профессия",
        jobTitle: "Должность",
        placeOfWork: "Место работы",
        phone: "Номер телефона",
      },
    },
    accountPage: {
      title: "Личный кабинет KZ",
      accountSetting: "Настройки аккаунта",
      membership: "Членство",
      editInfo: "Редактировать",
      deleteAccount: "Удалить аккаунт",
      signOut: "Выйти",
    },
  },

  en: {
    header: {
      navTop: ["News", "Contacts", "Account"],
      navBottom: [
        "Society",
        "Conferences",
        "Events",
        "Clinical protocols",
        "News in medicine",
      ],
      menu: {
        society: "Society",
        conference: "Conferences",
        events: "Events",
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
    events: {
      upcoming: "Upcoming events",
      archive: "Archive events",
      educational: "Educational programs for patients",
    },
    footer: {
      title: "ASRM",
      menuGroups: [
        [
          "Menu",
          "Society",
          "Conferences",
          "Events",
          "Clinical protocols",
          "News in medicine",
        ],
        ["Membership", "Log in", "Become member"],
        ["Links", "European Lung Found", "European Respiratory System"],
        ["Press", "Press queries"],
      ],
      media: 'Media',
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
      newAcc: "New user? Create an account!",
    },
    registrationPage: {
      regTitle: "Create an account",
      accountInfo: {
        title: "Account information",
        username: "Username",
        email: "Email",
        password: "Password",
        passwordConfirm: "Confirm password",
      },
      personalInfo: {
        title: "Personal information",
        fname: "First name",
        mname: "Middle name",
        lname: "last name",
        dob: "Date of birth",
      },
      address: {
        title: "Address",
        address1: "Street address line 1",
        address2: "Street address line 2",
        country: "Country",
        city: "City",
      },
      workInfo: {
        title: "Work information",
        occupation: "Occupation",
        jobTitle: "Job title",
        placeOfWork: "Place of work",
        phone: "Phone number",
      },
    },
    accountPage: {
      title: "Account",
      accountSetting: "Account settings",
      membership: "Membership",
      editInfo: "Edit information",
      deleteAccount: "Delete account",
      signOut: "Sign out",
    },
  },
};

const i18n = new VueI18n({
  locale: "ru", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});

export default i18n;
