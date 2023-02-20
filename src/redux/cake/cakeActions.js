import { BUY_CAKE } from "./cakeTypes"
import { REPLACE_CAKE } from "./cakeTypes"

export const buyCake = (number = 1) => {
    return {
        type:BUY_CAKE,
        payload: number
    }
}

export const replaceCake = () => {
    return {
        type:REPLACE_CAKE
    }
}

