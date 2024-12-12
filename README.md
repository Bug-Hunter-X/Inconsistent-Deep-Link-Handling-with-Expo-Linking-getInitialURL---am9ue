# Inconsistent Deep Link Handling with Expo Linking.getInitialURL()

This repository demonstrates a bug encountered when using Expo's `Linking.getInitialURL()` API to handle deep links. The function inconsistently returns `null`, even when a deep link is launched. This issue is more prevalent on Android devices.

## Bug Description
The `Linking.getInitialURL()` asynchronous function, designed to retrieve the initial URL used to launch the application, does not reliably return the expected URL.  This leads to incorrect processing of deep links and causes unexpected application behavior.

## Steps to Reproduce
1. Clone this repository.
2. Run the app on an Android and an iOS emulator/device.
3. Attempt to open the app using a deep link (e.g., `myapp://myroute`).
4. Observe that the app may not correctly handle the deep link on Android in some cases, resulting in null values from `getInitialURL()`.

## Solution
The proposed solution involves adding error handling and retry mechanisms to account for delays in receiving the initial URL, especially on Android.