const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const { token, MONGO_URI } = process.env;
const WOKCommands = require("wokcommands");
const path = require("path");
const conjugar = require('conjugador')

console.log(conjugar('amar'))

client.on("ready", () => {
  console.log("Online");

  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "comandos"),
    featuresDir: path.join(__dirname, "eventos"),
    showWarns: false,
    disabledDefaultCommands: [
      "help",
      "command",
      "language",
      "prefix",
      "requiredrole"
    ]
  }).setDefaultPrefix('-').setMongoPath(MONGO_URI)
});

client.login(token);
