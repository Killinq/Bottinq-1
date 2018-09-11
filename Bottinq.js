const Discord = require('discord.js');
const superAgent = require('superagent')
const reddit = require("fetch-subreddit")
const client = new Discord.Client();
const client1 = new Discord.Client();

var config = require('./config.json');

var https = require('https');
var http = require('http');

var myID = "241322184830746625";
var spookyID = "264556298287316995";

var tairaGameDevSever = "279771993681952769";
var proj0 = "242000371818430476";
var doggo = "382814812247162890";
var botSpam = "435513599016828980";
var messageID;


if (config.token == '' || config.prefix == '')
{
  console.login("Fill in config.json, boyo");
  process.exit(1);
}

client.on('ready', () => {
  console.log(`Bot operational.`);
  client.user.setPresence({game:{name:config.prefix+"help", type:0}});
});

client.login(config.token);
client1.login(config.selfToken);


function randomInt(min, max)
{
  return Math.floor(Math.random() * (max - min)) + min;
}

client.on ('message', (message) =>
{
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.author.bot) return;

  if (message.channel.type === "dm") return;
  /*if (!message.content.startsWith(config.prefix) || !message.content.startsWith("I'm") || !message.content.toLowerCase().startsWith("This is so sad"))
  {
    return;
  }*/
  if (message.guild.id == proj0)
  {
    if (message.channel.id != doggo && message.channel.id != botSpam)
    {
      return;
    }
  }
    if (command === "avatar")
    {
      message.delete(0);
      var member = args[0];
      if (client.users.find("username", member) == null) return;
      var image = client.users.find("username", member).avatarURL;
      var embed = new Discord.RichEmbed()
        .setColor(0xe25822)
        .setAuthor(member, image)
        .setImage(image)
        .setFooter("Powered by YaBoi™");
      message.channel.send({embed});
    }

    if (command === 'lenny')
    {
      message.delete(0);
      message.channel.send('( ͡° ͜ʖ ͡°)');
    }

    if (command === 'gmt')
    {
      message.delete(0);
      var embed = new Discord.RichEmbed()
        .setColor(0xe25822)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setImage("http://i0.kym-cdn.com/photos/images/original/000/624/612/635.jpg")
        .setTimestamp()
        .setFooter("Powered by YaBoi™");
      message.channel.send({embed});
    }

    if (command === 'smh')
    {
      message.delete(0);
      message.channel.send("smh my head");
    }

    if (message.content.startsWith("~no u"))
    {
      message.delete(0);
      message.channel.send("", {files:["https://cdn.discordapp.com/attachments/249299646906761226/439948625909645312/unknown.png"]});
    }

    if (command ==="sins")
    {
      message.delete(0);
      var username = message.author.username.length;
      var num = Math.random() * 1000;
      num = Math.round(num*100) / 100;
      message.reply(`You have ` + username + num + ` sins!`);
    }

    if (command ==="ping")
    {
      message.delete(0);
      message.channel.send(message.createdTimestamp - new Date().getTime() + "ms");
    }

    if (command ==="thot")
    {
      message.delete(0);
      var embed = new Discord.RichEmbed()
        .setColor(0xe25822)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setImage("https://cdn.discordapp.com/attachments/401510751744950274/431631652264083486/Untitled.png")
        .setTimestamp()
        .setFooter("Powered by YaBoi™");
      message.channel.send({embed});
    }

    if (command === "cow")
    {
      message.delete(0);
      var quoteme = message.content.slice(config.prefix.length + command.length);
    	message.channel.send("``` \
    	\n " + " ______________________" + " \
    	\n< " + quoteme + " > \
    	\n " + "----------------------" + " \
    	\n		\\   ^__^ \
    	\n		 \\  (oo)\\_______ \
    	\n			(__)\\	   )\\/\\ \
    	\n				||----w | \
    	\n				||	 || \
    	\n ```");
    }

    if (command ==="say")
    {
      message.delete();
      var quoteme = message.content.slice(config.prefix.length + command.length);
      var embed = new Discord.RichEmbed()
          .setColor(0xe25822)
          .setDescription(quoteme)
          .setAuthor(message.author.username, message.author.avatarURL)
          .setTimestamp()
          .setFooter("Powered by YaBoi™");

      message.channel.send({embed});
    }

    if (command === "r")
    {
      message.delete(0);
      var sliced = message.content.slice(3);
      reddit.fetchSubreddit(sliced).then((urls) =>
     {
       var memes = urls[0].urls;
       var meme = memes[randomInt(0, memes.length-1)]
       message.channel.send(meme);
     }).catch(console.error);
    }

   if (command ==="help")
   {
     message.delete(0);
     var embed = new Discord.RichEmbed()
      .setColor(0xe25822)
      .setTitle("Commands")
      .setDescription(" ~avatar (plus the person's username that you want the avatar of) \
      \n ~lenny \n ~gmt \n ~smh \n ~sins \
      \n ~thot \n ~no u \n ~say (plus what you want to say) \
      \n ~cow (plus what you want it to say)")
      .setFooter("Powered by YaBoi™")
      .setTimestamp();
     message.author.send({embed});
    }

    var dad = message.content.slice(4);
    var start = message.content;


    if (message.guild.id == config.melonMan || message.guild.id == config.botTest || message.guild.id == config.bean)
    {
      if (start.toLowerCase().startsWith("i'm"))
      {
        message.channel.send("Hi " + dad + "," + " I'm dad!");
      }
      if (start.toLowerCase().startsWith("alexa play despacito"))
      {
        var embed = new Discord.RichEmbed()
          .setColor(0xe25822)
          .setFooter("Powered by YaBoi™")
          .setAuthor("Alexa", "https://images-na.ssl-images-amazon.com/images/I/41-v1fozy0L.jpg")
          .setDescription('Now playing [Despacito](https://www.youtube.com/watch?v=kJQP7kiw5Fk)');

        message.channel.send({embed});
      }


      if (start.toLowerCase().startsWith("what") || start.toLowerCase().startsWith("wat") || start.toLowerCase().startsWith("wut") || start.toLowerCase().startsWith("nani"))
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
      messageID = message.id;

    }

});
