<template>
  <div id="app">
    <button @click.stop="startTour" class="button"> Start Tour </button>
    <div class="card" v-driver-step="steps[0]">
      This div is a driver step!
    </div>
    <div id="garbage" class="card" v-driver-step="steps[2]">
      So is this one
    </div>
    <div id="case" class="card" v-driver-step="steps[1]">
      And this one!
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      steps: [
        {
          popover: {
            title: 'Hello World!',
            description: 'VueDriver is a Vue.js plugin that wraps around driver.js, a library that helps drive the users focus'
          },
          index: 0
        },
        {
          popover: {
            title: 'Driver is great for running user tutorials!',
            description: 'Because it lets you draw attention to the important parts of your site',
            position: 'top-right'
          },
          index: 1
        },
        {
          popover: {
            title: 'You can use <b>HTML</b>!!',
            description: 'Driver <i>natively</i> supports it!',
            position: 'bottom-center'
          },
          index: 2
        }
      ]
    }
  },
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
