import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

    position: relative;
    margin-top: 10px;
    background: white;
    >table>tbody{
        height: 300px !important;
    }

`

const Chart = () => {
  return (
    <Wrapper>
        <table
            
            className="charts-css bar data-spacing-5 show-primary-axis show-data-axes" id="my-chart">
          <caption> Front End Developer Salary </caption>

          <tbody style={{"--color": "lightblue"}}>
            <tr>
              <td style={{ '--size': 'calc( 40 / 100 )' }}> $40K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 60 / 100 )' }}> $60K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 75 / 100 )' }}> $75K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 90 / 100 )' }}> $90K </td>
            </tr>
            <tr>
              <td style={{ '--size': 'calc( 100 / 100 )' }}> $100K </td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
  )
}

export default Chart