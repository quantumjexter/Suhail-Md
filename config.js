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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_54_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU0LFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYwLFxuICAgICAgICA4MixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDQwLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICA2NixcbiAgICAgICAgNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc3LFxuICAgICAgICA3MixcbiAgICAgICAgMTc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcxLFxuICAgICAgICA5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NCxcbiAgICAgICAgODksXG4gICAgICAgIDEyLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDYwLFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM2w3ajBHQU5IQ1o3dTRSVXNMRVhCUEFtZVN6Ym9GTVZTbXBoK3ZaV1VETT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ2xYRVVqOTJROEtyWklaTlRZZUpEUVwiLFxuICBcInBob25lSWRcIjogXCJlMjQ2NGYxNi04ZTBiLTQwOWYtOWYxMy1kMzQ3MzYwOTkwNDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgNDMsXG4gICAgICAxNDcsXG4gICAgICAyMTEsXG4gICAgICAyNTQsXG4gICAgICA0OSxcbiAgICAgIDE4NCxcbiAgICAgIDg2LFxuICAgICAgMTIwLFxuICAgICAgMTQ2LFxuICAgICAgODQsXG4gICAgICA1NyxcbiAgICAgIDIzMCxcbiAgICAgIDIxMSxcbiAgICAgIDExOCxcbiAgICAgIDE0NyxcbiAgICAgIDcwLFxuICAgICAgNDAsXG4gICAgICAxOTksXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICA2NyxcbiAgICAgIDkxLFxuICAgICAgMTY0LFxuICAgICAgMTE3LFxuICAgICAgMjIsXG4gICAgICAxNDYsXG4gICAgICAzNSxcbiAgICAgIDIwNCxcbiAgICAgIDE1OCxcbiAgICAgIDExNCxcbiAgICAgIDE1MSxcbiAgICAgIDEwMixcbiAgICAgIDE4NCxcbiAgICAgIDE0NSxcbiAgICAgIDE3OCxcbiAgICAgIDkxLFxuICAgICAgMTU3LFxuICAgICAgMTc2LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODZYVlBYMUtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg2MDM5MDMzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLgvIYgX18gSCAhIMqAIOG0nCDhtJwg4bScIFxcXCIgPDNcIixcbiAgICBcImxpZFwiOiBcIjgyOTE4NzM5Mjg4MzEyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGludXNzRUVKaTRvclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2YTZnRldMcjVwV2ZkUUxRcHAxS1NwTkVLNzBkQXMrQ2VzWG9MZzRlcVVnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImYveVhwbDF5QXE2cGxSNzVKa2FIZWh6aktQdzJKQmhpYXJ3U3FVM0w2UUZDbmVJQnA2am1FdUM4ZEg3ajVORnIvR1oybFZmNG10dGw4N21leXpGMEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9xRFgyK25sY2hkSTAza0s1WlIxaFdrS25MR1VNcDdVSFlKa2htdi9IUElXWk0zOXV1MS9qSDVYNjYyZUFPQnJmSk51VWNGZ0h1b3NjNWJ0cnpIN0FnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg2MDM5MDMzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzMjYwNDNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
