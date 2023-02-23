import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function softTwoComponent() {
    return (
        <div>
            <h3>Control System Supporting Documentation</h3>
            <Link to="/softw/one">
                <li>
                The FTC Control System
                </li>
            </Link>
            <Link to="/softw/two">
                <li>
                Required Materials
                </li>
            </Link>
            <Link to="/softw/three">
                <li>
                Using Your Android Device
                </li>
            </Link>
            <Link to="/softw/four">
                <li>
                Displaying Available Apps on your Android Phone
                </li>
            </Link>
            <Link to="/softw/five">
                <li>
                Phone Pairing
                </li>
            </Link>
            <Link to="/softw/six">
                <li>
                Configuring Your Android Devices
                </li>
            </Link>
            <Link to="/softw/seven">
                <li>
                Pairing the Driver Station to the Robot Controller
                </li>
            </Link>
            <Link to="/softw/eight">
                <li>
                Connecting Devices to a Control or Expansion Hub
                </li>
            </Link>
            <Link to="/softw/nine">
                <li>
                Connecting a Color-Distance Sensor to the Hub
                </li>
            </Link>
            <Link to="/softw/ten">
                <li>
                Connecting a Touch Sensor to the Hub
                </li>
            </Link>
            <Link to="/softw/eleven">
                <li>
                Configuring Your Hardware
                </li>
            </Link>
            <Link to="/softw/twelve">
                <li>
                Installing a Javascript Enabled Browser
                </li>
            </Link>
            <Link to="/softw/thirteen">
                <li>
                Connecting a Laptop to the Program & Manage Network               </li>
            </Link>
            
            
           
        </div>
    );
}

export default softTwoComponent;
