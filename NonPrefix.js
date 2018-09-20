const Discord = require('discord.js');
const superAgent = require('superagent')
const client = new Discord.Client();
var config = require('./config.json');
var proj0 = "242000371818430476";
var doggo = "382814812247162890";
var botSpam = "435513599016828980";

if (config.token == '' || config.prefix == '')
{
  console.login("Fill in config.json, boyo");
  process.exit(1);
}

var messageID;
client.login(config.token);

client.on ('message', (message) =>
{
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.author.bot) return;

  var msg = message.content;

  if (message.channel.type === "dm") return;

  if (message.guild.id == proj0)
  {
    if (message.channel.id != doggo && message.channel.id != botSpam)
    {
      return;
    }
  }

  var dad = message.content.slice(4);
  if (msg.toLowerCase().startsWith("i'm"))
  {
    message.channel.send("Hi " + dad + "," + " I'm dad!");
  }
  if (msg.toLowerCase().startsWith("alexa play despacito"))
  {
      var embed = new Discord.RichEmbed()
        .setColor(0xe25822)
        .setFooter("Powered by YaBoi™")
        .setAuthor("Alexa", "https://images-na.ssl-images-amazon.com/images/I/41-v1fozy0L.jpg")
        .setDescription('Now playing [Despacito](https://www.youtube.com/watch?v=kJQP7kiw5Fk)');

      message.channel.send({embed});
    }

    if (message.guild.id == config.bean)
    {
      return;
    }
    else
    {
      if (msg.toLowerCase().startsWith("what") || msg.toLowerCase().startsWith("wat") || msg.toLowerCase().startsWith("wut") || msg.toLowerCase().startsWith("nani"))
      {
        if (messageID != null)
        {
          message.channel.fetchMessage(messageID)
            .then(msg => message.channel.send("**" + msg.content.toUpperCase() + "**"))
            .catch(console.error)
        }
      } else {
        messageID = message.id;
      }
    }


});
