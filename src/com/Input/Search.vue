<script>
  export default {
    data () {
      return {
        text: ''
      };
    },
    methods: {
      search() {
        const url = 'q=' + this.text + '&oq=' + this.text;
        window.open('https://www.google.ru/search?' + url, true);
      }
    }
  }
</script>

<template>
  <input
    type="search"
    v-model="text"
    placeholder="Google Search..."
    @keyup.enter="search"
  >
</template>

<style scoped>
  input {
    width: 300px;
    padding: 9px 10px;
    border: 1px solid #eee;
    -webkit-appearance: none;
    border-radius: 4px;
    font-size: 20px;
    color: #4a4a4a;
  }

  input:focus {
    outline: none;
  }
</style>



