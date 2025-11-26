import React from "react";
import Comment from "./Comment";

export default function BlogPost({ user, isAdmin }) {
  return (
    <div>
      {isAdmin && <button>Delete</button>}
      <h2> Example post Title</h2>
      <p> This is an example post content</p>
      <Comment user={user} isAdmin={isAdmin}></Comment>
    </div>
  );
}
