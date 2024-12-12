This error occurs when using the Expo `Linking` API to handle deep links.  The `getInitialURL` async function sometimes returns `null` even when a deep link is opened, leading to unexpected behavior in the app. This is especially problematic on Android devices, where the delay in receiving the URL seems more pronounced.