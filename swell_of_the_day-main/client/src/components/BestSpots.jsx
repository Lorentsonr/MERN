import React from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';



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

    const sortedSurfSpots = surfspots;
    sortedSurfSpots.sort(function(a, b) {
        if(a.type.toLowerCase() < b.type.toLowerCase()) return -1;
        if(a.type.toLowerCase() > b.type.toLowerCase()) return 1;
        return 0;
    })


    const basedOnAirTemp = surfspots;
    basedOnAirTemp.sort(function(a, b) {
        if(a.type.toLowerCase() < b.type.toLowerCase()) return -1;
        if(a.type.toLowerCase() > b.type.toLowerCase()) return 1;
        return 0;
    })

    return (
        <div>
            <p><Link to = "/">Home</Link> | <Link to = "/new">Add an SurfSpot</Link></p>
            <hr/>
            <h5>These surfspots are looking for a good home!</h5>
            <table>
                <tr>
                    <th>SurfSpot</th>
                    <th>City</th>
                    <th>Location</th>
                    <th>Actions Available</th>
                </tr>
                {sortedSurfSpots && sortedSurfSpots.map((surfspot, idx)=>
                <tr key={idx}>
                    <td>
                        {surfspot.name}
                    </td>
                    <td>
                        {surfspot.city}
                    </td>
                    <td>
                        {surfspot.location}
                    </td>
                    <td>
                        <button className="btn btn-success" onClick={(e)=>{detailsLink(surfspot._id)}}>
                            Details
                        </button>| 
                        <button className="btn btn-primary" onClick={(e)=>{editLink(surfspot._id)}}>
                            Edit
                        </button>| 
                        <button className="btn btn-danger" onClick={(e)=>{deleteSurfSpot(surfspot._id)}}>
                            Delete
                        </button>
                    </td>
                </tr>
                )}
            </table>
        </div>
    )
}


