import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from "../App"
import Gparts from './Gparts';
import Search from './Search';

function Recipe() {

  const { post } = useContext(AppContext)
  // console.log(post);
 
  return (
    <>
      <section className='gallery' id="gallery">
        <div className="container">
        <Search />
          <div className=" row my-5 ">
            {
              post.map((curElem, index) => {
                const { idMeal, strCategory, strMeal, strMealThumb } = curElem
                return (
                  <div key={idMeal} className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 m-auto my-5">
                    <NavLink to={`item/${idMeal}`}>
                      <div className=" card " >
                        <div className='card-top '>
                          <img src={strMealThumb} alt="in" className="card-img img-fluid rounded-circle  mx-auto" />
                        </div>
                        <div className="card-title ">
                          <h4>{strMeal}</h4>
                          <h6>{strCategory}</h6>
                          <Gparts />
                        </div>
                      </div>
                    </NavLink>
                  </div>
                )
              }
              )
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Recipe