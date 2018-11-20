# Setup

The `setup` function is used to prepare your game before it's first run. This could include placing enemies, filling up health/lives of the player and resetting the score. The setup function is executed at the start of every game after loading.

The main difference between setting variable starting values in the global initializers versus setting them in the `setup` function is that the setup function is re-run whenever the custom MicroCanvas method `reset` is called by the code. This allows you to reset the game state (and effectively start a new game) without too much hassle (e.g. after the player has lost all lives, or has been defeated).
