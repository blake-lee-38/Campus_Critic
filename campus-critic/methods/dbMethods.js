import { db } from "../config/firebaseConfig.js";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

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

export const storeUserData = async (uid, data) => {
  try {
    await setDoc(doc(db, "users", uid), data);
    console.log("User Info successfully Saved!");
  } catch (e) {
    console.error("Error writing document: ", e);
  }
};

export const getUser = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const getHomeData = async (user) => {
  const pastReviews = await getPastReviews(user.uid);
  const placeData = await getReviewPlaces(user, pastReviews);
  const popularPlaces = await getPopularPlaces(user);
  return { reviewPlaces: placeData, popularPlaces: popularPlaces };
};

export const getRecentReviews = async (user) => {
  const pastReviews = await getPastReviews(user.uid);
  const placeData = await getReviewPlaces(user, pastReviews);
  return placeData;
};

const getPopularPlaces = async (user) => {
  const restaurantsCollection = collection(
    db,
    "places",
    user.college,
    "restaurant"
  );
  const restaurants = query(
    restaurantsCollection,
    orderBy("rating", "desc"),
    limit(5)
  );
  const restaurantSnapshot = await getDocs(restaurants);
  let popularPlaces = [];
  restaurantSnapshot.forEach((doc) => {
    const data = doc.data();
    data["id"] = doc.id;
    popularPlaces.push(data);
  });
  return popularPlaces;
};

const getReviewPlaces = async (user, reviews) => {
  let reviewData = [];
  for (const review of reviews) {
    const docRef = doc(db, "places", user.college, review.type, review.id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    data["id"] = docSnap.id;
    data["userRating"] = review.rating;
    reviewData.push(data);
  }
  return reviewData;
};

const getPastReviews = async (uid) => {
  const allReviews = collection(db, "reviews");
  const userReviews = query(allReviews, where("user_id", "==", uid));
  const querySnapshot = await getDocs(userReviews);
  let places = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const data = {
      id: doc.data().place_id,
      rating: doc.data().rating,
      type: doc.data().type,
    };
    places.push(data);
  });
  return places;
};

export const postReview = async (data) => {};

export const getCategoryData = async (category, college) => {
  const querySnapshot = await getDocs(
    collection(db, "places", college, category)
  );
  let places = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const data = doc.data();
    data["id"] = doc.id;
    places.push(data);
  });
  return places;
};
