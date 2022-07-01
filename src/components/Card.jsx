import React from 'react'
import './style.css'

const Card = (props) => {
    console.log(props.data)
    return (
        <>
            <div className="card">
                <div className="card-header d-flex align-items-center">
                    <img src=
                    // {props.data.images.SMALL.url}
                    {props.data.image} 
                    alt="" />
                    <div className="ms-4 bold">{props.data.label}</div>
                </div>
                <div className="card-body">
                    <ul>
                        {
                            props.data.ingredientLines.map((line, index) => {
                                return (
                                    <li>{line}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                    <div className="card-footer d-flex justify-content-between">
                        <span className='area'>
                            {props.data.cuisineType[0]}
                        </span>
                        <span className="area">
                            {props.data.mealType[0]}
                        </span>
                    </div>
            </div>
        </>
    )
}

export default Card
