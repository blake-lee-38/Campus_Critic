import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import auth from "@react-native-firebase/auth";
import { auth as Fauth } from "../config/firebaseConfig";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const signUp = async (email, pass) => {
  // RE ensures password has 1 special character, 1 uppercase/lowercase letter, 1 num, and is at least 8 characters long
  var passRegex =
    /^(?=.*?[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?])(?=.*?[a-zA-z])(?=.*?[0-9]).{8,50}$/;

  // RE ensures email is a .edu email
  var emailRegex = /^[\w\.-]+@[\w\.-]+\.(edu)$/;

  if (email.match(emailRegex) && pass.match(passRegex)) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        Fauth,
        email,
        pass
      );
      const user = userCredential.user;
      console.log("User created!", user);
      return { message: "Success", user: "user" };
    } catch (error) {
      return { message: error.message };
    }
  } else if (email.match(emailRegex)) {
    return { message: "Password does not follow requirements" };
  } else if (pass.match(passRegex)) {
    return { message: "Email must be a .edu email" };
  } else {
    return { message: "Email and Password do not follow requirements" };
  }
};

export const signIn = async (email, pass) => {
  try {
    const userCredential = await signInWithEmailAndPassword(Fauth, email, pass);
    const user = userCredential.user;
    console.log("User signed In!", user);
    return { message: "Success", user: "user" };
  } catch (error) {
    return { message: error.message };
  }
};

export const signUpGoogle = async () => {
  GoogleSignin.configure({
    webClientId:
      "642430350313-fbd6la090g01hl0jc8ri0jbjh8ab0d3l.apps.googleusercontent.com",
  });
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const idToken = await GoogleSignin.signIn();
    console.log(idToken.idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(
      idToken.idToken
    );

    const user = await auth().signInWithCredential(googleCredential);
    return { message: "Success", user: user };
  } catch (error) {
    return { message: error.message };
  }
};
