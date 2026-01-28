# Nx Monorepo Commands Cheat Sheet

## Running this Project
### Serve Angular frontend
npx nx serve web

### Serve NestJS backend
npx nx serve api


## Angular (apps/web)

### Install a new npm package
npm install <package-name>

### or with dev dependencies
npm install -D <package-name>


### Example:

npm install @angular/material
npm install -D @types/lodash

### Generate Angular elements using Nx

Nx wraps Angular CLI. You cannot use ng generate directly, use:

npx nx g @nx/angular:<schematic> <name> --project=<project-name>

Schematic	Example
component	npx nx g @nx/angular:component my-button --project=web --export
module	    npx nx g @nx/angular:module my-feature --project=web
service	    npx nx g @nx/angular:service my-service --project=web
directive	npx nx g @nx/angular:directive my-dir --project=web
pipe	    npx nx g @nx/angular:pipe my-pipe --project=web

## Notes:

--project=web → the Angular app you’re targeting

--flat → generate without a folder

--export → export component from module

Serve / Build / Lint / Test
npx nx serve web          # Start dev server
npx nx build web          # Build production bundle
npx nx lint web           # Run linter
npx nx test web           # Run tests

## NestJS (apps/api)
Install npm packages
npm install <package-name>
npm install -D <package-name>


### Examples:

npm install @nestjs/jwt @nestjs/mapped-types
npm install passport passport-jwt

### Generate NestJS elements using Nx

Nx wraps NestJS CLI. Syntax:

npx nx g @nx/nest:<schematic> <name> --project=<project-name>

Schematic	Example
service	    npx nx g @nx/nest:service auth --project=api
module	    npx nx g @nx/nest:module users --project=api
controller	npx nx g @nx/nest:controller products --project=api
gateway	    npx nx g @nx/nest:gateway chat --project=api
class	    npx nx g @nx/nest:class dto/create-user --project=api
interface	npx nx g @nx/nest:interface user --project=api
decorator	npx nx g @nx/nest:decorator roles --project=api

### Notes:

NestJS files will be created in apps/api/src/app/<name>

--flat → skip folder creation

--dry-run → check before generating

Serve / Build / Lint / Test
npx nx serve api          # Start NestJS dev server
npx nx build api          # Build backend for production
npx nx lint api           # Run linter
npx nx test api           # Run tests

## Workspace-wide commands
Serve multiple projects at once
npx nx run-many --target=serve --projects=web,api --parallel

Build multiple projects at once
npx nx run-many --target=build --projects=web,api --parallel

Lint multiple projects at once
npx nx run-many --target=lint --projects=web,api --parallel

Test multiple projects at once
npx nx run-many --target=test --projects=web,api --parallel