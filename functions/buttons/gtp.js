const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord-buttons')

async function gtp(message, options = {}){
    const axios = require('axios')
    const msg = await message.channel.send(options.loadingMessage || 'Loading :gear:')
    const body = await axios.get('https://fun-api.sujalgoel.ml/pokemon')
    const res = body.data

    const correct = new Discord.MessageEmbed()
    .setTitle('Correcto!')
    .setDescription(`Adivinaste el Pokemon correctamente, \`${res.data.name}\``)
    .setImage(res.data.ShowImage) 
    .setColor("GREEN")
        
    const start = new Discord.MessageEmbed()
    .setTitle('Adivina el Pokémon!')
    .setDescription(`Presiona un botón para ver el Pokemon que crees que es. \n \n **Habilidades:** \n \`${res.data.abilities}\` \n\n **Tipo:** \n \`${res.data.types}\``)
    .setImage(res.data.HiddenImage)
    .setColor('ff0000')

    const wrong = new Discord.MessageEmbed()
    .setTitle('Error!')
    .setDescription(`Ese no era el Pokemon! El Pokemon correcto era \`${res.data.name}\`.`)
    .setImage(res.data.ShowImage)
    .setColor('ff0000')

    const pokemon = require('../../pokemon.json')
    const pokemon1 = require('../../pokemon1.json')
    const pokemon2 = require('../../pokemon2.json')

    const random1 = pokemon[Math.floor(Math.random() * pokemon.length)];
    const random2 = pokemon1[Math.floor(Math.random() * pokemon1.length)];
    const random3 = pokemon2[Math.floor(Math.random() * pokemon2.length)];
   
    let arr = [
        "red",
        "grey",
        "blurple",
        "green",
    ]
    let arr2 = [
        "red",
        "grey",
        "blurple",
        "green",
    ]
    let arr3 = [
        "red",
        "grey",
        "blurple",
        "green",
    ]
    let arr4 = [
        "red",
        "grey",
        "blurple",
        "green",
    ]
    const random4 = arr[Math.floor(Math.random() * arr.length)];
    const random5 = arr2[Math.floor(Math.random() * arr2.length)];
    const random6 = arr3[Math.floor(Math.random() * arr3.length)];
    const random7 = arr4[Math.floor(Math.random() * arr4.length)];


    
    const btn = new MessageButton()
    .setStyle(random4)
    .setLabel(`${res.data.name}`)
    .setID('gtp1');
    const btn1 = new MessageButton()
    .setStyle(random5)
    .setLabel(`${random1}`)
    .setID('gtp2')
    const btn2 = new MessageButton()
    .setStyle(random6)
    .setLabel(`${random2}`)
    .setID('gtp3')
    const btn3 = new MessageButton()
    .setStyle(random7)
    .setLabel(`${random3}`)
    .setID('gtp4')

    const row = new MessageActionRow()
    .addComponents(btn, btn1, btn2, btn3);
    const row1 = new MessageActionRow()
    .addComponents(btn2, btn, btn3, btn1);
    const row2 = new MessageActionRow()
    .addComponents(btn3, btn2, btn1, btn);
    const row3 = new MessageActionRow()
    .addComponents(btn1, btn, btn3, btn2);
    const row4 = new MessageActionRow()
    .addComponents(btn, btn1, btn3, btn2);
    const row5 = new MessageActionRow()
    .addComponents(btn1, btn3, btn, btn2);
    const row6 = new MessageActionRow()
    .addComponents(btn2, btn3, btn, btn2);
    const row7 = new MessageActionRow()
    .addComponents(btn1, btn, btn3, btn2);
    const row8 = new MessageActionRow()
    .addComponents(btn2, btn, btn3, btn1);

    let arr1 = [
        row,
        row1,
        row2,
        row3,
        row4,
        row5,
        row6,
        row7,
        row8
    ]
    const rand = arr1[Math.floor(Math.random() * arr1.length)];
    msg.delete()
    await message.channel.send(start, rand).then(async m =>{
        const filter = (mes) => mes.clicker.user.id === message.author.id;
        const collector = m.createButtonCollector(filter);  
        
        collector.on("collect", async b => {
            b.reply.defer()
            if(b.id === 'gtp1'){
                m.edit(correct)
                collector.stop()
            } else if(b.id === 'gtp2'){
                m.edit(wrong)
                collector.stop()
            } else if(b.id === 'gtp3'){
                m.edit(wrong)
                collector.stop()
            }  else if(b.id === 'gtp4'){
                m.edit(wrong)
                collector.stop()
            }
        })
    })

}
module.exports = gtp