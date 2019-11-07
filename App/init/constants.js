import token from './token'
const  constants = {
    //initial State
    INITIAL_STATE:{
        CurrentProject:{},
        CurrentContact:{},
        projects:[],
        contacts:[],
        NetworkDown: false
    },
    APP_CONTENT_STATE:{
        BadToken: false,
        Displayed: "Home",
        PreviouslyDisplayed: "Home",
    },
    //authorization and urls
    BASE_URL: "https://josephtapper.org/Resume/api/action/",
    TEST_URL: "https://josephtapper.org/Resume/api/action/test.php",
    TMP_TOKEN: token,

    //Action Definitions
    GET_ALL_PROJECTS: "GET_ALL_PROJECTS",
    REQUEST_PROJECTS: "REQUEST_PROJECTS",
    REQUEST_CONTACTS: "REQUEST_CONTACTS",
    NETWORK_DOWN:"NETWORK_DOWN",
    GET_PROJECT: "GET_PROJECT",
    GET_ALL_SKILLS: "GET_ALL_SKILLS",
    GET_ALL_CONTACTS: "GET_ALL_CONTACTS",
    GET_CONTACT: "GET_CONTACT",
    GET_PROJECT: "GET_PROJECT",
    SET_CONTENT_PROJECTS: "SET_CONTENT_PROJECTS",
    BAD_TOKEN:"BAD_TOKEN",
    
    //Content Types
    PROJECTS: "PROJECTS",
    REFERENCES: "REFERENCES",
    CONTACT: "CONTACT",
    HOME: "HOME"
}

export default constants