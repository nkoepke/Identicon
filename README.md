![Identicon](https://github.com/nkoepke/Identicon/blob/main/images/Identicon.png?raw=true)

# Identicon
JavaScript variant of GitHub Identicons

[![GitHub latest commit](https://badgen.net/github/last-commit/nkoepke/Identicon/main)](https://GitHub.com/nkoepke/Identicon/commit/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg?logo=javascript)](https://www.javascript.com)

## Identicon class

class `Identicon` (color `string` [optional])

* `grid`
    * Internal representation of the icon.

* `color`
    * Color of the icon as a css color. Default `green`.

* `icon`
    * Icon as SVG string

* `randomize()`
    * Sets new random pattern to `grid`. Returns the `icon` attribute.

## Examlpe

```js
const Identicon = require('./src/identicon.js');
let image = new Identicon("blue");
console.log(image.icon);
// console: 
/*
<svg width="48" height="48" version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect x="11.2" y="3.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="27.2" y="3.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="3.2" y="11.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="11.2" y="11.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="19.2" y="11.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="27.2" y="11.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="35.2" y="11.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="3.2" y="19.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="11.2" y="19.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="19.2" y="19.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="27.2" y="19.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="35.2" y="19.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="11.2" y="27.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="19.2" y="27.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="27.2" y="27.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect><rect x="19.2" y="35.2" width="8" height="8" ry="0" fill="#FFBE0B"></rect></svg>
*/
```

For web browser usage, use as commonJS module or remove ```module.exports = Identicon;``` from the JS file and use it like a regular class.
Then use
```js
let image = new Identicon("blue");
console.log(image.icon);

// Set new color and new random image
image.color = "#e61c1c";
icon.randomize();
console.log(image.icon);
```
