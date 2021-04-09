import React from 'react'
import { Grid, GridItem } from './style'

const Index = props => {
  const { children } = props
  return (
    
      <Grid>
        {/* {children.map((comp, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <GridItem key={comp.key + i} index={i}>
              {comp}
            </GridItem>
          )
        })} */}
      </Grid>
    
  )
}

export default Index
