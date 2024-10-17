---
date: 2023-04-19
---
# Firmware Updates

## General information

- **Firmware updates MUST be done on a **Windows or Linux PC -** NOT Apple devices.**
- **Updating an incorrect firmware image to a device risks damaging the device.  Please follow instructions carefully as no warranty can be provided for failed firmware updates.**
- **Updates to version 2.2 (published April 2022) or higher MUST NEVER be downgraded to version 2.1 (build 519) or earlier.**
  - **Attempts to downgrade devices WILL [BRICK](<https://en.wikipedia.org/wiki/Brick_(electronics)>) THE DEVICE; these will need to be returned for service, and incur charges to recover.**
- **Devices running version 2.1 (build 519 or earlier) will no longer be able to connect for cellular services from 27 May 2022.**
- **After updating to version 2.2, devices must be connected by cellular at least once before data logging will be enabled.**

## Deprecated features

- **Version 2.2**: BIF format files have been replaced with IPB files.  BIF files are no longer supported for device sync or upload to the YachtBot website through the dashboard.
- **Version 2.2**: BT HFP support in YachtBot Bio is no longer available.  Audio files can still be recorded in earlier builds and uploaded through the YachtBot website.

## Firmware update process

1. Download and unzip firmware using the links at the bottom of this document.  Be sure to match the firmware image with the device type being updated.
1. Remove the water-proof plug from the bottom of the device and plug a micro-USB cable into the Micro-USB socket.  For TideBot users, remove the bottom lid of the pod for access to the USB port.
1. Plug the other end of the USB cable into a Microsoft Windows or Linux computer (not Apple Mac). Observe the device power light come on.
1. **Within two seconds, give the power button a short press**. All lights start flashing and the device will mount as a USB removable drive as follows:<img src="../../../assets/images/blob1445395397518.jpeg" alt=""  />
1. In the mounted drive, delete the file called firmware.bin.
1. Drag and drop, or copy and paste, the new firmware image onto the removable drive.  The firmware image is the file ending with the extension ".bin" previously extracted from the firmware zip file.
1. Wait for the file copy to finish, and then unplug the USB cable.  Observe the device starting up for a few seconds before it turns off.

You're DONE - the new firmware has now been installed!  Now proceed to update the configuration.

## Configuration update process

Always reformat the micro-SD card, then re-load the config.ini file and \_assets folder after updating firmware.  Failure to do this may result in the device not functioning correctly.  You can learn more about configuration files [here](../../YachtBot Products/YachtBot product family fundamentals/Making configuration changes on YachtBot devices/).

1. Plug the device into USB again, this time do not press the power button and wait for the embedded micro-SD card to mount.
1. Optionally, save any logs, or existing config.ini file to your computer for safekeeping.
1. Format the micro-SD card as FAT32.  On windows, right-click then select Format...
1. Copy the \_assets folder to the mounted drive from the previously extracted firmware zip file.
1. Copy the config.ini file to the mounted drive from the previously extracted firmware zip file.  If multiple config files are available, please copy the config that best matches your hardware specification, and rename the file on the micro-SD card as config.ini.

## Firmware recovery procedure

Should a firmware update fail for any reason, then YachtBot will lock on with the power light illuminated and be unresponsive to button presses. A new firmware image can be loaded using the following procedure.

1. Gently press and hold the reset button (small white pin-hole next to the power socket)
1. While the reset button is pressed, plug in the USB cable from your computer
1. Immediately release the reset button and then press the power button once.
1. Proceed to step 5. of the "Firmware update process"

## The latest firmware

To receive the latest firmware update, please [sign our updated Terms of Use here](https://riedel.eu2.adobesign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCQSUyjBORtudyaXs3CYCYJRBipEbdLGvmwF6tUWfF8_Htrj2QUON1maIfdrk96MGk*).
You will receive an email with links to the latest firmware download.

- YachtBot (Version 2.2.540 - 02 August 2024)
- WindBot (Version 2.2.540 - 02 August 2024)
- [TideBot](../assets/firmware/tidebot-511.zip) (Build 511)

## Changelog

For information about what has changed in this release, please refer to the [Changelog.txt](../../assets/firmware/Changelog.txt) file attached below.
