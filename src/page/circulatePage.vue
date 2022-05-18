<template>
    <div>
        <!--<topBox/>-->
        <div class="margin"></div>
        <div>原生 v-for</div>
        <li  v-for="todo1 in todos" :key="todo1.title"> {{todo1}}</li>
        <div>el卡片 v-for</div>

        <el-card >
            <div slot="header" >
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" @click="deletelast" type="text">删除</el-button>
            </div>
            <div v-for="(o, index) in todos" :key="index" >
                '列表内容 '{{o }}
                {{index}}
            </div>
        </el-card>
    </div>
</template>

<script>
    import navS from '../components/nav.vue'
    import topBox from '../components/topBox.vue'

    export default {
        components: {
            navS, topBox
        },
        name: "circulatePage",
        data() {
            return {
                todos: [
                    {text: '学习 JavaScript'},
                    {text: '学习 Vue'},
                    {text: '整个牛项目'}
                ]
            }
        },
        methods:{
            deletelast(){
                this.todos.splice(0,1)
            }
        }
    }
</script>

<style scoped>

    .margin {
        margin: 0px 40px 40px 40px ;
        padding: 10px;
    }
</style>