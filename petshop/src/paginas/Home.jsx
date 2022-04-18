import React from "react";
import CategoriesList from "../components/CategoriesList";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <CategoriesList />
      <PostList url={"/posts"} />
    </main>
  );
};

export default Home;
