

(async () => {
	switch (command) {     
    case 'del' :{    
    
        if (m.quoted.isBaileys) {
            const key = {
                remoteJid: m.chat,
                fromMe: false,
                id: m.quoted.id,
                participant: m.quoted.sender
            }
            await sisaco.sendMessage(m.chat, { delete: key })

        }
        if (!m.quoted.isBaileys) {
        if (!isGroupAdmins) return m.reply('Only Admins are allowed to delete other persons message.')
        if (!m.quoted) return m.reply(`Please Quote any message`);
        let { chat, fromMe, id } = m.quoted;
        const key = {
            remoteJid: m.chat,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
        await sisaco.sendMessage(m.chat, { delete: key })
    }
    
 }
 break
 }
})()