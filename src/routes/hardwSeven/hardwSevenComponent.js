import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import './index.css'


function hardwSevenComponent() {
    return (
        <div>
            <h3>Робот механизмдері</h3>
            <Link to="/kaz/one">
                <button className='b1'>
                    Робот базасы
                </button>
            </Link>
            <Link to="/kaz/two">
                <button className='b2'>
                    Лифт системасы
                </button>
            </Link>
            <Link to="/kaz/three">
                <button className='b3'>
                    Интейк
                </button>
            </Link>
           

            
        </div>
    );
}

export default hardwSevenComponent;
