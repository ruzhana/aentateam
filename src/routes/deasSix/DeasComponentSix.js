import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Link} from 'react-router-dom';




function DeasSixComponent() {
    return (
        <div>
             <h4 className='center3'>Awards</h4>
            <h5>ENG</h5>
            <Link to="/ward/one">
                <button className='b1'>
                Awards Descriptions
                </button>
            </Link>
            

        </div>
    );
}

export default DeasSixComponent;
