const express = require("express");
const bodyParser = require("body-parser");
const http = require("request");
const app = express();
const port = 8000;

// const TelegramBot = require("node-telegram-bot-api");

const token = "630282563:AAEfK5_OzvBZPNT7HZy8-gCH1vZ1s9OrP9s";
// const bot = new TelegramBot(token, {
//   polling: true,
//   request: {
//     proxy: "https://11.22.33.44:1010/"
//   }
// });

const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.post("/mes", urlencodedParser, (req, res) => {
  console.log("111111", req.body);
  res.setHeader("Access-Control-Allow-Origin", "*");
  http.post(
    `https://api.telegram.org/bot630282563:AAEfK5_OzvBZPNT7HZy8-gCH1vZ1s9OrP9s/sendMessage?chat_id=-305897377&parse_mode=html&text=qweqwe`,
    function(error, response, body) {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", body);
    }
  );
  // bot.sendMessage("-305897377", "Received your message");
  res.status(200).json({ status: "error", message: "Произошла ошибка!" });
});

app.listen(port, error => {
  if (error) return console.log("Something went wrong", error);
  console.log("Server started");
});
