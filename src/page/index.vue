<template>
    <div>
        <router-view/>
        <!--<el-input v-model="bbb"></el-input>-->
        <!--<div>9999{{aaa}}0000</div>-->
        <!--<el-button @click="gonext">跳转</el-button>-->
        <!--<el-button @click="changes">11111</el-button>-->
    </div>

</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                bbb: ""
            }
        },
        computed:{
          aaa(){
              return this.$store.state.username
          }
        },
        methods:{
            gonext(){
                this.$router.push('/love')
            },
            changes() {
                this.$store.commit("setinfo",this.bbb)
            }
        }
    }
</script>

<style scoped>

</style>