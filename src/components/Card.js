import React from 'react'

export default function Card(props) {
    return (
        <div className='card-container'>

            <div className='free'>
               <p className='free-banner'>Free</p>
               <span className='off'>20%off</span>
            </div>
            <div className='card'>
                <h1>{props.name}</h1>
                <div><i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></div>
                <p>{props.address1} ,{props.address2}</p>
                <p> <span>{props.time} | {props.km}</span></p>

                <div className='offer-text'>
                <p className='offer'>Offer Text</p>
                <button className='book-now-btn'>Book Now</button>
                </div>
                
            </div>

        </div>
    )
}
