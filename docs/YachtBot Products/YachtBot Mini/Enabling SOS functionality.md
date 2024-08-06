---
title: "Enabling SOS functionality"
date: 2021-08-18
---
# Enabling SOS functionality

IMPORTANT: The SOS functionality is using your local mobile phone network only, the Igtimi servers do not process the SOS call. This means you rely on good network coverage. Never use YachtBot Mini as safety equipment, carry personal locator beacons, radios, flares, and other items as mandated by your event organisers or local authorities. YachtBot Mini and the YachtBot App are for entertainment purposes only.

  

How to Use the SOS function
===========================

With the unit turned on and connected to cell and GPS networks, press the SOS button in case of emergency. Press until both lights illuminate and you feel a short vibration, for about 2 seconds.

  

YachtBot Mini will dial the three authorized phone numbers in turn. It will stop dialing when one phone number answers, including when it goes to voicemail. Meanwhile, YachtBot Mini will send an SMS to the first authorized phone number with GPS location and a link to a map. When any of the called numbers answer, use YachtBot Mini as a phone. To hang up, press the phone button above the SOS button.

  

===

Setting up the SOS function
===========================

To set up your YachtBot Mini as an additional safety device you will need to...

  

1.  ensure the SIM card inside the YachtBot mini is capable of voice calls, SMS enabled and has appropriate credit. 
2.  know the phone number of the SIM card inside your YachtBot mini
3.  turn on your YachtBot mini so it can receive the txt message detailed below.
4.  have a cell phone that can send txt messages.
5.  know the phone number that you want to allocate as the SOS number.

  

You can then assign up to three mobile phone numbers to receive SOS calls from your YachtBot Mini.

  

NOTE: Always test that your setup has worked correctly before you head out on the water!

  

Using a cell phone send the text message detailed below to the phone number of the SIM card inside the YachtBot mini.

  

To add one SOS number, send the follow SMS (text message) to the YAchtBot mini.

```0000,A71,number1,, ```

(noting the trailing two commas). This number is the first one the device calls when the SOS button is pushed, and it receives a txt message with location data. In reverse, when this number calls the YachtBot Mini, it will send a SMS with location to this number.

  

Two additional numbers can be added to be called when the first number doesn’t answer after the button is pressed.

To add two numbers, send  

```0000,A71,number1,number2,```

 (noting the single trailing comma) and when adding all three numbers, send  

```0000,A71,number1,number2,number3```

When you receive a return SMS ending in “A71,OK”, the setup was done correctly. If you want to delete all saved phone numbers, send 0000,A71

  

### Additional steps 2G version

The A71 command turns on not just the SOS message, but also others, such as low battery, lost GPS fix, etc. If you are dealing with small numbers of YachtBot only, the increased number of txt messages isn't typically a problem. If your fleet is larger, we recommend taking these additional steps to turn off the unwanted messages. The below example references the same phone number you input using A71 above.

```0000,B99,number1,DEL,17,19,20,21,34,35,36```