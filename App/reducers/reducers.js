import C from '../init/constants'
 

export const resume = (state={
        projects:[],
        contacts:[]
},action) =>{
    switch(action.type){
        case C.GET_ALL_PROJECTS:
            return  Object.assign({}, state, {
                projects: action.projects
            })

        case C.GET_ALL_CONTACTS:
            return  Object.assign({}, state, {
                contacts: action.contacts
            })

        default:
            return state
    }
}