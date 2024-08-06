---
title: Water current measurement
date: 2021-08-18
---

# Water current measurement

Water current (WCT) measurements are a feature of the WindBot plus standalone display system. You need a floating device and have easy access to the WindBot brain to facilitate the measurement.

Required config file setup is:

```
WCT ON
BaGHack ON
#WCT DEMO -> must be commented out with a leading hash, or deleted
```

The device must have GPS fix.

To do a water current measurement, deploy your floating device (‘stick in’) and push the orange power button on WindBot brain to start the measurement. As you pick up the floating device (‘stick out’ at a recommended minimum time of 100s later), stop the measurement on WindBot by pushing the orange power button twice.

Allow five seconds for display to update reading. An audio feature gives feedback on the ‘stick in’ and ‘stick out’ sequence. The audio comes from the WindBot brain, and may not be audible over excessive wind or engine noise.

### Stick in audio

5x short beeps for "Stick In" indicate successful start of measurement.\
Error: No beep. -> There is no GPS fix, or WCT OFF, or there is an issue with WindBot brain audio.

### Stick out audio

5x short beeps for "Stick Out" indicate successful end of measurement. \
Error: No beep, and no measurement. -> An error occurred before "stick out" was handled, i.e. the cable between the display and WindBot brain was removed. \
Error: 1x long beep for a known error. -> Allow five seconds for display to update. COG value blank (---) and SOG value:

- 11.1 – The current measurement was not relevant, value insignificant in relation to expected windage

- 22.2 - The measurement distances was shorter than the minimum distance (set in config, default 0m)

- 33.3 - Error in calculation -> Direction data unreliable. Possible bad GPS fix, try again.

- 44.4 - The measurement time was shorter than the minimum time (set in config, default 10s)
