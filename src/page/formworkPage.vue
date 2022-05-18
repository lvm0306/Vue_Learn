<template>
    <div>
        <!--<topBox></topBox>-->
        <!--<br/>-->
        <div>
            <pre>1.{{}}+变量的形式 如：城市：city</pre>
        </div>
        <div> 城市：{{city}}
        </div>
        <hr>
        <div>2.原始html <span v-html="rawHtml"></span></div>
        <hr>
        <div>3.:bind 单向绑定</div>
        <hr>
        <div v-bind:id="dynamicId">{{dynamicText}}</div>
        <el-button v-bind:id="dynamicId" @click="vbind">修改单向绑定</el-button>
        <hr>
        <div> 4.使用 JavaScript 表达式</div>
        <div> {{ number + 1 }}

            {{ ok ? 'YES' : 'NO' }}

            {{ // message.split('').reverse().join('') }}
        </div>
    </div>
</template>

<script>

    import navS from '../components/nav.vue'
    import topBox from '../components/topBox.vue'

    export default {
        components: {
            navS, topBox
        },
        data() {
            return {
                city: "",
                info: "",
                dynamicId: false,
                num: 1,
                ok: true,
                dynamicText: "zifuchuan",
                rawHtml: "<span style=\"color: red\">This should be red.</span>",
            }
        },
        name: "formworkPage",
        created() {
            setTimeout(this.getdata, 1000)
            // this.getdata()
        },
        methods: {
            vbind() {
                this.dynamicText += "1"
                this.dynamicId = !this.dynamicId
                console.log(this.dynamicText)
                console.log(this.dynamicId)
            },
            getdata() {
                this.$http({
                    url: 'http://wthrcdn.etouch.cn/weather_mini?city=%E5%A4%A7%E8%BF%9E',
                    method: "get",
                    body: {}

                }).then(res => {
                    console.log(res)
                    this.city = res.data.data.city
                    this.info = res.data.data.ganmao
                })
            }
        }
    }
</script>

<style scoped>

    .margin {
        margin: 0px 40px 40px 40px;
        padding: 10px;
    }
</style>