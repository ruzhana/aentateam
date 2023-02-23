import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import './index.css'

function hardwElevenComponent() {
    return (
        <div>
            <h3>Механизмы роботов</h3>
            <Link to="/kaz/four">
                <button className='b1'>
                Трансмиссия (база для робота)
                </button>
            </Link>
            <Link to="/kaz/five">
                <button className='b2'>
                Лифты
                </button>
            </Link>
            <Link to="/kaz/six">
                <button className='b3'>
                Intake
                </button>
            </Link>
          
        </div>
    );
}

export default hardwElevenComponent;
