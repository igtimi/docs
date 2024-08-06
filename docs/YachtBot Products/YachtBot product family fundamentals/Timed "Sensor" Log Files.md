---
title: "Timed "Sensor" Log Files"
date: 2021-08-18
---
# Timed "Sensor" Log Files

When enabled via the config files, the hardware will record sensor data to a log file on the SD card. There is one .NMA file per power cycle, which are named in monotonically increasing order. 

These .NMA files contain two types of NMEA style messages, PILOT and PISTE.

  

PILOT
-----

  

PILOT messages are "Location Of Time" messages which can be used to sync up the internal millisecond tick time of the hardware to UTC time from the GPS. 

They are in the following format:

  

```$PILOT,<Hardware Tick Time>,<UTC Time>,<Device Serial Number>,<Stream ID>\*<Checksum>```

  

  

PISTE
-----

  

PISTE messages are "Standard Time Export" messages which output the recorded sensor data with the hardware tick time that they were received.

They have the following format:

  

```$PISTE,<Hardware Tick Time>,<Sensor Data>\*<Checksum>```

  

  

Note: [The checksum is the standard NMEA calculation](https://en.wikipedia.org/wiki/NMEA_0183#C_implementation_of_checksum_generation).