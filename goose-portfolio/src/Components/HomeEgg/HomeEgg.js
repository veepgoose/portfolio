import React from 'react';
import './HomeEgg.css';
import HomeEgg from './HomeEgg.png';
import { Link } from 'react-router-dom';



function EggHome (props) {
    return (
        <div>
        <Link to="/">
            <img src={HomeEgg} alt="HomeEgg" class="HomeEgg" />
        </Link>
        </div>
    );
}

export default EggHome;