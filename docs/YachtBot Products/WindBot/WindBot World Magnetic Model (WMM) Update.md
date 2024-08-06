---
title: "WindBot World Magnetic Model (WMM) Update"
date: 2021-08-18
---
# WindBot World Magnetic Model (WMM) Update

              Every 5 years, [NOAA release](https://www.ngdc.noaa.gov/geomag/WMM/soft.shtml) a new WMM (World Magnetic Model) that WindBot devices use to calculate the [earths magnetic declination](https://en.wikipedia.org/wiki/Magnetic_declination).  

On 10 December, NOAA released WMM2020 which replaces WMM2015 that has been distributed with WindBot firmware.  WindBot devices will **only use a WMM that has not expired**, and so to ensure that your device continues to operate past 31 December 2019 you will need to copy the updated WMM2020 to your device.

The WMM is stored in a file called “WMM.COF” in the \_assets folder on the SD card of your device.  This can easily be updated by replacing it with the updated model attached to this email.  Connect your WindBot to your computer using the supplied USB cable to update this file.

Any devices that are not updated will report a clear error in the logs as follows, and will not calculate true wind until this file is updated. "Contact Igtimi for updated magnetic model coefficient file"

This file needs to be updated on all WindBots even if they shipped after 10th of December 2019.