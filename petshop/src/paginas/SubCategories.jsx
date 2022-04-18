import React from "react";
import { useParams } from "react-router-dom";
import PostList from "../components/PostList"

const SubCategories = () => {
  const {subCategory} = useParams();
  return(
    <PostList url={`/posts?subcategoria=${subCategory}`} />
  )
}

export default SubCategories;