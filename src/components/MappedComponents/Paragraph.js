import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    padding: 10px 0;
`

const Paragraph = ({ content }) => {
    if(!Array.isArray(content))
    return (
        <Wrapper>
            <div>
                {content}
            </div>
        </Wrapper>
    )
    else
    return(
        <Wrapper>
            <div>
                {/* aici pot sa pun niste optiuni pentru paragraf
                    ex:
                    -- sa puna spatii automat intre elementele array-ului 
                    -- sa sa puna spatii inainte/dupa/deloc
                    -- sa elimine spatiul pentru ultimul element din array*/}
                {content.map((elem, i)=>{
                    return <span key={i}>{elem}&nbsp;</span>
                })}
            </div>
        </Wrapper>
    )
}

export default Paragraph