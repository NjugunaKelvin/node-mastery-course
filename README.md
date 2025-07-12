# Servers and Basic Routing in Node.js
No express framewwork for this, just raw Node.

## Creating a server
Recall the steps to creating a server;
1. Import the http module.
2. http.createServer()
3. The method takes a callback function with arguments (req,res)
   - Try to maintain the order of arguments; ie (req,res) and not (res,req)
4. Might need to set the response headers using the method res.setHeader().
   - The method to setHeader()
