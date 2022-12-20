import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/primerhymetime.jpg'
import IMG2 from '../../assets/strangerescape.jpg'
import IMG3 from '../../assets/mealplan.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Prime Rhyme Time: A Writers Best Friend. Be A Rapper',
    github: 'https://github.com/ChrisLeeRios/prime_rhyme_time',
    demo: 'http://44.204.22.245/login'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Stranger Escape: Puzzle Solving Thriller, Click Based Game',
    github: 'https://github.com/ChrisLeeRios/StrangerEscape',
    demo: 'https://thestrangerescape.azurewebsites.net/LoginandReg'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Meal Share: Plan Meals, Lets Get Healthy Together!',
    github: 'https://github.com/ChrisLeeRios/75Hard',
    demo: 'http://54.237.115.173/sfhards'
  }
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Maintaining tasks and tracking progress',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio