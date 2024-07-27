const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="chinedudivine78@gmail.com"
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


global.devs = "2349039031392" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349039031392";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348103960590";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_27_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDkyLFxuICAgICAgICA0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY5LFxuICAgICAgICA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDksXG4gICAgICAgIDg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NCxcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRid0lnUnVtRjRaUGJXU04ycE5KUCsxQWtiQWhGYTF3R1ROOUptdS9SNDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1xcWVnMDVKUUctbXNrTDhMcVhjelFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGYyOGZmOTUtMWMyYS00MDg2LWE2MmQtNGY5ZGVhNjlkYjc0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgMTIyLFxuICAgICAgMjQyLFxuICAgICAgMTQ3LFxuICAgICAgNDUsXG4gICAgICA0OSxcbiAgICAgIDcsXG4gICAgICAxMDgsXG4gICAgICAzNixcbiAgICAgIDExMixcbiAgICAgIDY2LFxuICAgICAgMjMzLFxuICAgICAgNTAsXG4gICAgICAxMjksXG4gICAgICA1OSxcbiAgICAgIDE0OSxcbiAgICAgIDQ1LFxuICAgICAgMjIwLFxuICAgICAgNDAsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAxNzEsXG4gICAgICA1NixcbiAgICAgIDE5NyxcbiAgICAgIDU3LFxuICAgICAgMjUxLFxuICAgICAgMTkzLFxuICAgICAgNjgsXG4gICAgICA2OCxcbiAgICAgIDYzLFxuICAgICAgMTYwLFxuICAgICAgMjExLFxuICAgICAgMjE1LFxuICAgICAgMzEsXG4gICAgICAxMTAsXG4gICAgICAyMixcbiAgICAgIDI1NCxcbiAgICAgIDIyLFxuICAgICAgMTk4LFxuICAgICAgOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTU2NEw2V0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDM5NjA1OTA6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc1MTE5MjEyOTAwMzc3OjQ2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2ajVlVUNFTldpaTdVR0dCSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidTV6OUlyNnJCWGNROFArajYxMWh1Y3UwQkUwREZ1SEtzU0Y2KytrbnRHQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjbnVDTnhrTHlIa2F2NXZmUkRSR1owU2F6NU5SaGVaOTBhbEw2OEszd25QNksvL01IaDBQbGNQcW54YnpJd2lNbkIrUkhSZEVaN1ZZUHcvdUtVT21pZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvRllwSTZSRUhoT2FZU0FGWXhKU01JV2JxbElUbjlraC9zeEtPTXpVS2hvS2txdDVCaWFSbVBUN3Z1d3B1ZDdKNERRMzRxZ2pHdTFUVGpCVDZybGJDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAzOTYwNTkwOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NDY0NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNVHVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1UdS5qc29uIjogIntcImtleURhdGFcIjpcImtVeVJzT2UzOFlZeXNIRVR0Z1RFTUpZMWdLdnIrTVMzRjR4OE9VQmVlUVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzUwMzUwNzQ3LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzNDU5MTc1NDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Toxic2wild",


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
