const { MessageEmbed } = require("discord.js");

module.exports = (client, instance) => {
  client.on("messageCreate", message => {
    if (
      message.content.trim() == "<@883875005685989387>" ||
      message.content.trim() == "<@!883875005685989387>"
    ) {
      const embeds = [new MessageEmbed()
        .setDescription(
          `Olá, ${message.author}! Meu prefixo é: \`-\`; utilize \`-ajuda\` para ter acesso à lista de comandos.`
        )
        .setColor("#FFFF00")];

      message.channel.send({ embeds });
    }
  });
};
