import C from '../init/constants'
 

export const resume = (state=C.INITIAL_STATE,action) =>{
    switch(action.type){
        case C.GET_ALL_PROJECTS:
            return  Object.assign({}, state, {
                projects: action.projects
            })

        case C.GET_ALL_CONTACTS:
            return  Object.assign({}, state, {
                contacts: action.contacts
            })
        
        case C.GET_CONTACT:
            return  Object.assign({}, state, {
                 CurrentContact: action.contact[0]
            })
        case C.GET_PROJECT:
            return  Object.assign({}, state, {
                CurrentProject: action.project[0]
            })
        default:
            return state
    }
}