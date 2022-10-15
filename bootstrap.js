const { getLogger } = require('./libs/fox-logger/logger');
const config = require("./config.json");
const child_process = require('child_process');
const major = 6
const minor = 0
const patch = 1
const commit = 0
const type = "b"
const version = `v${major}.${minor}.${patch}${type} ${commit !== 0 ? `Commit ${commit}` : ""}`
// Logger
this.logger = getLogger("VistaAPI Bootstrapper");
// Functions 
function setEnv(name,value) {
  if (process.platform == 'darwin') {
    child_process.exec(`export ${name}=${value}`);
  } else if (process.platform == 'linux') {
    child_process.exec(`setenv ${name}=${value}`);
  } else {
    this.logger.log('info','Unknown System while trying to setting Environment variable')
  }

}
this.logger.log('info',"Running " + version + " of VistaAPI " + major)
// Puppeteer Checker
if (config.PUPPETEER_PRODUCT) {
 setEnv('PUPPETEER_PRODUCT',config.PUPPETEER_PRODUCT)
}
if (config.MacSlicon) {
    setEnv('PUPPETEER_EXPERIMENTAL_CHROMIUM_MAC_ARM',config.MacSlicon)
}
this.logger.log("info","Done! Applyed Environment Variables,Reinstall Puppeteer to apply it. ")
try {
    this.logger.log("info","Starting...")
    require('./index.js');
} catch (error) {
    this.logger.log('fatal',error)
} 