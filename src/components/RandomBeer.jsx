import React, {useEffect, useState} from 'react'
import Header from './Header';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState({});

    useEffect( () => {
        async function getRandom() {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
            setRandomBeer(response.data)
        }        
        getRandom();
    }, [])
    
    return (
        <>

        <Header />

        <div className='single-beer'>
        
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        
        <div>
        <h2>{randomBeer.name}</h2>
        <p>{randomBeer.tagline}</p>
        <p>First brewed: {randomBeer.first_brewed}</p>
        <p>Atenuation level: {randomBeer.attenuation_level}</p>
        <p>Description: {randomBeer.description}</p>
        <p>Countributed by: {randomBeer.contributed_by}</p>
        </div>
            
        </div>
        </>
    )
}
