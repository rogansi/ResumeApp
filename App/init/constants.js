const  constants = {
    //initial State
    INITIAL_STATE:[{
        Projects:[],
        Contacts:[]
    }],
    
    //authorization and urls
    BASE_URL: "https://josephtapper.org/Resume/api/action/",
    TEST_URL: "https://josephtapper.org/Resume/api/action/test.php",
    TMP_TOKEN: "ZQcCxHqXNUqAgqf5zIV0",

    //Action Definitions
    GET_ALL_PROJECTS: "GET_ALL_PROJECTS",
    REQUEST_PROJECTS: "REQUEST_PROJECTS",
    REQUEST_CONTACTS: "REQUEST_CONTACTS",
    NETWORK_DOWN:"NETWORK_DOWN",
    GET_PROJECT: "GET_PROJECT",
    GET_ALL_SKILLS: "GET_ALL_SKILLS",
    GET_ALL_CONTACTS: "GET_ALL_CONTACTS"
    
}

export default constants