---
title: POWER WIRED setting - Connecting to a permanent power supply
date: 2021-08-18
---

# POWER WIRED setting - Connecting to a permanent power supply

_For Firmware version 500 and greater._

The WindBot and YachtBot Base station products can be connected to a permanent power supply to ensure they are constantly running avoiding the requirement to recharge the internal batteries.

This setting makes the devices start and run when DC power is applied, then turn off when power is removed. Effectively it turns them into a "wall powered" device. This is particularly useful for WindBot poles on committee boats or coach RIBs, as it means they can be permanently connected and they start up automatically when the boat power is turned on at the beginning of the day.

Supply of permanent power to the WindBot requires the Pigtail connector on the WindBot pole. Power cables accessories are available to purchase or the pin out information is available [here](../../YachtBot%20Products/Deprecated%20articles/Pigtail%20connector.md).

To supply permanent power to the YachtBot Base station, use the supplied charging pack.  This will require the water proofing bung to be removed, so the YachtBot base station will not be water proof while running with permanent power.

NOTE: Plugging in a USB cable will not supply permanent power to the devices.

This feature is enabled by adding "POWER WIRED" to the config.ini file.

POWER WIRED takes some options, examples as follows:

POWER WIRED. Will shut down 5 seconds after power fails.\
POWER WIRED DELAY 30. In minutes, how long the device will continue to operate when power fails.\
POWER WIRED UPS. Operate as long as battery allows when power fails.

In all these cases, when power is restored the device will start-up again.

The power button can:

\- be safely used to power off, then on, a device that is running in POWER WIRED mode while the power connected. This allows operators to power cycle a device for troubleshooting, and the device will continue in POWER WIRED mode because power was present _at the moment when the operator restarted the device_.\
\- start a device that does not have power connected, even while in POWER WIRED mode. In this case it will detect that it had no power when it started, and operate _just once_ in POWER PORTABLE mode instead. This means that if power is later connected and removed, it will still run until the battery is flat, but once this has happened, it will still start automatically if power is applied again.

To switch between modes, POWER WIRED can be cancelled by setting POWER PORTABLE (the default). Note that the power mode is a persistent setting, which means;

\- once set it will continue even if the command is removed from the configuration, and\
\- if the power mode is changed the device will need to be power cycled once to run and apply the command.

In the event of extreme battery depletion the battery is completely disconnected to preserve it. POWER WIRED now handles this case too, and the device will also start normally from this condition when power is applied.
