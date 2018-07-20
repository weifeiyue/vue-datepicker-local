# vue-datepicker-local

### A Beautiful Datepicker Component For Vue2
* Lightweight (less than 5kb minified and gzipped)
* Only dependencies Vue
* Beautiful!

![image](https://raw.githubusercontent.com/weifeiyue/vue-datepicker-local/gh-pages/preview.png)

## Demo
[https://weifeiyue.github.io/vue-datepicker-local/](https://weifeiyue.github.io/vue-datepicker-local/)

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
    <vue-datepicker-local v-model="time"></vue-datepicker-local>
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
### Props

| Prop           | Description                                      | Type       | Default            |
|:---------------|:-------------------------------------------------|:-----------|:-------------------|
| v-model        | dates to be manipulated                          | Date/Array | --                 |
| name           | name for input                                   | String     | --                 |
| type           | type for input (inline/normal)                   | String     | normal             |
| inputClass     | custom class name for input                      | String     | --                 |
| popupClass     | custom class name for popup                      | String     | --                 |
| disabled       | determine whether the DatePicker is disabled     | Boolean    | false              |
| clearable      | clear the date                                   | Boolean    | false              |
| rangeSeparator | range separator                                  | String     | "~"                |
| format         | to set the date format                           | String     | "YYYY-MM-DD"       |
| local          | the local of the DatePicker                      | Object     | {<br/>dow: 1, // Monday is the first day of the week<br/>hourTip: '选择小时', // tip of select hour<br/>minuteTip: '选择分钟', // tip of select minute<br/>secondTip: '选择秒数', // tip of select second<br/>yearSuffix: '年', // format of head<br/>monthsHead: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'), // months of head<br/>months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'), // months of panel<br/>weeks: '一_二_三_四_五_六_日'.split('_'), // weeks<br/> cancelTip: '取消', // default text for cancel button <br />, submitTip: '提交' // default text for submit button <br />}                 |
| disabledDate | specify the date that cannot be selected         | Function   | (time, format)=>{return false} |
| showButtons  | show Cancel/Submit buttons                       | Boolean  | false              |
| placeholder	 | placeholder of Input | String     | --                 |

### Events

| Event Name     | Description                                      |  Parameters                          |
|:---------------|:-------------------------------------------------|:-------------------------------------|
| confirm        |triggers when user confirms                       |  the value component's binding value |
| cancel         |triggers when user click the cancel button        | --                                   |
| clear          |triggers when user click the clear button         | --                                   |
## License
vue-datepicker-local is licensed under [The MIT License](LICENSE).
