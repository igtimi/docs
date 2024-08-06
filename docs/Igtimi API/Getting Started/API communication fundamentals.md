---
title: API communication fundamentals
date: 2022-02-11
---

# API communication fundamentals

## Introduction

API is RESTful, and uses HTTP verbs according to standard REST principles. Parameters are encoded according to the application/x-www-form-urlencoded format standard.

For GET methods, the parameter string is encoded in the URI. Where a long ?query string is required, it is acceptable to do a POST with \_method=GET parameter in the request header.  This is recommended for all GET calls with filter parameters as the Igtimi API typically handles large filter lists for serials, resource_ID's, and session_ID's.

For POST methods, parameters are always encoded in the request body.

Any parameters described in the API documentation as "array of .." then an array of parameters should be encoded according to application/x-www-form-urlencoded  specifications. e.g;

`?array\[\]=value1&array\[\]=value2`

Examples

These examples are real examples with;

- Private information italicised
- Commands sent in bold

## Get the latest GPS position (type 1) for two devices

`curl -k -H "Authorization: Bearer <secret> "`

`"https://www.igtimi.com/api/v1/resources/data/latest?serial\_numbers%5B%5D=GA-DKAAAD& serial\_numbers%5b%5d=GA-DE-AAAG&type=1"`

```
{"latest\_data":\[{"latest\_datum":{"serial\_number":"GA-DEAAAG"," resource\_id":13388,"c1":170.5040755,"c2":-45.8767381666667,"timestamp":1340859275430.0}},
{"latest\_datum":{"serial\_number":"GA-DK-AAAD","resource\_id":1012412,"c1":170.5038325,"c2":-45.8769,"timestamp":1384941923580.0}}\]}
```

## Get the users account information

`curl -k -H "Authorization: Bearer <secret> " https://www.igtimi.com/api/v1/account`

`{"user":{"id":2,"first\_name":"Igtimi","surname":"Limited","email":"<hidden>"}}`

## Get a sequence of GPS position and satellite quality, with no compression

`curl -k -H "Authorization: Bearer <secret> "`

```
"https://www.igtimi.com/api/v1/resources/data?serial\_numbers%5B%5D=GA-DKAAAD&
start\_time=1384941150580&end\_time=1384941160580&types%5b1%5d=0&types%5b2%5d=0"
```

`{"GA-DKAAAD":{" 1":{"t":\[1384941152580,1384941155580,1384941158580\],"1":\[170.5036805,170.503681166667,170.503682166667\],"2":\[-45.8769221666667,-45.8769231666667,-45.8769245\]},"2":{"t":\[1384941152580,1384941155580,1384941158580\],"1":\[1,1,1\]}}}`

# Data types

Each datum point is recorded as a specific type and includes a timestamp and DSI (Data Source Identifier). Timestamps are returned in JS format, and DSI's are typically zero, but may be nonzero

to indicate the source of the datum. For example this is used with heart rate measurements to identify the serial number of the transmitting strap, or can be used to separate data streams

where redundant GPS is used. In the case where a datum represents a period of time (e.g for audio or video), then a start and end timestamp is provided.

## Encoding

Data is returned in packed JSON which has been optimised for size and delivery as single points or arrays. The follow excerpt is formatted for clarity, and shows how data for a device is

transmitted, including examples for multiple data types, single points, arrays, and multiple sources.

```
 {
      "EA-AK-AAAG": {
         "1": {
            "1": \[
               -160.123,
               -160.1233
            \],
         "2": \[
               40.43,
               40.44
         \],
         "t": \[
               12345677000,
               12345677500
         \]
         },
         "3": {
         "1": \[
               21
            \],
            "t": \[
               12345677500
            \]
         }
      },
      "EA-AK-AAAH": {
         "1": {
            "1": \[
               -160.12
            \],
         "2": \[
               40.434
            \],
         "t": \[
            12345677000
         \]
      },
      "13:100": {
         "1": \[
            60
         \],
         "t": \[
            12345678000
         \]
      },
      "13:201": {
         "1": \[
            119,
            120
         \],
         "t": \[
            12345677000,
            12345677500
         \]
      }
   }
} 
```

## Parameters

Data requests accept a single parameter which is intended for compression. Currently, only type 1 (GPS position) supports compression and this number represents a maximum error in degrees of latitude and longitude. All other data requests should provide zero for the compression parameter.

## Supported Types

