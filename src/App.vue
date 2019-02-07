<template>
  <div id="app">
    <button @click.stop="startTour"> Start Tour </button>
    <div class="card" v-driver-step="{ popover: {title: 'Hello'}, onclick: true }">
      This div is a driver step!
    </div>
    <div id="garbage" class="card" v-driver-step="{ popover: {title: 'World', description: 'This is a description'} }">
      So is this one
    </div>
    <div id="case" class="card" v-driver-step="{ popover: {title: 'im out of order!'}, index: 0 }">
      And this one!
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    startTour () {
      this.$startTour()
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
}
.card {
  width: 500px;
  height: max-content;
  padding: 20px 10px;
  margin: 20px 10px;
  box-shadow: 0px 1px 5px -1px #000;
  border-radius: 5px;
  text-align: center;
}
</style>
