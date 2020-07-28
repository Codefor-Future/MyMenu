<template>
    <div class="tray pt-3">
        <div class="yourOrders" v-if="yourOrder.length">
            <!-- <p class="yourOrderLabel">Your Orders</p> -->
            <span
                v-for="i in yourOrder"
                :key="i.item.name"
                @click="selectedItem={item:i.item,count:i.count}"
            >
                #{{`${i.item.name}(${i.count})`}}
            </span>
        </div>
        <div id="observe" style="height:1px"></div>
        <div class="" id="filter">
            <select name="catagory" id="" v-model="catagory">
                <option value="veg">Vegetarian</option>
                <option value="non-veg">Non-Vegetarian</option>
            </select>
            <div class="arrow">
            </div>
        </div>
        <br>
        <div class="menu">
            <FoodItem 
                v-for="i in filteredItems" 
                :key="i.id" 
                @clicked="selectedItem={item:i,count:0}" 
                :itemDetails="i"
            />
            <PopUp v-if="selectedItem" @closePopUp="selectedItem=null">
                <SelectedFood slot="content" :selectedItem='selectedItem' @closePopUp="$emit('closePopUp')"/>
            </PopUp>
        </div>
    </div>
</template>

<script>
import FoodItem from './FoodItem.vue'
import PopUp from './PopUp.vue'
import SelectedFood from './SelectedFood.vue'


export default {
    components:{
        FoodItem,
        PopUp,
        SelectedFood
    },
    name:"Tray",
    data(){
        return{
            catagory:'non-veg',
            selectedItem:null
        }
    },
    computed:{
        yourOrder(){
            //access selectedItems from store and return
            return(
                this.$store.state.selectedItems
            )
        },
        filteredItems(){
            let selectedCat=this.$store.state.selectedCatagory
            return(
                this.$store.state.MenuItems.filter(function (item){
                    return item.cat===selectedCat
                })
            )
                
        }
    },
    methods:{
        
    },
    watch:{
        catagory(value){
            this.$store.state.selectedCatagory=value
        }
    }
}
</script>

<style scoped>
    .tray{
        background-color: rgb(255, 255, 255);
        min-height: 40vh;
        position: relative;
        top: 60vh;
        /* overflow-x: scroll; */
        border-top-right-radius: 18px;
        border-top-left-radius: 18px;
    }
    #filter{
        height: 45px;
        display: flex;
        align-items: center;
        position: sticky;
        top: 90px;
        font-weight: bolder;
        font-size: 15px;
        background-color: rgb(255, 255, 255);
    }
    select { 
                appearance: none; 
                outline: 0; 
                background: rgba(255, 255, 255, 0.952); 
                background-image: none; 
                width: 100%; 
                height: 100%; 
                color: rgba(33, 34, 3, 0.575); 
                font-weight: bolder;
                cursor: pointer; 
                border: none;
                padding: 10px;
            } 
            #filter { 
                overflow: hidden;  
            } 
    .arrow{
        margin:18px auto auto -30px;
        border: 6px solid rgba(0, 0, 0, 0);
        border-top: 6px solid rgba(13, 14, 1, 0.479);
    }
    .yourOrders{
        width: 90%;
        min-height: 70px;
        background-color: #F3F3F3;
        margin: 0 auto;
        border-radius: 6px;
        padding: 10px;
        font-size: .75rem;
        line-height: .7rem;
        color: rgba(0, 0, 0, 0.623);
    }
</style>