The list of supported data types is maintained in the [developer documentation](https://www.igtimi.com/developers#data-type-list) (developer login required)

It can also be retrieved using the following URL.

`https://www.igtimi.com/api/v1/data\_types`

Live data feed

To receive a live data feed, HTML5 standard WebSockets are used. To get started, first get the list of available servers;

`curl -k -H "Accept:application/json" https://www.igtimi.com/server\_listers/web\_sockets`

`{"web\_socket\_servers":\["wss://www.igtimi.com/live\_api","ws://live.igtimi.com:9081"\]}`

Now open a WebSockets connection to one of the available servers.

`java -jar tyrus-client-cli-1.3.jar wss://live.igtimi.com/live\_api`

```
\# Connecting to wss://live.igtimi.com/live...
# Connected in session 9ba53f8d-e820-415d-9d72-60cf0260b6ab
# text-message: 1
# text-message: 1
# text-message: 1
# text-message: 1
```

Send a configuration block;

`session 9ba5...b6ab> send {"access\_token":"<token>","devices":\["GA-DK-AAAD"\]}`

Receive a timestamp;

`\# text-message: 1384906719000`

And any live data that is available for the specified devices will be streamed;

```
\# text-message: \[{"GA-DKAAAD":{" 1":{"t":\[1384906719040\],"1":\[170.503938\],"2":\[-45.8770313333333\]},"2":{"t"\[1384906719040\],"1":\[1\]},"3":{"t":\[1384906719040\],"1":\[0\]}}},{"GA-DK-AAAD":{"9":{"t":\[1384906719040\],"1":\[0\]}}}\]
# text-message: \[{"GA-DKAAAD":{"1":{"t":\[1384906722040\],"1":\[170.503938\],"2":\[-45.877031\]},"2":{"t":\[1384906722040\],"1":\[1\]},"3":{"t":\[1384906722040\],"1":\[0\]}}}\]
# text-message: \[{"GA-DK-AAAD":{"9":{"t":\[1384906722040\],"1":\[0\]}}}\]
# text-message: \[{"GA-DKAAAD":{"1":{"t":\[1384906725040\],"1":\[170.503938\],"2":\[-45.877031\]},"2":{"t":\[1384906725040\],"1":\[1\]},"3":{"t":\[1384906725040\],AAAD":{"1":{"t":\[1384906725040\],"1":\[170.503938\],"2":\[-45.877031\]},"2":{"t":\[1384906725040\],"1":\[1\]},"3":{"t":\[1384906725040\],
"1":\[0\]}}},{"GA-DK-AAAD":{"9":{"t":\[1384906725040\],"1":\[0\]}}}\]
.
.
.
```

When done, quit;

`session 9ba5...b6ab> quit`

## WebSockets messages

The WebSocket server sends three kinds of messages, and receives two kinds of messages;

### Configuration Block (receive)

The configuration block identifies the user, by their OAuth access token, and the serial numbers for which the client wants to receive the live stream. It should be sent to the WebSocket server

only once, and immediately on establishing a connection e.g;

```
   {
      "auth\_token":"1234567890",
      "units":\[
         "AA-AA-AAAA",
         "AA-AA-AAAB",
         …
      \]
   }
```

### Heartbeats (send/receive)

These consist of the single character "1" and are sent every 15 seconds from initiation of the WebSocket connection. The client should continuously monitor for heartbeats or data (see below)

and reconnect if neither are received after an interval of 45 seconds.

The WebSocket server also expects to receive heartbeats from the client, and will drop the connection if no heartbeats are received for greater than 5 minutes.

### Timestamp (send)

On receiving the configuration block (see below), the WebSocket server will send a single integer which indicates the WebSocket server time as a JS timestamp. The WebSocket servers are

synchronised to UTC and this timestamp can be used to seed the live playback time in the client to this value at the moment it is received.

### Data (send)

Is presented in JSON blocks. The format is identical to data returned by the Igtimi ::data API.

### Tyrus

To debug your WebSocket connections it is convenient to use a command line tool. cURL does not support WebSockets, but you can use Tyrus instead. To get started, download the Tyrus

client CLI from the maven repository here; [http://search.maven.org/](http://search.maven.org/)

Ensure that you are running Java version 7 (download), and verify correct operation;

```
java -jar tyrus-client-cli-1.3.jar ws://echo.websocket.org
# Connecting to ws://echo.websocket.org...
# Connected in session c174fe20-4e36-41fb-9845-e5e61fad03d1
session c174...03d1> ping
# pong-message
session c174...03d1> quit
```
