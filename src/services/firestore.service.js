import {
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  doc,
  collection,
} from "firebase/firestore";
import { db } from "../../config/firebase.config";


export class FirestoreService {
  static async fetchAllDocumentsFromCollection(coll) {
    let documents = [];
    const querySnapshot = await getDocs(collection(db, coll));
    querySnapshot.forEach((doc) => {
      documents.push(doc.data());
    });
    return pile;
  }

  static async fetchOneSpecificDocument(coll, id) {
    const docRef = doc(db, coll, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  }
}
