import React, { createContext, useEffect, useState } from "react";
import axios from "axios"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Recipe from "./Components/Recipe";
import Item from "./Components/Item";
import Contact from "./Components/Contact";
import About from "./Components/About";

export const AppContext = createContext()

function App() {
  const url = `${process.env.REACT_APP_API_KEY}`
  const [err, setErr] = useState({ show: 'false', msg: '' })
  const [post, setPost] = useState([])
  const [query, setQuery] = useState('')
  useEffect(() => {
    let timerOut = setTimeout(() => {
      axios.get(`${url}search.php?s=${query}`)
        .then(res => {
          if (res.data.meals != null) {
            setPost(res.data.meals)
            // console.log(res.data.meals);
            // setErr('')
          }
          else{
            setPost([])
            setErr({ show: "true", msg: "something err" })
          }
        })
        .catch(err => {
          setPost([])
          setErr({ show: "true", msg: "something err" })
        })
    }, 800);
    return () => clearTimeout(timerOut)
  }, [query])
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <AppContext.Provider value={{ post, setPost, err, setErr, query, setQuery }}>
          <Routes>
            <Route  path="/" element={<Home />}></Route>
            <Route  path="/home" element={<Home />}></Route>
            <Route  path="recipe" element={<Recipe />}></Route>
            <Route path="item/:id" element={<Item />}></Route>
            <Route path="recipe/item/:id" element={<Item />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route  path="about" element={<About />}></Route>
            <Route path="*" element={<p>err</p>}></Route>
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
