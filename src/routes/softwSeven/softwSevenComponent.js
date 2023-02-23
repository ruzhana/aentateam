import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function softwSevenComponent() {
    return (
        <div>
            <h3>Pairing the Driver Station to the Robot Controller</h3>
            <p>Control Hub Users</p>
            <p>The REV Robotics Control Hub should come with the Robot Controller app pre-installed. The REV Robotics
Driver Hub should also come with the Driver Station app pre-installed. If you are using a smartphone have
successfully installed the FTC Driver Station on an Android phone, you will want to establish a secure wireless
connection between the Control Hub and the Driver Station. This connection will allow your Driver Station
phone to select op modes on your Robot Controller and send gamepad input to these programs. Likewise, it
will allow your op modes running on your Robot Controller to send telemetry data to your Driver Station where
it can be displayed for your drivers. The process to connect the two devices is known as “pairing.”</p>
<p>NOTE: the Control Hub does not have its own internal battery. Before you can connect a Driver Station
to the Control Hub, you must connect the Control Hub to a 12V battery.</p>
<p>Also note: that it will take an estimated 10 minutes to complete this task.</p>
<p>Step 1:</p>
<p>1. Connect an approved 12V battery to the
power
switch (REV-31-1387) and make sure the
switch
is in the off position. Connect the switch to an
XT30
port on the Control Hub and turn the switch on.
The LED should initially be blue on the Control
Hub.</p>
<p>Step 2:</p>
<p>It takes approximately 18 seconds for the
Control Hub to power on. The Control Hub is
ready to pair with the Driver Station when the
LED turns green.
Note: the light blinks blue every ~5 seconds to
indicate that the Control Hub is healthy.</p>
<p>Step: 3</p>
<p>Follow the instructions for Downloading the
FTC Apps. This app is pre-installed on the
Driver Hub and will appear after the Wi-Fi
password has been updated.
Note that the first time you launch the app
your Android device might prompt you for
permissions that the app will need to run
properly.
Whenever prompted, press Allow to grant
the requested permission.</p>
<p>Step: 4</p>
<p>Touch the three vertical dots on the upper
right-hand corner of the main screen of the FTC
Driver Station app. This will launch a pop-up
menu.</p>
<p>Step: 5</p>
<p>Select Settings from the pop-up menu.</p>
<p>Step: 6</p>
<p>From the Settings screen, select Pairing
Method.</p>
<p>Step: 7</p>
<p>Press Control Hub.</p>
<p>Step: 8</p>
<p>From the Settings screen, select
Pair with Robot Controller.</p>
<p>Step: 9</p>
<p>From Pair with Robot Controller screen,
press the Wifi Settings.</p>
<p>Step: 10</p>
<p>Select Wi-Fi, then select the correct
network.</p>
<p>If this is the first time you are connecting
to the Control Hub, then the default network
name should begin with the prefix "FTC-"
("FTC-1Ybr" in this example).</p>
<p>The default network name should be listed on a
sticker attached to the bottom side of the
Control Hub.</p>
<p>Step: 11</p>
<p>When prompted, specify the password for
the Control Hub's WiFi network and press
Connect to connect to the Hub.</p>
<p>Note: that the default password for the Control
Hub network is "password".</p>
<p>Also note that when you connect to the
Control Hub's WiFi network successfully, the
Driver Station will not have access to
the Internet.</p>
<p>Step: 12</p>
<p>After you successfully connected to
the Hub, use the back arrow to navigate to the
previous screen. You should see the name of
the WiFi network listed under "Current Robot
Controller:". Use the back-arrow
key to return to the Settings screen.
Then press the back-arrow key one more time
to return to the main Driver Station screen.</p>
<p>Step: 13</p>
<p>Verify that the Driver Station screen has
changed and that it now indicates that it is
connected to the Control Hub.</p>
<p>The name of the Control Hub's WiFi network
(“FTC-1Ybr” in this example) should be
displayed in the Network field on the Driver
Station.</p>
<p>Users with Two Android Smartphones</p>
<p>Important Note: If your Driver Station was previously paired to a Control Hub, and you currently would
like to connect to an Android smartphone Robot Controller, then before attempting to pair to the Robot
Controller, you should forget the Wi-Fi network for the previous Control Hub (using the Android Wifi
Settings screen on the Driver Station) and then power cycle the Driver Station phone. If the previous
Control Hub is powered on and if you haven't forgotten this network, then the Driver Station might try and
connect to the Control Hub and might be unable to connect to the Robot Controller smartphone.</p>
<p>Once you have successfully installed the FTC apps onto your Android phones, you will want to establish a
secure wireless connection between the two devices. This connection will allow your Driver Station phone to
select op modes on your Robot Controller phone and send gamepad input to these programs. Likewise, it will
allow your op modes running on your Robot Controller phone to send telemetry data to your Driver Station
phone where it can be displayed for your drivers. The process to connect the two phones is known as “pairing.”</p>
<p>Note: that it will take an estimated 10 minutes to complete this task.</p>

            
            
            
           
        </div>
    );
}

export default softwSevenComponent;
