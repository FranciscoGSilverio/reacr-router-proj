import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useParams, useRouteMatch } from "react-router-dom";
import { search } from "../api/api";
import CategoriesList from "../components/CategoriesList";
import PostList from "../components/PostList";
import SubCategories from "./SubCategories";

const Category = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    search(`/categorias/${id}`, (category) => {
      setSubCategories(category.subcategorias);
    });
  });
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <CategoriesList />
      <ul className="lista-categorias container flex">
        {subCategories.map((subCategory) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subCategory}
          >
            <Link to={`${url}/${subCategory}`}>{subCategory}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route path={`${path}/:subcategoria`}>
          <SubCategories />
        </Route>
        <Route exact path={`${path}/`}>
          <PostList url={`posts?categoria=${id}`} />
        </Route>
      </Switch>
    </>
  );
};

export default Category;
