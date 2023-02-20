import React, { useState } from 'react'
import { buyCake } from "../redux"
import { connect } from 'react-redux'
import { replaceCake } from '../redux'

const NewCake = (props) => {
    const [number, setNumber] = useState(1)
  return (
    
    <div>
      <h2>Number of Cakes : {props.numOfCakes}</h2>
      <input type="text" name="" value={number} id="" 
        onChange={(e) => setNumber(e.target.value)}
      />
      <button 
      onClick={() => props.buyCake(number)}
      >Buy {number} Cakes</button>
      <button onClick={props.replaceCake}>Replace Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buyCake: (number) => dispatch(buyCake(number)),
    replaceCake: () => dispatch(replaceCake())
  }
}


export default connect(
  mapStateToProps, mapDispatchToProps
  )(NewCake)