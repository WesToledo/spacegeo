import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import produce from "immer";

const persistStore = {
  name: "state",
  getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
};

const store = (set, get) => ({
  user: {
    _id: null,
    name: null,
    type: null,
    email: null,
    institution: null,
    token: null,
    linked: null,
    classe: null,
    login_with: null,
    picture: null,
  },
  questionary: {
    open: false,
    id: null,
    timeBegin: null,
  },
  setTimeBegin: (timeBegin, id) => {
    set(
      produce((oldState) => {
        oldState.questionary.open = true;
        oldState.questionary.id = id;
        oldState.questionary.timeBegin = timeBegin;
      })
    );
  },
  setLoginData: (loginData) => {
    set(
      produce((oldState) => {
        oldState.user.name = loginData.user.name;
        oldState.user.email = loginData.user.email;
        oldState.user.token = loginData.token;
        oldState.user.picture = loginData.user.picture;
        oldState.user.login_with = loginData.login_with;
        oldState.user.type = loginData.type;
      })
    );
  },
  isLoading: false,
  startLoading: () =>
    set(
      produce((oldState) => {
        oldState.isLoading = true;
      })
    ),
  stopLoading: () =>
    set(
      produce((oldState) => {
        oldState.isLoading = false;
      })
    ),
  addUser: (user) =>
    set(
      produce((oldState) => {
        oldState.user._id = user._id;
        oldState.user.name = user.name;
        oldState.user.type = user.type;
        oldState.user.linked = user.linked;
        oldState.user.email = user.email;
        oldState.user.institution = user.institution;
        oldState.user.token = user.token;
        oldState.user.classe = user.classe;
      })
    ),
  linkUser: () =>
    set(
      produce((oldState) => {
        oldState.user.linked = true;
      })
    ),
  addClasse: (classe) =>
    set(
      produce((oldState) => {
        oldState.user.classe = classe;
      })
    ),
});

const useStore = create(devtools(persist(store, persistStore)));

export default useStore;
