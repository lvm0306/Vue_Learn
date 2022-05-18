<template>
    <el-container class="mainPage">
        <el-header>
            <topBox :list="list"></topBox>
        </el-header>

        <el-container>

            <el-aside width="200px">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-house"></i>Vue入门</template>
                        <el-menu-item-group>
                            <!--<template slot="title">基础</template>-->
                            <el-menu-item index="1-1" @click="goHost">首页</el-menu-item>
                            <el-menu-item index="1-2" @click="goCirculate">基础</el-menu-item>
                            <el-menu-item index="1-3" @click="goFormwork">模板语法</el-menu-item>
                            <el-menu-item index="1-4"></el-menu-item>

                        </el-menu-item-group>
                        <!--<el-menu-item-group title="分组2">-->
                            <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
                        <!--</el-menu-item-group>-->
                        <!--<el-submenu index="1-4">-->
                            <!--<template slot="title">选项4</template>-->
                            <!--<el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
                        <!--</el-submenu>-->
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-main>
                    <router-view></router-view>

                </el-main>

                <el-footer>
                    <navS @goback="ppp" @gonext="ooo" :list="list"></navS>

                </el-footer>
            </el-container>
        </el-container>
    </el-container>
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
            goHost() {
                this.$router.push('/')
                console.log("goCirculate");
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
    .margin10 {
        top: 20px;
        left: 8px;
        margin: 10px 10px 10px 10px;
        padding: 5px;
    }

    .mainPage {
        min-height: 100vh;
    }

</style>