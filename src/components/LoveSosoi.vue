<template>
    <div>
        <h1>{{info}}</h1>
        <div>
            <h1>{{city}}</h1>
        </div>
        <el-button @click="login" type="success">确认</el-button>

        <el-button @click="login" type="primary">主要</el-button>
    </div>
</template>

<script>
    export default {
        name: "LoveSosoi",
        data(){
            return {
                city:"",
                info:"",
            }
        },
        created(){
          this.getdata()
        },
        methods:{
            login(){
                console.log('点击了按钮')
            },
            getdata(){
                this.$http({
                    url:'http://wthrcdn.etouch.cn/weather_mini?city=%E5%A4%A7%E8%BF%9E',
                    method:"get",
                    body:{

                    }

                }).then(res=>{
                    console.log(res)
                    this.city=res.data.data.city
                    this.info=res.data.data.ganmao
                })
            }
        }
    }
</script>


<style scoped>

</style>