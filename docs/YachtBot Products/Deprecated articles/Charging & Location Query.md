---
title: Charging & Location Query
date: 2021-08-18
---

# Charging & Location Query

The battery is partially charged when delivered, and protected with a plastic separator to protect the ideal storage charge.

## How to charge

Always turn the device off after connecting it to power for charging. **NOTE** With the 2G version, charging can turn the device on and put it into running mode (without actually transmitting data). After plugging the device in to charge, wait for it to power on, then power it off.

Always fully charge the battery before use, as low battery can affect accuracy and reliability of GPS data. YachtBot Mini warms up while charging, this is normal. A full recharge using the supplied power adapter takes about three hours, two hours to 95%. The blue indicator comes on when charging. It does not always go out when fully charged.

While it's running normally, you can also check the battery level of the device by sending it the location query text message

`0000,A00`

You will receive a response with comma separated numbers and a link to a google map showing the device’s location. The last number before the link is the remaining battery charge.
