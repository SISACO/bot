//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = false //auto available (true to on, false to off)

//thumbnail

global.ttt = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['919995595067'] //ur owner number
global.ownername = "💜SISACO💜" //ur owner name
global.ytname = "YT: SISACO" //ur yt chanel name
global.socialm = "GitHub: SISACO" //ur github or insta name
global.location = "India, Kerala, Malappuram" //ur location

//bot bomdy 
global.owner = ['919995595067']
global.ownertag = '919995595067' //ur tag number
global.botname = 'Nerdy-Md' //ur bot name
global.linkz = "https://youtube.com/channel/UCqxQRy1f51HzIa7Ri-jmdTw" //your theme url which will be displayed on whatsapp
global.websitex = "https://github.com/SISACO" //ur website to be displayed
global.botscript = 'https://github.com/SISACO/Sisaco-MD4' //script link
global.reactmoji = "💜" //ur menu react emoji
global.themeemoji = "💜" //ur theme emoji
global.packname = "Sisaco\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n💜jasmine " //ur sticker watermark packname
global.author = "515400" //ur sticker watermark author


//damtabase


//omther
global.sessionName = 'session'
global.antitags = false
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
