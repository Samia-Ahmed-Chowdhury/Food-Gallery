import React, { createContext, useEffect, useState } from "react";
import axios from "axios"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home/Home";
import Recipe from "./Components/Recipe";
import Item from "./Components/Item";
import Contact from "./Components/Contact";
import About from "./Components/About";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";

export const AppContext = createContext()

function App() {
  const url = `${process.env.REACT_APP_API_KEY}`
  const [err, setErr] = useState({ show: 'false', msg: '' })
  const [post, setPost] = useState([])
  const [query, setQuery] = useState('')

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "recipe",
          element: <Recipe />
        },
        {
          path: "item/:id",
          element: <Item />
        },
        {
          path: "recipe/item/:id",
          element: <Item />
        }, {
          path: "contact",
          element: <Contact />
        },
        {
          path: "about",
          element: <About />
        }
      ]
    }
  ]);

  useEffect(() => {
    let timerOut = setTimeout(() => {
      axios.get(`${url}search.php?s=${query}`)
        .then(res => {
          if (res.data.meals != null) {
            setPost(res.data.meals)
            // console.log(res.data.meals);
            // setErr('')
          }
          else {
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
        <AppContext.Provider value={{ post, setPost, err, setErr, query, setQuery }}>
        <RouterProvider router={router} />
        </AppContext.Provider>
    </>
  );
}

export default App;
