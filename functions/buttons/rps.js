const axios = require('axios')
const { MessageButton, MessageActionRow } = require('discord-buttons')

async function wyr(message, options={}){
    if(!message) throw new Error('djs-fun => Porfavor añade el parámetro "message" para la función de rps')
    const body = await axios.get('https://www.zirobot.xyz/rps')
    const res = body.data
    const button = new MessageButton()
    .setStyle(options.rockButtonColor || 'red')
    .setEmoji(options.rockEmoji || '🗿')
    .setID('rps1')

    const button1 = new MessageButton()
    .setStyle(options.paperButtonColor || 'grey')
    .setEmoji(options.paperEmoji || '📰')
    .setID('rps2')

    const button2 = new MessageButton()
    .setStyle(options.scissorsButtonColor || 'green')
    .setEmoji(options.scissorsEmoji || '✂️')
    .setID('rps3')

    const button3 = new MessageButton()
    .setStyle(options.rockButtonColor || 'red')
    .setEmoji(options.rockEmoji || '🗿')
    .setID('rps5454')
    .setDisabled()

    const button4 = new MessageButton()
    .setStyle(options.paperButtonColor || 'grey')
    .setEmoji(options.paperEmoji || '📰')
    .setID('rps45245')
    .setDisabled()

    const button5 = new MessageButton()
    .setStyle(options.scissorsButtonColor || 'green')
    .setEmoji(options.scissorsEmoji || '✂️')
    .setID('rps548')
    .setDisabled()

    let row = new MessageActionRow()
    .addComponents(button, button1, button2);
    let row1 = new MessageActionRow()
    .addComponents(button3, button4, button5);

      message.channel.send(options.startMessage || 'Piedra Papel o Tijeras! \nPresiona un botón para hacer tu elección.', row).then(async m =>{
      const filter = (mes) => mes.clicker.user.id === message.author.id;
      const collector = m.createButtonCollector(filter);

      console.log(res.rps)

      collector.on("collect", async b =>{
          b.reply.defer()
          if(b.id === 'rps1'){
             if(res.rps === 'Scissors'){
                m.edit(`Has ganado! He elegido \`${res.rps}\` y tú has escogido \`Rock\``, row1)
            } else if(res.rps === 'Rock'){
                m.edit(`Empate! Los dos hemos elegido ${res.rps}`, row1)
              } else if(res.rps === 'Paper'){
                m.edit(`He ganado! He elegido \`${res.rps}\` y tú has escogido \`Rock\``, row1)
            }
              collector.stop()

          } else if(b.id === 'rps2'){
            if(res.rps === 'Paper'){
                m.edit(`Empate! Los dos hemos elegido ${res.rps}`, row1)
            } else if(res.rps === 'Scissors'){
                m.edit(`He ganado! He elegido \`${res.rps}\` y tú has escogido \`Paper\``, row1)
            } else if(res.rps === 'Rock') {
                m.edit(`Has ganado! He elegido \`${res.rps}\` y tú has escogido \`Paper\``, row1)
            }
            collector.stop()

        } else if(b.id === 'rps3'){
            if(res.rps === 'Scissors'){
                m.edit(`Empate! Los dos hemos elegido \`${res.rps}\``, row1)
            } else if(res.rps === 'Rock'){
                m.edit(`He ganado! He elegido \`${res.rps}\` y tú has escogido \`Scissors\``, row1)
            } else if(res.rps === 'Paper') {
                m.edit(`Has ganado! He elegido \`${res.rps}\` y tú has escogido \`Scissors\``, row1)
            }
            collector.stop()
        }


      })

      })  

}
module.exports = wyr