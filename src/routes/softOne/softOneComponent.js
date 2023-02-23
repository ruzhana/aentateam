import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';


function softOneComponent() {
    return (
        <div>
            <h3>OnBot Java Guide</h3>
            <Link to="/java/one">
                <li>
                Creating and Running an Op Mode (OnBot Java)
                </li>
            </Link> 
            <Link to="/java/two">
                <li>
                Controlling a Servo (OnBot Java)
                </li>
            </Link>
            <Link to="/java/three">
                <li>
                Using Sensors (OnBot Java)
                </li>
            </Link>
          
           
        </div>
    );
}

export default softOneComponent;
