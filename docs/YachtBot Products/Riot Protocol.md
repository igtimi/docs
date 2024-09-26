# RIoT Protocol documentation

Documentation of the RIoT protocol used by Yachtbot devices.

The protocol definitions can be found on [Github](https://github.com/igtimi/go-igtimi/tree/main/proto/com/igtimi).

If you want to develop your own server to handle yachtbot device data, you can use the [go-igtimi](https://github.com/igtimi/go-igtimi/tree/main) example server is a starting point.

## Introduction

### Connection
The device connects to the server using a TCP connection. Usually port 6000 is used.

### Protocol Buffers

The riot protocol is based on protocol buffers. Protocol Buffers were developed by Google as a “language-neutral, platform-neutral” mechanism for serializing structured data. The format is specified in .proto files, and libraries can be compiled for many common languages. For more information see the documentation at [https://protobuf.dev/](https://protobuf.dev/).

### Message Types

All messages sent over connections to RIoT (in both directions) will conform to the format defined by the Msg message defined in IgtimiStream.proto, whose definition is seen in code snipped 1. There are three message types defined inside which have different purposes.

- Channel Management is used to handle any tasks associated with managing the connection. This could include, but it not limited to Authentication, Data Subscription, etc.

- Data is used to send or receive data.

- _\[Unused\]_ Data Request is used to make an explicit request for a series of datapoints.

Any data that does not conform to the specification will not be understood and therefore will be dropped. We recommend using protocol buffers with supported libraries to ensure that the data is in the correct format.

### Message framing

As protocol buffers are not self-delimiting, we take the ["standard approach"](https://protobuf.dev/programming-guides/techniques/#streaming) of writing a [varint message length](https://protobuf.dev/programming-guides/encoding/#varints) before each message.

The official Java and C++ libraries have support for this built in, and other languages may also.

## Device data flow

The standard flow for a device connecting to a RIoT server to insert data is as follows:

- Connect
- Authenticate using Device Group Token (see Authentication)
- Send data points

Code Snippet 1 – Igtimi Stream message format ([IgtimiStream.proto](https://github.com/igtimi/go-igtimi/blob/main/proto/com/igtimi/IgtimiStream.proto))

```proto
message Msg {
  oneof msg {
    ChannelManagement channel_management = 1 [json_name = "mgmt"];
    Data data = 2 [json_name = "d"];
    AckResponse ack_response = 3 [json_name = "ackResponse"];
    APIData api_data = 4 [json_name = "apiData"];
    DeviceManagement device_management = 5 [json_name = "deviceManagement"];
  }
}
```

### Channel Management

Channel management covers all the messages required to setup and maintain the connection between the client and the RIoT node.

### Authentication

#### Tokens

Igtimi uses two distinct types of tokens for authentication.

##### User token

A user token is a standard OAuth 2.0 token used to authenticate a user. A user token allows a client to subscribe or request data from the system. A user token also allows the client to insert data for a session. A client may authenticate only ONE user token at a time, meaning that attempting to authenticate a 2nd token will clear the first, and any data subscriptions will be lost (regardless of ACK or NAK).

##### Device Group Token

A device group token authenticates a client to insert data for a device or group of devices. A client may authenticate using multiple device group tokens by simply sending another authentication request.

Code Snippet 2 – Token message format ([IgtimiAPI.proto](https://github.com/igtimi/go-igtimi/blob/main/proto/com/igtimi/IgtimiAPI.proto#L382))

```proto
message Token {
  oneof token {
    string user_token = 1 [json_name = "userToken"];
    string device_group_token = 2 [json_name = "deviceGroupToken"];
  }
}
```

#### Request

To authenticate a connection with RIoT a client should send an Authentication Request in the correct format, providing a token along with the current timestamp. The client should assume the connection is un-authenticated until a response indicating successful authentication is received.

Code Snippet 3 – Authentication request message format ([IgtimiStream.proto](https://github.com/igtimi/go-igtimi/blob/main/proto/com/igtimi/IgtimiStream.proto#L65))

```proto
message AuthRequest {
  uint64 timestamp = 1 [json_name = "t"];
  Token token = 2 [json_name = "token"];
}
```

#### Response

For every authentication request there is a response. This response will indicate whether the request has been successful, along with both a machine and human readable reason. The response code is equivalent to a HTTP response code, therefore for a full list of codes and their meaning refer to the list maintained by the Internet Assigned Numbers Authority (IANA).

Code Snippet 4 – Authentication response message format ([IgtimiStream.proto](https://github.com/igtimi/go-igtimi/blob/main/proto/com/igtimi/IgtimiStream.proto#L70))

```proto
message AuthResponse {
  uint64 timestamp = 1 [json_name = "t"];
  Token token = 2 [json_name = "token"];
  bool ack = 3 [json_name = "ack"];
  uint32 code = 4 [json_name = "code"];
  string reason = 5 [json_name = "reason"];
}
```

### Heartbeats

RIoT uses heartbeats to indicate that a connection is still active. The server sends a Channel Management heartbeat message every 15 seconds and expects to receive at least one message from the device every 30 seconds to keep the connection active. Inactive connections will be queued for disconnection.

Yachtbot devices send a heartbeat message every 15 seconds and attempt to reconnect if no heartbeat messages have been received in 30 seconds.

### Data Format

The different messages and data types are specified in [IgtimiData.proto](https://github.com/igtimi/go-igtimi/blob/main/proto/com/igtimi/IgtimiData.proto)

```proto
message DataMsg {
  // required
  repeated DataPoint data = 1 [json_name = "data"];

  // not required (may be determinable from the connection)
  oneof source {
    string serial_number = 2 [json_name = "serial"];
    uint32 session_id = 3 [json_name = "session"];
  }

  // not required (server should default to 3 when not set)
  TypeOfService type_of_service = 4 [json_name = "tos"];

  // not required (can be generated by the server)
  uint32 stream_id = 5 [json_name = "streamID"];
}
```

#### Stream IDs

Way to group data into “windows” e.g. power cycle.

#### Type of Service

Bitfield. The Protocol Buffer schema specifies all options, so no bit operations are required.

| Bit | 8                       | 7   | 6    | 5      | 4          | 3    | 2   | 1   |
| --- | ----------------------- | --- | ---- | ------ | ---------- | ---- | --- | --- |
| Use | Reserved for future use | Ack | Sync | Update | Persistent | Live |

Rules:

- Must be either Live, Persistent or Both. Cannot be neither.
- If not set (0) default of 3 (Live + Persistent) will be applied.

#### Source IDs (input / output)

- Allows data to be input from multiple sources (sensors) for the same device (e.g. dual GPS).

- For session data the source ID will equal the user id of the user that input the data (determined by the User Token used to authenticate). This will be enforced by RIoT so does not need to be set by the client and will be overwritten if it is set incorrectly.

### Data Types

All data types have a timestamp (ms epoch) and one or more values. On input if the timestamp is not set (i.e. is 0), it will be set at the timestamp the server receives the message. Output data will have a timestamp for every message.

#### GNSS Position (pos)

| Property  | TYpe   | Description                      |
| --------- | ------ | -------------------------------- |
| timestamp | uint64 | Timestamp of the data (ms epoch) |
| latitude  | double | WGS 84 latitude                  |
| longitude | double | WGS 84 longitude                 |
| altitude  | double | WGS 84 altitude (ellipsoid)      |
| fields    | uint32 | Bit map of the valid fields.     |

**Fields Map:**

Describes which values in the GNSS Position message are valid as a bitfield. The bits are:

| 7   | 6   | 5   | 4   | 3        | 2        | 1         | 0        |
| --- | --- | --- | --- | -------- | -------- | --------- | -------- |
|     |     |     |     | Reserved | Altitude | Longitude | Latitude |

Note: Whilst the bitfield allows any combination of latitude, longitude and altitude all message must have both a valid latitude and valid longitude. Only altitude is optional. i.e. Valid options are 3 and 7.

#### Other

For more datatypes see [IgtimiData.proto](https://github.com/igtimi/go-igtimi/blob/main/proto/com/igtimi/IgtimiData.proto)
