const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start((ctx, next) => {
  const from = ctx.update.message.from
  console.log(from)
  ctx.reply(`Seja bem vindo, ${from.first_name} !`);
  next();
})

bot.start( async (ctx, next) => {
  
  const from = ctx.update.message.from
  
  if(from.id === 1271349182){
    await ctx.reply('Vejo que você já é cliente....')
    next();
  } else {
    await ctx.reply(`Vejo que você ainda não é cliente quer se afiliar agora ?`)
  }
})

bot.on('text', async (ctx, next) =>{
  await ctx.reply('Mensagem privada exclusiva 1')
  next()
})

bot.on('text', async (ctx, next) =>{
  await ctx.reply('Mensagem privada exclusiva 2')
  next()
})

bot.startPolling()