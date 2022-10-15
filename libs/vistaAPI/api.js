const { getLogger } = require("../fox-logger/logger");
const puppeteer = require("puppeteer")
const cheerio = require("cheerio");
const config = require("../../config.json")
const panelURL = `https://${config.panelURL}/panel/indexpl.php`
// Variables
var chromium;
this.logger = getLogger('VistaAPI Main Module');
this.logger.log('info','Loaded VistaAPI Main Module - Writen by MeTooIDK');
//
(async () => {
  this.logger.log('info','Starting Chromium... Please Wait.')
  chromium = await puppeteer.launch({
    headless: false
   }).catch(err => {
      this.logger.log('error',err);
   }).then(e => {

   })
   this.logger.log('info','Started Chromium.')
})()
 
function waitForChromium(){
  do {
    setTimeout(function(){
      this.logger.log("info","Waiting for Chromium Start...")
      waitForChromium()
    },100)
   
  } while (!chromium);
}
 //
class callAPI {
    
    constructor(username,password){
     this.username = username;
     this.password = password;
     
    }
   
    async getAccountInfo(){
    console.log(chromium)
    waitForChromium()
      if (!chromium) {
        this.logger.log( "error","Chromium Didnt'start!");
         return false,{};
      } 

      const page = chromium.newPage();
      await page.goto(panelURL);
      const data = await page.evaluate(() => document.querySelector('*').outerHTML);
      console.log(data);
       
    }
    setDNS(){

    }
}
module.exports = callAPI;