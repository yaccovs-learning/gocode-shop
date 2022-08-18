import React from 'react'

const ExamplePropsButton = ({text,onClickHandler, stylingObject={}}) => {
  return (
    <button style={stylingObject} onClick={onClickHandler}>
        {text}
    </button>
  )
}

export default ExamplePropsButton