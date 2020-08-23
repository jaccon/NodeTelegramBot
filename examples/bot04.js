const env = require('../.env');

const Telegraf = require('telegraf');
const { default: Axios } = require('axios');
const bot = new Telegraf(env.token);

bot.on('voice', async ctx => {
  const id = ctx.update.message.voice.file_id;

  // Get Voice *** Remember this file stay online only to 1 hour
  const res = await Axios.get(
    `${env.apiUrl}/getFile?file_id=${id}`)
    
  console.log(`${env.apiFileUrl}/${res.data.result.file_path}`)
  ctx.replyWithVoice({ url : 
    `${env.apiFileUrl}/${res.data.result.file_path}`})

})

// Get a Photo
bot.on('photo', async ctx => {
  const id = ctx.update.message.photo[2].file_id

  const res = await Axios.get(
    `${env.apiUrl}/getFile?file_id=${id}`)
  
  console.log(`${env.apiFileUrl}/${res.data.result.file_path}`)
  ctx.replyWithPhoto({ url : 
    `${env.apiFileUrl}/${res.data.result.file_path}`})

})

bot.startPolling();