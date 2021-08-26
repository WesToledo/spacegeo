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
  },
  addUser: (user) =>
    set(
      produce((oldState) => {
        oldState.user._id = user._id;
        oldState.user.name = user.name;
        oldState.user.type = user.type;
        oldState.user.email = user.email;
        oldState.user.institution = user.institution;
        oldState.user.token = user.token;
      })
    ),
});

const useStore = create(devtools(persist(store, persistStore)));

export default useStore;
