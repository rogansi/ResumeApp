import C from "../init/constants"
import fetch from 'cross-fetch'

export const requestProjects = () =>({
    type: C.REQUEST_PROJECTS
})
export const getAllProjects = () =>({
    type: C.GET_ALL_PROJECTS
})

export const networkDown = () =>({
    type: C.NETWORK_DOWN
})
export function getSnackList(){
    return function(dispatch){

        dispatch(requestProjects)

        return fetch(C.BASE_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                'token': C.TMP_TOKEN
            }
        })
        
        .then(response=>response.json()
        .then(!response.ok?data=>dispatch(networkDown()):data=>dispatch(getAllProjects(data)))
        , error => dispatch(networkDown()))
         
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
