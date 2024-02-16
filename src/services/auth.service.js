import { auth } from "../../config/firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

export class AuthService {

  static async logout(){
    await signOut(auth)
    return {
        message: 'Utilisateur/trice déconnecté(e)'
    }
  }
  static async login(email, password) {
    const result = await signInWithEmailAndPassword(auth, email, password);
    if (result.user) {
      const { email, uid } = result.user;
      return {
        email,
        uid,
        message: "Connexion en cours ...",
      };
    } else {
      const result = await this.register(email, password);
      return {
        email,
        uid,
        message:
          "Vous n'êtiez pas inscrit(e), inscription terminée, connexion en cours ...",
      };
    }
  }

  static async register(email, password) {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (result.user) {
      const { email, uid } = result.user;
      return {
        email,
        uid,
        message: "Inscription réussi, connexion en cours ...",
      };
    } else {
      const result = await this.login(email, password);
      if (result.user) {
        const { email, uid } = result.user;
        return {
          email,
          uid,
          message: "Vous êtes déjà inscrit(e), connexion en cours ...",
        };
      }
    }
  }
}
