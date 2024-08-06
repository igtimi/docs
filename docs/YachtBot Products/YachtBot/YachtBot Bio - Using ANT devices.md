---
title: YachtBot Bio - Using ANT devices
date: 2021-08-18
---

# YachtBot Bio - Using ANT devices

## Enable and Pair

From the ANT+ module

Commands for ANT. They are prefixed by "ANT ".

ON:

"ANT ON"

OFF:

"ANT OFF"

PAIR <n> \[id\] \[BC/CBSC/HRM\]:

"ANT PAIR <n> \[id\] \[BC/CBSC/HRM\]"

where

\< n> - Is the number of ANT+ devices to pair to the YachtBot. There is a maximum of 8 ANT+ devices that can be paired.

\[id\] - setting this to "0" will allow any ANT+ device to pair. Setting the \[id\] of a specific ANT+ device ID will lock the YachtBot to only listen to that ANT+ device.

"BC" - an ANT+ "Bike Cadence" device

"CBSC" - an ANT+ "Combined Bike Speed and Cadence" device

"HRM" - an ANT+ "Heart rate monitor" device

Useage:

ANT PAIR 0 0 BC

ANT PAIR 1 0 HRM

ANT PAIR 2 2475 CBSC

This sets up YachBot to have 3 ANT+ devices. The first is a Bike Cadence device, the 2nd is a Heart Rate Monitor where both these first 2 devices don't have the ID set. YachtBot will attach to the first ANT+ device that sends the correct type of data. The third device is a Combined Bike Speed and Cadence device that must much the id of 2475.

## Device IDs

IDs of devices can be found in the ANT datalog file. Each entry in the the data file quotes the id of the device the data came from.

See the module Logfile Commands on how to turn on the ANT data logging.

line in data log example:

1  2       3     4  5  6            7            8

|  |       |     |  |  |            |            |

00,0000025d,65038,36,12,01:56:38.500,01:56:38.400,25.461

1. unitId

1. streamId

1. current Device Id

1. computedHeartRate or cadenece

1. beatCount or NA

1. gps time

1. real time clock time

1. beatTime

## Latching

LATCH <n> \[ON/OFF\]:

"ANT LATCH <n> \[ON/OFF\]"

enables the first device that attaches on a channel to be the only device that will be able to use that channel while the YachtBot is turned on.

Usage:

ANT LATCH 0 ON

Combined with the PAIR example from above. This will cause the first Bike Cadence device that attaches to the YachtBot to be the only device that can attached on channel 0.

Without LATCH ON, if the YachtBot loses the device on channel 0, it will attach to any other BC device it hears.

From the LOGFILE module

<logfile> \<ON/OFF>:

"LOGFILE <logfile> \<ON/OFF>"

Enables or disables a specific logfile.

logfiles types include, "payloads", "ant", "gps".

useage:

logfile ant on
