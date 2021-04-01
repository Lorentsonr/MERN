import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import UnrecognizedID from './UnrecognizedID';


export default props => {
    const { details, fetchItem } = props
    const [surfspot, setSurfSpot] = useState({})
    const [exists, setExists] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/surfspot/" + props.id)
        .then(res => {
                fetchItem(res.data.location);
                setSurfSpot(res.data)}
                )
            .catch( ()=> {
                setExists(false)
            })
    }, []);

    const deleteSurfSpot = () => {
        axios.delete('http://localhost:8000/surfspot/' + props.id)
            .then(res => {
                console.log(res);
                navigate(`/`)
            })
    };

    const editLink = (surfspotId) => {
        navigate(`/edit/${surfspotId}`)
    }
    
    return (
        exists ?

        <div>
            <p><Link to = "/">Home</Link> | <Link to = "/new">Add an SurfSpot</Link></p>
            <hr/>
            <h3>{surfspot.name}</h3>
            <p>City: {surfspot.city}</p>
            <p>Location: {surfspot.location}</p>
            <p>Air Temp: {surfspot.airTemp}</p>
            <p>Water Temp: {surfspot.waterTemp}</p>
            <p>Wind Speed: {surfspot.windSpeed}</p>
            <p>Wave Height: {surfspot.waveHeight}</p>
            <p>Max Temp: {details && details.weather[0].maxtempF}</p>
{/* 
            <br/>
            <button className="btn btn-danger" onClick={(e)=>{deleteSurfSpot(surfspot._id)}}>
                        Delete {surfspot.name}
            </button> 
            <button className="btn btn-primary" onClick={(e)=>{editLink(surfspot._id)}}>
                        Edit
            </button>  
            <br/> */}
        </div>

        :

        <UnrecognizedID />

    )
}