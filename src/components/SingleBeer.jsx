import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';


const SingleBeer = () => {

  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then((beer) => {
        console.log(beer.data);
        setBeer(beer.data);
        setLoading(false);
      })
      .catch((error) => console.log('Error when trying to get data from API', error))
  }, []);

  if (loading) {
    return <p>Looking for your beer...</p>
  }

  return (
    <div className="container">
      <div>
        <img src={beer.image_url} alt={beer.name} className="bottle-img" />
        <hr />
        <h2>{beer.name}</h2>
        <hr />
        <h3>{beer.tagline}</h3>
        <p>{beer.description}</p>
        <h3>Suggested food pairing:</h3>
        <div className="container">
          {beer.food_pairing.map((food) => {
            return (<p className='card'>{food}</p>)
          })}
        </div>
      </div>
    </div>
  )


}

export default SingleBeer


/* beer.image_url;
beer.tagline 
beer.description
beer.food_pairing.map()
*/