///début du code principale de elybot
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
var trimmedArray = "806217266470846494"
var messagesd = "error aucun message"
const cscg = "698136745149202494"
var link = "806217266470846494"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('alys et kilebot qui se font une soirée netflx and chibre euh chill', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
  
});

client.on("message", message => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command=="connect"){
    message.delete();
    trimmedArray = message.content.split("p!connect ")[1]; 
    client.channels.fetch(trimmedArray).then(channel => channel.send("cc"));
  }
  if(command == "valid"){
    if (trimmedArray = cscg){
      link = "698136745149202494"
      client.channels.fetch(link).then(channel => channel.send("cc"));
    }
    else{
      link = trimmedArray
      client.channels.fetch(link).then(channel => channel.send("cc"));
    }
  }

  if(command == "dit"){
    messagesd = message.content.split("p!dit ")[1]; 
    client.channels.fetch(link).then(channel => channel.send(messagesd));
  }
});


client.login('NjQ3NDg4Nzc0Mzg0Nzc5MzA0.Xdga6Q.E0gitECG16ewJKaGYdhX6P1MuQs');