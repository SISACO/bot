
(async () => {
	switch (command) {
		case "ytvd": {
			if (q === "help") {
				await m.reply(`*❗Command:*   YouTube Video\n*🍀Aliases* ${command}\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } link\n\n*📚Description:* Downloads video from given YouTube link and sends in current chat.`);
				return;
			}
			sisaco.sendMessage(from, {
				video: {
					url: args[0],
				},
				mimetype: "video/mp4",
				caption: "Here it is. Enjoy💕",
				
			}, {
				quoted: m,
			});
		}
		break;
		case 'yta': {
			if (q === 'help') {
				return m.reply(`*❗Command:* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${prefix + command} back in black\n\n*📚Description:* Sends song in Whatsapp `)
			}
			if (!args.join(" ")) return m.reply(`Example : ${prefix + command} Back in black`)
			let yts = require("yt-search")
			let search = await yts(args.join(" "))
			listSerch = []
			teskd = `\n📂Result From *${args.join(" ")}*.\n\n*Select any Song🎵*`
			for (let i of search.all) {
				listSerch.push({
					title: i.title,
					rowId: `${prefix}ytad ${i.url}`,
					description: `Author : ${i.author.name} / ${i.timestamp}`
				})
			}
			const sections = [

				{
					title: "Total Search🔍" + search.all.length,
					rows: listSerch
					}

				]
			const listMessage = {
				text: teskd,
				footer: botname,
				title: `*📂Youtube Search by ${botname} 𝐌𝐝*`,
				buttonText: "FOUND",
				mentions: await parseMention(teskd),
				sections
			}
			sisaco.sendMessage(from, listMessage, {
				quoted: m
			})
		}
		break
		case 'video':
		case 'ytv': {
			if (q === 'help') {
				return m.reply(`*❗Command:* ${command}\n*🧩Category:* Downloder\n*🛠️Usage:* ${prefix + command} back in black\n\n*📚Description:* Sends youtube video in Whatsapp `)
			}
			if (!args.join(" ")) return m.reply(`Example : ${prefix + command} Back in black`)
			let yts = require("yt-search")
			let search = await yts(args.join(" "))
			listSerch = []
			teskd = `\n📁Result From ${args.join(" ")}.\n`
			for (let i of search.all) {
				listSerch.push({
					title: i.title,
					rowId: `${prefix}ytvd ${i.url}`,
					description: `Secktor / ${i.timestamp}`
				})
			}
			const sections = [

				{
					title: "Total Search🔍" + search.all.length,
					rows: listSerch
					}

				]
			const listMessage = {
				text: teskd,
				footer: 'Nerdy Md💜😌',
				title: ` *🎥Youtube Search results by  ${botname}📽️*`,
				buttonText: "FOUND",
				mentions: await parseMention(teskd),
				sections
			}
			sisaco.sendMessage(from, listMessage, {
				quoted: m
			})
		}
		break		
		case "ytad": {
			if (q === "help") {
				await m.reply(`*❗Command:*   YouTube Audio\n*🍀Aliases* ${command}\n*🧩Category:* Downloader\n*🛠️Usage:* ${
                prefix + command
              } link\n\n*📚Description:* Downloads Audio from given YouTube link and sends in current chat.`);
				return;
			}
			sisaco.sendMessage(from, {
				audio: {
					url: args[0],
				},
				mimetype: "audio/mpeg",
			
			}, {
				quoted: m,
			});
		}
		break;
	}
})()
