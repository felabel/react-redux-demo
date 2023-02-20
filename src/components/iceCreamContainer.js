import React from 'react'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'
import { connect } from 'react-redux'
import { replaceIceCream } from '../redux/iceCream/iceCreamActions'

function iceCreamContainer(props){
  return (
    <div>
      <h2>Number of IceCreams : {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
      <button onClick={props.replaceIceCream}>Replace IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buyIceCream: () => dispatch(buyIceCream()),
    replaceIceCream: () => dispatch(replaceIceCream())
  }
}


export default connect(
  mapStateToProps, mapDispatchToProps
  )(iceCreamContainer)