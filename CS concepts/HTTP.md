# HTTP
- A protocol for fetching resources the web.
- Follows client-server model:
    - client sends a request and server sends a response
    - **stateless**, all client requests are independent
- Request Methods:
    - `GET`
GET: Retrieve data from the server.
POST: Send data to the server, typically used for form submissions.
PUT: Update or create a resource.
DELETE: Remove a resource.
HEAD, OPTIONS, PATCH: Oth
- used over TCP, if we want to do HTTP requests for data then we need to first identify a server which is done using TCP after the 3 way handshake
- HTTP 1.0 - Non Persistent
    - Once it receives the requested data it severs the connection with the server
- HTTP 1.1 - Perisistent
    - It keeps the connection till a timeout runs out
    - used more nowadays
