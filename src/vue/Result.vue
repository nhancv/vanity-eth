<template>
    <div class="panel result">
        <div class="row">
            <div class="float-left" id="identicon"></div>
            <div class="col">
                <div>
                    <span @click="copyToClipboard(0)">Address:</span><span class="output" v-text="address"></span>
                </div>
                <div>
                    <span @click="copyToClipboard(1)">Private key:</span>
                    <span
                        class="output"
                        v-if="privateKey"
                        v-text="reveal ? privateKey : 'Click to reveal'"
                        @click="revealKey(1)"
                    ></span>
                </div>
                <div v-if="mnemonic">
                    <span @click="copyToClipboard(2)">Mnemomic:</span>
                    <span class="output" v-text="revealHD ? mnemonic : 'Click to reveal'" @click="revealKey(2)"></span>
                </div>
            </div>
            <div class="col-lg-2 col-12">
                <button data-remodal-target="modal" class="save button-large" :disabled="!privateKey">
                    <i class="icon-lock"></i>&nbsp;&nbsp;&nbsp;Save
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import * as blockies from 'blockies';

    export default {
        props: {
            address: String,
            mnemonic: String,
            privateKey: String,
        },
        data: function () {
            return {
                reveal: false,
                revealHD: false,
                clearCBTimeout: false,
            };
        },
        watch: {
            address(addr) {
                this.reveal = false;
                this.revealHD = false;
                const id = document.getElementById('identicon');
                id.innerHTML = '';
                if (addr) {
                    id.appendChild(blockies({ seed: addr.toLocaleLowerCase(), scale: 6 }));
                }
            },
        },
        methods: {
            revealKey(id) {
                switch (id) {
                    case 1: // private key
                        this.reveal = !this.reveal;
                        break;
                    case 2: // mnemonic
                        this.revealHD = !this.revealHD;
                        break;
                }
                this.$clipboard(' ');
            },
            copyToClipboard(id) {
                let text;
                let idName;
                switch (id) {
                    case 0: // address
                        text = this.address;
                        idName = 'address';
                        break;
                    case 1: // private key
                        text = this.privateKey;
                        idName = 'private key';
                        break;
                    case 2: // mnemonic
                        text = this.mnemonic;
                        idName = 'mnemonic';
                        break;
                }
                if (text) {
                    this.$clipboard(text)
                        .then(() => {
                            Vue.$toast.open(`Copied ${idName} to clipboard`);

                            // Auto clear clipboard after 30s
                            if (this.clearCBTimeout) clearTimeout(this.clearCBTimeout);
                            this.clearCBTimeout = setTimeout(() => {
                                this.$clipboard(' ');
                            }, 30_000);
                        })
                        .catch(() => {
                            Vue.$toast.open({
                                message: `Unable to copy to clipboard`,
                                type: 'error',
                            });
                        });
                }
            },
        },
    };
</script>

<style lang="sass" scoped>
    @import "../css/variables"
    #identicon
        width: 48px
        height: 48px
        margin: 0 15px
        background-color: $panel-background-alt

    .output
        font-family: $monospace-font
        color: $text-alt
        margin-left: 15px
        word-break: break-all
        font-size: 15px

    .panel > div:not(:last-child)
        margin-bottom: 15px

    .save
        margin-top: 30px

    @media screen and (min-width: 992px)
        .save
            margin-top: 0
</style>
