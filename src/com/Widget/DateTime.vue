<script>

  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  export default {
    mounted() {
      setInterval(() => {
        this.refreshWidget();
      }, 1000);
    },
    data () {
      return {
        time: this.getTime(),
        date: this.getDate()
      };
    },
    methods: {
      getTime() {
        const d = new Date();
        const hh = d.toTimeString().split(' ')[0].split(':')[0];
        const mm = d.toTimeString().split(' ')[0].split(':')[1];
        return hh + ':' + mm;
      },
      getDate() {
        const date = new Date();
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      },
      refreshWidget() {
        this.time = this.getTime();
        this.date = this.getDate();
      }
    }
  }
</script>

<template>
  <div class="time-widget">
    <div id="time-block">
      <h1 class="time">{{ time }}</h1>
      <div class="date">{{ date }}</div>
    </div>
  </div>
</template>

<style scoped>
  .time-widget {
    color: #fff;
    margin-right: 20px;
  }

  .time-widget .date {
    margin-top: 15px;
    margin-left: 4px;
    font-size: 12px;
    display: inline-block;
    font-weight: 200;
    vertical-align: top;
    margin-bottom: 0;
  }

  #time-block {
    display: flex;
    flex-direction: column;
  }

  h1.time {
    font-size: 50px;
    display: inline-block;
    font-weight: 200;
    margin-top: 0;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    vertical-align: top;
    margin-bottom: 0;
    line-height: 40px;
  }

  .date {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
</style>



