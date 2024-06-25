# Expo vs React Native

- React Native is an open-source framework maintained by Meta (Facebook), designed for building cross-platform apps 
- Expo is an open-source framework maintained by Expo itself, designed for building cross-platform apps
- Unlike plain RN, which can be challenging and time-consuming to set up, Expo provides a streamlined experience
- Expo has a suite of tools and services built around React Native, which greatly simplifies the development process
- With plain React Native, you cannot build iOS apps on a windows or linux machine. Native iOS apps can only be built on a macOS machine
- With Expo, you can develop your app on windows or linux and run your app on a physical iPhone
- Expo has evolved significantly over the years and now supports nearly all the features necessary for building mobile apps
- In the event that you require access to native Android or iOS code, Expo allows you to eject your app and work with a plain React Native codebase
- Expo is to React Native how NextJs is to React

# Setup your [Expo](https://expo.dev) project

1. Install the latest stable version of node https://nodejs.org/en
   1. Consider using Node Version Manager (nvm) if other projects require specific versions
2. Using the terminal navigate to your project's directory i.e: C:\Projects
3. Run the following commands:
   1. ```npx create-expo-app@latest```
   2. If the files don't automatically appear, try restarting your IDE
4. Install the [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   1. Check if your system supports virtualization ```systeminfo``` or Run (windows + R) > ```msinfo32```
   2. Check your BIOS (likely under cpu settings) and enable it
5. Create an Expo account and run the following commands:
   1. https://expo.dev/signup
   2. ```npm install -g eas-cli```
   3. ```eas login```
   4. ```eas build:configure```
   5. ```eas build --platform android --profile development```
6. Start the project
   1. ```npx expo start```
   2. [development build](https://docs.expo.dev/develop/development-builds/introduction/)
   3. [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   4. [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   5. [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
      1. You should see a QR code 
      2. Install the Expo app https://play.google.com/store/apps/details?id=host.exp.exponent
      3. Scan the QR code to load the app in your device

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
