import React from 'react'

const Card = () => {
  return (
    <div className="container">
            <div className="card">
                <img className="card--img" src="./media/img2.png" alt="" />
                <div className="card--body">
                    <ul className='card--list-one'>
                        <li className="card--title-head">Blade Runner 2049</li>
                        <li><img className="icon" src="./media/Icon.png" alt="" /></li>
                        <li className="card--num">8.0 </li>
                    </ul>
                    <ul className='card--list-two'>
                        <li>164 min</li>
                        <li>Action, Drama,Mystery</li>
                        <li><span>+</span> Watchlist</li>
                    </ul>
                    <p class="card--final-text">Young Blade Runner K's discovery of a long-buried secret leads him to track down
                        former Blade Runner Rick Deckard, who's been missing...Read more</p>
        
                </div>
            </div>
        </div>

  )
}

export default Card