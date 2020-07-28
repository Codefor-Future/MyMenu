<template>
    <div class="d-flex mx-auto my-2 foodItem" @click="$emit('clicked')">
        <div class="image mr-1">
            <img :src="itemDetails.image" alt="Food" class="foodImage">
        </div>
        <div class="details ml-1">
            <p class="foodName">{{itemDetails.name}}</p>
            <br>
            <p class="desc">
                {{itemDetails.desc}}
            </p>
            <div class="priceTag">
                ${{itemDetails.rate}}
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
    props:{
        itemDetails:Object
    },
    name:"FoodItem"
}
</script>

<style scoped>
    .foodItem{
        width: 90%;
        min-height: 100px;
        align-items: center;
        flex-wrap: nowrap;
        padding: 10px;
        background-color: #F3F3F3;
        border-radius: 6px;
    }
    .image{
        flex: 1;
    }
    img{
        border-radius: 5px;
    }
    .foodImage{
        width: 100%;
        object-fit: cover;
    }
    .details{
        flex: 3;
        text-align: right;
    }
    .priceTag{
        background-color: #25ED04;
        padding: 1px 4px 1px 4px;
        color: white;
        display: inline;
        border-radius: 5px;
        font-weight: bold;
    }
    .foodName{
        display: inline;
        font-size: 17px;
        color: #230C0C;
    }
    .desc{
        margin-top: 7px;
        display: block;
        color: rgba(35, 12, 12, 0.534);
        font-size: 13px;
        line-height: .9rem;
    }
</style>
