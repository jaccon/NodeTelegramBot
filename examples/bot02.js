const env = require('../.env');

const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(ctx => {
  const name = ctx.message.from.first_name;
  ctx.reply(`Seja bem vind, ${name} !`);
});


// Listening texts
bot.on('text', ctx => 
  ctx.reply(`Texto 
    [[ ${ctx.update.message.text} ]] recebido com sucesso`)
)

// Listening location
bot.on('location', ctx => {
  const location = ctx.update.message.location;
  console.log(location)
  ctx.reply(`Localização: 
    Lat: ${location.latitude}
    Longitude: ${location.longitude}
  `)
})

// Listening contacts
bot.on('contact', ctx => {
  const contact = ctx.update.message.contact;
  console.log(contact)
  ctx.reply(`Recebi o seu contato 
  ${contact.first_name} 
  ${contact.phone_number}`)
})

// Listening voice
bot.on('voice', ctx => {
  const voice = ctx.update.message.voice;
  console.log(voice)
  ctx.reply(`Recebi seu áudio de ${voice.duration} segundos`)
})

// Listening photos
bot.on('photo', ctx => {
  const photos = ctx.update.message.photo;
  console.log(photos);
  photos.map(item => {
    ctx.reply(`Foto:
      ${item.file_unique_id} 
      Largura: ${item.width}
      Altura: ${item.height}`)
  })
})

// Listening Sticker
bot.on('sticker', ctx => {
  const sticker = ctx.update.message.sticker;
  console.log(sticker);
  ctx.reply(`Recebi o emoji ${sticker.emoji} do conjunto ${sticker.set_name}`)
})

bot.startPolling();

