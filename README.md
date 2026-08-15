# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Why I use Expo instead of React Native CLI :D

The task requirements list React Native, TypeScript, and React Navigation as the stack. this project have all three that it's built on `react-native`, written entirely in TypeScript, and file-based routing (`expo-router`) is layered directly on top of `@react-navigation/native`. Expo is a framework around React Native, not a replacement for it.

I chose Expo (framework) over the React Native CLI by preference, based on experience at a previous company where a bare RN CLI project became difficult to maintain,In last year i was assigned task to upgrading the Android `compileSdk`/`targetSdk` api level to meet minimum require of Google play store and keeping native modules linked correctly was too hardship, and migrating to the New Architecture required significant manual native-side work.
So for this test, I remember that Expo handles that class of problem for me and (our) (SDK-aligned dependency versions via `expo install`, config-driven native setup via `app.json`), which keeps iteration speed high for an app like this one, for a product list from a mock API, a detail screen, and favorites persisted locally (you say AsyncStorage but i prefer MMKV as i use in previous company that build with c++ for fast response). If native code ever needs hand-editing, `npx expo prebuild` still generates the `ios`/`android` projects on demand (see [New to Expo](#new-to-expo-coming-from-react-native-cli) below).

This project uses [Yarn](https://yarnpkg.com/) (see `packageManager` in [package.json](package.json)) — use `yarn`, not `npm`, so everyone resolves the same dependency tree. Styling is done with [NativeWind](https://www.nativewind.dev/) (Tailwind classes via the `className` prop), not `StyleSheet`.

## Prerequisites

- [Node.js](https://nodejs.org/) 20.19.x or later
- [Yarn](https://yarnpkg.com/) — enable via Corepack: `corepack enable`
- To run on a simulator/emulator: [Xcode](https://developer.apple.com/xcode/) 16.1+ (iOS, macOS only) and/or [Android Studio](https://developer.android.com/studio) (Android)
- No Xcode/Android Studio? Install the [Expo Go](https://expo.dev/go) app on your phone and scan the QR code from `yarn start` instead — no native tooling required

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
   yarn start
   ```

   Or jump straight to a platform:

   ```bash
   yarn ios      # iOS simulator
   yarn android  # Android emulator
   yarn web      # browser
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Troubleshooting

If the app fails to build or start after pulling new changes (especially after dependency or config updates like Metro/NativeWind), clear the Metro bundler cache before anything else:

```bash
yarn start --clear
```

## New to Expo (coming from React Native CLI)?

- **No `ios`/`android` folders.** This is a managed project — there's no native project checked in (see `/ios` and `/android` in `.gitignore`). Native config lives in [app.json](app.json) instead of `Info.plist`/`build.gradle` directly.
- **Expo Go vs. development build.** `yarn ios`/`yarn android` open the app in the [Expo Go](https://expo.dev/go) sandbox app — fast, no Xcode/Android Studio build step, but it only supports libraries Expo Go ships with.
- **Need a native module Expo Go doesn't include?** Run `npx expo prebuild` to generate the `ios`/`android` folders locally (or build one in the cloud with [EAS Build](https://docs.expo.dev/build/introduction/)), then run a [development build](https://docs.expo.dev/develop/development-builds/introduction/) instead of Expo Go.
- **File-based routing.** Screens are files under `app/` (via `expo-router`), similar in spirit to Next.js — there's no `<NavigationContainer>`/`Stack.Navigator` to hand-wire like a bare React Native CLI app.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
