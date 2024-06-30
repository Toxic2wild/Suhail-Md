const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_25_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDksXG4gICAgICAgIDk5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMixcbiAgICAgICAgMjksXG4gICAgICAgIDQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg5LFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYzLFxuICAgICAgICA4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDMxLFxuICAgICAgICA0NixcbiAgICAgICAgMyxcbiAgICAgICAgMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIit5UXNEcG5HbDlaOUovQlluazcvMnI4dVVOSndhdUpjU0dRbnNtaXNVT2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdzR21EOU5nUktXN3l0WXhxZVRBQlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODg1NTZkZTEtMTg4Zi00NWQ5LWJjN2YtNThkMjMwNTVkYmE5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDE2NyxcbiAgICAgIDIzMCxcbiAgICAgIDk1LFxuICAgICAgNTIsXG4gICAgICAxMjYsXG4gICAgICAxLFxuICAgICAgMjI5LFxuICAgICAgMjEsXG4gICAgICA5NyxcbiAgICAgIDE3MCxcbiAgICAgIDU3LFxuICAgICAgMTYwLFxuICAgICAgMjM3LFxuICAgICAgNzksXG4gICAgICAxNzcsXG4gICAgICAxOTksXG4gICAgICAyMzksXG4gICAgICAxOTcsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgMjIsXG4gICAgICAxOTgsXG4gICAgICAyNDgsXG4gICAgICAxMzQsXG4gICAgICAzMSxcbiAgICAgIDIxMyxcbiAgICAgIDE2LFxuICAgICAgMTI5LFxuICAgICAgMTkyLFxuICAgICAgMjIyLFxuICAgICAgMTksXG4gICAgICAxNDUsXG4gICAgICAxMTQsXG4gICAgICAxMzYsXG4gICAgICAxOTgsXG4gICAgICAyNTIsXG4gICAgICAxODgsXG4gICAgICAyMTQsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzU0VzRXVktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDM5NjA1OTA6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc1MTE5MjEyOTAwMzc3OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2ajVlVUNFTVh4aGJRR0dBMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidTV6OUlyNnJCWGNROFArajYxMWh1Y3UwQkUwREZ1SEtzU0Y2KytrbnRHQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0cllTaWwyeDRVM0tmUVJ5bktsY1VNOW1lWTNHSHlnTk9QbmhzSVUrSDducmM3bjNuRnZWRDZ1UmUrTXdxZnpQdHA3ZU40eDhaQzhRK1pBb2lQajVqQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYcWZ3WnlWYU1kY05EUEhHKzcxeGN4VXZ4Q2d4VVNnek9rZjdod0xvTHpwVU1MdnlrclhISUpWbnBFbTJCTHdDRHc0NXFCUllaVnBzWmh3LzZvOE1qZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAzOTYwNTkwOjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NjEwOTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNVGNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1UYy5qc29uIjogIntcImtleURhdGFcIjpcIjM3YjZGQlAwSXRLcXZUYjlXTE5leVhpeWNKcDZaSHZEZWFqTTZaM05mMjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzUwMzUwNzQ3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMywwLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzE3NTk3ODc4MTA2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
