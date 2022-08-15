import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`



`

const Subtitle1 = ({text}) => {
  return (
    <Wrapper>
        <h2>{text}</h2>
    </Wrapper>
  )
}

export default Subtitle1