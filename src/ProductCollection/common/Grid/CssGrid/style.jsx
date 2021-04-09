import styled from 'styled-components'
// import { SCREEN_SIZE } from '../../../../lib/Media'


export const Grid = styled.div`
  display: -ms-grid;
  display: grid;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  @media-query only screen and (min-width: 754px) {
    column-gap: 0px;
    grid-template-columns: repeat(auto-fill, minmax(20.2rem, 1fr));
  }
  @media-query only screen and (min-width: 1040px) {
    grid-template-columns: repeat(auto-fill, minmax(20.2rem, 1fr));
  }
  @media-query only screen and (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
  
`
export const GridItem = styled.div`
  border: 1px solid #ebebeb;
  width: 100%;
  background: white;
  min-height: 22.6rem;
  @media-query only screen and (min-width: 754px) {
    min-height: 26.8rem;
  }
`
