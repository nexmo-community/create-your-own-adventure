# create-your-own-adventure
Adventures from your phone


## Nexmo setup

You'll need a phone number and an app, you can do this with the [nexmo-cli](https://github.com/Nexmo/nexmo-cli).

```bash
# Find & purchase a number
nexmo number:search gb
nexmo number:buy <YOUR NUMBER>

# create your application and link number to it
nexmo app:create my-adventure https://example.com/answer https://example.com/event
nexmo link:app <YOUR NUMBER> <YOUR APP_ID>
```

## Configuring the server

Copy `.env.example` to `.env` - use this to set the following environmental variables:

* `API_KEY` & `API_SECRET` - your Nexmo credentials
* `APP_ID` - the application id
* `HOST` - the host for callbacks `https://example.com:8080` (include protocol & no trailing slash)
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
