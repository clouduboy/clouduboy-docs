# Graphics

One of the most important feature of MicroCanvas is displaying and manipulating pixelart graphics. As MicroCanvas's target architectures are usually only equipped with low-density screens (with sizes of maybe a hundred or so pixels on each side) with limited color options, the traditional image and graphics usecases of the web and the HTML5 canvas don't work well here.


## Sprites

MicroCanvas uses the [PixelData Image Format](https://github.com/clouduboy/microcanvas-pixeldata/#microcanvas-pixeldata) (or PIF, for short) for embedding graphics into MicroCanvas apps.

```
! invader 9x8
.........
..#...#..
...#.#...
.#######.
##.###.##
#########
#.#.#.#.#
.........
```

To learn more about PixelData sprites, refer to the [Sprites section](/sprites)


## Loading graphics

You may use the `loadGraphics` method on the main MicroCanvas `game` object to load sprites:

```js
const gfxMySprite = game.loadGraphics("image_data_goes_here")
```

By convention, variable names of loaded graphics start with the `gfx` prefix. Graphics loading happens on the global scope (at the top of your code), or in the [`setup()`](/setup) method, but all variable names that store graphics objects need to be declared globally (so, once loaded, they are accessible anywhere in your code).

You can pass in any graphics data that is understood by the library, and your sprite object will be returned, synchronously.

It is customary to use backticks (```) to embed multi-line PIF strings into the code itself to be loaded as graphics as the game loads.


## Using graphics

### Sprite dimensions

### Frames
