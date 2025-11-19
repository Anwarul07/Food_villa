import React from "react";
import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "user context name ",
    email: "official user context",
  },
});
export default UserContext;
// usercontext to acees from sny wheere in  react
