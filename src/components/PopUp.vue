<template>
    <div class="mask">
        <div class="popUpWraper">
            <!-- close button -->
            <div class="closePopUp" @click="$emit('closePopUp')">
                <div class="barsContainer">
                    <div class="bar1">
                        <div class="bar2"></div>
                    </div>
                </div>
            </div>
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"PopUp"
}
</script>
<style scoped>
    .mask{
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.493);
        position: fixed;
        top: 0;
        left: 0;
    }
    .popUpWraper{
        width: 100%;
        min-height: 40vh;
        background-color: white;
        position: fixed;
        bottom: 0;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
    .closePopUp{
        position: absolute;
        top: -55px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.692);
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
    
    .closePopUp .bar1, .bar2{
        margin: auto;
        width: 15px;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.568);
    }
    .closePopUp .bar1{
        transform: rotate(45deg);
        margin: 24px auto;
    }
    .closePopUp .bar2{
        transform: rotate(-90deg)
    }
</style>


