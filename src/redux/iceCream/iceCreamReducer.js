import { BUY_ICECREAM, REPLACE_ICECREAM } from "./iceCreamTypes";

const initialState = {
    numOfIceCream : 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            if(state.numOfIceCream === 1 ) {
                return {
                    ...state
                }
            } else {
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
            } 
            
        case REPLACE_ICECREAM :    
    
        if(state.numOfIceCream < 20 ) {
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + 1
            }
        }
        else 
            return {
                ...state,
            }
        default: return state
            
    }
}

export default iceCreamReducer