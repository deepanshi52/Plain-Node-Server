const http = require('http');  //Import Node.js core module
const { log } = require('util');

const PORT = 3000;

const server = http.createServer(() => {


    console.log('Request recieved');
    console.log(req);
    console.log(res);
    
    
    
  // send a hello world response
  if(req.url == '/'){
    res.write('home');
  }else if(req.url == '/ping'){
    res.write('pong');
  }else{
    res.write('hello world');
}

  res.write('Hello World!'); //write a response to the client  

  res.end(); //end the response
});

// start your server
server.listen(PORT , () => {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:", PORT);
  
});

