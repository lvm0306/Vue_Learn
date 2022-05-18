<template>
    <div class="topBoxMain">
        <div class="iconBox" @click="$router.go(-1)" v-if="$route.path != '/'">
            <img class="icon" :src="require('../assets/return.png')" />
            <img class="icon act" :src="require('../assets/return-act.png')" />
        </div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
    import routesList from "../router/routesList";
    export default {
        data() {
            return {
                routesList: routesList
            }
        },
        computed: {
            title: function() {
                return this.$route.meta.title;
                // return (this.routesList.filter(v => v.path == this.$route.path)[0] || {meta: { title: "" }}).meta.title;
            }
        },
        created() {
            console.log(this.$router);
            console.log(this.$route);
        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style lang="scss">
    .topBoxMain{
        position: relative;
        width: 100%;
        padding: 14px 0;
        line-height: 1;
        text-align: center;
        background-color: #fff;
        box-shadow: 0 0 6px rgba(0,0,0,0.2);
        z-index: 1;
        .iconBox{
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 8px;
            bottom: 0;
            width: 30px;
            height: 30px;
            margin: auto 0;
            padding: 2px;
            &:hover{
                .icon{
                    display: none;
                    &.act{
                        display: block;
                    }
                }
            }
            .icon{
                width: 100%;
                height: 100%;
                &.act{
                    display: none;
                }
            }
        }
        .title{
            font-size: 14px;
        }
    }
</style>