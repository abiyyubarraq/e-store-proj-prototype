import { initializeApp } from "firebase/app"
import { getFirestore, setDoc, where, collection, getDoc, getDocs, addDoc, deleteDoc, serverTimestamp, doc, orderBy, limit, onSnapshot, query, QuerySnapshot, DocumentData } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB9TnoHRRUZwsdRQgHychkip0sno7Y1iK0",
  authDomain: "estore-react-ts.firebaseapp.com",
  projectId: "estore-react-ts",
  storageBucket: "estore-react-ts.appspot.com",
  messagingSenderId: "196521975277",
  appId: "1:196521975277:web:597f0f849652727363dbe4",
  measurementId: "G-C85YH5RQE4",
}

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, where, setDoc, collection, getDocs, getDoc, addDoc, deleteDoc, serverTimestamp, doc, auth, orderBy, limit, onSnapshot, query, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider }
export const provider = new GoogleAuthProvider()
// provider.setCustomParameters({ prompt: "select_account" })
// export const signInWithGoogle = () => signInWithPopup(auth, provider)

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB9TnoHRRUZwsdRQgHychkip0sno7Y1iK0",
//   authDomain: "estore-react-ts.firebaseapp.com",
//   projectId: "estore-react-ts",
//   storageBucket: "estore-react-ts.appspot.com",
//   messagingSenderId: "196521975277",
//   appId: "1:196521975277:web:597f0f849652727363dbe4",
//   measurementId: "G-C85YH5RQE4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// import { initializeApp } from "firebase/app"
// import { getFirestore, doc, setDoc, getDocs, collection } from "firebase/firestore"
// import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"

// const firebaseConfig = {
//   apiKey: "AIzaSyB9TnoHRRUZwsdRQgHychkip0sno7Y1iK0",
//   authDomain: "estore-react-ts.firebaseapp.com",
//   projectId: "estore-react-ts",
//   storageBucket: "estore-react-ts.appspot.com",
//   messagingSenderId: "196521975277",
//   appId: "1:196521975277:web:597f0f849652727363dbe4",
//   measurementId: "G-C85YH5RQE4",
// }
// const app = initializeApp(firebaseConfig)

// // export const createUserProfileDocument = async (userAuth: any, additionalData: any) => {
// //   if (!userAuth) return

// //   const userRef = doc(firestore, "users")
// //   //doc(`users/${userAuth.uid}`)
// //   const snapShot = await getDocs(collection(firestore, "users"))

// //   if (!snapShot) {
// //     const { displayName, email } = userAuth
// //     const createdAt = new Date()
// //     try {
// //       await setDoc(userRef, {
// //         displayName,
// //         email,
// //         createdAt,
// //         ...additionalData,
// //       })
// //     } catch (error: any) {
// //       console.log("error creating user", error.message)
// //     }
// //   }

// //   return userRef
// // }

// export const auth = getAuth(app)
// export const firestore = getFirestore(app)

//  const provider = new GoogleAuthProvider()
//  provider.setCustomParameters({ prompt: "select_account" })
//  export const signInWithGoogle = () => signInWithPopup(auth, provider)

// export default app
