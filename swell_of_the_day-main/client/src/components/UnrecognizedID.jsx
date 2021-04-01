import React from 'react'
import { Link, navigate } from '@reach/router';

export default props => {

    return (
        <div>
            <h3>Unrecognized ID</h3>
            <p>We're sorry, but we could not find the surf spot you are looking for.</p>
            <p>Would you like to add this surf spot to our database? If so, click <Link to = "/new">here!</Link></p>
            <p><Link to = "/">Go Home</Link></p>
        </div>
    )
}


