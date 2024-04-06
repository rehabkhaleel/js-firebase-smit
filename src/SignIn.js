import React from "react";
import { auth } from "./firebase"; // Import the 'auth' instance from your Firebase configuration
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
};

export default SignIn;
