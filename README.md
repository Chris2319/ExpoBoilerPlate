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

## Prettier

You can format the project using ```npm run prettier```
To change the rules, update the ```.prettierrc``` file - just check in with the team.

## ESLint

To change the rules, update the ```.eslintrc.json``` file - just check in with the team.

## Redux Toolkit

For state management RTX is used, for this we need to look at 3 things.

1. store - ```./store/store.ts```
2. slices - ```.store/slices/authSlice.ts```
3. thunks - ```.store/thunks/authThunks.ts```

### Store:
- When adding new states remember to add them to the store
- ```type IRootState = {...}``` requires an interface for the newly created state.
- ```rootReducer = combineReducers({...})``` requires the newly created slice.

### Slice:
- Creating a new slice
  - ```export const authSlice = createSlice({name, initialState, reducers, extraReducers})```
  - `name` - this must be unique and added to the `./store.ts`
  - `initialState` - an object `{ data, ui, loaders, alerts }` must be typed to store related data in.
  - `reducers` - functions that is used on the ui to update the state, must be used with a dispatch `await dispatch(myNewReducer())` 
  - `extraReducers` - functions that will run when the corresponding thunk is called and in one of the following states `pending, fulfilled, rejected`

### Thunks:
- Thunks are used to make api calls
- must be used with a dispatch `await dispatch(myThunk())`
- when calling a thunk it will trigger the extraReducers in the slice which can be used to manage state like data, loaders or errors.

## How to navigate the application:

1. TODO - Once route layout has been decided on please update this.

## 5 STEP PROCESS:

1) Make your requirements less dumb.\
   When asked to design | develop something always question if what we are doing makes logically sense.
2) Delete the part or process.\
   Reevaluate pieces of code, if its 'technically' not needed, remove it. We might be fixing | optimising something that
   is not needed (keep in mind during code cleanup)
3) Simplify | Optimise.\
      Clean code is easy to understand | read, meaning that regardless of your level of expertise you should be able to get
      a rudimentary understanding of the application at a quick glans. Simple code tends to run more efficient (except for
      some obvious exceptions)
      See rules below on clean code
4) Speed up the process.\
   Recreating a new component will be quicker if they all follow the exact same process and structure. It also speeds up
   the debugging process as there is a standard to follow
5) Automate

## GENERAL RULES:

1. Be generous with "else if" statements. Use guard clause, switch or single if. Else if is a sign of unplanned code.
2. Minimum any's | unknowns
3. Interface driven where possible
4. Full descriptive names in loops (WHERE IT MAKES SENSE) e.g. (user) => { someFunction(user) } and NOT (_t) => { someFunc(_t) }.\
   Using something like _t makes it difficult to debug as you have to keep track of what _t is, what happens when there
   is a nested loop using _r?\
   This adds unnecessary overhead for devs. It is much easier to compare user.name === company.employee[employeeIndex]
   .name VS _u.name === _c.employee[_i].name.
5. Alphabetize enums or anything that can be alphabetized
6. Keep imports clean - any minor structure would do.
7. Comment large blocks of complex code and keep the comments to the point e.g. // Step 1: Get data // Step 2: Sort date (no hand over needed)
8. No Friday releases to prod or acc
9. No errors or warnings on commits (excluding duplicate code | typo's)
10. Group code where possible. e.g keep all constants at the top of every block ==> const const loop loop VS const loop
    const loop.
11. Always find root cause. Always look for the root cause of a problem. (check with the backend).
12. Prevent over-configurability. There are some things that must be future-proof and some NOT.\
    If a value will only change once a year, why add all the functionality to handle it via a database value? E.g. if a
    release takes 30min and code change takes 10min (like updating the footer which happens at least once a year) is it
    worth spending possibly days trying to figure out how to make it database driven just so devs don't have to work on
    it again and whoever can just update it via postman. 40min once a year for the app lifetime (over 4 years = 160min)
    VS possible 1 - 2 days (480 - 960 min).\
    ***A wise man once said "Never spend 6 minutes doing something by hand if you can spend 6 hours failing to automate
    it"***
13. Avoid negative conditionals. e.g. if(!notAllowed) { doSomething }
14. Use types the way it should be used E.g. DON'T use string-boolean checks => if(value === 'true') { doSomething }
15. Levels of nesting. Try and keep it as low was possible.\
    E.g. if (condition) { if (condition) { if (condition) { doSomething() } } }
16. Write code from a FE perspective and not what structure is best for the BE (The BE must return a model designed for the FE). At the end of the day it is HUMAN BEINGS
    using the application, what makes sense to them?
    "When Peter clicks the button what must happen?"
17. Unused code should be removed. Already mentioned in the 5 step process but worth mentioning again. 
    Code you are trying to fix might not be needed and this is time wasted - we do have git history.
    

## FUNCTIONS RULES:

1) Small.
2) Do one thing.
3) Use descriptive names.
4) Prefer fewer arguments.
5) Have no side effects. NB!
6) Line limit on functions. Try and keep it below 100
7) Don't use flag arguments. Split method into several independent methods that can be called from the client without
   the flag. i.e myFunc(data: any, doAdditionalGet: boolean) can rather accept the additionalData, this way myFunc only does 1 thing.
