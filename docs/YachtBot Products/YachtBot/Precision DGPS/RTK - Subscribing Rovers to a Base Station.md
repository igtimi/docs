---
title: Precision DGPS/RTK - Subscribing Rovers to a Base Station
date: 2021-08-18
---

# Precision DGPS/RTK - Subscribing Rovers to a Base Station

How to subscribe to a YachtBot base station

In the next section, the YachtBot base station is introduced. Receiving corrections from a specific base station requires the rover to subscribe to the base station’s data stream.

In the config, set this to the base station’s serial number

```
#log debug cors on

CORS ROVER

CORS SOURCE DC-FE-AAAA

CORS ON
```
