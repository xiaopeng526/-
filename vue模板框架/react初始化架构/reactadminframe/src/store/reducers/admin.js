let defaultState={
    username:localStorage["username"]?localStorage["username"]:"",
    isLogin:localStorage["isLogin"]?Boolean(localStorage["isLogin"]):false
};
function reducer(state=defaultState,action){
    switch(action.type){
        case "LOGIN":
            localStorage["username"]=action.data.username;
            localStorage["isLogin"]=action.data.isLogin;
            return Object.assign({},state,action.data);
        case "OUTLOGIN":
            localStorage.removeItem("username");
            localStorage.removeItem("isLogin");
            return Object.assign({},state,{username:"",isLogin:false})
        default:
            return state;
    }

}
export default reducer
