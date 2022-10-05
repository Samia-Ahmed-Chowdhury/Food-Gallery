import React, { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Ingredients({ updateArr }) {

    const [show, setShow] = useState(false)

    // -------ingrendient-------
    const ingrendient = Object.keys(updateArr)
        .filter((key) => key.includes("strIngredient"))
        .reduce((obj, key) => {
            return Object.assign(obj, {
                [key]: updateArr[key]
            })
        }, {})
    //   console.log(ingrendient)
    const ingrendient_items = Object.values(ingrendient);

    // ------measure-------
    const measure = Object.keys(updateArr)
        .filter((key) => key.includes("strMeasure"))
        .reduce((obj, key) => {
            return Object.assign(obj, {
                [key]: updateArr[key]
            })
        }, {})
    //   console.log(measure)
    const measure_items = Object.values(measure);
    // console.log(measure_items[0]);

    return (
        <div className='ingrendient'>
            <h1 onClick={() => setShow(!show)}>
                <ShoppingBasketIcon className='in_icon' />Ingrendient
                {show ?
                    <KeyboardArrowUpIcon className='show_icon' />
                    : <KeyboardArrowDownIcon className='show_icon' />
                }
            </h1>
            {show ?
                <div className='show_ingrendient'>
                    {ingrendient_items.map((curElem, index) => {
                        {/* console.log(curElem) */ }
                        if (curElem !== "") {
                            return (
                                <p key={index}> <CheckCircleOutlineIcon />{curElem}
                                    <span>{measure_items[index]} </span>
                                </p>
                            )
                        }
                    })}
                </div>
                : null
            }
        </div>
    )
}

export default Ingredients