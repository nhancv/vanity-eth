<template>
    <div class="panel">
        <p v-if="error === 'workers_unsupported'">
            Your browser does not support multi-thread computation.<br />
            Please use a different browser.
        </p>

        <div v-if="error === 'insecure_location'">
            <h3>Security alert</h3>

            You are using Vanity-ETH from an unknown website, which could steal your private keys.<br />
            To stay safe, use Vanity-ETH on <a href="https://eth.nhancv.com" target="_blank">eth.nhancv.com</a>, or
            download the latest build <a href="https://github.com/nhancv/vanity-eth" target="_blank">here</a> to use
            offline.
        </div>
        <p v-else v-html="error.replace('\n', '<br>')"></p>
    </div>
</template>

<script>
    export default {
        props: {
            error: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style lang="sass" scoped>
    @import "../css/variables"
    .panel
        background-color: $error
        color: $text-opposite
        a, a:visited, a:hover
            text-decoration: underline
            color: $text-opposite
</style>
