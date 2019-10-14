import C from '../init/constants'
 

export const resume = (state={
        projects:[],
        contacts:[]
},action) =>{
    switch(action.type){
        case C.GET_ALL_PROJECTS:
            console.log(action.contacts)
            return  Object.assign({}, state, {
                projects: action.contacts
            })

        default:
            return state
    }
}