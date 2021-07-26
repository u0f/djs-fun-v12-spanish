async function coinflip(message, options = {}) {
const { MessageActionRow, MessageButton } = require('discord-buttons')
const choice = ['heads', 'tails']  
const rand = choice[Math.floor(Math.random() * choice.length)];

const button = new MessageButton()
.setStyle(options.headsColor || 'red')
.setLabel('Heads')
.setID('cf1')

const button2 = new MessageButton()
.setStyle(options.tailsColor ||'blurple')
.setLabel('Tails')
.setID('cf2') 

 const button3 = new MessageButton()
.setStyle(options.headsColor || 'red')
.setLabel('Heads')
.setID('cf3') 
.setDisabled()

 const button4 = new MessageButton()
.setStyle(options.tailsColor || 'blurple')
.setLabel('Tails')
.setID('cf4')
.setDisabled()

let row = new MessageActionRow()
.addComponents(button, button2);
let row2 = new MessageActionRow()
.addComponents(button3, button4);

await message.channel.send(options.startMessage || `:coin: The coin is in the air... Choose heads or tails below.`, row).then(async m =>{
 const filter = (mes) => mes.clicker.user.id === message.author.id;
 const collector = m.createButtonCollector(filter);

 collector.on("collect", async b =>{
     b.reply.defer()
     if(b.id === 'cf1'){
        if(rand === 'heads'){
            m.edit(`You win! The coin landed on \`heads\`.`, row2)
        } else {
            m.edit(`You loose, the coin landed on \`${rand}\`.`, row2)
        }
     } else if(b.id === 'cf2'){
         if(rand === 'tails'){
             m.edit(`You win! The coin landed on \`tails\`.`, row2)
         } else {
             m.edit(`You loose, the coin landed on \`${rand}\`.`, row2)
         }
      }


 })

})
}
module.exports = coinflip
