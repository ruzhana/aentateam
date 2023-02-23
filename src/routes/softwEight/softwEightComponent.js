import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function softwEightComponent() {
    return (
        <div>
            <h3>Connecting Devices to a Control or Expansion Hub</h3>
            <p>This section explains how to connect a motor, a servo, and some sensors to your REV Robotics Control Hub
or REV Robotics Expansion Hub. While the Control Hub differs from the Expansion Hub because of its built in
Android device, the layout of the external motor, servo, and sensor ports are identical for the Control Hub and
Expansion Hub.</p>
<p>The images in this section use an Expansion Hub to demonstrate how to connect the devices. The process,
however, is identical for a Control Hub.</p>
<p>When the instructions in this section use the word "Hub", they are referring to a Control Hub or Expansion Hub.</p>
<p>Connecting 12V Power to the Hub</p>
<p>The Hub draws power from a 12V rechargeable battery. For safety reasons, the battery has a 20A fuse built in.
A mechanical switch is used to turn on/turn off the power.</p>
<p>Note that it will take an estimated 5 minutes to complete this task.</p>
<p>1. If your 12V battery has a Tamiya style connector, connect the Tamiya to XT30 adapter cable to the
matching end of the switch cable.</p>
<p>Important Note: Do not connect the 12V battery to the Tamiya adapter yet. We will connect the battery
during a later step.</p>
<p>2. Connect the other end of the switch cable to a matching XT30 port on the Hub.</p>
<p>3. Verify that the switch is in the OFF position.</p>
<p>4. Connect the 12V battery to the Tamiya to XT30 cable.</p>
<p>5. Turn on the switch and verify that the Hub is drawing power from the battery. Note that the Hub’s LED
should be illuminated (notice the blue LED in upper right-hand corner of the Hub in the image below).</p>
<p>6. Turn off the switch and verify that the Hub is off. Note that the Hub’s LED should not be illuminated.</p>
<p>Connecting a Motor to the Hub</p>
<p>The Hub can drive up to four (4) 12V DC motors per Hub. The Hub uses a type of electrical connector known
as a 2-pin JST VH connector. Many of the FIRST-approved 12V DC motors are equipped with Anderson
Powerpole connectors. An adapter cable can be used to connect the Anderson Powerpole connectors to the
Hub motor port (see FIRST Tech Challenge Robot Wiring Guide for more information).</p>
<p>For the examples in this wiki, FIRST recommends that the user build a simple rig to secure the motor in place
and prevent it from moving about during the test runs. The image above shows a Tetrix motor installed in a rig
built with a Tetrix motor mount and some Tetrix C-channels. A gear was mounted on the motor shaft to make it
easier for the user to see the rotation of the shaft.</p>
<p>Note: it will take an estimated 2.5 minutes to complete this task.</p>
<p>1. Connect the Anderson Powerpole end of the motor’s power cable to the Powerpole end of the Anderson
to JST VH adapter cable.</p>
<p>2. Connect the other end of the Anderson to JST VH adapter cable into the motor port labeled “0” on the
Hub.</p>
<p>Connecting a Servo to the Hub</p>
<p>The Hub has 6 built-in servo ports. The servo ports accept the standard 3-wire header style connectors
commonly found on servos. Note that ground pin is on the left side of the servo port.</p>
<p>Note: that it will take an estimated 2.5 minutes to complete this task.</p>
<p>1. Connect the servo cable to the servo port labeled “0” on the Hub. Note that the ground pin is on the left
side of the servo port.</p>
<p>2. Verify that the black ground wire of the servo cable matches the ground pin of the servo port (which is
aligned on the left side of the port).</p>

            
            
            
           
        </div>
    );
}

export default softwEightComponent;
