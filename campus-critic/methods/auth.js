import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth, app } from "../config/firebaseConfig";

export const signUp = async (email, pass) => {
  // RE ensures password has 1 special character, 1 uppercase/lowercase letter, 1 num, and is at least 8 characters long
  var passRegex =
    /^(?=.*?[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?])(?=.*?[a-zA-z])(?=.*?[0-9]).{8,50}$/;

  // RE ensures email is a .edu email
  var emailRegex = /^[\w\.-]+@[\w\.-]+\.(edu)$/;

  if (email.match(emailRegex) && pass.match(passRegex)) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
      const user = userCredential.user;
      console.log("User created!", user);
      return { message: "Success", user: user };
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
  console.log(email, pass);
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, pass);
    const user = userCredential.user;
    console.log("User signed In!", user);
    return { message: "Success", user: user };
  } catch (error) {
    return { message: error.message };
  }
};

export const signUserOut = () => {
  signOut(auth);
};

export const signUpGoogle = async () => {
  let provider = new GoogleAuthProvider(app);
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("User signed in with Google!", user);
      return { message: "Success", user: user };
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(
        "Error signing in with Google",
        errorCode,
        errorMessage,
        email
      );
      return { message: errorMessage };
    });
};
