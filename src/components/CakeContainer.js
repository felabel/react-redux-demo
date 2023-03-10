import React from 'react'
import { buyCake } from "../redux"
import { connect } from 'react-redux'
import { replaceCake } from '../redux'

const CakeContainer = (props) => {
  return (
    
    <div>
      <h2>Number of Cakes : {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      
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
    buyCake: () => dispatch(buyCake()),
    replaceCake: () => dispatch(replaceCake())
  }
}


export default connect(
  mapStateToProps, mapDispatchToProps
  )(CakeContainer)