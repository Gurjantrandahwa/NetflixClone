import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC7ZHrw5gcGBwhNNKFI6FnXIOIVCtLpkR8",
    authDomain: "netflix-clone-4e2cc.firebaseapp.com",
    projectId: "netflix-clone-4e2cc",
    storageBucket: "netflix-clone-4e2cc.appspot.com",
    messagingSenderId: "235518870980",
    appId: "1:235518870980:web:c00cd074e6517287971091",
    measurementId: "G-5211DDG17M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;