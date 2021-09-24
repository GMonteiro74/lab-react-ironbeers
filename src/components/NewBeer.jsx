import axios from 'axios';
import React, {useState} from 'react';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function NewBeer() {

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first, setFirst] = useState('');
    const [tips, setTips] = useState('');
    const [attLevel, setAttLevel] = useState('');
    const [contributedBy, setContributedBy] = useState('');
    const history = useHistory();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first,
            brewers_tips: tips,
            attenuation_level: attLevel,
            contributed_by: contributedBy
        }
        await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);
        setName('');
        setTagline('');
        setDescription('');
        setFirst('');
        setTips('');
        setAttLevel('');
        setContributedBy('');
        toast.success('New beer successfully saved to database! 🍻 ')
        history.push('/beers')
    }


    return (
        <div>

        <Header />
        <h2>Create a new beer</h2>

        <form onSubmit={handleFormSubmit}>

        <label>Name</label>
        <input type='text' onChange={e => setName(e.target.value)} value={name} />

        <label>Tagline</label>
        <input type='text' onChange={e => setTagline(e.target.value)} value={tagline} />

        <label>Description</label>
        <input type='text' onChange={e => setDescription(e.target.value)} value={description} />

        <label>First brewed</label>
        <input type='text' onChange={e => setFirst(e.target.value)} value={first} />

        <label>Brewers tips</label>
        <input type='text' onChange={e => setTips(e.target.value)} value={tips} />

        <label>Atenuation level</label>
        <input type='number' onChange={e => setAttLevel(e.target.value)} value={attLevel} />

        <label>Contributed by</label>
        <input type='text' onChange={e => setContributedBy(e.target.value)} value={contributedBy} />

        <button type='submit'>Create</button>

        </form>
            
        </div>
    )
}
