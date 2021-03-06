# reddi-dotnet-react-ts
Redditech base outline of .NET Core 2.1 app with React, React Router and Typescript enabled.
Projects included:
- [Create React App](https://github.com/facebook/create-react-app) with [Typescript enabled](https://levelup.gitconnected.com/typescript-and-react-using-create-react-app-a-step-by-step-guide-to-setting-up-your-first-app-6deda70843a4)
- [React App Rewired](https://github.com/timarney/react-app-rewired)
- [React Router](https://reacttraining.com/react-router/)
- [Typescript](https://www.typescriptlang.org/)

Based off earlier work in [reddi-dotnet-react-app](https://github.com/nissan/reddi-dotnet-react-app/) so the README is pretty close.

This template packs _alot_ of modules in together, and tweaks the configuration so that they work well with each other, which doesn't happen automatically if you just `yarn add` each one. The packages included are:

1.  .NET Core 2.1 Web App (API/back-end)
1.  React (front-end)
1.  React Router (routing)
1.  TypeScript
1.  Jest (TDD and RDD (readme driven development))
1.  Enzyme (visual behavior testing)

Specifically I added the packages that I believe make better rapid prototyping and testing possible when discovering _how_ an application should behave for the target user and there is a lot of volatility in the expected front-end behaviour as requirements change or adjust based on feedback received from demoing the actual application interactions.

# Requirements

1.  [ASP.Net Core 2.1 SDK](https://www.microsoft.com/net/download) installed
2.  [Node.js](https://nodejs.org/en) and the [create-react-app](https://github.com/facebook/create-react-app) generator
3.  A code editor. For this project I used [Visual Studio Code](https://code.visualstudio.com) but any will do
4.  [Optional][fira code](https://github.com/tonsky/FiraCode) font which works nicely if you [enable ligatures in VSCode](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)

# Quick setup of requirements

If you already have the above tooling, want to set the tooling up on your own, or don't want to learn more about how the pieces are put together, skip this seciton and go straight to [Getting started](#getting-started)
You can quickly setup the requirements by running the

```
setup-prerequisites.sh
```

for Mac or

```
setup-prerequisites.ps1
```

on Windows in an Administrator PowerShell and that will download and install requirements for you, as well as create the skeleton application with the needed packages added.

There are a series of [gist files](https://gist.github.com/nissan/0b49d7524f0729e48e4e436d57533883) that then show off some of the individually configured or additional files that are different from the default `create-react-app` files generated after running the `setup-prerequisites` script in this project, although most of these configuration changes were made for the original [reddi-dotnet-react-app](https://github.com/nissan/reddi-dotnet-react-app/).

If you'd like to copy my own VSCode customized settings as well in your editor, install the [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) plugin to VSCode and download my [cloudSettings gist](https://gist.github.com/nissan/1eebdf0c22e31598a8f279bb784f7eb8) as your own using `Settings Sync`.

## Getting started

Clone the repository, and from the `SampleApp` directory, run

```
dotnet run
```

from within the SampleApp folder. (This will automatically run `dotnet restore` to restore missing packages if required)


To run Jest tests, run

```
yarn test
```

from within the ClientApp folder. Note on Mac OSX `watchman` was added in `setup-prerequisites.sh` to prevent an error specific to `create-react-app` generated projects occurring when `yarn test` is run. Reference to this issue can be [found here](https://github.com/facebook/create-react-app/issues/4540)
