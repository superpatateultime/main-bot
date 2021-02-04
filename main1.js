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
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();
  if(command=="connect"){
    message.delete();
    trimmedArray = message.content.split("p!connect ")[1]; 
    client.channels.fetch(trimmedArray).then(channel => channel.send("cc"));
  }

  if(command == "dit"){
    messagesd = message.content.split("p!dit ")[1]; 
    client.channels.fetch(trimmedArray).then(channel => channel.send(messagesd));
  }
  ///if(message.author.id != "647488774384779304" && client.channels.id() == trimmedArray){
  ///  client.channels.fetch("806217266470846494").then(channel => channel.send(message.content));
  ///}
});


client.login('NjQ3NDg4Nzc0Mzg0Nzc5MzA0.Xdga6Q.yGlUWHafqcRjkvy_IKJs2rOlF6Q');