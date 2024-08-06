---
title: "Live data (WebSockets)"
date: 2021-08-18
---
# Live data (WebSockets)

The API provides a RESTful interface to access device data.  Data is available immediately after it is presented by a device, however using a RESTful API requires regular polling the API for data, which is inefficient and subject to latency.

  

A better way to access live data is to connect to one of our [WebSocket](http://www.websocket.org/) live data servers.  Live data is presented in exactly the same format as any other data request from the Igtimi API.

  

Igtimi may provide more than one different WebSocket servers at any time.  Use the SERVER\_LISTERS API call to determine which server(s) are available to connect to. Here’s the cURL example…

```
$curl --insecure https://www.igtimi.com/server\_listers/web\_sockets
{
"web\_socket\_servers":
\[
"ws://ec2-184-169-255-115.us-west-1.compute.amazonaws.com:443",
"wss://www.igtimi.com/live",
"ws://live.igtimi.com:8081"
\]
}
```

Best practice is to always grab this server list, and then try connect in order from the top to the bottom until you get a successful connection. In some situations firewalls or non-web-socket compliant proxies may block one or more of these services and so it’s important to have this logic in your code when you deploy it.

  

Once you have connected to the WebSocket you will need to send a request to the open web socket with an access token and devices serial number to start receiving data.

You should then receive messages for devices you have subscribed to;. 

  

Below is an example in javascript...

  

```
this.ws = new WebSocket(url);

this.ws.onmessage = \_.bind(function(ev) {doSomethingWithEvent(ev)});

this.ws.send(JSON.stringify({ "access\_token": this.auth\_token, "devices": this.units }));


```

  

  

For more information on how to communicate with a WebSocket server, please observe the behaviour of [http://yacht-bot.com](http://yacht-bot.com) in a web browsers developer tools, or contact info@igtimi.com