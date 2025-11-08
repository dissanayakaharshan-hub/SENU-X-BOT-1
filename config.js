const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "H4sIAAAAAAAAA5VUyZKjOBT8F13taPbFRFTEYLxAecU2xniiDzISWGUQNBK4cIf/vQNXV1cfZnpqbtoiX77MfPoOaEEYnuEWWN9BWZEGctwteVtiYIFhnSS4An2AIIfAAsXcWMlixXtbWbGV615A0Wy1l9JI9llpojySbrR+PV4N8foE7n1Q1qeMxH8AvJiS2cCT7E6PAyEarFaLMJw2B28o7Z9HqT1XoLNuJ2ddHaZP4N4hQlIRmo7LM85xBbMZbteQVJ+jP52vqIoGc9HQaXGYlbGZuZNWH18rdRZrWrFyWqWm680pVz9Hvyesh9fRJNMPW+pBEW8VwVRhiJGT+NFpPPD1Yx1Jm0jJxTf6jKQUIw9hyglvP627Py0uRnw+9gRxYaDrZWVf7EGobMzEdng09sLra3tyXD+Z+J8jvtkJ9UlGL1jWd+1qGyXHZnVzURv0zvKFHLzF6bY/NsfKH11/J76u3rNy+T+6kyGebrItDoJ8bNcCGSfcnp+254OhJ9pxQY/bInL2Snw8RJ+jHweZsx1fhuiVNHyyDhhaYqHeLdOgkYJewNlljXrCbqmMvA/6kNfVH0Vu+DrMsBOeMloUM5N5rX62/fj47J7cZkaHac60+fFFoBpsci1RwyLS0EnpjRNhXxvGFg/tmoaZ/G2/nEz3S2GwOKTp06OjC249BCzp3gcVTgnjFeSkoN2ZLGl9AFGzxXGF+UNegNNAuL2U+uTmZU09McxqFPLrxmQTsrteAjlaCv6uDSZtUTyBPiirIsaMYeQSxouqXWDGYIoZsP7+2gcUv/I347pyitQHCakYD2hdZgVE766+X8I4LmrKty2NnW6BK2CJH8eYc0JT1ulYU1jFZ9Jg5ww5A1YCM4Z/dYgrjIDFqxr/mlqnQJ3wM9de7saOC/ogfxhCELDAQDV0XVUVTRetgfEX+3LtUGFZfqGYgz7IHq9kTR1opqybom6Yqtm97C7uvwh2eAhzSDIGLOAsqdHOFqPxsuc0cTqd2mJqO6kNPhp6T8ab8oeEvawNU+8p5xalo/3gpKkXI8y5H7qM7IXsCEtvNxtFofj0DyDAAuhWH1C2FvyeipmWbhgyJGc08SOJqux5htylFriq4YSEmHoZ35I5unoHb9b4GaPn4WwWrXK3rQx7ulNMz5FiFKPh9amrhnBDYvx7sYPhnwbui32wlYWeqQ6fsDITbzu6GnBf1CIhue3P0ciZOrjIm4CKZXa8IGc53ddoKBv5pdDOq12yyV7w886pbkhxBuT6ltnHzGQ//yrySFNnVbdNCH6MPoWdgf9p3RvvLmDivf8bxM+/5F/mcbhXDO/WE1YNV2Ma2VIS9vDzSiqrYHI2vCzRwvDbdtym8oSD+/1rH5QZ5ElR5cACkKKqIAj0QVXUXWI9mhR/KObYgWen6bJrPIOM2x9TsCM5ZhzmJbAkQ5d10VC1wdurdVWULmTnLph7w/gWgPsPa26QgVMHAAA=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SENU-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ke8nul.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SENU-X-BOT",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SENU MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94788770020",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Jᴇꜱᴛᴇʀ TᴇᴄʜX",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴇꜱᴛᴇʀ TᴇᴄʜX*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ke8nul.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive now *SENU-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "true",
// true if want mark commands as read 
DEV: process.env.DEV || "94788770020",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
