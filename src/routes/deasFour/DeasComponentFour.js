import React from 'react';
import {aidos} from '../overview/aidos.png'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import {Link} from 'react-router-dom';



function DeasFourComponent() {
    return (
        <div>
            <h3 className='center3'>Documentations</h3>
            <h5>ENG</h5>
            <Link to="/doc/one">
                <button className='b1'>
                    Engineering Portfolio
                </button>
            </Link>
            <Link to="/doc/two">
                <button className='b2'>
                    Engineering Notebook
                </button>
            </Link>
            <Link to="/doc/three">
                <button className='b3'>
                    Control Sheet
                </button>
            </Link>
            <p className='color'>..</p>

            <h5>KAZ</h5>
            <Link to="/doc/four">
                <button className='b1'>
                Инженерлік портфолио                </button>
            </Link>
            <Link to="/doc/five">
                <button className='b2'>
                Инженерлік дәптер                </button>
            </Link>
            <Link to="/doc/six">
                <button className='b3'>
                Бақылау парағы                </button>
            </Link>
            <p className='color'>..</p>

            <h5>RUS</h5>
            <Link to="/doc/seven">
                <button className='b1'>
                Инженерное портфолио                </button>
            </Link>
            <Link to="/doc/eight">
                <button className='b2'>
                Инженерный блокнот                </button>
            </Link>
            <Link to="/doc/nine">
                <button className='b3'>
                Контрольный лист                </button>
            </Link>



        </div>
    );
}

export default DeasFourComponent;
