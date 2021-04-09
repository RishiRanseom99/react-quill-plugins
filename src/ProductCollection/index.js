/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'
// import CssGrid from './common/Grid/CssGrid'
import Product from './Product'

const CssGrid = styled.div`
  width: 95%;
  height: 550px;
  background-color: rgb(248, 176, 176);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export default class ProductsWithGrid extends React.PureComponent {
  render() {
    const { product } = this.props
    console.log(product)
    return (
        <CssGrid >
          {product.map((element, index) => {
            return (
              <Product
                key={index}
                product={element}
              />
            )
          })}
        </CssGrid>
    )
  }
}
