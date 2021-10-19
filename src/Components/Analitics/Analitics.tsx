import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import * as V from 'victory'

function Analitics() {
  const data = {
    joy: {
      data: [
        { x: '10.09', y: 10 },
        { x: '11.09', y: 9 },
        { x: '12.09', y: 3 },
        { x: '14.09', y: 7 },
        { x: '15.09', y: 4 },
        { x: '16.09', y: 3 },
      ],
      color: {
        redColor: 255,
        greenColor: 0,
        blueColor: 0
      }
    },
    sadness: {
      data: [
        { x: '11.09', y: 3 },
        { x: '12.09', y: 3 },
        { x: '13.09', y: 1 },
        { x: '14.09', y: 5 },
        { x: '15.09', y: 4 },
      ],
      color: {
        redColor: 0,
        greenColor: 255,
        blueColor: 0
      }
    }
  }


  return (
    <div>
      <div>
        <V.VictoryChart width={400} height={400} domain={{ y: [0, 10] }} >
          <V.VictoryAxis dependentAxis crossAxis
            width={400}
            height={400}
            domain={[0, 10]}
            tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            offsetX={50}
            standalone={false}
          />
          <V.VictoryAxis crossAxis
            width={400}
            height={400}
            tickValues={['10.09', '11.09', '12.09', '13.09', '14.09', '15.09', '16.09']}
            offsetY={50}
            standalone={false}
          />
          {
            Object.values(data).map((elem: any, i: number, data: any) => {
              const color = `RGB(${elem.color.redColor}, ${elem.color.greenColor}, ${elem.color.blueColor})`
              return (
                <V.VictoryLine key={i} data={elem.data} style={{ data: { stroke: color } }} />
              )
            })
          }
        </V.VictoryChart>


      </div>
      <CardContainer display='hidden' />
    </div>
  )
}

export default Analitics
