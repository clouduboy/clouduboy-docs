# Loop

The `loop` is the function that will house most of the game logic you will write. The code in this function is executed several times a second to provide you the baseline for writing your game.

## Framerate

Exactly how many times the `loop` function will be executed in a second depends on multiple factors. Most devices and the browser will make "best effort" to execute the loop code 60 times per second (~16.7 milliseconds). Most modern PCs/browsers won't have a problem achieving this performance, even for complicated games, but when the code is compiled and run on slower (such as the Arduboy) you might see a noticable slowdown as the device tries (and fails) to keep up with the complexity/computational load of your game. In these situations you might want to revisit your game logic and simplify or optimize parts of your code to make sure it can deliver an optimal experience on the physical device as well. For Arduboy-related performance issues, testing with the [Project ABE emulator](https://felipemanga.github.io/ProjectABE/) might save you considerable amount of time wasted on re-flashing an actual physical device.
