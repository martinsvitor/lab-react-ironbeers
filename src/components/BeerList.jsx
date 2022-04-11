import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';


const BeerList = () => {

  const [beerlist, setBeerlist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setBeerlist(response.data);
        setLoading(false);
      })
      .catch((error) => console.log('Error fetching beer list from API', error));
  }, []);

  if (loading) {
    return <p>Loading beer list</p>
  }

  return (
    <div className="container">
      {beerlist.map((beer) => {
        console.log(beer)
        return (
          <Link to={`/${beer._id}`}>
            <div className="card">
              <img src={beer.image_url} key={`${beer.tagline} label`} />
              <div className="hidden-title">
                <div className="column-centered">
                <h2 className="name-style">{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default BeerList