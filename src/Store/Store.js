import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        total:100,
        menu:[],
        filteredMenuItems:[
            {
                name: 'Tandoori Lamb Chops',
                desc: 'Lamb chops marinated in strained yogurt and flavoursome masalas. Cooked till tender, this dish is guaranteed to impress.',
                rate: 100,
                id:1,
                cat:"non-veg"
            },
            {
                name: 'Keema Samosa with Yoghurt Dip',
                desc: 'Make this ultimate Punjabi snack from scratch. Dough pockets stuffed with keema masala mixture',
                rate: 30,
                id:2,
                cat:"non-veg"
            },
            {
                name: 'Butter Chicken',
                desc: 'Keeping the classic at the last! ',
                rate: 500,
                id:3,
                cat:"non-veg"
            },
            {
                name: 'Chicken 65',
                desc: 'Chicken 65 is said to have originated in Madras (Chennai). ',
                rate: 10008,
                id:4,
                cat:"non-veg"
            },
            {
                name: 'Malabar Fish Biryani',
                desc: 'This classic Malabar Fish Biryani can be devoured at all times. Enjoy the delicious taste of this ever-charming dish.',
                rate: 30,
                id:5,
                cat:"non-veg"
            },
            {
                name: 'Pina Colada Pork Ribs',
                desc: 'The ingredients of the popular rum-based cocktail team up with pork ribs to create a lip-smacking treat.',
                rate: 500,
                id:6,
                cat:"non-veg"
            },
            {
                name: 'Mutton Korma',
                desc: 'A flavourful mutton curry, where the meat is stirred with curd, garlic-ginger paste, cloves, cardamom and cinnamon sticks.',
                rate: 10,
                id:7,
                cat:"non-veg"
            }
        ],
        selectedCatagory:null,
        selectedItems:[]
    },
    actions:{

    },
    
})