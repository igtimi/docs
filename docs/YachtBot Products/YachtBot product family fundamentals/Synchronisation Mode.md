---
title: "Synchronisation Mode"
date: 2021-08-18
---
# Synchronisation Mode

Synchronisation (sync) is a default setting in the configuration that causes the YachtBot, WindBot, or TideBot to send all data that hasn't previously been uploaded to our servers. It does this at a low rate while the device is acquiring new data, and at a high rate as the device is shutting down.

  

If wanting to take advantage of the high upload rate at power off, simply turn off the tracker in the normal way, by pressing the power button as described. The device automatically goes into sync mode, where:

*   power indicator flashes
*   cell connection indicator solid OR flashing while establishing a connection (\*) 
*   GPS indicator off
*   other indicators (if applicable) off

  

(\*) If the power and cell connection indicators are both flashing, it means that the tracker is trying to establish a connection to the servers. The tracker will try to connect to the server for 10 mins before turning off fully. All data files remain on the SD card and the device will try to sync them at the next opportunity. When syncing mode has finished, the tracker will beep and then turn off fully automatically.

  

### Cancel Sync Mode

If the tracker is in sync mode, you can force the unit off. Press and hold the button again until you hear a beep. The tracker then turns off after several seconds.

  

### Check Sync Status

Looking at the contents of the SD card tells you whether all your data is synced up with the servers: \*.BIF files are created when data cannot be sent live to the server, and as they are synced up they get deleted. Therefore, if you cannot find any \*.BIF files on the SD card, all your data has been received.

  

Configuration Setup

By default, YachtBot will sync all \*.BIF files to the server and then delete the device copy once the sync operation is complete.

To disable this behavior:

```
\## Cloud Synchronisation
##
# Sync is on by default, 'SYNC FILES CLEAR' will disable
sync files clear
```

  

Enable syncing IMU data files

```
\## Cloud Synchronisation
##
sync files add \*.imu.nma
sync files add \*.imu.nma keep
 
```

Optional keep flag: Moves the file into the SYNCED folder when sync is complete