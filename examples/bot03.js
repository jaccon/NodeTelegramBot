const env = require('../.env');

const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(async ctx => {

  // Reply simple text
  await ctx.reply(`Seja bem vindo, 
  ${ctx.update.message.from.first_name} 🐧🐧🐧🐧🐧`);
  
  
  // Reply with HTML
  await ctx.replyWithHTML(`${ctx.update.message.from.first_name}, neste exemplo você pode mandar também um texto com tags em <b>html </b> 
  Até links você pode mandar como neste exemplo 
  <a href='htts://jaccon.com.br'> www.jaccon.com.br </a>
  `);
  
  // Reply with Markdown
  await ctx.replyWithMarkdown(`${ctx.update.message.from.first_name}, 
  *** Markedown ***
  Neste exemplo você pode responder utilizando markdown
  [link](https://jaccon.com.br)
  `);
  
  // Reply with Photo local disk
  await ctx.replyWithPhoto({ source: 
    `${__dirname}/assets/images/fun.jpg`});
    
  // Reply with Photo from url and caption
  await ctx.replyWithPhoto('https://i.pinimg.com/originals/fc/4b/1d/fc4b1dbbb3aca9a6e98d8a511a8095a3.jpg',
  {caption : 'Está pensando o que ?' });
  
  // Reply with Location
  await ctx.replyWithLocation(29.9773008, 31.1303068);


  // Reply with Video
  await ctx.replyWithVideo('https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4');

});

bot.startPolling();

