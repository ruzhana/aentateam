import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Link} from 'react-router-dom';




function DeasFiveComponent() {
    return (
        <div>
         <h3 className='center3'>Interview</h3>
            <h5>ENG</h5>
             <Link to="/inter/one">
                <button className='b1'>
                Preparing for Interview
                </button>
            </Link>
            <p className='color'>..</p>
           
           
        </div>
    );
}

export default DeasFiveComponent;
