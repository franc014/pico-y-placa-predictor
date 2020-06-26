# Pico y Placa Predictor

# Installation (Dev environment)

1. Clone this repo (https://github.com/franc014/pico-y-placa-predictor)
2. Inside project folder:
   - Install project dependencies:
     `yarn install`
   - Development:
     `yarn dev` App will run on http://localhost:1234
   - Testing:
     `yarn test`

# Demo

https://pico-y-placa-predictor.netlify.app/

# Project decisions

This project is a Vanilla Javascript Application. It uses ES5 syntax such as arrow functions, modules and classes. It also uses some external dependencies for date management, bundling and testing framework.
CSS is managed via one single file in /src/app.css. CSS variables are used to set up a light design system implementation for UI styling.

For testing, it uses the Jest framework. Tests are located in "**tests**" folder.
Each test suit reflects the Application user features, such as the prediction itself, but also unit tests for date management and input validation. 

There are some branches defined for specific parts of application. The branch "predictor-development" is used to integrate ui and “business” logic. This is a branch that may be used to deploy to a stage environment or server.

# Deployment

This Application is hosted in Netlify which allows Continuous Deployment. Deployments are integrated via Github integrations. When deploying a branch, Netlify would create a staging version.
