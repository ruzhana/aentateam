import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function hardwFourComponent() {
    return (
        <div>
           
            <p>POWERPLAY's rules limit robots to possessing a maximum of one corresponding Alliance Cone or one corresponding Alliance Beacon at a time, so, a major component of your points per second strategy should be the intake.  Intakes come in many different forms, so we brainstormed some concepts and put them through the first stages of the engineering design process to help us decide if they met our gameplay requirements.</p>
            <p>Requirements</p>
            <li>Touch it, Own It - Be able to quickly intake and control elements</li>
            <li>Pick Up One Only - reduce the chances of picking up more than one element by using the exterior rather than interior as a grip point</li>
            <li>Adaptability - ability to pick up a cone against a wall on a cone stack as well as in the open from a substation or on the field</li>
            <li>Release It - be able to release the element with ease whether by mechanical movement or by automation</li>
            <p>Simple Gripper</p>
            <p>We started with a simple gripper that has one pivot joint. The simple gripper has two stationary compliant wheels on the moving arm that grip the cone. This design is actuated by a servo and its low profile allows for cones to be picked up close to the wall. </p>
            <img src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-23-at-22.43.41.jpeg" class="team-img" alt="pic" />

            <p>Passive Intake</p>
            <p>We also wanted to explore passive options for an intake. This passive intake works with free-spinning rollers at the end of two arms that are mounted with surgical tubing. The flexibility of the surgical tubing allows the arms to stretch around the cones as the rollers lock them in. Because this intake is passive and grabs a cone from the side, a bit of assistance from the field wall to keep the cone in place while grabbing is necessary. This may be an issue with intaking cones that are in the middle of the field.</p>
            <img src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-23-at-22.45.24.jpeg" class="team-img" alt="pic" />

            <p>Active Roller Intake</p>
            <p>The active roller intake uses two sets of wheels powered by servo motors that roll the cones into a held position.  The space needed to mount the servos and gear them correctly for the intake wheels causes this intake to be a bit bulkier than the others. Depending on what structural material you use, the frame can also be heavier which will need to be taken into consideration when building a lift. </p>
            <img src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-23-at-22.46.58.jpeg" class="team-img" alt="pic" />

            <p>Compact Active Roller Intake</p>
            <p>For our final intake design we took inspiration from the Active Roller Intake to create a version that could get closer to the wall and pick up cones from the cone stacks. This compact active roller intake features one servo motor driven roller paired with a free spinning roller. This provides the same amount of control as the two roller intake with about half the footprint. Because of the smaller size, this intake is also easier for your lift to move. </p>
            <img src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-23-at-22.49.01.jpeg" class="team-img" alt="pic" />

            

        
        </div>
    );
}

export default hardwFourComponent;
