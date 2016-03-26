# fbcat - a nodejs Facebook access token validate tool

Just a very simple tool to validate Facebook user access token received from client using Facebook SDK.

## Install

    npm install fbcat

## Usage

```js
var fbcat = require("fbcat");,

...

fbcat.check(user_id, user_access_token, app_access_token, function(res) {
  if (res) {
    console.log("Validated OK!");
  } else {
    console.log("Something wrong ..");
  }  
});
```
