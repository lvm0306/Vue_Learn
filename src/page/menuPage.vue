<template>

    <div class="button">
        <el-button type="primary" @click="goCirculate">循环</el-button>
        <br/>
        <br/>
        <el-button type="primary" @click="goFormwork">模板语法</el-button>
        <br/>
        <br/>

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