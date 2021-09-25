import { relative } from 'path';
import React, { useCallback, useState } from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
import CardContainer from './Components/CardContainer'
import { windowInnerHeight, windowInnerWidth } from './constants';

const data = [
  {
    name: "30.08",
    joy: 10,
    sadness: 0,
    anger: 0,
    fear: 5,
    disgust: 3,
    surprise: 8,
  },
  {
    name: "01.09",
    joy: 5,
    sadness: 4,
    anger: 5,
    fear: 3,
    disgust: 1,
    surprise: 3,
  },
  {
    name: "02.09",
    joy: 0,
    sadness: 0,
    anger: 0,
    fear: 0,
    disgust: 0,
    surprise: 0,
  },
  {
    name: "03.09",
    joy: 3,
    sadness: 1,
    anger: 9,
    fear: 0,
    disgust: 0,
    surprise: 4,
  },
  {
    name: "04.08",
    joy: 0,
    sadness: 10,
    anger: 9,
    fear: 1,
    disgust: 0,
    surprise: 3,
  },
  {
    name: "05.08",
    joy: 0,
    sadness: 10,
    anger: 9,
    fear: 1,
    disgust: 0,
    surprise: 3,
  },
  {
    name: "06.08",
    joy: 0,
    sadness: 10,
    anger: 9,
    fear: 1,
    disgust: 0,
    surprise: 3,
  }
];


function Analitics() {
  const [opacity, setOpacity] = useState({
    joy: 1,
    sadness: 1,
    anger: 1,
    fear: 1,
    disgust: 1,
    surprise: 1
  });

  const handleMouseEnter = useCallback(
    (o) => {
      const { dataKey } = o;

      setOpacity({ ...opacity, [dataKey]: 0.5 });
    },
    [opacity, setOpacity]
  );

  const handleMouseLeave = useCallback(
    (o) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 1 });
    },
    [opacity, setOpacity]
  );

  return (
    <div>
      <div style={{
        position: 'relative',
        right: '35px'
      }}>
        <LineChart
          width={windowInnerWidth + 30}
          height={windowInnerHeight / 1.5}
          data={data}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis tickCount={11} />
          <Tooltip />
          <Legend
            margin={{top: 0, left: 50, right: 0, bottom: 0}}
            align='right'
            width={windowInnerWidth}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Line
            type="monotone"
            dataKey="joy"
            strokeOpacity={opacity.joy}
            stroke="yellow"
          />
          <Line
            type="monotone"
            dataKey="fear"
            strokeOpacity={opacity.fear}
            stroke="lightblue"
          />
          <Line
            type="monotone"
            dataKey="surprise"
            strokeOpacity={opacity.surprise}
            stroke="orange"
          />
          <Line
            type="monotone"
            dataKey="sadness"
            strokeOpacity={opacity.sadness}
            stroke="blue"
          />
          <Line
            type="monotone"
            dataKey="anger"
            strokeOpacity={opacity.anger}
            stroke="red"
          />
          <Line
            type="monotone"
            dataKey="disgust"
            strokeOpacity={opacity.disgust}
            stroke="purple"
          />
        </LineChart>
      </div>
      <CardContainer display='hidden' />
    </div>
  )
}

export default Analitics
