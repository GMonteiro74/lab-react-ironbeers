import React, {useEffect, useState} from 'react'
import Header from './Header';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { css } from "@emotion/react";
import BarLoader from "react-spinners/ClipLoader";



export default function BeersList() {

    const [beers, setBeers] = useState([]);

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: #2292b1;
    `;
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    useEffect( () => {
        async function getBeers() {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            setBeers(response.data)
        }        
        getBeers();
    }, [])

    console.log(beers[0]);
    
    return (
        <>
        <Header />

        <div className='beers-list'>

        {beers.length > 0 ? (beers.map((beer, index) => {
            return (
                
                            <NavLink key={index} className='beer-card' exact to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt={beer.name} />
                <div>
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>Contributed by: {beer.contributed_by}</p>
                </div>
                </NavLink>
                
            )
        })) : (
            <BarLoader color={color} loading={loading} css={override} size={300} />
        )}

        </div>

        </>
    )
}
