# vue-datepicker-local

### A Beautiful Datepicker Component For Vue2
* Lightweight (less than 4kb minified and gzipped)
* Only dependencies Vue
* Beautiful!

## Usage

### Install

```bash
$ npm install vue-datepicker-local
```

### ES6
```html
<template>
  <vue-datepicker-local v-model="time" />
</template>

<script>
import VueDatepickerLocal from 'vue-datepicker-local'

export default {
  components: {
    VueDatepickerLocal
  },
  data () {
    return {
      time: new Date()
    }
  }
}
</script>
```

### Browser globals
The `dist` folder contains `vue-datepicker-local.js` and `vue-datepicker-local.css`.
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/vue-datepicker-local.css">
</head>
<body>
  <div id="app">
    <vue-datepicker-local></vue-datepicker-local>
  </div>
  <script src="path/to/vue.js"></script>
  <script src="path/to/vue-datepicker-local.js"></script>
  <script>
    new Vue({
      el: "#app",
      data: {
        time: new Date()
      }
    })
  </script>
</body>
</html>

```

## License
vue-strap is licensed under [The MIT License](LICENSE).
