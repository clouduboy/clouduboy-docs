# Sprites

MicroCanvas uses the [PixelData Image Format](https://github.com/clouduboy/microcanvas-pixeldata/#microcanvas-pixeldata) (or PIF, for short), a JavaScript library developed in parallel to MicroCanvas for creating and embedding graphics into the MicroCanvas applications.


## The PixelData format

PIF is an easy-to-use text-based image format that makes it possible to embed graphics straight into the source code itself, in the meantime making the graphics easily modifiable without the need for special tools.

The PIF format also supports multi-frame sprites to make embedding animations into MicroCanvas apps easier.

## The PIF library

The PixelData Image Format library comes with an extensive toolbelt of additional tools for previewing, creating and sharing graphics created in the PIF format, as well as built-in support in Clouduboy for converting the file format into binary formats understandable by the underlying microcontroller platforms.


### The PixelData Explorer

The library comes with a bunch of examples which can be viewed in the [PixelData Explorer](//create.clouduboy.org/explorer/). The Explorer can also be used to live-edit the textual format and preview its rendered output.


### The Clouduboy Painter

The [Clouduboy Painter](//create.clouduboy.org/painter/) is a web app that makes creating PIF sprites a breeze. It runs in any browser (desktop or mobile) and allows drawing, editing and transforming of PixelData sprites. It supports multi-frame sprites and color images and can import and export into the PIF image format as well as generate easy-to-share links for sharing the creations made with it.
