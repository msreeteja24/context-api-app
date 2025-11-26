import React from "react";
//import { useContext } from "react";
//import UserInfoContext from "../context/UserInfoContext";

export default function Comment({ user, isAdmin }) {
  //To get access to the context - we use the useContext hook
  //- we will use prop drilling with context
  // const { user, isAdmin } = useContext(UserInfoContext);
  return (
    <div>
      <p>Logged in as {user}</p>
      {isAdmin && <button>Edit Comment</button>}
    </div>
  );
}
