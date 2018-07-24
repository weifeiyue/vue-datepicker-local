<template>
<div>
  <vue-datepicker-local v-model="timeRange" format="YYYY-MM-DD HH:mm:ss" :disabled-date="disabledDate" @input="change"/><br/>
  <vue-datepicker-local v-model="timeRange" format="YYYY-MM-DD HH:mm:ss" :disabled-date="disabledDate" :local="local" range-separator="至"/><br/>
  <vue-datepicker-local v-model="timeRange" format="YYYY-MM-DD HH:mm:ss" :disabled-date="disabledDate" :local="local" show-buttons @confirm="selectedDate" clearable @cancel="cancel" @clear="clear"/><br/>
  <vue-datepicker-local v-model="time" format="YYYY-MMM-DD" :local="local" /><br/>
  <vue-datepicker-local v-model="time" format="YYYY-MM" show-buttons @confirm="selectedDate"/><br/>
  <vue-datepicker-local v-model="time" format="YYYY"/><br/>
  <vue-datepicker-local v-model="empty" format="YYYY-MM-DD HH:mm:ss" clearable placeholder="select date"/><br/>
  <vue-datepicker-local v-model="now" disabled/><br/>
  <vue-datepicker-local v-model="timeRange"/><br/>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    const min = new Date(2017, 5, 1, 0, 0, 0)
    const max = new Date(2017, 8, 30, 0, 0, 0)
    const now = new Date()
    return {
      empty: '',
      now: now,
      time: min,
      min: min,
      max: max,
      timeRange: [min, max],
      local: {
        dow: 7, // Sunday is the first day of the week
        hourTip: 'Select Hour', // tip of select hour
        minuteTip: 'Select Minute', // tip of select minute
        secondTip: 'Select Second', // tip of select second
        yearSuffix: '', // suffix of head
        monthsHead: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), // months of head
        months: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), // months of panel
        weeks: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'), // weeks,
        cancelTip: 'Cancel', // text for cancel button for daterange picker
        submitTip: 'Submit' // text for submit button for daterange picker
      }
    }
  },
  methods: {
    disabledDate (time) {
      return time < this.min || time > this.max
    },
    selectedDate (date) {
      console.log('You have been selected:')
      console.log(date)
    },
    clear () {
      console.log('clear')
    },
    cancel () {
      console.log('cancel')
    },
    change (val) {
      console.log(val)
    }
  }
}
</script>
