import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'



function DocThreeComponent() {
    return (
        <div>
            <p>Control Award Submission Form</p>
            <p>To be considered for the Control Award, Teams must submit a Control Award Submission Form. On this form,
Teams identify and summarize the key control elements that make their Robot unique. Included is a
description of key observable actions for judges to look for as well as the sensor and algorithm use that make it
all possible. Judges will use this form for both evaluating control designs and when observing Robots on the
Competition field. Teams should identify the control aspects of their Robot that they are most proud of. The
Control Award Submission form may not exceed 2 pages.</p>
<p>Autonomous Objectives</p>
<p>List the overall actions that the Robot can complete. These should include scoring actions as well as other
positioning and defensive operations. The Robot does not have to do accomplish all these in every program
but should be demonstrable in at least one autonomous program.</p>
<p>Sensors Used</p>
<p>List the sensors used to control the Robot and a brief description of how they are used.</p>
<p>Key Algorithms</p>
<p>List the key algorithms that make your Robot unique or are vital to its success on the field. Particularly complex
or unique algorithms or those that integrate the use of multiple sensors are good candidates to highlight here.</p>
<p>Driver Controlled Enhancements</p>
<p>List any advanced control elements that are used during the driver-controlled period to enhance performance.
These may include signaling operations when a certain condition is detected on the field, auto-complete
functions, fail-safe algorithms, or just any enhancements that make the control of the Robot easier or more
efficient for the driver.</p>
<p>Engineering Portfolio References</p>
<p>Judges also use the Teams engineering portfolio to evaluate details of the control elements. To help guide this
effort, Teams should provide pointers to where in the engineering portfolio control related information is
located.</p>
<p>Some things to consider including as pointers are: Team goals for control activities, strategies for autonomous
mode, Robot performance with and without added sensors, requirements for successful autonomous
operation, performance improvements using algorithms and sensors, and testing results.</p>
<p>Autonomous Program Diagrams</p>
<p>For autonomous operations, Teams should draw and label a typical path the Robot takes. The labeled points
identify key observable actions the Robot makes. For each labeled point, a brief description of what is taking
place should be noted (see example below). Especially describe those key operations where adjustments are
made to ensure accurate and repeatable performance.</p>
<p>For Teams with multiple autonomous programs, it is not necessary to document every program on a separate
sheet. It is sufficient document the most commonly used or complex programs and note variances for the rest.</p>
<p>Additional Summary Information (optional)</p>
<p>For those Teams that have developed many different control features, they may want to provide additional
information to assist the judges in understanding their work. This is a place where Teams can provide more
detailed information about their designs. It should be organized such that separate topics are easily identified
and can be quickly found.</p>

        </div>
    );
}

export default DocThreeComponent;
