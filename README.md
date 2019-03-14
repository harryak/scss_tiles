# SCSS tiles
Classes for square (and rectangular) boxes, optionally with some content.

*NOTICE:* The tiles do not have any colors assigned. 

## Usage

Please have a look at the LICENSE file.

### Standard usage

You can just download the `dist/tiles.css` and use it locally right away.

### Advanced usage

Clone this repo and setup gulp to run the gulp tasks (at least `sass-default`).
Change the `src/scss/config.scss` to your likings and use the resulting `dist/tiles.css`.

### Expert usage

Feel free to tinker with the `src/scss/tiles.scss`. If you've found an improvement, send me a pull request.

## Reference

Refer to the `dist/example-##.html` files.

When using SCSS tiles, one has to use a specific HTML structure for it to work:

### Base structure

- A container (e.g. a `<div>`) with class `tiles-container`
  - containing several containers (e.g. a `<div>`) having class `tile` and optionally additional tiling classes
    - containing a container with class `content`
      - containing arbitrary HTML code

E.g.

```html
<div class="tiles-container">
    <div class="tile">
        <div class="content">
            some HTML content
        </div>
    </div>
</div>
```

### Tile classes

All tiles in the `tiles-container` have to have the `tile` base class. Additionally, they can have spanning classes, like `tile-2-1` or `tile-3-3`.

These are named like `tile-<column span>-<row span>`, e.g. `tile-3-2` spans three columns and two rows.

### Colors and background colors

You can easily assign colors to the `.tiles .content`-selector.

This is the intended structure! Do not assign background-colors to the `.tiles`-class (see below for details).

### Background images

The tiles can have full-size background images. Just assign the CSS-property `background-image` on their `content` container.
*DON'T* assign the background to the `tile` container, this breaks the intended structure.

Refer to `dist/example-01.html` for this.