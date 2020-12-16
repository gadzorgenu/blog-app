import React from "react";

import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  // isAuthenticated is a boolean value whose value is true when Auth0 has authenticated the user and false when it hasn't.
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;