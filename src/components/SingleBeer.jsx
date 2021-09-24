import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';

export default function SingleBeer({match}) {

    const [beer, setBeer] = useState({});

    useEffect( () => {
        async function getBeer() {
            const beerID = match.params.id;
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerID}`);
            setBeer(response.data);
        }
        getBeer();
    }, [])


    return (
        <>

        <Header />
        <div className='single-beer'>   

        <img src={beer.image_url} alt={beer.name} />
        <div>
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p>Atenuation level: {beer.attenuation_level}</p>
        <p>Description: {beer.description}</p>
        <p>Countributed by: {beer.contributed_by}</p>
        </div>
            
        </div>

        </>
    )
}
