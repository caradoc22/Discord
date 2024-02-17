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
    timeZone: 'America/Port_of_Spain', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rpc started! check your profile ^^`);

  const r = new Discord.RichPresence()
.setApplicationId('1046430425905643612')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=A2cu_za6-bI&t=535s') //Must be a youtube video link 
    .setState('Suy vai o')
    .setName('hmm')
    .setDetails(`24/7 Tương Tư Về Em [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://tenor.com/vi/view/my-dress-up-darling-anime-love-marin-kitagawa-gif-25055013') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('insert funny text') //Text when you hover the Large image
    .setAssetsSmallImage('https://tenor.com/vi/view/pink-verify-check-gif-23942665') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('You weirdo, why would you hover over the small image.') //Text when you hover the Small image
    .addButton('Discord 🔨', 'https://discord.gg/DhT7adeM')
    .addButton('Youtube ✏️💞', 'https://www.youtube.com/watch?v=Pi_mL1ONhGk')

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `24/7 Tương Tư Về Em [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
