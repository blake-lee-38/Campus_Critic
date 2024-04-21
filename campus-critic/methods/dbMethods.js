import { db } from "../config/firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

export const getPlaces = async (college, type) => {
  const querySnapshot = await getDocs(collection(db, "places", college, type));
  let places = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const data = { name: doc.data().name, rating: doc.data().rating };
    places.push(data);
  });
  console.log(places);
};
