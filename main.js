///début du code principale de elybot
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('alys et kilebot qui se font une soirée netflx and chibre euh chill', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
  var embed = new Discord.RichEmbed()
  .setAuthor("INFORMATION!", client.user.avatarURL)
  .setDescription("LE BOT A DEMARRE. UTILISATION DU CHAT OK!")
  .setColor(16768000)
  .setFooter(client.user.name, client.user.avatarURL)
  var guildList = client.guilds.array();
  for(i=0; i<guildList.length; i++){
    if(guildList[i].channels.exists("name", 'psikhì-chat')){
      guildList[i].channels.find("name", 'psikhì-chat').send(embed)
    }
  }
});

client.on("message", message => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command=="dis"){
    message.delete();
    const trimmedArray = message.content.split("p!dis")[1];
    message.channel.send(trimmedArray)
    
  }
});

client.login('');