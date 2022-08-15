import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    text-decoration: underline;
`

const Title = ({text}) => {
  return (
    <Wrapper>
        <h1>{text}</h1>
    </Wrapper>
  )
}

export default Title