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
            <div class="image">
                <img src="../assets/burger.jpg" alt="Food" class="foodImage">
            </div>
            <div class="details">
                <div class="nameAndDesc">
                    <p class="foodName">{{selectedItem.name}}</p>
                    <br>
                    <p class="desc">
                        {{selectedItem.desc}}
                    </p>
                </div>
                <div class="priceTag">
                    ${{selectedItem.rate}}
                </div>
            </div>
            <div class="count d-flex">
                <div class="name">Quantity</div>
                <div class="minus" @click="quantity=quantity-1" v-show="quantity>0">-</div>
                <div class="quantity">{{quantity}}</div>
                <div class="plus" @click="quantity=quantity+1">+</div>
            </div>
            <div class="save">
                <button :class="{activeButton:quantity>0}">Add</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"PopUp",
    data:()=>({
        quantity:0
    }),
    props:{
        selectedItem:Object
    }
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
        height: 55vh;
        background-color: white;
        position: fixed;
        bottom: 0;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;

    }
    .image{
        height: 40%;
    }
    .foodImage{
        margin: 5%;
        width: 90%;
        height: 100%;
        display: block;
        object-fit: cover;
        border-radius: 11px;
    }
    .details{
        width: 90%;
        min-height: 20%;
        display: flex;
        text-align: left;
        align-items: baseline;
        padding: auto;
        margin: 20px auto 0 auto;
    }
    .nameAndDesc{
        flex: 3;
    }
    .priceTag{
        flex: 1;
        text-align: center;
    }
    .count{
        background-color: #F2F2F2;
        height: 35px;
        width: 80%;
        margin:auto;
        /* padding:6px 0 0 6px; */
        line-height: 35px;
        text-align: center;
    }
    .name{
        flex: 5;
        font-size: 15px;
    }
    .minus{
        flex:1;
        font-size: 18px;
    }
    .minus:hover{
        background-color: rgba(184, 179, 179, 0.39);
    }
    .quantity{
        flex:1;
        font-size:21px
    }
    .plus{
        flex:1;
        font-size: 18px;
    }
    .plus:hover{
        background-color: rgba(184, 179, 179, 0.39);
    }
    .save{
       text-align: center;
    }
    .save button{
        font-weight: bold;
        font-size: 13px;
        border:none;
        padding: 5px 70px;
        margin: 15px;
        border-radius: 3px;
        /* background-color: rgba(235, 238, 38, 0.445); */

    }
    .activeButton{
        background-color: #EAEE26;
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


