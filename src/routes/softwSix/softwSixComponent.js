import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function softwSixComponent() {
    return (
        <div>
            <h3>Configuring Your Android Devices</h3>
            <p>What Needs to Be Configured for My Control System?</p>
            <p>Control Hub Users</p>
            <p>Teams who are using a Control Hub with the integrated Robot Controller will only need to configure a single
Android device for use as a Driver Station. The process is as follows:</p>
<li>Rename the smartphone to "TEAM NUMBER-DS" (where TEAM NUMBER is replaced by your team
number).</li>
<li>Install the Driver Station app onto the Driver Station phone. Note: the REV Driver Hub has pre-installed
software.</li>
<li>Put your phone into Airplane Mode (with the WiFi radio still on).</li>
<li>Pair (i.e., wirelessly connect) the Driver Station to the Control Hub.</li> 
<p>IMPORTANT NOTE: Eventually the Control Hub will need be renamed so that its name complies with Game
Manual rule RS01, but for now we will use the Control Hub with its default name.</p>  
<p>Users with Two Android Smartphones</p>
<p>Teams who have two smartphones and are not using a Control Hub will need to configure one smartphone for
use as a Robot Controller and a second smartphone for use as a Driver Station. The process is as follows,</p>
<li>Rename one smartphone to "TEAM NUMBER-RC" (replace TEAM NUMBER with your team
number).</li> 
<li>Install the Robot Controller app onto the Robot Controller phone.</li>
<li>Rename a second smartphone to "TEAM NUMBER-DS" (where TEAM NUMBER is replaced by your
team number).</li>    
<li>Install the Driver Station app onto the Driver Station phone.</li>
<li>Put your phones into Airplane Mode (with the WiFi radios still on).</li>
<li>Pair (i.e., wirelessly connect) the Driver Station to the Robot Controller.</li>    
            
            
           
        </div>
    );
}

export default softwSixComponent;
