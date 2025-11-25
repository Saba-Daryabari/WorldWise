import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { CitiesProvider } from "./contexts/CitiesContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {

  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />}></Route>
            <Route
              path="cities"
              element={<CityList/>}
            ></Route>
            <Route path="cities/:id" element={<City/>}></Route>
            <Route
              path="countries"
              element={<CountryList />}
            ></Route>
            <Route path="form" element={<Form />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
