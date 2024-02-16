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

export const messageGetter = getter('message', state => {
    return state.message
})
export const tokenGetter = getter('token', (state) => state.token)
export const loginUser = action(
  "login-user",
  async ({email, password}, mutate) => {
    console.log('email', email)
    console.log('password', password)
    const result = await AuthService.login(email, password);

    mutate((state) => {
      state.identifier = result.email;
      state.token = result.uid;
      state.message = result.message;
    });
  }
);

export const registerUser = action(
  "register-user",
  async ({email, password}, mutate) => {
    const result = await AuthService.register(email, password);
    mutate((state) => {
      state.identifier = result.email;
      state.token = result.uid;
      state.message = result.message;
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
