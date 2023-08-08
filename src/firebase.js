import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB3g1ylovojM_Vq95Vc65KgDahbdzxtJAs",
    authDomain: "disneyclonedb.firebaseapp.com",
    projectId: "disneyclonedb",
    storageBucket: "disneyclonedb.appspot.com",
    messagingSenderId: "568958336397",
    appId: "1:568958336397:web:459006b4e639ae4411d1c4"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;