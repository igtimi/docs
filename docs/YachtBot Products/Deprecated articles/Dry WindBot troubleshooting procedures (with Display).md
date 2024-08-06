---
title: Dry WindBot troubleshooting procedures (with Display)
date: 2021-08-18
---

# Dry WindBot troubleshooting procedures (with Display)

# Land testing

In addition to registering the device, inserting SIM card, also perform this land testing to ensure all electrical connections work.

Required equipment:

- A 12V battery or bench top power supply (unless enabled to self-power from WindBot’s internal battery)

- Sufficient sky view to allow WindBot to get a GPS fix

- A compass or knowledge of True or Magnetic North direction

- Connect the WindBot to the B&G display, and the display to power.

## (1) Connection tests

One after the other, perform these steps:

<table id="table43651" border="1" cellspacing="0" cellpadding="0"><tbody><tr class="current"><td class=""><b>Step<br></b></td><td class=""><b>Procedure</b></td><td class=""><b>What you see &amp; what it tests</b></td><td class=""><b>What to do if test fails</b></td></tr><tr><td class="">1</td><td class="">Connect / turn on the power only&nbsp;<br></td><td class="">No lights on either the display or WindBot brain are on.<br></td><td class="">The power switch on the Display Box is faulty. Contact us.<br></td></tr><tr><td class="">2</td><td class="">Turn on the display<br></td><td class="">The red light on the display blinks and the WindBot brain’s top indicator comes on solid, indicating that charging works.<br></td><td class="">The cable is not correctly inserted. Try again by replugging all cables, or changing the cables if unsuccessful.<br></td></tr><tr><td class="">3</td><td class="">Turn off the display<br></td><td class="">System is reset to starting state.<br></td><td><br></td></tr><tr><td class="">4</td><td class="">Turn on the YachtBot, then turn on the display<br></td><td class="">The red light on the display comes on solid, and the YachtBot’s red light is solid, with the other two flashing. Bi-directional communication between the YachtBot and the display has been established.<br></td><td class="">Cables or cable connections are faulty. Replug all leads, and exchange if obviously damaged or corroded.<br></td></tr><tr><td class="">5</td><td class="">In the Settings menu on B&amp;G Display, find the NMEA converter device (Setup -&gt; Adv. Settings -&gt; Device List)<br></td><td class="">The Display Box is functional when two devices appear in this list, the IF-NMEA2K2 device and the display itself.</td><td class="">Only the display appears in this list.<br>The NMEA converter or connection to it is faulty, or the B&amp;G display is not set up correctly to find and work with it. Contact us.<br></td></tr></tbody></table>

## (2) Static testing

For your WindBot to work, it needs to have a GPS fix, calculate heading correctly, and be exposed to some wind. Outside, with sufficient wind or someone’s strong lungs blowing into a vertically supported pole, and a GPS fix (meaning top green indicator solid), cycle through the different pages set up on your display.

<table id="table74675" border="1" cellspacing="0" cellpadding="0"><tbody><tr class="current"><td class=""><b>Step</b></td><td class=""><b>Page</b></td><td class=""><b>What you see &amp; what it tests</b></td><td class=""><b>What to do if test fails</b></td></tr><tr><td class="">1</td><td class="">Heading (HDG)</td><td class="">Shows a number if you have a GPS fix<br></td><td class="">Check that GPS fix not lost and follow the instructions in the FAQ.</td></tr><tr><td class="">2</td><td class="">LAT and LON<br></td><td class="">Shows numbers if the GPS and compass work<br></td><td class="">Check that GPS fix not lost and follow the instructions in the FAQ.</td></tr><tr><td class="">3</td><td class="">TWD and TWS<br></td><td class="">Numbers here confirm that GPS, IMU and wind sensor work<br></td><td class="">Swap brain or wind sensor and observe which component the fault follows.<br>If no such page is set up, contact us for instructions on how to do this as you need it for using the system&nbsp;during normal operation</td></tr><tr><td class="">4</td><td class="">COG and SOG</td><td class="">Evoke a water current measurement failure mode by pressing the button for 'stick in' and wait for only a few seconds, then press twice for stick out.''<br><br>You should see “--- and 44.4”, indicating that the measurement failed because it was too short.<br></td><td class="current"><br></td></tr></tbody></table>

## (3) Dynamic Testing

To convince yourself that the WindBot is producing sensible data, point the pole north and blow into the forward facing direction, then rotate by 90 degrees and repeat. Assert that there is a relative agreement between your measurements.

If this fails or doesn’t meet your predictions, check the declination settings in the WindBot configuration file (set to AUTO), that a value you expect is shown in the NMEA converter’s data (see FAQ for instructions), and that the Display’s variation (VAR) is set to AUTO or the correct value.
