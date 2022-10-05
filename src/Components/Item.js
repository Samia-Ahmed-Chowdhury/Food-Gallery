
import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from "../App"
import { useNavigate } from "react-router-dom";
import Gparts from './Gparts'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Assignment from '@mui/icons-material/Assignment';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Ingredients from './Ingredients';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

function Item() {
    const [instructions, setInstructions] = useState(false)
    let navigate = useNavigate();

    const { id } = useParams()
    const { post } = useContext(AppContext)
    // console.log(post);

    const updateItems = post.filter((curEle) => {
        return curEle.idMeal === id;

    });
    //   console.log(updateItems[0])
    const updateArr = updateItems[0]
    const { strArea, strCategory, strMeal, strMealThumb, strInstructions, strYoutube } = updateArr
    const link = strYoutube.split("https://www.youtube.com/watch?v=")[1]
    console.log(link)
    // const[img,setImg]=useState(true);
    const [vdo, setVdo] = useState(false);


    return (
        <>
            <section className='Item'>
                <div className="container">
                    <div className='row my-5'>
                        <KeyboardArrowLeftIcon style={{ fontSize: "5rem" }} onClick={() => { navigate(-1) }} />

                        <div className="item_div col-xxl-8 col-xl-8 col-lg-9 col-md-11 col-sm-11 col-11 m-auto py-5 my-5">
                            <img src={strMealThumb} style={{ width: "100%", height: "50%" }} alt="in" className=" img-fluid   mx-auto" />
                            {/* ---------modal----------- */}
                            <div className="modal fade " id="Modal1" tabIndex="-1" aria-labelledby="Modal1Label" aria-hidden="true">
                                <div className="modal-dialog my-5">
                                    <div className="modal-content my-5">
                                        <div className="modal-header ">
                                            <button type="button" onClick={() => setVdo(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body ">
                                            <div className="container-fluid justify-content-center">
                                                <div className="  row ">
                                                    <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${link}`}
                                                        title="YouTube video player" frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='overlay '>
                                {vdo ?
                                    <PauseCircleIcon className='play_icon'
                                    />
                                    :
                                    <PlayCircleIcon className='play_icon'
                                        onClick={() => setVdo(true)}
                                        data-bs-toggle="modal" data-bs-target="#Modal1"
                                    />
                                }
                                <div className='overlapping'>
                                    <div>
                                        <h2>{strMeal}</h2>
                                        <h6>{strCategory} |  {strArea}</h6>
                                    </div>
                                    <div>
                                        <Gparts />
                                    </div>
                                </div>
                                <hr />

                                <Ingredients updateArr={updateItems[0]} />

                                <div className='instruction'>
                                    <h1 onClick={() => setInstructions(!instructions)}>
                                        <Assignment className='in_icon' />    Instructions
                                        {instructions ?
                                            <KeyboardArrowUpIcon className='show_icon' />
                                            : <KeyboardArrowDownIcon className='show_icon' />
                                        }
                                    </h1>
                                    {instructions ?
                                        <div className='show_instruction'>
                                            <p>{strInstructions} </p> </div>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Item