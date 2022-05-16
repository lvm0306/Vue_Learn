<template>
    <div>
        <el-button @click="goback">上一页</el-button>
        <el-button style="margin-left: 100px" @click="gonext">下一页</el-button>
    </div>
</template>

<script>
    export default {
        name: "nav",
        props: {
            list: { type: Array, default: new Array() }
        },
        methods:{
            goback(){
                // this.$router.go(-1)
                this.$emit("goback", 123)
            },
            gonext(){
                this.$emit("gonext", 321)

            }
        }
    }
</script>

<style scoped>

</style>