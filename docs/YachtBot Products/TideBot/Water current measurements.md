---
title: "Water current measurements"
date: 2021-08-18
---
# Water current measurements

### TideBot has the capability to show results of water current (WCT) measurements. To perform WCT measurements TideBot has to have a GPS fix.

  

During the measurement TideBot shows averaged speed and direction, their respective errors. This is useful for testing purposes. A successfully finished measurement in addition shows a white border on the outer edge of the display.

  

Method
------

Tap the magnetic switch briefly to put TideBot into measurement mode. You see a countdown from ten seconds (settable in config.ini). Now deploy TideBot.

  

After a recommended minimum measurement time of one minute (also settable), pick TideBot back up and stop the measurement by doing another ‘short push’ as described in the start sequence. The last ten seconds previous to stopping the measurement are excluded from the averaging (also settable).

  

Allow five seconds for the display to update reading.

  

Log files
---------

All of TideBot’s data points and WCT measurements are saved to the SD card. They can be accessed via the USB port and integrated into your existing current prediction systems.

  

Settings
--------

You can adjust a number of parameters by editing the WCT section in the configuration file.

  

### Logging

Defaults to brief to show only tide readings in below format. Log full also shows GPS readings, akin to full log settable in GPS section. 

Format:

  

### Heading convention

By default, heading measurements are shown relative to true north. The arguments can be changed between to/from and true/magnetic. For best results, we recommend setting the magnetic declination to auto.

  

### Speed units

The default speed is in meters per second. It can be convenient to show this in knots, m/min or as fractions of boatlengths instead.

  

### Timers

TideBot features an in and out exclusion time. The in time creates a countdown to measurement on the display, the out time is subtracted from any total measurement time. Defaults for both are 10s.

  

### Minimum time

The minimum measurement time defaults to 30s. Until the min time is reached, TideBot shows no readings on the display.

The minimum distance (point to point from origin to current point) defaults to 10m. Note that when doing long term measurements where the tidal movement is expected to reverse, the minimum distance should be set to zero.

  

### Minimum distance

The minimum distance defaults to 10m. Until the min distance is reached, TideBot shows no readings on the display.

    

```
\## Water Current / TideBot (WCT)
##
#
# WCT logging. "log brief" only shows tide readings. "log full" also shows GPS readings in wct logfile.  
# default LOG BRIEF
#wct log full
#
# WCT convention. Conventions "from" or "to" and "magnetic" or "true".  
# default CONVENTION TO TRUE
#wct convention to magnetic
#
# WCT units: kt, m/s, boatlength. BOATLENGTH requires an extra argument (in meters).
# default UNITS M/S
#wct units kt
#
# WCT timers. Arguments: <in timer> <out timer>.  
# default TIMERS 10 10
#wct timers 2 2
#
# WCT mintime. Minimum measurement time in seconds. 
# default MINTIME 30
#wct mintime 10
#
# WCT mindist. Minimum distance for measurement in meters.
# default MINDIST 10
#wct mindist 1
# 
# Enable WCT module
wct on
```

  

---