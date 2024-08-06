---
title: "Configuration"
date: 2021-08-18
---
# Configuration

The public instructions for configuration files [here](../../YachtBot%20Products/YachtBot%20product%20family%20fundamentals/Making%20configuration%20changes%20on%20YachtBot%20devices.md) apply to base station and rovers. Specific configurations are either published here, or on Basecamp.

  

Basics
------

To make changes to the config.ini file – references throughout this document – remove the device’s bung and connect it to your PC using the supplied micro USB cable. In the folder structure on the SD card, you will find a config.ini file. You can keep copies of the config file on the SD card by placing them in folders or renaming them.  

  

Cell connection
---------------

YachtBot devices typically take less than a minute to connect to the cell phone network when powered up. If you have problems, start with the [troubleshooting guidelines for SIM cards](../../YachtBot%20Products/YachtBot%20product%20family%20fundamentals/Cellular%20connectivity%20trouble%20shooting.md). Most commonly, the APN, username, and password need to be set to the carrier specific values in the config file.

```
#cell apn <apn>
#cell user <username>
#cell pass <password>
```