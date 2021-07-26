# DJS-FUN-v12 Package By Nidhish#1295

A fun npm package for [Discord.js-v12](https://discord.js.org)

### Join [the support server](https://discord.gg/FF7brJcrEk) for any help.

*This package is [djs-fun](https://npmjs.org/djs-fun) but for normal discordjs-v12.

# Buttons

### Would You Rather

```js
const djs = require('djs-fun-v12')
djs.wyr(message, {
    loadingMessage: "Loading ⚙️",// defualt: Loading ⚙️
    firstButtonColor: "first button color here", //defualt: red
    secondButtonColor: "second button color here" //defualt: blurple
})
```

### Guess The Pokemon

```js
const djs = require('djs-fun-v12')
djs.gtp(message, {
    loadingMessage: "loading message here"// defualt: Loading ⚙️
})
```

### Rock Paper Scissors 

```js
const djs = require('djs-fun-v12') 
djs.rps(message, {
    rockEmoji: "emoji for rock here", //defualt: 🗿
    paperEmoji: "emoji for paper here", //defualt: 📰
    scissorsEmoji: "emoji for scissors here", //defualt: ✂️
    startMessage: "message when command is triggered",
         //defualt: Rock Paper Scissors! \nHit a button below for your choice.
    rockButtonColor: "color for rock button here",
       //defualt: red
    paperButtonColor: "color for paper button here",
     //defualt: gray
    scissorsButtonColor: "color for scissors button here"
   //defualt: green
})
```
### Coinflip
```js
const djs = require('djs-fun-v12')
djs.coinflip(message, {
    startMessage: "start message here",// defualt: :coin: The coin is in the air... Choose heads or tails below.
    headsColor: "button color for heads here", //defualt: red
    tailsColor: "button color for tails here" //defualt: blurple

})
```
# Drop Down Menu's

### Would You Rather

```js
const djs = require('djs-fun-v12')
djs.dropdownwyr(message, {
    loadingMessage: "loading message here", //defualt: Loading ⚙️
    menuTitle: "title of menu here" // defualt: Click Me :D
})
```