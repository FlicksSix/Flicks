/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
  GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */



const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('YaY Your Bot Status Changed✨');
});
app.listen(port, () => {
  console.log(`🔗 Listening to RTX: http://localhost:${port}`);
  console.log(`🔗 Powered By RTX`);
});


const statusMessages = ["Adeus Konrtol a a a...","Sizi İzliyor...","Made By Blacker_kz ","Anime Kızları Gerçek!","Ne Bakıyon Hacı?","Sanma artık sana yol gözlerim,Gözlerim","Aklımda son sözlerin,Sözlerin","Büyü Yapan O Gözleri,Gözleri","Kahretsin Ben Özledim Özledim","Mesaj Yaz Akşamı,Akşamı ","Diyordum Sana Aşkadın,Aşkadın","Birazcık Geç Anladım,Anladım ","Harbidende Aptalım,Aptalım ","Evet Aptalım Biraz Geç Farkettim","Seni Onunla Gördüğümde Dank etti","Senin Yüzünden Onu Öldürecektim","Sakin Ol Dedi Sabrettim","Evet Ama Hava Bugün Niye Yine Kasvetli","Gelip Hayatımı Yeniden Mahvetti", "O Güzel Günlerimiz Hatırına Sabrettimn","Aklımda Kaldı Bak","Bakmadan Ardına","Çekti Gitti Herşeyi Kaldır At","Birşeyi Kaldımi? Cropu Aldımı?","Gelecek Vakti Ruhani Tahsilat","Artık Gelme Sevme Benle..","Yeni Bir Love,Yeni Bir Tende","Yaşamak Hemde Düşünmeden De","Ee Yani Düşündüm Senle","Sanma artık sana yol gözlerim,Gözlerim","Aklımda son sözlerin,Sözlerin","Büyü Yapan O Gözleri,Gözleri","Kahretsin Ben Özledim Özledim","Mesaj Yaz Akşamı,Akşamı ","Diyordum Sana Aşkadın,Aşkadın","Birazcık Geç Anladım,Anladım ","Harbidende Aptalım,Aptalım ","Evet Aptalım Biraz Geç Farkettim","Seni Onunla Gördüğümde Dank etti","Senin Yüzünden Onu Öldürecektim","Sakin Ol Dedi Sabrettim","Evet Ama Hava Bugün Niye Yine Kasvetli","Gelip Hayatımı Yeniden Mahvetti", "O Güzel Günlerimiz Hatırına Sabrettimn","Aklımda Kaldı Bak","Bakmadan Ardına","Çekti Gitti Herşeyi Kaldır At","Birşeyi Kaldımi? Cropu Aldımı?","Gelecek Vakti Ruhani Tahsilat","Artık Gelme Sevme Benle..","Yeni Bir Love,Yeni Bir Tende","Yaşamak Hemde Düşünmeden De","Ee Yani Düşündüm Senle","Aklımda Kaldı Bak","Bakmadan Ardına","Çekti Gitti Herşeyi Kaldır At","Birşeyi Kaldımi? Cropu Aldımı?","Gelecek Vakti Ruhani Tahsilat","Artık Gelme Sevme Benle..","Yeni Bir Love,Yeni Bir Tende","Yaşamak Hemde Düşünmeden De","Ee Yani Düşündüm Senle","Aklımda Kaldı Bak","Bakmadan Ardına","Çekti Gitti Herşeyi Kaldır At","Birşeyi Kaldımi? Cropu Aldımı?","Gelecek Vakti Ruhani Tahsilat","Artık Gelme Sevme Benle..","Yeni Bir Love,Yeni Bir Tende","Yaşamak Hemde Düşünmeden De","Ee Yani Düşündüm Senle","Yapay Zeka Özelliğim Varmı Evet Var","Kuru Kuru Kururinnn","Supraggggg"];


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨HAPPY NEW YEAR MY DEAR FAMILY`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️WELCOME TO 2024`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login();

/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */
