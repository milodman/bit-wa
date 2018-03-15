const http = require('http');
const figlet=require("./figlet.js");//we are importing module here, under name 'figlet' or any other
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');//we want our content to be plain text!!!!
 res.end(figlet.logoText);// calling it's property here!
});
server.listen(port, hostname, () => {
 console.log('Server running at http://' + hostname + ':' + port + '/');
});
