// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Telegraf } from "telegraf";
const bot = new Telegraf("5398983438:AAHuyzHoU-3Wi4STNXZrDmgydIYMII8pd9I");

export default function handler(req, res) {

  bot.start((ctx) => {
    ctx.reply("Start");
  });
  bot.command('teste', (ctx) => {
    ctx.reply('Teste...');
  })
  bot.launch();
  res.status(200).json({ name: "Leo Porto" })

}
