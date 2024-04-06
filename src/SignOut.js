import React from "react";
import { auth } from "./firebase"; // Import the 'auth' instance from your Firebase configuration
import { signOut } from "firebase/auth";

const SignOut = () => {
  return (
    auth.currentUser && (
      <button onClick={() => signOut(auth)}>Sign out</button>
    )
  );
};

export default SignOut;
