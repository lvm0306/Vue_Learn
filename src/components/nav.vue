<template>
    <div>
        <el-button @click="goback">上一页</el-button>
        <el-button style="margin-left: 100px" @click="gonext">下一页</el-button>
        <!--<el-button v-for="(item, index) in routesList" :key="index" @click="gonext"></el-button>-->

    </div>
</template>

<script>
    import routesList from "../router/routesList";

    export default {
        name: "nav",
        data() {
            return {
                routesList: routesList
            }
        },
        // props: {
        //     list: { type: Array, default: new Array() }
        // },
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