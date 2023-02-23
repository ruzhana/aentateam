import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function softwElevenComponent() {
    return (
        <div>
            <h3>Configuring Your Hardware</h3>
            <p>Before You Begin...</p>
            <p>Before you can communicate with the motor, servo and sensors that are connected to the Control Hub or
Expansion Hub, you first must create a configuration file on your Robot Controller, so that the Robot Controller
will know what hardware is available on the Control Hub's or Expansion Hub's external ports.</p>
<p>Connecting an Android Smartphone to an Expansion Hub</p>
<p>If you are using an Android smartphone as a Robot Controller, you must physically connect the Robot
Controller smartphone to the Expansion Hub using a USB cable and an On-The-Go (OTG) adapter. Also, you
should verify that the Driver Station is currently paired to the Robot Controller.</p>
<p>1. Power on the Expansion Hub by turning on the power switch.</p>
<p>2. Plug the Type B Mini end of the USB cable into the USB mini port on the Expansion Hub.</p>
<p>3. Plug the Type A end of the USB cable into the OTG adapter.</p>
<p>4. Verify that your Robot Controller smartphone is powered on and unlocked. Plug in the USB Micro OTG
adapter into the OTG port of the Robot Controller phone.</p>
<p>Note: that when the OTG adapter is plugged into the smartphone, the phone will detect the presence of the
Expansion Hub and launch the Robot Controller app.</p>
<p>5. The first time you connect the Robot Controller smartphone to the Expansion Hub, the Android operating
system should prompt you to ask if it is OK to associate the newly detected USB device (which is the Expansion
Hub) with the FTC Robot Controller app.</p>
<p>Important Information!</p>
<p>You might be prompted multiple times to associate the USB hardware with the FTC Robot Controller. Whenever
you are prompted by your phone with this message, you should always select the “Use by default for this USB
device” option and hit the “OK” button to associate the USB device with the FTC Robot Controller app.</p>
<p>If you fail to make this association, then the Robot Controller app might not reliably connect to this Expansion
Hub the next time you turn your system on.</p>
<p>Getting the Control Hub Ready</p>
<p>If you are using a Control Hub, you do not need to make any additional connections. You simply need to make
sure that the Control Hub is powered on and paired to the Driver Station.</p>
<p>Creating a Configuration File Using the Driver Station</p>
<p>Although the configuration file needs to reside on the Robot Controller, for this tutorial we will use the Driver
Station app to create the configuration file remotely. The Driver Station can be used to create a configuration
file for a Control Hub or for an Android smartphone Robot Controller.</p>
<p>1. Touch the three vertical dots in the upper right hand corner of the Driver Station app. This will launch a pop-
up menu.</p>
<p>2. Select Configure Robot from the pop up menu to display the Configuration screen.</p>
<p>3. If your Robot Controller does not have any existing configuration files, the screen will display a message
indicating that you need to create a file before proceeding.</p>
<p>Hit the New button to create a new configuration file for your Robot Controller.</p>
<p>4. When the new configuration screen appears, the Robot Controller app will do a scan of the serial bus to see
what devices are connected to the Robot Controller.</p>
<p>It will display the devices that it found in a list underneath the words “USB Devices in configuration.” You should
see an entry that says something like “Expansion Hub Portal 1” in the list.</p>
<p>Your Expansion Hub is listed as a Portal because it is directly connected to the Robot Controller phone through
the USB cable or in the case of the Control Hub through the internal serial bus.</p>
<p>If you do not see your Expansion Hub Portal listed and you are using a smartphone as a Robot Controller,
check the wired connections to make sure they are secure and then press the Scan button one or two times
more to see if the smartphone detects the device on a re-scan of the USB bus.</p>
<p>5. Touch the Portal listing (“Expansion Hub Portal 1” in this example) to display what Expansion Hubs are
connected through this Portal.</p>
<p>Since we only have a single Expansion Hub connected, we should only see a single Expansion Hub configured
(“Expansion Hub 2” in this example).</p>
<p>6. Touch the Expansion Hub listing (“Expansion Hub 2” in this example) to display the Input/Output ports for that
device.</p>
<p>The screen should change and list all the motor, servo and sensor ports that are available on the selected
Expansion Hub.</p>
<p>Configuring a DC Motor</p>
<p>Now that you've created a file, you will need to add a DC Motor to the configuration file.</p>
<p>Important Note: At this point, although you have created your configuration file, you have not yet
saved its contents to the Robot Controller. You will save the configuration file in a later step.</p>
<p>1. Touch the word Motors on the screen to display the Motor Configuration screen.</p>
<p>2. Since we installed our motor onto port #0 of the Expansion Hub, use the dropdown control for port 0 to select
the motor type (Tetrix Motor for this example).</p>
<p>3. Use the touch screen keypad to specify a name for your motor (“motorTest” in this example).</p>
<p>4. Press the Done button to complete the motor configuration. The app should return to the previous screen.</p>
<p>Configuring a Servo</p>
<p>You will also want to add a servo to the configuration file. In this example, you are using a standard 180-
degree servo.</p>
<p>1. Touch on the word Servos on the screen to display the Servo Configuration screen.</p>
<p>2. Use the dropdown control to select “Servo” as the servo type for port #0.</p>
<p>3. Use the touch pad to specify the name of the servo (“servoTest” for this example) for port #0.</p>
<p>4. Press the Done button to complete the servo configuration. The app should return to the previous screen.</p>
<p>Configuring a Color Distance Sensor</p>
<p>The REV Robotics Color Distance Sensor is an I2C sensor. It actually combines two sensor functions into a
single device. It is a color sensor, that can determine the color of an object. It is also a distance or range
sensor, that can be used to measure short range distances. Note that in this tutorial, the word "distance" is
used interchangeably with the word "range".</p>
<p>1. Touch the words I2C Bus 0 on the screen to launch the I2C configuration screen for this I2C bus.</p>
<p>The Expansion Hub has four independent I2C buses, labeled “0” through “3”. In this example, since you
connected the Color Sensor to the port labeled “0”, it resides on I2C Bus 0.</p>
<p>2. Look at the I2C Bus 0 screen. There should already be a sensor configured for this bus. The Expansion Hub
has its own built-in inertial measurement unit (IMU) sensor. This sensor can be used to determine the
orientation of a robot, as well as measure the accelerations on a robot.</p>
<p>The built-in IMU is internally connected to I2C Bus 0 on each Expansion Hub. Whenever you configure an
Expansion Hub using the Robot Controller, the app automatically configures the IMU for I2C Bus 0. You will
need to add another I2C device for this bus to be able to configure the color sensor.</p>
<p>5. Press the Done button to complete the I2C sensor configuration. The app should return to the previous
screen.</p>
<p>Configuring a Digital Touch Sensor</p>
<p>The REV Robotics Touch Sensor is a digital sensor. An Op Mode can query the Touch Sensor to see if its
button is being pressed or not.</p>
<p>1. Touch the words Digital Devices on the screen to launch the Digital I/O configuration screen.</p>
<p>2. Use the touch screen to add a “REV Touch Sensor” for port #1 and name the device “testTouch”.</p>
<p>Notice that we are configuring the Touch Sensor on port #1 instead of port #0. This is because when the REV
Robotics Touch Sensor is connected to a digital port using a standard 4-wire JST sensor cable, it is the second
digital pin that is connected. The first pin remains disconnected.</p>
<p>3. Press the Done button to return to the previous screen.</p>
<p>Saving the Configuration Information</p>
<p>Once you have configured your hardware, you must save the information to the configuration file. If you do not
save this information, it will be lost and the robot controller will be unable to communicate with your hardware.</p>
<p>1. Press the Done button to go up one level in the configuration screens.</p>
<p>2. Press the Done button again to return to the highest level in the configuration screens.</p>
<p>3. Press the Save button.</p>
<p>4. When prompted, specify a configuration file name using the touchscreen’s keypad (use “TestConfig” for this
example).</p>
<p>5. Press the OK button to save your configuration information using that file name.</p>
<p>6. After the configuration file has been saved, touch the Android back-arrow button to return to the main screen
of the app.</p>
<p>7. Verify that the configuration file is the active configuration file on the main Driver Station screen.</p>
            
            
            
           
        </div>
    );
}

export default softwElevenComponent;
