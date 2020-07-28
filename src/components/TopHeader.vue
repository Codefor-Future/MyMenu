<template>
    <div>
        <div class="d-flex m-0 px-4 py-3" id="topHeader" :class="[topBarColor?'lightTheme':'darkTheme']">
            <div>
                <h1><span class="my">My</span> Menu</h1>
            </div> 
            <div class="text-right">
                <h6 class="total m-0 p-0">Total</h6>
                <h6 class=" m-0 p-0"><span class="total">$</span> <span class="amount">{{totalAmount}}</span></h6>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    name:"TopHeader",
    data:()=>({
        topBarColor:false,
        observer:null
    }),
    computed:{
        totalAmount(){
            //get selected elements from store,
            // add the price and return total bill.

            let total=0;
            let selectedItems=this.$store.state.selectedItems;
            for(let i in selectedItems){
                total=total+selectedItems[i].item.rate*selectedItems[i].count
            }
            return total;
        },
    },
    mounted(){
            var filter=document.getElementById('observe');

            this.observer= new IntersectionObserver((entry)=>{
                if(entry[0].isIntersecting){
                    this.topBarColor=false
                }else{
                    this.topBarColor=true
                }
            }
            ,{threshold:0,rootMargin:"-90px"});
            this.observer.observe(filter);
        }
}
       
</script>

<style scoped>
    #topHeader{
        z-index: 1;
        height: 90px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold;
        font-size: 24px;
        justify-content:space-between;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
    }
    .darkTheme{
        background-color: rgba(10, 0, 0, 0.986);
        color: white;
        transition: color .25s ease-in-out;
    }
    .lightTheme{
        background-color: rgb(255, 255, 255);
        color: rgb(22, 3, 3);
        transition:color .25s ease-in-out;
    }
    .my{
        color: rgba(235, 238, 38, 0.952);
    }
    .total{
        font-size: 12px;
        font-weight: lighter;
    }
    .amount{
        font-size: 27px;
        font-weight: lighter;
    }
</style>

