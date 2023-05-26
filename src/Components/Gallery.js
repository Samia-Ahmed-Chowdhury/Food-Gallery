import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from "../App"
import Gparts from './Gparts';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Gallery() {

  const { post } = useContext(AppContext)
  console.log(post.slice(0,6));
  const GalleryPost = post.slice(0, 6);

  return (
    <>
      <section className='gallery' id="gallery">
        <div className="container">
          <div className=" row my-5 ">
            {
              GalleryPost.map((curElem, index) => {
                const { idMeal, strMeal, strCategory,strMealThumb } = curElem
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
            <NavLink className="nav-link" to="/recipe">
            <p>Check Out More <KeyboardArrowRightIcon /> </p>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery