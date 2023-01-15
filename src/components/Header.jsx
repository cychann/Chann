import React, { useEffect, useState } from "react";
import { useAuthentication } from "../context/AuthProvider";

export default function Header() {
  const { user, action } = useAuthentication();

  useEffect(() => {
    action.onAuthChange();
  }, []);

  return (
    <hedaer>
      <p>Chann</p>
      {user ? (
        <p onClick={() => action.signOut()}>Logout</p>
      ) : (
        <p onClick={() => action.signIn()}>Login</p>
      )}
    </hedaer>
  );
}
