async function wyr(message, options = {}){
    if(!message) throw new Error('djs-fun => Please add "message" param to wyr function')
    const msg = await message.channel.send(options.loadingMessage || "Loading :gear:")
    const axios = require('axios')
    const body = await axios.get('https://api.tovade.xyz/v1/fun/wyr')
    const res = body.data
const { MessageActionRow, MessageButton } = require('discord-buttons')
    const one = new MessageButton()
      .setStyle("red")
      .setLabel(`${res.questions["0"]}`)
      .setID('wyr1')

    const two = new MessageButton()
      .setStyle("blurple")
      .setLabel(`${res.questions["1"]}`)
      .setID('wyr2')

      let row = new MessageActionRow()
      .addComponents(one, two);
      msg.delete()
      await message.channel.send("**Que prefieres**", row).then(async (m) => {
        const filter = (mes) => mes.clicker.user.id === message.author.id;
        const collector = m.createButtonCollector(filter);
        collector.on("collect", (b) => {
        b.reply.defer()
          if (b.id === 'wyr1') {
           const button = new MessageButton()
           .setStyle(options.firstButtonColor || "red")
           .setLabel(`${res.questions["0"]}`)
           .setID('fhfudd')     
           .setDisabled()

           const button1 = new MessageButton()
           .setStyle(options.secondButtonColor ||"blurple")
           .setLabel(`${res.questions["1"]}`)
           .setID('fujdfs')     
           .setDisabled()

           let row = new MessageActionRow()
           .addComponents(button, button1);
 
            collector.stop();
            m.edit(`El porcentaje de personas que eligen la opción ha sido \`${res.percentage["1"]}%\``, row);

          } else if (b.id === 'wyr2') {
            const button = new MessageButton()
            .setStyle("red")
            .setLabel(`${res.questions["0"]}`)
            .setID('fhfudd')     
            .setDisabled()

            const button1 = new MessageButton()
            .setStyle("blurple")
            .setLabel(`${res.questions["1"]}`)
            .setID('fujdfs')     
            .setDisabled()

            collector.stop();
            let row = new MessageActionRow()
            .addComponents(button, button1);

            m.edit(`El porcentaje de personas que eligen la opción ha sido \`${res.percentage["2"]}%\``, row);
          }
        });
      });
      
  
}
module.exports = wyr