import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';


function softSixComponent() {
    return (
        <div>
            <h3>OnBot Java Guide KAZ 2</h3>
            <Link to="/onbot/one">
                <li>
                Операциялық режимді жасау және іске қосу (OnBot Java)
                </li>
            </Link>
            <Link to="/onbot/two">
                <li>
                Сервоны басқару (OnBot Java)
                </li>
            </Link>
            <Link to="/onbot/three">
                <li>
                Сенсорларды пайдалану (OnBot Java)
                </li>
            </Link>
          
           
        </div>
    );
}

export default softSixComponent;
