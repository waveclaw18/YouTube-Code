const Discord = require('discord.js');

const client = new Discord.Client

const prefix = '?'

const { token } = require('./config.json')

client.once('ready', () => {
    console.log('Bot is ready!')
})

client.on('message', async (message) => {
   if(!message.content.startsWith(prefix) || message.author.bot) return; 

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase()

    const msg = args.join(" ")

    if(command === 'ping'){
        message.channel.send('Pong!')
    } else if(command === 'clap'){
        var split = args.join('👏')
        message.channel.send(split)
    } else if(command === "say") {
        if(!msg) return message.channel.send("You didn't tell me what to repeat! | :x:");
        message.channel.send(msg);
    } else if (command === "clear") {
        if(!args[0]) return message.channel.send("You didn't specify a number! | :x:")

        let amount = parseInt(args[0]);

        if(isNaN(amount)) return message.channel.send("You didn't specify a real number!")

        if(amount > 100 || amount < 2) return message.channel.send("That number is either too big or too small! | :x:")

        message.channel.bulkDelete(amount);
        
    }
})


client.login(token)