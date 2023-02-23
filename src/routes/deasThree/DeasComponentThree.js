import React from 'react';
import {aidos} from '../overview/aidos.png'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Link} from 'react-router-dom';



function DeasThreeComponent() {
    return (
        <div>
            <h3 className='center3'>Inspection</h3>
            <h5>ENG</h5>
             <Link to="/hardwfb/one">
                <button className='b1'>
                    Robot Inspection
                </button>
            </Link>
            <Link to="/hardwfb/two">
                <button className='b2'>
                    Field Inspection
                </button>
            </Link>
            <p className='color'>..</p>

            <h5>KAZ</h5>
            <Link to="/insp/one">
                <button className='b1'>
                Робот инспекциясы                </button>
            </Link>
            <Link to="/insp/two">
                <button className='b2'>
                Көшпелі инспекция
                </button>
            </Link>
            <p className='color'>..</p>

            <h5>RUS</h5>
            <Link to="/insp/three">
                <button className='b1'>
                Инспекция робота
                </button>
            </Link>
            <Link to="/insp/four">
                <button className='b2'>
                Выездная инспекция                </button>
            </Link>
        </div>
    );
}

export default DeasThreeComponent;
