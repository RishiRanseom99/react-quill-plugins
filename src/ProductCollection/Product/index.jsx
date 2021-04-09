import React from 'react'
import styled from 'styled-components'

const ProductWrapper = styled.div`
    width: 10rem;
    height: 10rem;
    margin-left: 1rem;
    margin-top: 1rem;
`
function Product(props) {
  console.log("image is " + props.product.image)
  return (
    // <div className="product"> 
    //   <img src={props.product.image } alt="product"/>
    // </div>
    <ProductWrapper>
      <img src={props.product.image } alt="product"/>
    </ProductWrapper>
  )
}

export default Product
