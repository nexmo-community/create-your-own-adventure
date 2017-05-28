# create-your-own-adventure
Adventures from your phone


## Nexmo setup

You'll need a phone number and an app, you can do this with the [nexmo-cli](https://github.com/Nexmo/nexmo-cli).

```bash
# Find & purchase a number
nexmo number:search gb
nexmo number:buy <YOUR NUMBER>

# create your application and link number to it
# generate an event token to prevent unauthorised updates
nexmo app:create my-adventure https://example.com:3000/answer/<TOK> https://example.com:3000/event/<TOK>
nexmo link:app <YOUR NUMBER> <YOUR APP_ID>
```

## Configuring the server

Copy `.env.example` to `.env` - use this to set the following environmental variables:

* `API_KEY` & `API_SECRET` - your Nexmo credentials
* `APP_ID` - the application id
* `HOST` - the host for callbacks `https://example.com:3000` (include protocol & no trailing slash)
* `NUMBER` - the phone number linked to your app (for the ui)
* `PORT` (optional) - which port to listen to (default 3000)


## Running the server

```bash
# install dependencies (or use yarn)
npm install

# start server on localhost:3000
node server.js

# optional - create public tunnel with ngrok
ngrok http 3000
```


## Frontend ui

The project comes with a bundled version of the frontend script (`ui/build`). If you want to make any changes, then change any scripts, and run either:

* `npm run frontend:build` to compile build.js once
* `npm run frontend:watch` to watch the code and compile on change (watch out, this can sometimes hang after compile errors)


The frontend uses:

* [svelte](https://github.com/sveltejs/svelte) for the ui components/data-binding
* [buble](https://buble.surge.sh/) for es2015 transpilation
* [rollup](http://rollupjs.org/) for bundling
