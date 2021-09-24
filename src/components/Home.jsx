import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div className='homePage'>

        <NavLink exact to='/beers'>
            <img src='../assets/beers.png' alt='beers' />
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis quis massa quis aliquam. Donec aliquam dapibus orci euismod tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis quis massa quis aliquam. Donec aliquam dapibus orci euismod tincidunt.</p>
        </NavLink>

        <NavLink exact to='/random-beer'>
            <img src='../assets/random-beer.png' alt='beers' />
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis quis massa quis aliquam. Donec aliquam dapibus orci euismod tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis quis massa quis aliquam. Donec aliquam dapibus orci euismod tincidunt.</p>
        </NavLink>

        <NavLink exact to='/new-beer'>
            <img src='../assets/new-beer.png' alt='beers' />
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis quis massa quis aliquam. Donec aliquam dapibus orci euismod tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis quis massa quis aliquam. Donec aliquam dapibus orci euismod tincidunt.</p>
        </NavLink>
            
        </div>
    )
}
