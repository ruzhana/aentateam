import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import './index.css'

function hardwThreeComponent() {
    return (
        <div>
              <Link to="/hardwf/one">
                <button className='b1'>
                    Drivetrains
                </button>
            </Link>
            <Link to="/hardwf/two">
                <button className='b2'>
                    Lifts
                </button>
            </Link>
            <Link to="/hardwf/three">
                <button className='b3'>
                    Intakes
                </button>
            </Link>
        </div>
    );
}

export default hardwThreeComponent;
