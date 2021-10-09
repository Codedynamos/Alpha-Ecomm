/** 
 * Primary Server File
**/

//Dependencies
const express = require('express')
const app = express()
const PORT = PROCESS.ENV.PORT || 3000
// DB connection strings
const DB = require('./vars/dbHold').mongoURI;

server.init = function(){
    app.listen(PORT, () => {
        console.log(` The server is now running on PORT: ${PORT}` )
    });
}

// EXPRESS SESSION
app.use(
    session({
        secret: 'dancedanceinthepoolwitham#$erma@@id!',
        saveUninitialsed: true
    })
)

// USE CALL FOR ROUTES
app.use('/', require('./routes/index'));