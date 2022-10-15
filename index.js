const { getLogger } = require("./libs/fox-logger/logger");
const express = require("express");
const vistaAPI = require("./libs/vistaAPI/api");
const app = express();
const config = require("./config.json");

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

this.logger = getLogger("VistaAPI");
this.logger.log('info', "VistaAPI - Simple,Easy To use vPanel API");
this.logger.log('info', "Writen by MeTooIDK - Inspired by TinkerHost");
this.logger.log('http',"Starting Express Server...");
app.post('/getinfo',function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Accept', 'application/json');
  var body = req.body;
  if (!body.username || !body.password) {

     res.json({
        message: 'Make sure you entered Username,Password'
     });
     
  }
  const Info = new vistaAPI("John","youshallnopass")
  const GetAccountInfo = Info.getAccountInfo()
  console.log(GetAccountInfo)
});
app.listen(config.port);
this.logger.log('http',"Express Listen on " + config.port);