import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import './index.css'


function DeasComponent() {
    return (
        <div>
            <h3 className='center3'>Hardware</h3>
            <h5>ENG</h5>
            <Link to="/hardw/one">
                <button className='b1'>
                    Engineering Design Process
                </button>
            </Link>
            <Link to="/hardw/two">
                <button className='b2'>
                    CAD
                </button>
            </Link>
            <Link to="/hardw/three">
                <button className='b3'>
                    Robot Mechanisms
                </button>
            </Link>
            <Link to="/hardw/four">
                <button className='b4'>
                    3D Printing
                </button>
            </Link>
            <p className='color'>..</p>
            <h5>KAZ</h5>
            <Link to="/hardw/five">
                <button className='b1'>
                Инженерлік жобалау процесі                </button>
            </Link>
            <Link to="/hardw/six">
                <button className='b2'>
                Компьютерлік модель (CAD)
                </button>
            </Link>
            <Link to="/hardw/seven">
                <button className='b3'>
                Робот механизмдері
                </button>
            </Link>
            <Link to="/hardw/eight">
                <button className='b4'>
                3D басып шығару
                </button>
            </Link>
            <p className='color'>..</p>
            <h5>RUS</h5>
            <Link to="/hardw/nine">
                <button className='b1'>
                Процесс инженерного проектирования                </button>
            </Link>
            <Link to="/hardw/ten">
                <button className='b2'>
                Компьютерное проектирование (CAD)
                </button>
            </Link>
            <Link to="/hardw/eleven">
                <button className='b3'>
                Механизмы роботов
                </button>
            </Link>
            <Link to="/hardw/twelve">
                <button className='b4'>
                3D-печать
                </button>
            </Link>
        </div>
    );
}

export default DeasComponent;
