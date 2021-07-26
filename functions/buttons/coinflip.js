async function coinflip(message, options = {}) {
const { MessageActionRow, MessageButton } = require('discord-buttons')
const choice = ['heads', 'tails']  
const rand = choice[Math.floor(Math.random() * choice.length)];

const button = new MessageButton()
.setStyle(options.headsColor || 'red')
.setLabel('Cara')
.setID('cf1')

const button2 = new MessageButton()
.setStyle(options.tailsColor ||'blurple')
.setLabel('Cruz')
.setID('cf2') 

 const button3 = new MessageButton()
.setStyle(options.headsColor || 'red')
.setLabel('Cara')
.setID('cf3') 
.setDisabled()

 const button4 = new MessageButton()
.setStyle(options.tailsColor || 'blurple')
.setLabel('Cruz')
.setID('cf4')
.setDisabled()

let row = new MessageActionRow()
.addComponents(button, button2);
let row2 = new MessageActionRow()
.addComponents(button3, button4);

await message.channel.send(options.startMessage || `:coin: La moneda está en el aire... Elije cara o cruz.`, row).then(async m =>{
 const filter = (mes) => mes.clicker.user.id === message.author.id;
 const collector = m.createButtonCollector(filter);

 collector.on("collect", async b =>{
     b.reply.defer()
     if(b.id === 'cf1'){
        if(rand === 'heads'){
            m.edit(`Has ganado! La moneda cayó en \`heads\`.`, row2)
        } else {
            m.edit(`Has perdido, la moneda cayó en \`${rand}\`.`, row2)
        }
     } else if(b.id === 'cf2'){
         if(rand === 'tails'){
             m.edit(`Has ganado! La moneda cayó en \`tails\`.`, row2)
         } else {
             m.edit(`as perdido, la moneda cayó en \`${rand}\`.`, row2)
         }
      }


 })

})
}
module.exports = coinflip
