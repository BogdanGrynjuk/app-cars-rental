import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import { useScrollToTop } from "hooks/useScrollToTop";

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));


export const App = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
