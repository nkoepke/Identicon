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
const Identicon = require('./identicon.js');
let image = new Identicon("blue");
console.log(image.icon);
// console: 
/*
<svg width="24" height="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="0" width="4" height="4" ry="0" fill="blue"></rect><rect x="0" y="4" width="4" height="4" ry="0" fill="blue"></rect><rect x="16" y="4" width="4" height="4" ry="0" fill="blue"></rect><rect x="0" y="8" width="4" height="4" ry="0" fill="blue"></rect><rect x="4" y="8" width="4" height="4" ry="0" fill="blue"></rect><rect x="12" y="8" width="4" height="4" ry="0" fill="blue"></rect><rect x="16" y="8" width="4" height="4" ry="0" fill="blue"></rect><rect x="0" y="16" width="4" height="4" ry="0" fill="blue"></rect><rect x="4" y="16" width="4" height="4" ry="0" fill="blue"></rect><rect x="8" y="16" width="4" height="4" ry="0" fill="blue"></rect><rect x="12" y="16" width="4" height="4" ry="0" fill="blue"></rect><rect x="16" y="16" width="4" height="4" ry="0" fill="blue"></rect></svg>
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