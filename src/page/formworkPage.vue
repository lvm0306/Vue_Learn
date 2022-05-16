<template>
    <div>
        <topBox></topBox>
        <br/>
        <div>
            <pre>2.{{}}+变量的形式 如：城市：city</pre>
        </div>
        <div> 城市：{{city}}
        </div>
        <div>2.原始html <span v-html="rawHtml"></span> </div>

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
                rawHtml: "<span style=\"color: red\">This should be red.</span>",
            }
        },
        name: "formworkPage",
        created() {
            setTimeout(this.getdata,1000)
            // this.getdata()
        },
        methods: {
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