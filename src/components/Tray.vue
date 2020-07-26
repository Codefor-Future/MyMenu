<template>
    <div class="tray pt-3"> 
        <div class="" id="filter">
            <select name="catagory" id="" v-model="catagory">
                <option value="veg">Vegitarian</option>
                <option value="non-veg">Non vegitarian</option>
            </select>
            <div class="arrow">
            </div>
        </div>
        <br>
        <div class="menu">
            <FoodItem 
                v-for="i in this.$store.state.filteredMenuItems" 
                :key="i.name" 
                @clicked="selectedItem=i" 
                :itemDetails="i"
            />
            <PopUp v-if="selectedItem" :selectedItem='selectedItem' @closePopUp="selectedItem=null"/>
        </div>
    </div>
</template>

<script>
import FoodItem from './FoodItem.vue'
import PopUp from './PopUp.vue'


export default {
    components:{
        FoodItem,
        PopUp
    },
    name:"Tray",
    data(){
        return{
            catagory:'non-veg',
            selectedItem:null
        }
    },
    computed:{

    },
    methods:{
        
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
        display: flex;
        align-items: center;
        position: sticky;
        top: 15vh;
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
</style>