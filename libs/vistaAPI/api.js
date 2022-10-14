const { getLogger } = require("../libs/fox-logger/logger");
const cheerio = require("cheerio");
import * as puppeteer from 'puppeteer-core';

const config = require(".../config.json");
const panelURL = `https://${config.panelURL}/panel/indexpl.php`;
this.logger = getLogger('VistaAPI Main Module');

this.logger('info','Loaded VistaAPI Main Module - Writen by MeTooIDK');
this.logger('info','Starting Chromium...');


class callAPI {
    
    constructor(username,password){
     this.username = username;
     this.password = password;

    (async () => {
      if (this.chromium_enabled){
        return;
       } else if(this.chromium_enabled == false){
         this.chromium_enabled = true;
         this.chromium = await puppeteer.launch();
         
       }
    });
     
    }
    async getAccountInfo(){
      if (this.chromium_enabled == false) {
        this.logger("error","Chromium Didnt'start!");
        return false,{};
      } 

      const page = this.chromium.newPage();
      await page.goto(panelURL);
      const data = await page.evaluate(() => document.querySelector('*').outerHTML);
      console.log(data)
    
    }
    setDNS(){

    }
}
module.exports = callAPI;