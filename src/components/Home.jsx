import React from 'react';
import { Link } from 'react-router-dom';

// Internal imports
import allBeers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

const Home = () => {
  const imagesArray = [
    {
      image: allBeers,
      url: '/all',
      title: 'All Beers'
    },
    {
      image: randomBeer,
      url: '/random',
      title: 'Random Beer'
    },
    {
      image: newBeer,
      url: '/new',
      title: 'New Beer'
    }];

  return (
    <div className="container">
      {imagesArray.map((element) => {
        return (
          <Link to={`${element.url}`}>
            <div className='card'>
              <img src={element.image} alt={element.title} />
              <div className='hidden-title'>
                <h2 >{element.title}</h2>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Home