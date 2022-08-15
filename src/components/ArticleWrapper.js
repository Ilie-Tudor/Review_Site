import React from 'react'
import styled from 'styled-components'


const ArticleWrapperStyle = styled.div`
    background: red;
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: auto;
    padding: 0 5px;
`

const ArticleWrapper = ({children}) => {
  return (
    <ArticleWrapperStyle>
        {children}
    </ArticleWrapperStyle>
  )
}

export default ArticleWrapper