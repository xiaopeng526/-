//首页数据
import {getSlider} from "../../api/home";

let stateData={
    slides:[]
}
function homeReducer(state=stateData,action){
    switch (action.type) {
        case "SWIPER":
            return {slides:getSlider(action.data.callback)};
        default:
            return state;
    }
}
export default homeReducer
