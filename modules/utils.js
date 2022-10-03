(async () => {
	switch (command) {
		        //╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
				case "tinyurl":
					if (q === "help") {
					  await m.reply(`*❗Command:*  TinyUrl \n*🍀Aliases* -tinyurl\n*🧩Category:* Utils\n*🛠️Usage:* ${
						prefix + command
					  } link\n\n*📚Description:* Make a long url tiny.`);
					  return;
					}
					if(!q) return m.reply('Provide me a link') && sisaco.sendMessage(m.chat, {
					  react: {
						text: '❌',
						key: m.key
					  }})
					try {
					  link = args[0];
					  anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
					  reply(`*🛡️Your Shortened URL*\n\n${anu.data}`);
					}
					catch (e) {
					  emror = String(e);
					  reply(`${e}`);
					}
					break;
					
		case "url": {
			if (q === "help") {
				await m.reply(`*❗Command:*   URL\n*🍀Aliases* -url reply to image\n*🧩Category:* Utils\n*🛠️Usage:* ${prefix + command} reply to Image\n\n*📚Description:* Uploads replied image on Telegraph and Gives url into chat.`);
				return;
			}
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh,
			} = require("./lib/scraperr");
			if (!quoted) return m.reply(`Pls mention me any image/video and type ${prefix + command} to upload my lobe`);
			let media = await sisaco.downloadAndSaveMediaMessage(quoted);
			if (/image/.test(mime)) {
				let anu = await TelegraPh(media);
				m.reply(util.format(anu));
			}
			else if (!/image/.test(mime)) {
				let anu = await TelegraPh(media);
				m.reply(`Here is url of your uploaded Media on Telegraph.\n\n` + util.format(anu));
			}
			await fs.unlinkSync(media);
		}
		break;
		case 'horo': {
			const URL = `https://aztro.sameerkumar.website/?sign=${q}&day=today`;
			fetch(URL, {
					method: 'POST'
				})
				.then(response => response.json())
				.then(json => {
					const date = json.current_date;
					console.log(date);
					let textw = "";
					textw += `*🌟 Horoscope of  ${q}*\n\n`;
					textw += `*Current Date:* ${json.current_date}.\n`;
					textw += `*Sign:* ${q}.\n`;
					textw += `*Lucky Time:* ${json.lucky_time}.\n`;
					textw += `*Compatibility:* ${json.compatibility}.\n`;
					textw += `*Lucky Number:* ${json.lucky_number}.\n`;
					textw += `*Lucky Color:* ${json.color}.\n`;
					textw += `*Today Mood:* ${json.mood}.\n`;
					textw += `*Overall:* ${json.description}.\n`;
					m.reply(textw)
				});
		}
		break
	}
})()
