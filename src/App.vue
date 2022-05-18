<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<LoveSosoi msg="Welcome to Your Vue.js App"/>-->
        <router-view/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import LoveSosoi from './components/LoveSosoi.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            LoveSosoi

        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
