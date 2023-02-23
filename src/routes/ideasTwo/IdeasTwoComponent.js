import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

function IdeasTwoComponent() {
    return (
        <div>
            <h3 className='center6'>Manual</h3>
            <Link to="/hardware">
                <button className='b1'>
                    Hardware
                </button>
            </Link>
            <Link to="/software">
                <button className='b2'>
                    Software
                </button>
            </Link>
            <Link to="/inspections">
                <button className='b3'>
                    Inspections
                </button>
            </Link>
            <Link to="/docs">
                <button className='b4'>
                    Documentation
                </button>
            </Link>
            <Link to="/interview">
                <button className='b5'>
                    Inteview
                </button>
            </Link>
            <Link to="/awards">
                <button className='b6'>
                    Awards
                </button>
            </Link>
        </div>
    );
}

export default IdeasTwoComponent;
