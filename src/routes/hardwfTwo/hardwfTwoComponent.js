import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function hardwFourComponent() {
    return (
        <div>
            <p>The varying heights of the Junctions create a challenge for placing cones that can be solved with a vertical movement from your robot. When designing these lifts, we decided to try three popular categories of Lifts used commonly in FTC: Linear Lifts, Single Jointed arms, and a Four Bar Linkages. </p>
            <p>Requirements</p>
            <li>Simple, Reliable, Compact - we want something that fits within the 18"x18"x18" starting requirement, is easy to build and consistently scores at all levels. </li>
            <li>Bear a Light Load - The mechanism has to be able to handle the load of the intake and a single cone or Beacon. </li>
            <p>Elevator</p>
            <p>We started exploring designs with our Linear Motion Kit. We made a few modifications to the two stage continuous lift to create the elevator below. While it is fairly easy to build and deploy, this lift is not capable of reaching the high junctions. However, you may be able to add on another stage to gain more height. Also, the Linear motion kit can be used for horizontal motion too, as seen in our Lift Prototypes video above. </p>
            <img src="https://www.linkpicture.com/q/Screenshot-from-2023-02-23-22-30-10.png" class="team-img" alt="pic" />
            <p>Single Jointed Arms</p>
            <p>A Single Jointed Arm is one of the simplest solutions for a lift. We knew from past experience that this arm would struggle to reach the high junctions and fit within the 18"x18"x18" size restraint. It is important to pay attention to your geometry calculations when building a Single Jointed Arm so you can maximize your reach. This version of the arm was also a little heavier than we wanted, which may cause balance issues with a more narrow or smaller drivetrain. </p>
            <img src="https://www.linkpicture.com/q/Screenshot-from-2023-02-23-22-34-10.png" class="team-img" alt="pic" />
            <p>Four Bar Linkage</p>
            <p>Four Bar Linkages are very similar to Single Jointed Arms because they both pivot around a single point. You will run into similar issues with what height they can reach so be sure to pay attention to your geometry calculations! However, Four Bar Linkages are unique because they maintain the orientation of the object they are lifting. This is very useful for POWERPLAY when lifting a standing cone. As the lift rises, the cone will remain parallel to the plane it started in, remaining upright. </p>
            <img src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-23-at-22.37.29.jpeg" class="team-img" alt="pic" />
            <p>Reverse Virtual Four Bar</p>
            <p>A Reverse Virtual Four Bar Linkage is a two-stage lift where the second stage is actuated by a four bar arm. Because the lift folds back on itself, you can reach almost twice as high as a single jointed lift. The Virtual Four Bar is created by the chain and it helps keep the end of the lift traveling along one plane. This keeps whatever you are raising in an intake oriented correctly for the whole lift. </p>
            <p>The Kickoff Concepts team really liked this lift so we mounted our Compact Active Roller Intake to the end for our Starter Bot testing. It is mounted on a hinge so that the lift will keep the cones upright, but we will still have the needed compliance for lining up to intake cones. </p>
            <img src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-23-at-22.39.25.jpeg" class="team-img" alt="pic" />
            <p>Elevator from improvised material</p>
            <img src="https://www.linkpicture.com/q/Screenshot-from-2023-02-24-02-29-07.png" class="team-img" alt="pic" />


        </div>
    );
}

export default hardwFourComponent;
