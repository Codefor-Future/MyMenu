<template>
    <section class="d-inline">
            <div class="image">
                <img :src="selectedItem.item.image" alt="Food" class="foodImage">
            </div>
            <div class="details">
                <div class="nameAndDesc">
                    <p class="foodName">{{selectedItem.item.name}}</p>
                    <br>
                    <p class="desc">
                        {{selectedItem.item.desc}}
                    </p>
                </div>
                <div class="priceTag">
                    ${{selectedItem.item.rate}}
                </div>
            </div>
            <div class="count d-flex">
                <div class="name">Quantity</div>
                <div class="minus" @click="quantity=quantity-1" v-show="quantity>0">-</div>
                <div class="quantity">{{quantity}}</div>
                <div class="plus" @click="quantity=quantity+1">+</div>
            </div>
            <div class="save">
                <button @click="addItem(selectedItem)" :class="{activeButton:quantity>0}">Add</button>
            </div>
    </section>
</template>

<script>
export default {
    name:"SelectedFood",
    data:()=>({
        quantity:0
    }),
    props:{
        selectedItem:Object
    },
    mounted(){
        if(this.selectedItem.count){
            this.quantity=this.selectedItem.count
        }
    },
    methods:{
        addItem(item){
            item.count=this.quantity;
            if(!item.count) {
                let array=this.$store.state.selectedItems;
                for(let i in array){
                    if(array[i].item.id===item.item.id){
                        array.splice(i,1);
                        this.$store.state.selectedItems=array
                        this.$parent.$emit('closePopUp');
                        return;
                    }
                }
            }
            if(item.count){
                let array=this.$store.state.selectedItems;
                for(let i in array){
                    if(array[i].item.id===item.item.id){
                        array[i].count=item.count;
                        this.$store.state.selectedItems=array
                        this.$parent.$emit('closePopUp');
                        return;
                    }
                }
                this.$store.state.selectedItems.push({item:item.item,count:this.quantity})
                
            }
            this.$parent.$emit('closePopUp');
            
            //Not a correct way !!!!!!
        }
    }
}
</script>

<style scoped>
    .image{
        height: 110px;
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
        max-height: 30%;
        display: flex;
        text-align: left;
        align-items: baseline;
        padding: 0;
        margin: 15px auto 0 auto;
    }
    .nameAndDesc{
        flex: 3;
    }
    .priceTag{
        animation: vibrate 3s infinite;
        flex: 1;
        text-align: center;
        background-color: #25ED04;
        padding: 1px 4px 1px 4px;
        color: white;
        display: inline;
        border-radius: 5px;
        font-weight: bold;
        margin: 0;
    }
    @keyframes vibrate {
        0%{
            transform: translateX(0px)
        }
        2%{
            transform: translateX(-2px)
        }
        4%{
            transform: translateX(0px)
        }
        6%{
            transform: translateX(2px)
        }
        8%{
            transform: translateX(0px)
        }
        10%{
            transform: translateX(-2px)
        }
        12%{
            transform: translateX(0px)
        }
        14%{
            transform: translateX(2px)
        }
        16%{
            transform: translateX(0px)
        }
        
    }
    .count{
        background-color: #F2F2F2;
        height: 40px;
        width: 80%;
        margin:0 auto;
        /* padding:6px 0 0 6px; */
        line-height: 40px;
        text-align: center;
    }
    .foodName{
        font-size: 20px;
        padding: 0;
        margin: 0;
    }
    .desc{
        color: rgba(35, 12, 12, 0.534);
        font-size: 13px;
        line-height: .9rem;
        margin: 0;
        margin-bottom: 10px;
        padding: 0;
    }
    .name{
        flex: 5;
        font-size: 17px;
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
        padding: 5px 85px;
        margin: 15px;
        border-radius: 3px;
    }
    .activeButton{
        background-color: #EAEE26;
    }
    
</style>
