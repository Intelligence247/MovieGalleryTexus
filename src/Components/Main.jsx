import React from 'react'
import Card from './Card'
import "./Main.css"
const Main = () => {

  const contentArr=[
    {
      img:"./media/img1.png",
      title:"Blade Runner",
      period:"116 min",
      type:"Drama, Mystery, Sci-fi",
      desc:"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
      version:"8.1",
    },

    {
      img:"./media/img2.png",
      title:"Blade Runner 2049",
      period:"164 min",
      type:"Action, Drama,Mystery",
      desc:"Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing...",
      version:"8.0",
    },


    {
      img:"./media/img3.png",
      title:"Blade Runner Black Out 2022",
      period:"15 min",
      type:"Drama, Mystery, Sci-fi",
      desc:"In 2022, a powerful weapon causes a global blackout that has massive implications all over the world.",
      version:"7.3",
    },
  ]

  return (
    <main>
      {
        contentArr.map((content, i)=>(
 <Card
 key={i}
img={content.img}
title={content.title}
period={content.period}
type={content.type}
desc={content.desc}
version= {content.version}
/>
        ))
      }


    </main>
  )
}

export default Main