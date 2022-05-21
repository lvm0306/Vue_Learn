<template>
    <div>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <p>{{fullName}}</p>
    </div>
</template>

<script>
    export default {
        name: "calcproPage",
        data() {
            return {
                message: 'Hello',
                firstName: 'Foo',
                lastName: 'Bar'
            }
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            },
            fullName: {
                // getter
                get: function () {
                    return this.firstName + '-' + this.lastName
                },
                // setter
                set: function (newValue) {
                    var names = newValue.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[names.length - 1]
                }
            }
        }
    }
</script>

<style scoped>

</style>