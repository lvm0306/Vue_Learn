<template>
    <div>
        <h1>{{info}}</h1>
        <div>
            <h1>{{city}}</h1>
            <h1>{{aaa}}</h1>
            <a href="http://localhost:9000/#/">3333</a>
        </div>
        <el-button @click="login" type="success">确认</el-button>

        <el-button @click="goback" type="primary">主要</el-button>
        <el-button @click="goback2" type="primary">返回2</el-button>
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
        computed:{
            aaa(){
                return this.$store.state.username
            }
        },
        created(){
          this.getdata()
        },
        methods:{
            goback2(){
              this.$router.push('/')
            },
            goback(){
              this.$router.go(-1)
            },
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