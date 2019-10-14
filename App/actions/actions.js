import C from "../init/constants"
import fetch from 'cross-fetch'

export const requestProjects = () =>({
    type: C.REQUEST_PROJECTS
})
export const requestContacts = () =>({
    type: C.REQUEST_CONTACTS
})

export const getAllProjects = (projects) =>({
    type: C.GET_ALL_PROJECTS,
    projects
})

export const getAllContacts = (contacts) =>({
    type: C.GET_ALL_CONTACTS,
    contacts
})

export const networkDown = () =>({
    type: C.NETWORK_DOWN
})

//Gets all projects from the main site
export function getProjectList(){
    return function(dispatch){

        dispatch(requestProjects)
        
        return fetch(C.BASE_URL+'?token='+C.TMP_TOKEN+'&AC=PR', {
            //return fetch(C.TEST_URL, {
            method: 'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(response=>response.json()
        .then(!response.ok?data=>dispatch(networkDown()):data=>dispatch(getAllProjects(data.projects)))
        //.then(!response.ok?data=>dispatch(networkDown()):data=>console.log(response.text))
        , error => dispatch(networkDown()).then(console.log(error)))
        
        
         
    }


}

//gets all contacts from the main site
export function getContactList(){
    return function(dispatch){

        dispatch(requestContacts)
        
        return fetch(C.BASE_URL+'?token='+C.TMP_TOKEN+'&AC=CR', {
            //return fetch(C.TEST_URL, {
            method: 'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(response=>response.json()
        .then(!response.ok?data=>dispatch(networkDown()):data=>dispatch(getAllContacts(data.contacts)))
        //.then(!response.ok?data=>dispatch(networkDown()):data=>console.log(response.text))
        , error => dispatch(networkDown()).then(console.log(error)))
        
        
         
    }


}

//this is an array_chunking function.  It clearly doesn't belong here.  Still, it stays until I find another place to put it.
export function array_chunk(arr, size){
    if (!Array.isArray(arr)) {
        throw new TypeError('Input should be Array');
      }
    
      if (typeof size !== 'number') {
        throw new TypeError('Size should be a Number');
      }
    
      var result = [];
      for (var i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, size + i));
      }
    
      return result;
}
