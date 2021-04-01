import React from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import '../components/Tables.css';



export default props => {
    const { removeFromDom, surfspots } = props;
    
    const editLink = (surfspotId) => {
        navigate(`/edit/${surfspotId}`)
    }

    const detailsLink = (surfspotId) => {
        navigate(`/surfspot/${surfspotId}`)
    }

    const deleteSurfSpot = (surfspotId) => {
        axios.delete('http://localhost:8000/surfspot/' + surfspotId)
            .then(res => {
                removeFromDom(surfspotId)
            })
    }

    // const sortedPets = pets;
    // sortedPets.sort(function(a, b) {
    //     if(a.type.toLowerCase() < b.type.toLowerCase()) return -1;
    //     if(a.type.toLowerCase() > b.type.toLowerCase()) return 1;
    //     return 0;
    // })

    let sortedSurfSpotsAirTemp = surfspots;
    sortedSurfSpotsAirTemp.sort(function(a, b) {
        if(a.airTemp < b.airTemp) return 1;
        if(a.airTemp > b.airTemp) return -1;
        return 0;
    });


    return (
        <div class="tableMain">
                    <h5 id="airTemp">Air Temp</h5>
                    <table className="table table-bordered">
                        <tr>
                            <th>Surf Spot</th>
                            <th>City</th>
                            {/* <th>Location</th> */}
                            <th>Air Temp</th>
                            <th>Water Temp</th>
                            <th>Wind Speed</th>
                            <th>Wave Height</th>
                            {/* <th>Actions Available</th> */}
                        </tr>
                        {sortedSurfSpotsAirTemp && sortedSurfSpotsAirTemp.slice(0, 5).map((surfspot, idx)=>
                        <tr key={idx}>
                            <td>
                            <Link to = {`/surfspot/${surfspot._id}`}>{surfspot.name}</Link>
                            </td>
                            <td>
                                {surfspot.city}
                            </td>
                            {/* <td>
                                {surfspot.location}
                            </td> */}
                            <td>
                                {surfspot.airTemp} °F
                            </td>
                            <td>
                                {surfspot.waterTemp} °F
                            </td>
                            <td>
                                {surfspot.windSpeed} mph
                            </td>
                            <td>
                                {surfspot.waveHeight} ft
                            </td>
                            {/* <td>
                                <button className="btn btn-success" onClick={(e)=>{detailsLink(surfspot._id)}}>
                                    Info
                                </button>| 
                                <button className="btn btn-primary" onClick={(e)=>{editLink(surfspot._id)}}>
                                    Edit
                                </button>| 
                                <button className="btn btn-danger" onClick={(e)=>{deleteSurfSpot(surfspot._id)}}>
                                    X
                                </button>
                            </td> */}
                        </tr>
                        )}
                    </table>
            
        </div>
    )
}


