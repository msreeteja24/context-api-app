import React, { useContext } from "react";
import BlogPost from "./BlogPost";
import UserInfoContext from "../context/UserInfoContext";

export default function BlogPage() {
  //Using context along with prop drilling
  const userInfo = useContext(UserInfoContext);
  return (
    <div>
      <h3> Blog </h3>
      <BlogPost user={userInfo.user} isAdmin={userInfo.isAdmin}></BlogPost>
    </div>
  );
}
