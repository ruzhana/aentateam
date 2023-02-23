import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
function hardwfOneComponent() {
    return (
        <div>
            <h4>General Drivetrain Considerations</h4>
           <h5>Field Obstacles and Challenges</h5>
           <p>The grid of Junctions on the POWERPLAY field is the largest field obstacle for this season. Ground, Low, Medium, and High Junctions spaced in a 2ft grid can limit the amount of space your robot has to navigate the field. There are floor obstacles as well- the Ground Junctions. The Ground Junctions are 0.56in tall with a recessed portion that drivetrains can get stuck on if they do not have the necessary clearance. However, once a Cone has been scored on a Ground Junction, you can no longer drive over the Junction. </p>
           <h5>Robot Size Restrictions</h5>
           <p>Robot rules have mainly stayed the same for this years game. The main constraint is the starting 18" x 18" x 18" sizing requirement.</p>
           <h4>Drivetrain Options</h4>
           <p>While there are many types of drivetrains teams can build, getting a drivetrain up and running as quickly as possible to begin testing should be a priority. This year the two main drivetrains we considered were Differential Drive and Mecanum Drive.</p>
           <h5>Differential Drivetrain</h5>
           <img className='photo' src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-23-at-22.22.02.jpeg" alt="pic" />
           <p>Using a differential or tank drivetrain, like our Channel Drivetrain is a solid option for teams. </p>
           <h5>Mecanum Drivetrain</h5>
           <img className='photo' src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-23-at-22.24.34.jpeg" alt="pic" />
           <p>Using a Mecanum Drivetrain gives teams some extra maneuverability on the field by allowing the chassis to move omni directionally.</p>
           <h5>Other Options</h5>
           <p>In addition to changing the wheels, you can vary other parts of your drivetrain to change how effective it is for navigating the POWERPLAY field. </p>
           <p>One way to do this is to change the size of your frame. If you shrink down your drivetrain, you will have more space to drive around the grid than if you built your robot to the full 18in X 18in dimensions. However, if you do this pay attention to the geometry of your other mechanisms as that will change too. </p>
           <p>Also consider raising your drivetrain with pillow blocks if you need more clearance to get over obstacles. This is similar to what we did with the Freight Frenzy Starter Bot.</p>
           <h4>Starter Bot Drivetrain Update</h4>
           <p>Using either differential, mecanum, or another drivetrain for a robot will lead a team to success this season. For our prototyping and the final Starter Bot we used the channel drivetrain. In the video below we installed an optional mecanum upgrade to our Starter Bot to highlight it's maneuverability on this years field.</p>
           <img className='photo' src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-23-at-22.27.25.jpeg" alt="pic" />

        </div>
    );
}

export default hardwfOneComponent;
