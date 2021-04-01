import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import '../components/Main.css';


export default (props) => {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [airTemp, setAirTemp] = useState("");
    const [waterTemp, setWaterTemp] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [waveHeight, setWaveHeight] = useState("");
    const [errors, setErrors] = useState([]); 

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/surfspots/create', {
            name,
            city,
            location,
            airTemp,
            waterTemp,
            windSpeed,
            waveHeight,
        })
            .then(res => {
                console.log(res);
                props.addToDom(res.data)
                setName("");
                setCity("");
                setLocation("");
                setAirTemp("");
                setWaterTemp("");
                setWindSpeed("");
                setWaveHeight("");
                // navigate(`/`)
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <div id='formHead'>
                <p id="navButtons"><Link to = "/">Home</Link> | <Link to = "/new">Add a SurfSpot</Link></p>
            </div>
            <hr/>
            <h5>Know a surfspot needing a home?</h5>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name: </label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </p>
                <p>
                    <label>City: </label><br/>
                    <input type="text" onChange={(e)=>setCity(e.target.value)} value={city}/>
                </p>
                <p>
                    <label>Location: </label><br/>
                    <input type="text" onChange={(e)=>setLocation(e.target.value)} value={location}/>
                </p>
                <p>
                    <label>Air Temp: </label><br/>
                    <input type="text" onChange={(e)=>setAirTemp(e.target.value)} value={airTemp}/>
                </p>
                <p>
                    <label>Water Temp: </label><br/>
                    <input type="text" onChange={(e)=>setWaterTemp(e.target.value)} value={waterTemp}/>
                </p>
                <p>
                    <label>Wind Speed: </label><br/>
                    <input type="text" onChange={(e)=>setWindSpeed(e.target.value)} value={windSpeed}/>
                </p>
                <p>
                    <label>Wave Height: </label><br/>
                    <input type="text" onChange={(e)=>setWaveHeight(e.target.value)} value={waveHeight}/>
                </p>
                {name.length < 3?
                    <input type="submit" className="btn btn-info" value="Add SurfSpot" disabled /> :
                    <input type="submit" className="btn btn-info" value="Add SurfSpot" />
                }
            </form>
        </div>
    )
}
