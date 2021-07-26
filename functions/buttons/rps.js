const axios = require('axios')
const { MessageButton, MessageActionRow } = require('discord-buttons')

async function wyr(message, options={}){
    if(!message) throw new Error('djs-fun => Please add "message" param to rps function')
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

      message.channel.send(options.startMessage || 'Rock Paper Scissors! \nHit a button below for your choice.', row).then(async m =>{
      const filter = (mes) => mes.clicker.user.id === message.author.id;
      const collector = m.createButtonCollector(filter);

      console.log(res.rps)

      collector.on("collect", async b =>{
          b.reply.defer()
          if(b.id === 'rps1'){
             if(res.rps === 'Scissors'){
                m.edit(`You win! I choose \`${res.rps}\` and you choose \`Rock\``, row1)
            } else if(res.rps === 'Rock'){
                m.edit(`Its a tie! We both picked ${res.rps}`, row1)
              } else if(res.rps === 'Paper'){
                m.edit(`I win! I choose \`${res.rps}\` and you choose \`Rock\``, row1)
            }
              collector.stop()

          } else if(b.id === 'rps2'){
            if(res.rps === 'Paper'){
                m.edit(`Its a tie! We both picked ${res.rps}`, row1)
            } else if(res.rps === 'Scissors'){
                m.edit(`I win! I choose \`${res.rps}\` and you choose \`Paper\``, row1)
            } else if(res.rps === 'Rock') {
                m.edit(`You win! I choose \`${res.rps}\` and you choose \`Paper\``, row1)
            }
            collector.stop()

        } else if(b.id === 'rps3'){
            if(res.rps === 'Scissors'){
                m.edit(`Its a tie! We both picked \`${res.rps}\``, row1)
            } else if(res.rps === 'Rock'){
                m.edit(`I win! I choose \`${res.rps}\` and you choose \`Scissors\``, row1)
            } else if(res.rps === 'Paper') {
                m.edit(`You win! I choose \`${res.rps}\` and you choose \`Scissors\``, row1)
            }
            collector.stop()
        }


      })

      })  

}
module.exports = wyr