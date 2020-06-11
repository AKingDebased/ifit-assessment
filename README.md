## Viewing the page

You can, of course, download this repo and check this out locally by simply opening [`index.html`](/index.html) in any browser. You can also view this site online at [this link](https://ifit-home-page.firebaseapp.com/). I encourage you to open this on mobile devices, as well, so you can see my responsive design.

## Preprocessors, Transpilers, and Packages, Oh My!

* For this project, I'm not using a `package.json`, a CSS preprocessor (like SASS, which I usually _do_ use), or a Babel transpiler (in this case, because all the ES6 features I used are natively supported in all modern browsers). Although I could have turned this into a fully fledged Node project, that seemed wildly out of scope. As such, there are some spots where the code is more repetitive than I'd like it to be. I've commented these spots, by way of acknowledgement. I also wanted to pose a personal challenge to keep the code and mark up as barebones as possible, while still getting the job done well, and quickly.

## Templating with Lodash

* For the card grids, I found I was simply repeating myself too much for my own taste. To that end, I made use of [Lodash](https://lodash.com/)'s extremely useful [_.template](https://lodash.com/docs/4.17.15#template) function. I found myself wanting to reuse code in a programmatic manner, and Lodash's `_.template` function provided me a way to do that without having to import a full on view library, like React. You'll see the HTML templates I created in `script` tags at the bottom of [`index.html`](/index.html).

* Additionally, I wanted to create a system which would allow my (hypothetical) fellow developers to easily add cards to the grids in the future, or create entirely new card grids. To that end, I created a `generateCardGrid` function (found in [`scripts.js`](/js/scripts.js)), which creates HTML for a card grid provided certain arguments. Most importantly, it requires an array of objects representing card data. This is meant to accommodate a hypothetical future where the cards are derived from an endpoint, or other request based source.

## Responsive Navbar

* There were no explicit instructions given as to how to convert the navbar for mobile views. I made the decision to roll up a hamburger menu. While the hamburger menu is a controversial bit of UX, considering the time constraints, I stuck with it. Besides, controversial as it may be, it still finds widespread use.