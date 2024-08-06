---
title: "B&G: wind relative to True or Magnetic"
date: 2021-08-18
---
# B&G: wind relative to True or Magnetic

Showing True Wind relative to True, or relative to Magnetic North
-----------------------------------------------------------------

Depending on your preference, the B&G display can show the True Wind and direction relative to True North or Magnetic North. WindBot sends all data to the display relative to True North.

  

The B&G display calculates its own declination based on GPS longitude and latitude when the variation (VAR) is set to auto. Select this from Setup -> Advanced Settings -> Magnetic Variation (toggle between auto and manual).

  

To swap between True and Magnetic modes by selecting Setup -> Units, -> Heading (toggle between True and Magnetic). What mode you selected is shown as °T or °M in the TWD panel.

  

If you want to compare the declination that WindBot brain and the display calculate, compare the VAR value the display shows and Magnetic variation as shown in the data stream of the NMEA converter (Setup -> Advanced Settings -> Device List -> IF-NMEA2K2 -> Options -> Data).

  

If not using the AUTO setting on the B&G display and when in a new location, check the declination that appears in the NMEA converter’s data stream, and manually set the display’s VAR to the matching value.