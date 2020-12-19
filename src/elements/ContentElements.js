import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  background-color: white;
  padding: ${props => props.theme.spacings.xLarge}
    ${props => props.theme.spacings.xxLarge};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  @media ${props => props.theme.breakpoints.Large} {
    grid-column: 2 / span 6;
  }
  @media ${props => props.theme.breakpoints.Medium} {
    padding: ${props => props.theme.spacings.Medium}
      ${props => props.theme.spacings.Large};
  }
`
