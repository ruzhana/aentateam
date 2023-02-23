import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'




function JavaOneComponent() {
    return (
        <div>
        <h3>Creating and Running an Op Mode (OnBot Java)</h3>
        <p>What's an Op Mode?</p>
        <p>During a typical FIRST Tech Challenge match, a team’s robot must perform a variety of tasks to score points.
For example, a team might want their robot to follow a white line on the competition floor and then score a
game element into a goal autonomously during a match. Teams write programs called “op modes” (which
stands for “operational modes”) to specify the behavior for their robot. These op modes run on the Robot
Controller phone after being selected on the Driver Station phone.</p>
<p>Teams who are participating in the FIRST Tech Challenge have a variety of programming tools that they can
use to create their own op modes. This document explains how to use the FTC OnBot Java Programming Tool
to write an op mode for an FTC robot.</p>
<p>The FTC OnBot Java Programming Tool</p>
<p>The FTC OnBot Java Programming Tool is a user-friendly programming tool that is served up by the Robot
Controller phone. A user can create custom op modes for their robot using this tool and then save these op
modes directly onto the Robot Controller. Users write their op modes using Java. The op modes are compiled
very quickly on the Robot Controller and then loaded dynamically by the Robot Controller during run time.</p>
<p>The examples in this document use a Windows laptop computer to connect to the Robot Controller. This
Windows laptop computer has a Javascript-enabled web browser installed that is used to access the FTC
OnBot Java Programming Tool.</p>
<p>Note: that the process used to create and edit an op mode is identical if you are using a Control
Hub as your Robot Controller.</p>
<p>Note: that if you prefer, you can use an alternate device, such as an Apple Mac laptop,
Chromebook, or an iPad instead of a Windows computer to access the OnBot Java
Programming Tool. The instructions included in this document, however, assume that you are
using a Windows laptop.</p>
<p>Note: that this section of the wiki assumes that you have already setup and configured your
Android devices and robot hardware. It also assumes that you have successfully connected
your laptop to the Progam & Manage server on the Robot Controller device.</p>
<p>Creating Your First Op Mode</p>
<p>If you connected your laptop successfully to the Program & Manage wireless network of the Robot Controller,
then you are ready to create your first op mode. In this section, you will use the OnBot Java Programming Tool
to create the program logic for your first op mode.</p>
<p>1. Launch the web browser on your laptop (FIRST recommends using Google Chrome) and find the web
address that is displayed on the Program & Manage screen of the Robot Controller.
Important Note: If your Robot Controller is an Android smartphone, then the address to access the Program &
Manage server is "192.168.49.1:8080".</p>
<p>Important Note: If your Robot Controller is a Control Hub, then the address to access the Program & Manage
server is "192.168.43.1:8080". Notice the difference in the third octet of the IP addresses (the Control Hub has a
"43" instead of a "49").</p>
<p>Type this web address into the address field of your browser and press RETURN to navigate to the Program &
Manage web server.</p>
<p>2. Verify that your web browser is connected to the programming mode server. If it is connected to the
programming mode server successfully, the Robot Controller Console should be displayed.</p>
<p>3. Click on the word “OnBotJava” towards the top of the screen. This will switch the browser to OnBot Java
Programming mode.</p>
<p>4. Take a look at the OnBot Java user interface. On the left hand side, there is the project browser pane. In the
upper right hand corner, there is the source code editing pane. In the lower right hand corner, there is the
message pane.</p>
<p>5. In the project browser pane, press the “+” symbol to create a new file. Pushing this button will launch the New
File dialog box. This dialog box has several parameters that you can configure to customize your new file.</p>
<p>For this example, specify “MyFIRSTJavaOpMode” as the File Name in the New File dialog box.</p>
<p>Using the Sample dropdown list control, select “BlankLinearOpMode” from the list of available sample op
modes (see image above). By selecting “BlankLinearOpMode” the OnBot Java editor will automatically
generate a basic LinearOpMode framework for you.</p>
<p>Check the option labeled “TeleOp” to ensure that this new file will be configured as a tele-operated (i.e., driver
controlled) op mode.</p>
<p>Also, make sure you check the “Setup Code for Configured Hardware” option. If this option is enabled, the
OnBot Java editor will look at the hardware configuration file for your Robot Controller and automatically
generate the code that you will need to access the configured devices in your op mode.</p>
<p>Press the “OK” button to create your new op mode.</p>
<p>6. You should see your newly created op mode in the editing pane of the OnBot Java user interface.</p>
<p>Congratulations, you created your first op mode! The op mode currently does not do much, but you will
eventually modify it to make it more useful.</p>
<p>Note: When you create an OnBot op mode, you create a .java file that is stored on the Robot
Controller. You can access your saved op modes using the project browser on the left side of the
screen. You can also organize your saved op modes by right mouse clicking on the project browser to
display a list of options to create, edit or delete files and folders.</p>
<p>Also, note that the OnBot Java editor automatically saves your op mode as you are editing it, provided that you
are connected to the Program & Manage server.</p>
<p>Examining the Structure of Your Op Mode</p>
<p>It can be helpful to think of an op mode as a list of tasks for the Robot Controller to perform. For a linear op
mode, the Robot Controller will process this list of tasks sequentially. Users can also use control loops (such
as a while loop) to have the Robot Controller repeat (or iterate) certain tasks within a linear op mode.</p>
<p>If you think about an op mode as a list of instructions for the robot, this set of instructions that you created will
be executed by the robot whenever a team member selects the op mode called “MyFIRSTJavaOpMode” from
the list of available op modes for this Robot Controller.</p>
<p>Let’s look at the structure of your newly created op mode. Here’s a copy of the op mode text (minus some
comments, the package definition, and some import package statements):</p>
<p>code</p>
<p>At the start of the op mode there is an annotation that occurs before the class definition. This annotation states
that this is a tele-operated (i.e., driver controlled) op mode:</p>
<p>@TeleOp</p>
<p>If you wanted to change this op mode to an autonomous op mode, you would replace the “@TeleOp” with an
“@Autonomous” annotation instead.</p>
<p>You can see from the sample code that an op mode is defined as a Java class. In this example, the op mode
name is called “MyFIRSTJavaOpMode” and it inherits characteristics from the LinearOpMode class.</p>
<p>code</p>
<p>You can also see that the OnBot Java editor created five private member variables for this op mode. These
variables will hold references to the five configured devices that the OnBot Java editor detected in the
configuration file of your Robot Controller.</p>
<p>code</p>
<p>Next, there is an overridden method called runOpMode. Every op mode of type LinearOpMode must
implement this method. This method gets called when a user selects and runs the op mode.</p>
<p>code</p>
<p>At the start of the runOpMode method, the op mode uses an object named hardwareMap to get references to
the hardware devices that are listed in the Robot Controller’s configuration file:</p>
<p>code</p>
<p>The hardwareMap object is available to use in the runOpMode method. It is an object of type HardwareMap
class.</p>
<p>Note: When you attempt to retrieve a reference to a specific device in your op mode, the name that you
specify as the second argument of the HardwareMap.get method must match the name used to define
the device in your configuration file. For example, if you created a configuration file that had a DC motor
named “motorTest”, then you must use this same name (it is case sensitive) to retrieve this motor from
the hardwareMap object. If the names do not match, the op mode will throw an exception indicating that
it cannot find the device.</p>
<p>In the next few statements of the example, the op mode prompts the user to push the start button to continue.
It uses another object that is available in the runOpMode method. This object is called telemetry and the op
mode uses the addData method to add a message to be sent to the Driver Station. The op mode then calls the
update method to send the message to the Driver Station. Then it calls the waitForStart method, to wait until
the user pushes the start button on the driver station to begin the op mode run.</p>
<p>code</p>
<p>Note: All linear op modes should have a waitForStart statement to ensure that the robot will not begin
executing the op mode until the driver pushes the start button.</p>
<p>After a start command has been received, the op mode enters a while loop and keeps iterating in this loop until
the op mode is no longer active (i.e., until the user pushes the stop button on the Driver Station):</p>
<p>code</p>
<p>As the op mode iterates in the while loop, it will continue to send telemetry messages with the index of “Status”
and the message of “Running” to be displayed on the Driver Station.</p>
<p>Building Your Op Mode</p>
<p>When you create or edit an op mode the OnBot Java editor will auto-save the .java file to the file system of the
Robot Controller. However, before you can execute your changes on the Robot Controller, you must first build
the op mode and convert it from a Java text file to a binary that can be loaded dynamically into the FTC Robot
Controller app.</p>
<p>If you are satisfied with your op mode and are ready to build, press the Build button (which is the button with the
wrench symbol, see image below) to start the build process. Note that the build process will build all of the
.java files on your Robot Controller.</p>
<p>You should see messages appear in the message pane, which is located in the lower right hand side of the
window. If your build was successful, you should see a “Build succeeded!” message in the message pane.</p>
<p>Once you have built the binary files with your updated op modes, they are ready to run on the Robot Controller.
Before we run our example op mode, let’s see what happens if a problem occurs during the build process.</p>
<p>Troubleshooting Build Messages</p>
<p>In the previous section, the build process went smoothly. Let’s modify your op mode slightly to cause an error
in the build process.</p>
<p>In the editing pane of the OnBot Java window, look for the line that reads “private Servo servoTest;”. This
should appear somewhere near the beginning of your op mode class definition. Change the word “Servo” to
the word “Zervo”:</p>
<p>code</p>
<p>Also, let’s modify the telemetry statement that informs the user that the op mode has been initialized, and let’s
remove one of the two arguments so that the statement looks like this:</p>
<p>code</p>
<p>Note that when you eliminate the second argument, a little “x” should appear next to the line with the modified
addData statement. This “x” indicates that there is a syntax error in the statement.</p>
<p>After you have modified your op mode, you can press the build button and see what error messages appear.</p>
<p>When you first attempt to build the op mode, you should get an “illegal start of expression error”. This is
because the addData method is missing its second argument. The OnBot Java system also directs you to the
file that has the error, and the location within the file where the error occurs.</p>
<p>In this example, the problem file is called “org/firstinspires/ftc/teamcode/MyFIRSTJavaOpMode.java” and the
error occurs at line 62, column 37. It is important to note that the build process builds all of the .java files on the
Robot Controller. If there is an error in a different file (one that you are not currently editing) you will need to
look at the file name to determine which file is causing the problem.</p>
<p>Let’s restore this statement back to its original, correct form:</p>
<p>After you have corrected the addData statement, push the build button again to see what happens. The OnBot
Java system should complain that it cannot find the symbol “Zervo” in a source file called
“org/firstinspires/ftc/teamcode/MyFIRSTJavaOpMode.java” at line 51, column 13.</p>
<p>You should restore the statement back to its original form and then push the build button and verify that the op
mode gets built properly.</p>
<p>14.7</p>

         
        </div>
    );
}

export default JavaOneComponent;
