async function dropdownwyr(message, options = {}){
    if(!message) throw new Error('djs-fun => Please add "message" param to dropdownwyr function')
    const  { MessageMenuOption, MessageMenu } = require('discord-buttons')

    const msg = await message.channel.send(options.loadingMessage || "Loading :gear:")
    const axios = require('axios')
    const body = await axios.get('https://api.tovade.xyz/v1/fun/wyr')
    const res = body.data
    let option = new MessageMenuOption()
    .setLabel('Would You Rather!')
    .setValue('dwyr1')
    .setDescription(`${res.questions["0"]}`)
    let option2 = new MessageMenuOption()
    .setLabel('Would You Rather!')
    .setValue('dwyr2')
    .setDescription(`${res.questions["1"]}`)

    
     let select = new MessageMenu()
    .setID('rughugregjtrw')
    .setPlaceholder(options.menuTitle || 'Click me! :D')
    .setMaxValues(1)
    .setMinValues(1)
    .addOption(option)
    .addOption(option2)
 
      msg.delete()
      await message.channel.send("**Would you rather**", select).then(async (m) => {
        const filter =  (mes) => mes.clicker.user.id === message.author.id;
        const collector = m.createMenuCollector(filter)

        collector.on('collect', (b) => {
            b.reply.defer()
            if (b.values[0] == 'dwyr1')  {
                m.edit(`The percentage of people who choose the Would You Rather you picked was \`${res.percentage["1"]}%\``);
                collector.stop()
            } else if (b.values[0] == 'dwyr2')  {
                m.edit(`The percentage of people who choose the Would You Rather you picked was \`${res.percentage["2"]}%\``);
                collector.stop()
            } 
         })
 
});
      
}
module.exports = dropdownwyr