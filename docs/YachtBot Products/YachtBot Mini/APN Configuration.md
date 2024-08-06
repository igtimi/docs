---
title: "APN Configuration"
date: 2022-05-09
---
# APN Configuration

Setting YachtBot Mini's APN can be done via SMS text message. To complete this process, you will need to know the phone number of the SIM that is currently installed in your device. 

Your device will also need to be powered on and connected to the cell network.

  

**Setting the APN**

Send the following message to the device. It is important that there are no spaces before, after or inside the command and that you do not include the quotes.

  

Command: "0000,A21,1,data.yacht-bot.com,8001,<apn name>,<apn username>,<apn password>" 

Where:

*   <_apn name_\> is the name of your apn i.e.live.vodafone.com
*   <_apn username_\> is the username for your apn
*   <_apn password_\> is the password for your apn

  

A complete example for an apn with username and password: 

0000,A21,1,data.yacht-bot.com,8001,live.vodafone.com,testuser,12345

  

A complete example for an apn without username or password (Note the two trailing commas) : 

0000,A21,1,data.yacht-bot.com,8001,live.vodafone.com,,  

  

Ensure that the device is powered on and connected to the cell network.

Once you have sent the message to the device, you will receive an 'OK' message upon successful application of the APN settings.

If you do not receive an 'OK' message, either the device has not received the message, or the message contained an error.

  

Power cycle your device, and check the YachtBot viewer to see if your device is connected and live.