# MicroCanvas

MicroCanvas is a JavaScript library aimed at enhancing the HTML5 `<canvas>` with a few nifty features to make it easier for someone to create self-contained, retro-style pixelart games, while keeping the original canvas functions and development experience intact.


## Getting started

The easiest way to start using the MicroCanvas library is to simply include it from the Clouduboy site or GitHub CDN:

```html
  <script src="//clouduboy.github.io/microcanvas/microcanvas.js"></script>
```

or

```html
  <script src="//s.clouduboy.org/microcanvas.js"></script>
```

Including the MicroCanvas script in the webpage like this will create a new `MicroCanvas` global object on the window -- you can use this global object to access the functionality provided by MicroCanvas

> **NOTE:**  
> You may also include MicroCanvas as an ES6 module. This feature is work-in-progress, but allows you to avoid having to expose the MicroCanvas object as a global on the window object.

After you have included the MicroCanvas library in your game script file, you create the MicroCanvas global instance that you will be using throughout the rest of the code to refer to the game canvas:

```javascript
const game = new MicroCanvas();
```

You may choose whatever name you want for your MicroCanvas instance, but `game` is a frequently used and straightforward choice, we recommend sticking with it.

MicroCanvas files, by convention, are built of 3 main parts: [globals](/globals), the [`setup` function](/setup) and the [`loop` function](/loop). The `setup` function sets up the game, the `loop` function updates the game and keep the action going, and globals are used to store the game state as well as resources (like sounds and graphics) required for the game. Learn more of each of these in their respective documentation pages.
