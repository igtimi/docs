---
title: "SIM card installation and APN"
date: 2021-08-18
---
# SIM card installation and APN

You need a SIM card with data plan: the maximum data usage per full charge cycle is about 3 MB. For the 2G version, you need a large form-factor (Mini), and for the 3G version, you need a Micro SIM.

  

When fitting the SIM card, make sure that the contacts are aligned properly and take care to close metal clasp into the lock position. Problems with the SIM card reflect in a flashing green indicator (1s cycle).

  

APN
---

In some countries, the APN user name and password needs to be set before data transmission works. Contact your cell phone provider and get the APN name, the user name, and password. Turn your YachtBot Mini on and send a text message to the SIM card’s number with  

```0000,A21,1,data.igtimi.com,8000,APN,APN user name,APN password```

Replacing the last three values with the information your provider gave you. If, and this is common, no user name and password are required, the syntax is  

```0000,A21,1,data.igtimi.com,8000,APN,,```

  

With the 3G version, you can send an abbreviated command that leaves the data connection details (TCP) alone: 

```0000,A21,,,,APN,,```

That's four commas after A21!

**IMPORTANT:** When sending messages to your YachtBot Mini, use commas and don’t leave extra spaces.

  

Within about 30 seconds, you receive a response ending in “A21,OK”, indicating that the new values have been set. Note that if your SIM card is not set up to send txt messages (data only or tablet SIM card), or charging when you sent it, then you won't receive this confirmation.