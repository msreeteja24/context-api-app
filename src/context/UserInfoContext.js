//We will import context from react to create the context
import { createContext } from "react";

//Now we will create the context
const UserInfoContext = createContext({
  user: "Guest",
  isAdmin: "false",
});

export default UserInfoContext;
