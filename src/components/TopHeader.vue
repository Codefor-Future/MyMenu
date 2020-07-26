<template>
    <div >
        <div class="d-flex m-0 px-4 py-3 topHeader">
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
    computed:{
        totalAmount(){
            //get selected elements from store,
            // add the price and return total bill.

            return this.$store.state.total;
        }
    }
}
</script>

<style scoped>
    .topHeader{
        z-index: 1;
        height: 15vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold;
        color: white;
        font-size: 24px;
        justify-content:space-between;
        background-color: rgba(10, 0, 0, 0.986);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
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

