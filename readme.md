# DJS-FUN-v12 Package By Nidhish#1295

Un package divertido para [Discord.js-v12](https://discord.js.org)

### Únete [al servidor de soporte](https://discord.gg/FF7brJcrEk) para algún tipo de ayuda.

*Este package es [djs-fun](https://npmjs.org/djs-fun) pero para normal discordjs-v12.

# Botones

### Would You Rather

```js
const djs = require('djs-fun-v12')
djs.wyr(message, {
    loadingMessage: "Loading ⚙️",// por defecto: Cargando ⚙️
    firstButtonColor: "Botón del primer color aquí", //por defecto: red
    secondButtonColor: "Botón del segundo color aquí" //por defecto: blurple
})
```

### Guess The Pokemon

```js
const djs = require('djs-fun-v12')
djs.gtp(message, {
    loadingMessage: "Mensaje de cargando aquí"// por defecto: Cargando ⚙️
})
```

### Rock Paper Scissors 

```js
const djs = require('djs-fun-v12') 
djs.rps(message, {
    rockEmoji: "Emoji para piedra aquí", //por defecto: 🗿
    paperEmoji: "Emoji para papel aquí", //por defecto: 📰
    scissorsEmoji: "Emoji para tijeras aquí", //por defecto: ✂️
    startMessage: "Mensaje cuando se activa el comando", //por defecto: Piedra Papel o Tijeras! \nPresiona un botón para hacer tu elección
    rockButtonColor: "Color para el botón de piedra", //por defecto: red
    paperButtonColor: "Color para el botón de papel", //por defecto: gray
    scissorsButtonColor: "Color para el botón de tijeras" //por defecto: green
})
```
### Coinflip
```js
const djs = require('djs-fun-v12')
djs.coinflip(message, {
    startMessage: "Mensaje de inicio", // por defecto: :coin: La moneda está en el aire... Elije cara o cruz.
    headsColor: "Color del botón para cara", //por defecto: red
    tailsColor: "Color del botón para cruz" //por defecto: blurple

})
```
# Desplegable

### Would You Rather

```js
const djs = require('djs-fun-v12')
djs.dropdownwyr(message, {
    loadingMessage: "Mensaje de carga", //por defecto: Cargando ⚙️
    menuTitle: "Título del menú aquí" // por defecto: Click Me :D
})
```