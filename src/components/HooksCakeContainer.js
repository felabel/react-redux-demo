import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, replaceCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    console.log(numOfCakes)
    return (
        <div>
            <h1>hooks container</h1>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <button 
                onClick={() =>{
                    dispatch(buyCake())
                }}
            >Buy Cake</button>
            <button onClick={() => dispatch(replaceCake())}>Replace Cake</button>
        </div> 
    )
}

export default HooksCakeContainer