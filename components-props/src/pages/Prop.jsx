import React from 'react'
import PropTypes from 'prop-types'

function Prop({name, age, isDeveloper}) {
  return (
    <div className='m-4'>
        <h1>your name is: {name}</h1>
        <h2>age is: {age}</h2>
        <h3>Developer? {isDeveloper ? "Yes" : "No"}</h3>
    </div>
  )
}

Prop.PropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isDeveloper: PropTypes.bool.isRequired

}

export default Prop