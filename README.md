---
languages:
- javascript
- nodejs
page_type: sample
products:
- azure
- azure-cosmos-db
description: "This is a POC"
---

# React CosmosDB

This is a demo project for TAL to administer leads and next events

* Setup a React / Node application
* Create, Read, Update and Delete data from CosmosDB with the Mongo API
* Debug React and Node apps


## Get Started

1. Clone this repository

2. Change into the directory that was cloned and run `npm install`

3. Configure the CosmosDB Server Setting

Rename `server/env/environment-change-me.js` to `environment.js` and change the `cosmosPort`, `dbName` and `key` to match your CosmosDB environment.

```javascript
// server/env/environment.js
const cosmosPort = 1234; // replace with your port
const dbName = 'your-cosmos-db-name-goes-here';
const key = 'your-key-goes-here';

module.exports = {
  cosmosPort,
  dbName,
  key
};
```

## Running The App

In development, the app runs via two separate processes...

### Start the Express Server

```bash
node server/server.js
```

### Start Create React App

In a different terminal tab...

```bash
npm start
```

## Building For Production

In production, you want Express to serve up your app.

### Build React App

```bash
npm build
```

Now start the Express server from the server folder

```bash
cd server
npm start
```

Your entire application is now running on port 3001.

Everything in the `server` folder is what is needed in production. Those are all of the build assets.
