import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`

`

const CustomizableInlineBox = ({children}) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
}

export default CustomizableInlineBox