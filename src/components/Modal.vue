<template>
    <div class="modal_content" ref="modal_content">
        <div class="mod">
            <slot></slot>
            <button
            @click="closeModal"
            >close</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "my-modal",
    methods: {
        closeModal() {
            this.$emit("closeModal")
        }
    },
    mounted() {
        let vm = this;
        document.addEventListener('click', function(item){
            if (item.target===vm.$refs["modal_content"]) {
                vm.closeModal()
            }
        })
    }
}
</script>

<style scoped>
.modal_content {
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: rgb(203, 219, 203, 0.5);
}
.mod {
position: fixed;
margin: auto;
left: 0;
right: 0;
top: 0;
bottom: 0;
padding: 20px;
width: 600px;
height: 570px;
background: #ebe6e6;
border: 2px solid #002F34;
border-radius: 6px;
z-index: 9999;
}
button {
    border: 2px solid rgb(255, 93, 93);
    border-radius: 4px;
    background-color: rgb(255, 93, 93);
}
</style>