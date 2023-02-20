 import { BUY_CAKE, REPLACE_CAKE } from "./cakeTypes";
 
 const initialState = {
    numOfCakes : 10
 }

 function cakeReducer (state = initialState, action) {
    switch (action.type ) {
        case BUY_CAKE: 
        
        if(state.numOfCakes === 1 ) {
            return {
                ...state
            }
        } else {
        return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        }
        case REPLACE_CAKE: 
        if(state.numOfCakes < 10 ) {
            return {
                ...state,
                numOfCakes: state.numOfCakes + 1
            }
        }
        default: return state
            
    }
 }
 export default cakeReducer