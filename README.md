# Cients and Servers.
### Creating a server
1. Require the http module.
   ```
   const http = require('http');
   ```
2. Create the server.
   - The http.createServer method takes a number of arguments;
     - Req ===> Request
     - Res ===> Response
   ```
   check the server.js file, line 2 and 3
   ```
4. Run the server and listen to the port number
   - The server.listen method takes a number of arguments:
     - The Port number
     - The host name ===> this is not mandatory to include.
     - The Callback function. ====> What happens when the server is running
       
