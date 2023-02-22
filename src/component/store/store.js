import { legacy_createStore as createStore } from "redux";

const init = {
    id:null,
    nom:null,
    prenom:null,
    email:null,
    tel:null,
    isadmin:0,
    isconnected:false
};

export function login(id,nom,prenom,email,tel,isadmin){
    return{
        type: "LOGIN",
        payload: {
            id:id,
            nom:nom,
            prenom:prenom,
            email:email,
            tel:tel,
            isadmin:isadmin,
            isconnected:true
        }
    }
}
export function logout(){
    return{
        type:"LOGOUT"
    }
}

function user(user=init,action){
    switch(action.type){
        case "LOGOUT":
            return init;
        case "LOGIN":
            return action.payload;
        default:
        return user;
    }
}
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(user,reduxDevtools)

export default store;