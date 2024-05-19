# Node basics

Official documentation: [NodeJs](https://nodejs.org/en)

## Module introduction
- how web works?
- Creating a node servers
- Processing the request and running js on request and returning responses.
- Working with request and responses.
- The event loop and async code.

## How the web works

- User/client(Browser) 
=> URL
=> Domain lookup
=> (IP) 
=> with request 
=> Server handle this request.
=> Returning a response 
- Header having the metadata in the response.
- HTTP / HTTPS | Rules used to web communication.
  - HTTP : Rule to do the web transaction
  - HTTPS : Everything that HTTP do with SSL encryption

## Creating a node server
- Basic core modules provided by the node module
  - http: Launching a server and send requests.
  - https: Launch a SSL server.
  - fs: File systems
  - path: Path
  - os: Operating systems
- Using http core module to create a webserver and starting a webserver by calling listen function
- Starting a server
```bash
node app.js
```


## Node lifecycle & even loop
- Running node program
```bash
node app.js
```
- Start script
- Parse code and register variable and function
- Eventloop concept
- It keeps on running if event listener is registered. It never goes down.
- Single thread JS.


## Controlling the node process
- Closing a server running using `ctrl + c`.

## Understanding requests
- Header:
  - Accept information
- Request url: Everything after `localhost:3000`.
- Http Methods: GET, POST etc

## Understanding responses
- We can add responses header and write the response.
- [MDN doc for http url header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

## Routing request
- Using the request.url and adding the routing using if or switch create a router.