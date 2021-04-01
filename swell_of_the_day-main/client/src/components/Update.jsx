import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import UnrecognizedID from './UnrecognizedID';

export default props => {
    const { id } = props;
    const [name, setName] = useState(""); 
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [airTemp, setAirTemp] = useState("");
    const [waterTemp, setWaterTemp] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [waveHeight, setWaveHeight] = useState("");
    const [errors, setErrors] = useState([]); 
    const [exists, setExists] = useState(true);



    useEffect(() => {
        axios.get('http://localhost:8000/surfspot/' + id)
            .then(res => {
                setName(res.data.name);
                setCity(res.data.city);
                setLocation(res.data.location);
                setAirTemp(res.data.airTemp);
                setWaterTemp(res.data.waterTemp);
                setWindSpeed(res.data.windSpeed);
                setWaveHeight(res.data.waveHeight);
            })
            .catch( ()=> {
                setExists(false)
            })
    }, [])

    const updateSurfSpot = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/surfspot/' + id, {
            name: name,
            city: city,
            location: location,
            airTemp: airTemp,
            waterTemp: waterTemp,
            windSpeed: windSpeed,
            waveHeight: waveHeight,
        })
            .then(res => {
                console.log(res);
                navigate(`/surfspot/${id}`)
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            });
    }

    return (

        exists ?

        <div>
            <p><Link to = "/">Home</Link> | <Link to = "/new">Add a SurfSpot</Link> | <Link to = {`/surfspot/${id}`}>View the SurfSpot</Link></p>
            <hr/>
            <h5>Edit {name}:</h5>
            <form onSubmit={updateSurfSpot}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>SurfSpot Name:</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>SurfSpot City:</label><br />
                    <input type="text" 
                    city="city" 
                    value={city} 
                    onChange={(e) => { setCity(e.target.value) }} />
                </p>
                <p>
                    <label>SurfSpot Location:</label><br />
                    <input type="text" 
                    location="location" 
                    value={location} 
                    onChange={(e) => { setLocation(e.target.value) }} />
                </p>
                <p>
                    <label>SurfSpot Air Temp:</label><br />
                    <input type="text" 
                    airTemp="airTemp" 
                    value={airTemp} 
                    onChange={(e) => { setAirTemp(e.target.value) }} />
                </p>
                <p>
                    <label>SurfSpot Water Temp:</label><br />
                    <input type="text" 
                    waterTemp="waterTemp" 
                    value={waterTemp} 
                    onChange={(e) => { setWaterTemp(e.target.value) }} />
                </p>
                <p>
                    <label>SurfSpot Wind Speed:</label><br />
                    <input type="text" 
                    windSpeed="windSpeed" 
                    value={windSpeed} 
                    onChange={(e) => { setWindSpeed(e.target.value) }} />
                </p>
                <p>
                    <label>SurfSpot Wave Height:</label><br />
                    <input type="text" 
                    waveHeight="waveHeight" 
                    value={waveHeight} 
                    onChange={(e) => { setWaveHeight(e.target.value) }} />
                </p>
                <input className="btn btn-primary" value="Edit SurfSpot" type="submit" />
            </form>
        </div>

        :

        <UnrecognizedID />
        
    )
}
