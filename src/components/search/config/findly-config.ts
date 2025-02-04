let findlyConfig:any = {};
interface JWT_OBJ {
  koreAPIUrl: string;
}

declare global {
  interface Window {
      JWT_OBJ: JWT_OBJ;
  }
}
let botOptionsFindly: any = {};
botOptionsFindly.logLevel = "debug";
var serverUrl = window.location.href;
var paramUrl="jp-searchassist.kore.ai";
var httpStart = 'https://';
var wssUrl = "wss";
if(serverUrl && (serverUrl.includes("https://") || serverUrl.includes("http://"))){
paramUrl=serverUrl.split('/')[2];
if(serverUrl.includes("https://")){
httpStart = "https://";
wssUrl = "wss";
}else{
httpStart = "http://";
wssUrl = "ws";
}
}  
if(window?.JWT_OBJ && window?.JWT_OBJ?.koreAPIUrl){
  paramUrl=window.JWT_OBJ.koreAPIUrl.split("/")[2].split(':')[0];
    if(window.JWT_OBJ.koreAPIUrl.includes("https://")){
      httpStart = "https://";
      wssUrl = "wss";
    }else{
      httpStart = "http://";
      wssUrl = "ws";
    }
}
botOptionsFindly.logLevel = 'debug';
botOptionsFindly.koreAPIUrl = "https://"+paramUrl+"/searchassistapi/";
botOptionsFindly.baseAPIServer = "https://"+paramUrl;
function koreGenerateUUID() {
  console.info("generating UUID");
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (d + generateRandomNum() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}
function generateRandomNum() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  var seconds = dateObj.getSeconds();
  var minutes = dateObj.getMinutes();
  var hour = dateObj.getHours();
  var generatedNum = year * month * day * (hour + minutes * seconds);
  return generatedNum;
}
botOptionsFindly.JWTUrl =
  "https://mk2r2rmj21.execute-api.us-east-1.amazonaws.com/dev/users/sts";
botOptionsFindly.userIdentity = 'nishimura.naomi.qq8@p.jp.nssol.nipponsteel.com' // Provide users email id here
botOptionsFindly.botInfo = {
  chatBot: "undefined",
  taskBotId: "st-72837f67-a9cf-5359-b3aa-ffb482ac24a7",
};
botOptionsFindly.clientId = "cs-aa1fa4f8-2dcb-50d2-859e-5bc656dade6a";
botOptionsFindly.clientSecret = "nHl2/TdV+88H9kXqr3aPCH9w7xcq/MwkfBheMBnMCIM=";
botOptionsFindly.searchIndexID = "sidx-a6182bdb-ba1e-5284-9f9c-cb2cc1e93e16";


// To modify the web socket url use the following option
// For Socket Connection
botOptionsFindly.reWriteSocketURL = {
  protocol:  wssUrl,
  hostname:paramUrl
};

let favicon: any = document.getElementById("favicon");
 
botOptionsFindly.interface = "top-down";
findlyConfig = {
  botOptions: botOptionsFindly,
  viaSocket: true,
  pickersConfig: {
    showDatePickerIcon: false, //set true to show datePicker icon
    showDateRangePickerIcon: false, //set true to show dateRangePicker icon
    showClockPickerIcon: false, //set true to show clockPicker icon
    showTaskMenuPickerIcon: true, //set true to show TaskMenu Template icon
    showradioOptionMenuPickerIcon: false, //set true to show Radio Option Template icon
  },
  API_KEY_CONFIG:{'KEY':"31733c030fc44fa0a9c3e9a84a7030324cc29b594673431091e41aacf0cf4e5est72"}
};

export default findlyConfig;
