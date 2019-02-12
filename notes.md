https://www.google.com/search
?
num = 50
&
newwindow = 1
&
source = hp
&
ei=rf9iXO-1BI77jwTPubHgBQ&q=morpheus+meme+generator&btnK=Google+Search&oq=morpheus+meme+generator&gs_l=psy-ab.3..0j0i22i30.3185.7746..7922...0.0..0.169.3205.0j25......0....1..gws-wiz.....0..0i131j46i131j46.CbPbaGqZCWk

```js
req.query = {
  num: 50,
  newwindow: 1,
};
```

client - makes request -> server - send response -> client

client - makes request -> server - send response -> client ( the server doesn't know whe the client is )

no shared state between the client and server.

RPC - Remote Procedure Call

| RPC         | REST       | Description   |
| ----------- | ---------- | ------------- |
| /getAllHubs | GET /hubs  | List all hubs |
| /createHub  | POST /hubs | Creates a Hub |

We think it's like this:

client <---> api

In reality.....

client <--> DNS server <--> load balancers <--> n web servers

separation of concerns vs separation of technologies.

React Component = (data?) => UI
