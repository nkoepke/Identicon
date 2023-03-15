![Identicon](https://github.com/nkoepke/Identicon/blob/main/images/Identicon.png?raw=true)

# Identicon
JavaScript variant of GitHub Identicons

[![GitHub latest commit](https://badgen.net/github/last-commit/nkoepke/Identicon/main)](https://GitHub.com/nkoepke/Identicon/commit/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg?logo=javascript)](https://www.javascript.com)

## Identicon class

class `Identicon` (options [optional] `object`)

### Options (Constructor)

* color `string` [optional]

* backgroundColor `string` [optional]

* seed `string` [optional] (String of any length to set a specific color for `color`. For example the seed "Test" will always set the color to green.)

You don't have to set the colors in the constructor. You can always change them by setting the attributes after the initialization of the object.

### Attributes

* `grid`
    * Internal representation of the icon as a two dimensional array.

* `color`
    * Color of the icon as a css color. Default `green`.

* `backgroundColor`
    * Color of the icon as a css color. Default `transparent`.

### Methods

* `render()`
    * Icon as SVG string.

* `randomize()`
    * Sets new random pattern to `grid`. Returns the `render()` Method.

## Examlpe

```js
const Identicon = require('./src/identicon.js');
let image = new Identicon({color: "purple", backgroundColor: "white"});
console.log(image.render());
```

For web browser usage, use as commonJS module or remove ```module.exports = Identicon;``` from the JS file and use it like a regular class.
Then use
```js
let image = new Identicon();
console.log(image.render());

// Set new color and new random image
image.color = "#e61c1c";
icon.randomize();
console.log(image.render());
```