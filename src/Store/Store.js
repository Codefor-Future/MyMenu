import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        total:100,
        menu:[],
        filteredMenuItems:[
            {
                name: 'Burger',
                desc: 'In addition dairy or honey.',
                rate: 100
            },
            {
                name: 'Porata',
                desc: 'In addition, a vegan diet does not include eggs, dairy or honey....',
                rate: 30
            },
            {
                name: 'Manthi',
                desc: 'In addition, a vegan diet does not include eggs, dairy or honey.ignal from ',
                rate: 500
            },
            {
                name: 'Koya',
                desc: 'In addition, a vegan diet does not include eggs, dairy or honey.',
                rate: 10008
            }
        ],
        selectedCatagory:null,
        selectedItems:[]
    },
    actions:{

    },
    
})