<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 address">
                    Tips:
                    <a
                        :href="`https://etherscan.io/address/${tipsAddress}#tokentxns`"
                        target="_blank"
                        v-text="tipsAddress"
                    ></a>
                </div>
                <div class="col-12 col-lg-6 links">
                    <a :href="`https://etherscan.io/address/${tipsAddress}`" target="_blank">
                        <i class="icon-ethereum"></i>&nbsp;&nbsp;&nbsp;Donate
                    </a>
                    <a href="https://github.com/nhancv/vanity-eth" target="_blank">
                        <i class="icon-star"></i>&nbsp;&nbsp;&nbsp;Star&nbsp;me
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data: function () {
            return {
                tipsAddress: '0x588d48ba59e3d19f6e5145764059d3a606e67d36',
            };
        },
    };
</script>

<style lang="sass" scoped>
    @import "../css/variables"
    footer
        padding: 1rem 0 0.5rem
        background-color: $panel-background
        color: $text-alt
        a
            text-decoration: none
        .address
            margin-bottom: 20px
            color: $text
            a
                font-family: $monospace-font
                margin-left: 15px
                word-break: break-all
        .links
            text-align: right
            a
                margin-right: 30px
                padding-bottom: 2px
                i
                    font-size: 1.2em

    @media screen and (max-width: 480px)
        footer
            padding-bottom: 1em
</style>
