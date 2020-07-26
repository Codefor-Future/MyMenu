import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        total:0,
        menu:[],
        filteredMenuItems:[
            {
                name: 'Burger',
                desc: '[HMR] Waiting for update signal from WDS...',
                rate: 100
            },
            {
                name: 'Porata',
                desc: '[HMR] Waiting for update s...',
                rate: 30
            },
            {
                name: 'Manthi',
                desc: '[HMR] Waiting for update signal from WDS..jkdfj aljdo.',
                rate: 500
            },
            {
                name: 'Koya',
                desc: '[HMR] Waiting for update signal from WDS...',
                rate: 10008
            }
        ],
        selectedCatagory:null,
        selectedItems:[]
    },
    actions:{

    },
    
})