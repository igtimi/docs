---
title: "Configuration of YachtBot for recording"
date: 2021-08-18
---
# Configuration of YachtBot for recording

To use YachtBot to record Athlete audio, _both_ the TalkBot and YachtBot devices need to be configured to allow this.

  

This article is only for configuring the YachtBot to record Athlete audio. For configuring the TalkBot, see "Configuration of TalkBot" [here](../../Custom%20Projects/YNZ%20Comms%20Systems/Configuration%20of%20TalkBot.md).

  

**Configuring YachtBot**

The following lines need to be added to the YachtBot configuration file. 

```
\##  BT setup for TalkBot audio recording
##
bt passkey 0000
bt bluemix on
bt on
```

  

Details for all other YachtBot configurations can be found [here](../../YachtBot%20Products/YachtBot%20product%20family%20fundamentals/Configuration%20File.md).