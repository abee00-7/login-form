import { initializeApp } from 'firebase/app';
 
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDm29pRLTAenruLcneQE4fUAyHmKz22C_A",
  authDomain: "loginform-b4064.firebaseapp.com",
  projectId: "loginform-b4064",
  storageBucket: "loginform-b4064.appspot.com",
  messagingSenderId: "352196362695",
  appId: "1:352196362695:web:825986cd47bf3bcf5e59e2",
  measurementId: "G-R2S3147TDR"
};
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, provider, signInWithGoogle };
