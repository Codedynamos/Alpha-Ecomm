/**
 * Primary entry file for app
 */
// Dependencies 
let server = require('./server');
let workers = require('./workers')



let app = {};
app.init = function(callback){
  // Start the server
    server.init();

  // Start background workers
  workers.init();
}

module.exports = app;