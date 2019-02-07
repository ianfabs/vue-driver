# vue-driver.js

    VueDriver is a Vue plugin for driver.js, a tool to help drive the users focus

## Installation

`> npm install vue-driver.js`

## Use

```javascript
import Vue from "vue";
import VueDriver from "vue-driver.js";

Vue.use(VueDriver);

// The rest of your Vue code
...

```

## Directives

### driver-step

Adds `v-driver-step` directive

it accepts an object that is structured like this:

```javascript
{
  popover: {
    title: String,
    description: String,
    position: String,
    showButtons: Boolean,
    closeBtnText: String,
    nextBtnText: String,
    prevBtnText: String
  },
  index: Number,
  onclick: Boolean
}
```
where the object types represent the type of the parameter


*Note: if you specify the same index more than one step, it will choose whichever one binds last to have that position*

#### Example

Without value
```html
<div v-driver-step>
  Hi, I'm some content!
</div>
```

With value
```html
<div v-driver-step="{ popover: {title: 'Hey', description: 'Im a popover'} }">
  Hi, I'm some content!
</div>
```

## Mixins

vue-driver has two mixins as of now

### $startTour( index: Number )

`$startTour` is a component mixin that starts a tour, if you've supplied steps through the `v-driver-step` attribute.

*Note: You must stop event propigation on your button's click event. See [here](https://github.com/kamranahmedse/driver.js/issues/113#issuecomment-403237746) for an example*

#### Example

Bad

```html
<button @click="$startTour">start tour</button>
```
Good

```html
<button @click.stop="$startTour">start tour</button>
```

### $driver

The `$driver` mixin exposes the current driver instance, so that you can use the driver.js api directly till i can write more useful mixins.

