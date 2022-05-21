<template>

    <div class="button">
        <el-button type="primary" @click="goCirculate">循环</el-button>
        <br/>
        <br/>
        <el-button type="primary" @click="goFormwork">模板语法</el-button>
        <br/>
        <br/>
        <el-button type="primary" @click="gocalcpro">属性计算</el-button>

    </div>
</template>

<script>
    export default {
        name: "menuPage",
        methods: {

            goCirculate() {
                this.$router.push('/circulate')
                console.log("goCirculate");
            },
            goFormwork() {
                this.$router.push('/formwork')
                console.log("formwork");
            },
            gocalcpro() {
                this.$router.push('/calcpro')
                console.log("gocalcpro");
            }
        }
    }
</script>

<style scoped>

    .button {
        top: 20px;
        left: 8px;
        margin: 40px 40px 40px 40px;
        padding: 10px;
    }

</style>