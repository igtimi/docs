---
title: "Configuration of TalkBot"
date: 2021-08-18
---
# Configuration of TalkBot

This article outlines the steps required to configure TalkBot as either a Coach or Athlete device.

  

Configuration of TalkBot is done via USB on a PC. The configuration tool only works on Windows machines.

It is important that all configuration is done via the configuration tool and not manually as this can cause TalkBot to be incorrectly configured.

**Configuring TalkBot**

**Connect to computer**

To configure TalkBot, remove the waterproof cap from the USB connector and plug the unit into your computer.

The device should automatically turn on and startup. You will be unable to see the device on your computer for around 30 seconds as the device is starting up.

  

**Open TalkBotConfigurator application**

Once TalkBot has mounted on your PC, navigate to the drive. You will see a configuration file (config.json) and the configuration application (TalkBotConfigurator).

If you wish to keep your current configuration file, now is a good time to take a copy of it and either place it in a folder or rename it.

Run TalkBotConfigurator. 

  

**Create configuration file**

_Open existing configuration file_

If you wish to load the current configuration file to make changes, you can do this in the File menu. This is the easiest way to make small changes.

  

_Start a new configuration file_

This is the default option, however you can use the File menu to start from scratch at any time. Note: Any unsaved configuration changes will be lost!

  

_Select TalkBot device mode_

Select the appropriate device mode. For each pair of TalkBots, one TalkBot must be a "Coach box" and the other must be an "Athlete box".

Neither TalkBot will function if both devices are configured to be in the same mode. 

  

_Add headsets_

Add headsets to the "Headsets" section of the configuration. These will be the mic devices for Athletes, and Headset device for the Coach.

Click "Add device" and select devices to add to the configuration file. See below for details on getting device addresses.

You can add a maximum of 6 headsets to the headset pool. Only any _two_ headsets can be used at one time.

  

_Obtaining the addresses of Bluetooth devices_

There are two ways of obtaining the address of a device.

The first way is to pair the device to your computer. By doing this, the configuration application will show the device name and address in the "Add device" list automatically for you.

The second option, if you are unable to pair your device, or already know the address, is to add the device details manually. 

In the "Add device" list, there is a "Manual add device" button where you can enter the name and address manually to the list.

  

_Add YachtBots for recording Athlete audio_

When creating an Athlete configuration, if Athlete audio recording is desired, add YachtBot devices to the "Record" section. This is optional.

You can add a maximum of 2 YachtBots, with only _one_ YachtBot being used for recording at any one time.

For YachtBot to record Athlete audio, YachtBot needs to be configured also. See [Configuration of YachtBot for recording Athlete audio](../../Custom%20Projects/YNZ%20Comms%20Systems/Configuration%20of%20YachtBot%20for%20recording.md).

  

_Add linked long range TalkBot_

Add the remote long range TalkBot to the "Linked TalkBot" section. Ensure that you are entering the address of the correct remote TalkBot and that you are using the _long range address_ of the remote device.

Double check this, as TalkBot will not function if this is incorrect.

  

_Enable Bi-directional communications_

When creating an Athlete configuration, if Bi-directional communication between the Coach and Athlete is desired, check the "Athlete hears audio from Coach" box. This is optional, and disabled by default.

  

_Enable Long range link "On demand"_

On demand link only creates a long range link when the Coach headset is connected and active.

When creating a Coach configuration, if Long range link on demand is desired, check the "Long range link 'On demand'" box. On demand long range link is disabled by default (i.e. the long range link is maintained at all times). 

  

**Save configuration file**

Click "Save configuration file". By default, this overwrites the current configuration file and will apply the new configuration on next device power up. 

If the configuration is for another device or for later use, choose "Choose a new location" if you do not want to override the current configuration file.

The main configuration file must be called "config.json" to be used on startup. All other files are ignored, so renaming "config.json" to "config2.json" would mean the config file is ignored.

  

Once the configuration file is saved, it will be used on next power up.

  

**Unplug USB cable**

Once configuration is complete, unplug the USB cable. This will shutdown the device.

Replace the waterproof cap.

  

When the pair (Coach and Athlete) have been configured, it is good practice to power up both units and connect all devices for an end-to-end check. It is far easier to resolve a configuration issue on land now, than out on the water!