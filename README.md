# jQuery-helpers

## Conventional Arguments

`$el` means you're passing one element. Usually `$el.eq(0)` will be called to make sure we're working with just one.

`$els` means you're passing one or more elements. On a page with many paragraph tags, `$('p')` would be a good example.

## Helper Methods

### `heightOfTallestOf($els)`
This method returns the `height()` of the tallest of the set of elements pass in.

### `getFloatedRows($els)`
Pass in a set of elements and it'll return them to you as an array broken into rows.
It uses `getBoundingClientRect` to avoid triggering a repaint and keeping it fast.

Iterate the resulting array like so:
```javascript
helpers.getFloatedRows($('ul li')).forEach(function ($row) {
  console.log('this is a jQuery object', $row, 'but the array it came from was not');
});
```
