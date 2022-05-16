<template>
    <div>
        <topBox :list="list"></topBox>
        <div class="button">
            <el-button  type="primary" @click="goCirculate">循环</el-button>
            <br/>
            <br/>
            <el-button  type="primary" @click="goFormwork">模板语法</el-button>
        </div>
        <navS @goback="ppp" @gonext="ooo" :list="list"></navS>
        <router-view></router-view>

    </div>
</template>

<script>
    import navS from '../components/nav.vue'
    import topBox from '../components/topBox.vue'

    export default {
        components: {
            navS, topBox
        },
        name: "oneIndex"
        ,
        data() {
            return {
                list: []
            }
        },
        methods: {
            ppp(e) {
                console.log(e);
                // this.$router.push('/circulate')
            },
            ooo(e) {

                console.log(e);
            },
            goCirculate() {
                this.$router.push('/circulate')
                console.log("goCirculate");
            },
            goFormwork() {
                this.$router.push('/formwork')
                console.log("formwork");
            }
        }
    }
</script>

<style scoped>
    .button {
        top: 20px;
        left: 8px;
        margin: 40px 40px 40px 40px ;
        padding: 10px;
    }
    .margin10 {
        top: 20px;
        left: 8px;
        margin: 10px 10px 10px 10px ;
        padding: 5px;
    }
</style>