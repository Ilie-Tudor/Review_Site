import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`



`

const Subtitle2 = ({text}) => {
  return (
    <Wrapper>
        <h3>{text}</h3>
    </Wrapper>
  )
}

export default Subtitle2