import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA86OZ-H8wXAErG1RLr0awqrKqyoPSxGaw",
    authDomain: "marpsafrica-cc77b.firebaseapp.com",
    projectId: "marpsafrica-cc77b",
    storageBucket: "marpsafrica-cc77b.appspot.com",
    messagingSenderId: "475792249311",
    appId: "1:475792249311:web:d98b5e54d3329c3c7e346a"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };