import React from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import SurfSpotListWaveHeight from './SurfSpotListWaveHeight';
import SurfSpotListWindSpeed from './SurfSpotListWindSpeed';
import SurfSpotListAirTemp from './SurfSpotListAirTemp';
import SurfSpotListWaterTemp from './SurfSpotListWaterTemp';
import '../components/SurfSpotList.css';



export default props => {
    const {surfspots, removeFromDom, fetchItem } = props;

    return (
        <div>
            <div id='surf'>
                <p id="navButtons"><Link to = "/">Home</Link> | <Link to = "/new">Add a SurfSpot</Link></p>
            </div>
            <hr />
            <div id="info">
                <h3>Where you gonna get out in the water today?</h3>
                <h6>Swell of the Day provides users with today's best surfing spot in Orange County. Choose your beach by <a href="#windSpeed">Wind Speed</a>, <a href="#waveHeight">Wave Height</a>, <a href="#airTemp">Air Temperature</a>, <a href="#waterTemp">Water Temperature</a></h6>
            </div>
            <SurfSpotListWaveHeight surfspots={surfspots} removeFromDom={removeFromDom} fetchItem={fetchItem}/>
            <SurfSpotListWindSpeed surfspots={surfspots} removeFromDom={removeFromDom} fetchItem={fetchItem}/>
            <SurfSpotListAirTemp surfspots={surfspots} removeFromDom={removeFromDom} fetchItem={fetchItem}/>
            <SurfSpotListWaterTemp surfspots={surfspots} removeFromDom={removeFromDom} fetchItem={fetchItem}/>
        </div>
    )
}


