import { createStore, on, EVENTS } from "harlem";
import { AuthService } from "../../services/auth.service";
import { FirestoreService } from "../../services/firestore.service";

// The initial state for this store
const STATE = {
  identifier: "",
  token: "",
  message: "",
  role: "",
};

// Create the store, specifying the name and intial state
export const { state, getter, mutation, action, ...store } = createStore(
  "auth",
  STATE
);

export const roleGetter = getter("role", (state) => {
  return state.role;
});
export const messageGetter = getter("message", (state) => {
  return state.message;
});
export const tokenGetter = getter("token", (state) => state.token);
export const loginUser = action(
  "login-user",
  async ({ email, password, role }, mutate) => {
    console.log("email", email);
    console.log("password", password);
    const result = await AuthService.login(email, password);
    const user = await FirestoreService.fetchOneSpecificDocument("users", result.uid)

    mutate((state) => {
      state.identifier = result.email;
      state.token = result.uid;
      state.message = result.message;
      state.role = user.role
    });
  }
);

export const registerUser = action(
  "register-user",
  async ({ email, password, role }, mutate) => {
    const result = await AuthService.register(email, password);
    const { message } = await FirestoreService.setNewDocument(
      "users",
      result.uid,
      {
        email,
        role,
        uid: result.uid
      }
    );
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
    state.role = "";
  });
});

export const fetchUserData = action("fetch-user-data", async (id, mutate) => {
  const user = await FirestoreService.fetchOneSpecificDocument("users", id);
  if (!user.uid) {
    mutate((state) => {
      state.identifier = "";
      state.token = "";
      state.message = "Aucun utilisateur connecté";
      state.role = "";
    });
  } else {
    mutate((state) => {
      state.identifier = user.email;
      state.token = user.uid;
      state.role = user.role;
      state.message = `${user.email} est connecté(e)`;
    });
  }
});

on(EVENTS.mutation.before, (event) =>
  console.log("🛍️ before auth-state mutation", event)
);
on(EVENTS.mutation.after, (event) =>
  console.log("🛍️ after auth-state mutation", event)
);
on(EVENTS.mutation.error, (event) =>
  console.log("❌🛍️ error during mutation", event)
);
