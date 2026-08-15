# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

This project uses [Yarn](https://yarnpkg.com/) (see `packageManager` in [package.json](package.json)) — use `yarn`, not `npm`, so everyone resolves the same dependency tree.

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
