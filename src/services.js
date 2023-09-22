import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, addDoc, query, where } from "firebase/firestore";

// Configura la configuración de Firebase con tus variables de entorno
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,
  authDomain: import.meta.env.VITE_FIRESTORE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIRESTORE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIRESTORE_APP_ID,
  measurementId: import.meta.env.VITE_FIRESTORE_MEASUREMENT_ID,
};

// Inicializa la aplicación Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore
const db = getFirestore(firebaseApp);

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const itemDoc = doc(db, "items", id);

    getDoc(itemDoc)
      .then((doc) => {
        if (doc.exists()) {
          resolve({ id: doc.id, ...doc.data() });
        } else {
          resolve(null);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const itemCollection = collection(db, "items");
    let q;
    if (categoryId) {
      q = query(itemCollection, where("categoryId", "==", categoryId));
    } else {
      q = query(itemCollection);
    }

    getDocs(q)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const createOrder = (orden) => {
  const ordersCollection = collection(db, "orders");
  return addDoc(ordersCollection, orden);
};
