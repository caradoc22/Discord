const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'New York,USA', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1046430425905643612')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=A2cu_za6-bI&t=236s') //Must be a youtube video link 
    .setState('Recording')
    .setName('Babi I Love U So Much')
    .setDetails(`Em Xinh Như Một Thiên Thần [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://tenor.com/vi/view/anime-gif-gif-24588312') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('<3') //Text when you hover the Large image
    .setAssetsSmallImage('https://tenor.com/vi/view/pink-verify-check-gif-23942665') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Twitch') //Text when you hover the Small image
    .addButton('Watch', 'https://www.youtube.com/watch?v=-e-9sKl6wHU')
    .addButton('https://discord.gg/bngccTuB', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
