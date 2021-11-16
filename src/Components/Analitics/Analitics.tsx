import React, { useState } from 'react'
import CardContainer from '../CardContainer/CardContainer'
import * as V from 'victory'

function Analitics() {
  let stateData = [
    {
      data: [
        { x: '06.11', y: 3 },
        { x: '07.11', y: 1 },
        { x: '08.11', y: 2 },
        { x: '09.11', y: 0 },
        { x: '10.11', y: 1 },
        { x: '11.11', y: 1 },
        { x: '12.11', y: 0 },
      ],
      color: {
        redColor: 0,
        greenColor: 255,
        blueColor: 127,
      },
      displayName: 'Радость',
      name: 'joy'
    },
    {
      data: [
        { x: '06.11', y: 3 },
        { x: '07.11', y: 5 },
        { x: '08.11', y: 9 },
        { x: '09.11', y: 8 },
        { x: '10.11', y: 7 },
        { x: '11.11', y: 9 },
        { x: '12.11', y: 10 },
      ],
      color: {
        redColor: 42,
        greenColor: 82,
        blueColor: 190,
      },
      displayName: 'Грусть',
      name: 'sadness'
    },
    {
      data: [
        { x: '06.11', y: 6 },
        { x: '07.11', y: 4 },
        { x: '08.11', y: 3 },
        { x: '09.11', y: 3 },
        { x: '10.11', y: 2 },
        { x: '11.11', y: 2 },
        { x: '12.11', y: 1 },
      ],
      color: {
        redColor: 248,
        greenColor: 23,
        blueColor: 62
      },
      displayName: 'Злость',
      name: 'anger'
    },
    {
      data: [
        { x: '06.11', y: 0 },
        { x: '07.11', y: 8 },
        { x: '08.11', y: 7 },
        { x: '09.11', y: 3 },
        { x: '10.11', y: 1 },
        { x: '11.11', y: 0 },
        { x: '12.11', y: 0 },
      ],
      color: {
        redColor: 128,
        greenColor: 0,
        blueColor: 255
      },
      displayName: 'Удивление',
      name: 'surprise'
    }, {
      data: [
        { x: '06.11', y: 10 },
        { x: '07.11', y: 3 },
        { x: '08.11', y: 8 },
        { x: '09.11', y: 7 },
        { x: '10.11', y: 6 },
        { x: '11.11', y: 7 },
        { x: '12.11', y: 8 },
      ],
      color: {
        redColor: 83,
        greenColor: 75,
        blueColor: 79
      },
      displayName: 'Скука',
      name: 'bored'
    },
    {
      data: [
        { x: '06.11', y: 4 },
        { x: '07.11', y: 9 },
        { x: '08.11', y: 7 },
        { x: '09.11', y: 6 },
        { x: '10.11', y: 4 },
        { x: '11.11', y: 4 },
        { x: '12.11', y: 4 },
      ],
      color: {
        redColor: 49,
        greenColor: 127,
        blueColor: 67
      },
      displayName: 'Страх',
      name: 'fear'
    }
  ]

  console.log(stateData)

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
            offsetY={50}
            standalone={false}
          />
          {
            Object.values(stateData).map((elem: any, i: number, data: any) => {
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
