const env = require('../.env');
const Telegraf = require('telegraf');
const moment = require('moment');
const { default: Axios } = require('axios');
const bot = new Telegraf(env.token);

// Hear a string
bot.hears('pizza', 
ctx => ctx.reply('Quero! '))

// Hear a array with strings
bot.hears(['pizza queijo', 'pizza peperonni'], 
ctx => ctx.reply(' Está disponível! '))

// Hear a array with emojis
bot.hears(['😍', '😄'], 
ctx => ctx.reply(' Que legal que gostou! '))

// Hear a regex
bot.hears(/esfiha/i, ctx => {
  ctx.reply('Não temos esfiha hoje! ');
})

// Hear a array with regex
bot.hears([/suco de laranja/i, /suco de morango/i], ctx => {
  ctx.reply('suco de frutas é realmente muito bom! ');
})

// Hear extract a text with regex
bot.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx => {
  moment.locale('pt-BR')
  const data = moment(ctx.match[1], 'DD/MM/YYYY')
  ctx.reply(`${ctx.match[1]} é uma ${data.format('dddd')} `)
})



bot.startPolling();