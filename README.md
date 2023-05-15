[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) <img src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/tauri.svg" width="50">

# Introduction

Fork of `angular-tauri`: but a slimmer version

What changed:

- Updated to ng16
- Updated to tauri 1.3
- Updated to typescript v5+
- Utilize standalone components
- Remove all packages that does not help run this paticular setup
- Remove linting
- Remove tests
- Added .prettierrc to auto format code

_Why; Because I needed a tool that was just Angular and Tauri nothing else. Here it's up to the user to add what they need._

Currently runs with:

- Angular `16.0.1`
- Tauri `1.3.0`
- Typescript `5.0.4`

With this sample, you can:

- Run your app in a local development environment with Tauri & Hot reload
- Run your app in a production environment
- Package your app into an executable file for Linux, Windows & Mac

/!\ Angular CLI needs Node 16 or later to work correctly.

## Getting Started

### Clone this repository locally

```bash
git clone https://github.com/sp90/angular-tauri-slim.git
```

### Install Tauri (Rust)

https://tauri.studio/docs/getting-started/prerequisites

<br />

### Install dependencies with npm

```bash
npm install
```

## To build for development

Angular + Tauri app in a local environment on `localhost:4202`

```bash
npm start
```

## Rust code

The application code is managed by `src-tauri/main.rs`. \

<br />

## Project structure

| Folder    | Description                                   |
| --------- | --------------------------------------------- |
| src-tauri | Tauri main process folder (Rust)              |
| src       | Tauri renderer process folder (Web / Angular) |

## Browser mode

Maybe you only want to execute the application in the browser with hot reload? Just run `npm run web:serve`.

<br />

## Included Commands

| Command                | Description                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| `npm run web:serve`    | Execute the app in the web browser (DEV mode)                                                         |
| `npm run web:prod`     | Build the app that can be used directly in the web browser. Your built files are in the /dist folder. |
| `npm run tauri:bundle` | Builds your application and creates an app consumable based on your operating system                  |

**Your application is optimised. Only /dist folder is included in the final bundle.**

<br />

## Note for bun users

I have tested this does also work with `0.6.0` [bun.sh](https://bun.sh) where the install process is much faster around `~3s` in total instead of `~18s` which is great for github actions or other CI tool chains.
