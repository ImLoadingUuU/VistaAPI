const { getLogger } = require("../libs/fox-logger/logger");
const cheerio = require("cheerio");
import fetch from 'node-fetch';
const config = require(".../config.json")
const panelURL = `https://${config.panelURL}/panel/indexpl.php`
this.logger = getLogger('VistaAPI Main Module');

this.logger('info','Loaded VistaAPI Main Module - Writen by MeTooIDK')
class callAPI {
    
    constructor(username,password){
     this.username = username;
     this.password = password;
     
    }
    async getAccountInfo(){
 
      const response = await fetch(panelURL);
      const text = await response.text();
      const $ = cheerio.load(text);
      const statsTable = $('#stats tr');
      for (let i = 1; i < statsTable.length; i++) {
          const items = statsTable.eq(i).find("td");
          const plan = items(1)(2);
          const ftp = items(2)(2);
          const subdomain = items(3)(2);
          const addondomain = items(4)(2);
          const parkeddomain = items(5)(2);
          const mysql = items(6)(2);
          const diskSpaceUsed = items(7)(2);
          const diskSpace = items(8)(2);
          const diskFree = items(9)(2);
          const innodes = items(10)(2);
          const bandwidth = items(11)(2);
          const bandwidthUsed = items(12)(2);
          const bandwidthLeft = items(13)(2);
          const hits = items(14)(2);
          return {
            Plan: plan,
            Ftp_Accounts: ftp,
            Sub_Domains: subdomain,
            Addon_Domains: addondomain,
            Parked_Domain: parked_domain,
            Mysql_Accounts: mysql,
            Disk_SpaceUsed: diskSpaceUsed,
            Disk_Space: diskSpace,
            Disk_Space_Left: diskSpaceLeft,
            Bandwidth: bandwidth,
            Bandwidth_Used: bandwidthUsed,
            Daily_Hits: hits
          };a
      }
    
    };
    setDNS(){

    }
}
module.exports = callAPI;