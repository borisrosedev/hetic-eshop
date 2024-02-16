import { createStore } from "harlem";
import { AuthService } from "../../services/auth.service";

// The initial state for this store
const STATE = {
  identifier: "",
  token: "",
  message: "",
};

// Create the store, specifying the name and intial state
export const { state, getter, mutation, action, ...store } = createStore(
  "auth",
  STATE
);

export const loginUser = action(
  "login-user",
  async (email, password, mutate) => {
    const { email, uid, message } = await AuthService.login(email, password);

    mutate((state) => {
      state.identifier = email;
      state.token = uid;
      state.message = message;
    });
  }
);

export const registerUser = action(
  "register-user",
  async (email, password, mutate) => {
    const { email, uid, message } = await AuthService.register(email, password);
    mutate((state) => {
      state.identifier = email;
      state.token = uid;
      state.message = message;
    });
  }
);

export const logoutUser = action("logout-user", async (mutate) => {
  const { message } = await AuthService.logout();
  mutate((state) => {
    state.identifier = "";
    state.token = "";
    state.message = message;
  });
});
