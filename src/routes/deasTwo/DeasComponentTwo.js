import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Link} from 'react-router-dom';



function DeasTwoComponent() {
    return (
        <div>
            <h3 className='center3'>Software</h3>
            <h5>ENG</h5>
            <Link to="/soft/two">
                <button className='b2'>
                Supporting Documentation
                </button>
            </Link>
             <Link to="/soft/one">
                <button className='b1'>
                OnBot Java Guide
                </button>
            </Link>
            <p className='color'>..</p>

            <h5>KAZ</h5>
            <Link to="/soft/five">
                <button className='b1'>
                Көмекші құжаттама
                </button>
            </Link>
            <Link to="/soft/six">
                <button className='b2'>
                OnBot Java Гайд 
                </button>
            </Link>
           
</div>

      
    );
}

export default DeasTwoComponent;
