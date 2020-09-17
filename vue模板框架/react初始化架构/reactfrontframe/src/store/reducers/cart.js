//2、商品装车
function cartReducer(state={count:1},action){
    switch (action.type) {
        case "ADD_ITEM":
            addItem(action.data);
            //console.log(action.data.count);
            return Object.assign({},state,action.data);
        case "DEC":
            return Object.assign({},state,action.data);
        default:
            return state;
    }
}
function addItem(data){

}
export default cartReducer
