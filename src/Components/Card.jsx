import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className="container">
            <div className="card">
                <img className="card--img" src={props.img} alt="" />
                <div className="card--body">
                    <ul className='card--list-one'>
                        <li className="card--title-head">{props.title}</li>
                        <li><img className="icon" src="./media/Icon.png" alt="" /></li>
                        <li className="card--num">{props.version}</li>
                    </ul>
                    <ul className='card--list-two'>
                        <li>{props.period}</li>
                        <li>{props.type}</li>
                        <li className='watch'><span>+</span> Watchlist</li>
                    </ul>
                    <p className ="card--final-text">{props.desc}<span>Read more</span></p>
        
                </div>
            </div>
        </div>

  )
}

export default Card