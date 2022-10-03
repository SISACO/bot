
(async () => {
	switch (command) {     
    case 'yts' :{    
        if (!args) return m.reply(`Example : ${prefix + command}  WhatsApp Bot`);
        let search = await yts(args.join(" "));
        let textt = "*YouTube Search*\n\n Result From " + args.join(" ") + "\n\n───────────────────\n";
        let no = 1;
        for (let i of search.all) {
            textt += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
          i.type
        }\n🙈Views : ${i.views}\n⌛Duration : ${
          i.timestamp
        }\n🌟Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
          i.url
        }\n\n──────────────\n\n`;
        }
        sisaco.sendMessage(m.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: textt,
        }, {
            quoted: m,
        });
 }
 break
 }
})()