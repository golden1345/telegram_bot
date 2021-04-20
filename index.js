const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1770797152:AAEhxG4R2PFFLNsyqmsajss8KxnB1mpZgAc';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/price/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  var now = new Date().toLocaleDateString();
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, `Сегодня ${now}: \nhttps://www.infoteh.ru/price-list/`);
});

bot.onText(/\/news/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  var now = new Date().toLocaleDateString();
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, `Сегодня ${now}: \nhttps://www.infoteh.ru/blog-post/pascounter_price_50/`);
});
