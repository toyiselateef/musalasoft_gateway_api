# mulasa-gateway-api-ben

The main purpose of this repository is to show a simple microservice that uses mongoDB as database provider. The Rest APIs will be using the Swagger (OpenAPI) Specification, and supports cloud postgres and redis lab.

## Environment vars

This project uses the following environment variables:

| Name         | Description                         | Default Value |
| ------------ | ----------------------------------- | ------------- |
| CORS         | Cors accepted values                | "\*"          |
| DATABASE_URL | database conncetion strings         |               |
| NODE_ENV     | used to determine dev/prod behavior |               |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 16.8.0
- Install Mongoose version 6.2.9

# Getting started

- Clone the repository

```
git clone  https://github.com/toyiselateef/musala_gateway_api.git
```

- Install dependencies

```
cd mmk_backend
npm install
```

- Build and run the project

```
npm run build
```

```
npm run start
```

Navigate to `http://localhost:3001`

- API Document endpoints

swagger-ui Endpoint : http://localhost:3001/docs

## Getting TypeScript

Add Typescript to project `npm`.

```
npm install -D typescript
```

## Project Structure

The folder structure of this app is explained below:

| Name                | Description                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **dist**            | Contains the output from build.                                                                                                  |
| **node_modules**    | Contains all npm dependencies                                                                                                    |
| **public**          | Contains static files to be served                                                                                               |
| **src**             | Contains source code that will be compiled to the dist dir                                                                       |
| **src/config**      | Database configuration, basically postgres                                                                                       |
| **src/controllers** | Controllers defines functions to serve various express routes.                                                                   |
| **src/middlewares** | Express middlewares which process the incoming requests before handling them down to the routes                                  |
| **src/routes**      | Contain express routes ('/sms/inbound' and '/sms/outbound'), separated by module/area of application and authenticate middleware |
| **src**/index.js    | Entry point to the API                                                                                                           |
| package.json        | Contains npm dependencies as well as                                                                                             |

## Building the project

### Running the build

Run and build MMK API with the following scripts:

| Npm Script | Description                                                                            |
| ---------- | -------------------------------------------------------------------------------------- |
| `start`    | Runs full build and runs node on dist/server.js. Can be invoked with `npm start`       |
| `dev`      | Full build. Runs ALL build tasks with all watch tasks. Can be invoked with `npm build` |
| `test`     | Runs build and run tests using mocha                                                   |

# Swagger

## Specification

The swagger specification file is located in the static folder ("public") as swagger.json.

# Common Issues

## npm install fails

The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.

## database connection error

The database needs to be up and running, also if theres ip whitelisting on your database ensure to whitelist the server hosting this api's ip address(es)
