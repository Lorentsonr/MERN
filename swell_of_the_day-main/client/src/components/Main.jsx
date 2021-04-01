import React from 'react';
import { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import '../components/Main.css';

import Detail from './Detail';
import Update from './Update';
import SurfSpotList from './SurfSpotList';
import SurfSpotForm from './SurfSpotForm';
import BestSpots from './BestSpots';



export default props => {

    const [surfspots, setSurfSpots] = useState([]);
    const [details, setDetails] = useState();
    useEffect(()=>{
        axios.get('http://localhost:8000/surfspots')
            .then(res=>{
                setSurfSpots(res.data);
            });
    },[]);

    
    const fetchItem = (location) => {
        console.log(location)
        axios.get(`http://api.worldweatheronline.com/premium/v1/marine.ashx?key=cdcedac097b04105a03160517213003&q=${location}&format=json&tp=24`)
            .then(response => {
                console.log(response.data.data.weather[0].maxtempF)
                setDetails(response.data.data);
            })
            .catch(err => {
                alert("These aren't the surfspots you're looking for");
            })
    };

    const removeFromDom = surfspotId => {
        setSurfSpots(surfspots.filter(surfspot => surfspot._id != surfspotId));
    };

    const addToDom = (newSurfSpot) => {
        setSurfSpots([...surfspots, newSurfSpot]);
    };


    return (
        <div className="container">
            <header onload="document.body.style.opacity='.1'">
                <h1>Swell of the Day</h1>
                <button type='button' id="enter"><a href='#surf'>Surf</a></button>

            </header>
        <hr/>
        <Router>
            <SurfSpotList path="/" surfspots={surfspots} removeFromDom={removeFromDom} fetchItem={fetchItem}/>
            <BestSpots path="/bestspots" surfspots={surfspots} removeFromDom={removeFromDom} fetchItem={fetchItem}/>
            <SurfSpotForm path="/new"addToDom={addToDom}/>
            <Detail path="/surfspot/:id" fetchItem={fetchItem} details={details}/>
            <Update path="/edit/:id/"/>
        </Router>
    </div>
    )
}


