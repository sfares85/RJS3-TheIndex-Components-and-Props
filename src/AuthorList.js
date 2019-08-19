import React from "react";
import AuthorCard from "./AuthorCard";
import { tsPropertySignature } from "@babel/types";
function AuthorList(props) {
  const authorList = props.authors.map(author => (
    <AuthorCard key={author.name} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorList}</div>
    </div>
  );
}

export default AuthorList;
