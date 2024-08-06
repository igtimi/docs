---
title: "Configuration via PC"
date: 2021-08-18
---
# Configuration via PC

YachtBot Mini comes configured and ready to use out of the box, however if your cellular provider requires an APN to be selected, then you will need to follow the instructions below to enable your YachtBot Mini to connect to the network.

  

Changing the configuration of YachtBot Mini is an involved process, and requires the download and installation of software to complete. This can _only_ be performed on a Windows machine.

You will also need a USB to serial cable. If you are not comfortable in installing software, then there is a SMS configuration process [here](../../YachtBot%20Products/YachtBot%20Mini/APN%20Configuration.md)

  

**Software setup**

Before first use, you will need to download the 'Meitrack Manager' tool and corresponding USB drivers. The relevant software and driver files can be downloaded from the links below.

**Downloads**

[Configuration software](http://67.203.13.28:9090/play/Meitrack%2520Manager.rar) 

[USB driver](http://www.meitrack.com/cd-download/Aided_Software/USB232_Driver.rar)

  

**Installation**

First install the USB drivers by extracting the contents of the USB driver download to your desktop. Double click the 'PL2303\_Prolific\_DriverInstaller\_v130.exe', and follow the installer prompts.

Next, install the 'Meitrack Manager' extracting the contents of the download to your desktop. Double click on 'MMSetup.msi' to launch the installer. Follow the onscreen prompts to install.

  

Once you have the USB driver and Meitrack manager installed, you are ready to begin configuring your device.

  

**Configuration process**

It is important that you do these next steps in the exact order as follows. Failure to do so results in invalid configuration and subsequent frustration.

  

*   Start with YachtBot Mini device OFF and Device Manager application running.
*   Plug in YachtBot Mini.
*   Power on YachtBot Mini with power button.
*   **Wait for synchronization to complete**. This is extremely important! You can see the progress in the bar at bottom left of Meitrack Manager application.
*   Switch to the 'Tracking' tab (along the top bar, after the computer icon)
*   You should now be able to see the tracking details, such as; IP/Domain, Port, APN, etc.  
    Find the row labeled 'APN'. This is the line you will enter your APN details in to.
*   Once you have your APN details entered, click the 'Write' button on  the right hand side of the screen.  
    You should see the parameters syncing in the progress bar (bottom left of window)
*   Once this is complete, it is good practice to check that the settings have taken affect.  
    Do this by disconnecting the device from your computer, and following the above steps to verify that the settings values are expected.

Once you are satisfied that your settings are correct, disconnect the device and restart the unit with a SIM installed. You should now be able to connect to the YachtBot viewer and see your device live.