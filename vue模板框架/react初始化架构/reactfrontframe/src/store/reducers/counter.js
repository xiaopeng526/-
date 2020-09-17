//2、商品装车
function counterReducer(state={count:1},action){
    switch (action.type) {
        case "INC":
            //console.log(action.data.count);
            return Object.assign({},state,action.data);
        case "DEC":
            return Object.assign({},state,action.data);
        default:
            return state;
    }
}
export default counterReducer
