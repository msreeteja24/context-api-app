import React from "react";
import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

export default function Comment() {
  //To get access to the context - we use the useContext hook
  const { user, isAdmin } = useContext(UserInfoContext);
  return (
    <div>
      <p>Logged in as {user}</p>
      {isAdmin && <button>Edit Comment</button>}
    </div>
  );
}
