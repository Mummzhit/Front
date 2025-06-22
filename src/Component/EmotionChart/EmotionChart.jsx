import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import './EmotionChart.css';
import ViewMoreIcon from '../Icons/ViewMoreIcon';

const data = [
  { day: 'sun', time: 15 },
  { day: 'mon', time: 35 },
  { day: 'tue', time: 30 },
  { day: 'wed', time: 45 },
  { day: 'thu', time: 38, highlight: true },
  { day: 'fri', time: 60 },
  { day: 'sat', time: 55 },
];

export default function EmotionChart() {
  return (
    <div className="weekly-line-chart">
       <div className="title">
                      <h1>일주일 동안 시청시간을 정리했어요</h1>
                      <span><ViewMoreIcon/></span>
       </div>
                  
      <ResponsiveContainer  width={360} height={150.25}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="2" y2="0">
              <stop offset="40%" stopColor="#A3D9B1" />
              <stop offset="100%" stopColor="#69C0A1" />
            </linearGradient>
          </defs>
  
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F5F5F5" />
          <XAxis 
            dataKey="day" 
            tick={{ fill: '#B5B5B5', fontSize: 10 }} 
           
            axisLine={false} 
            tickLine={false} 
          />
          <YAxis 
            tickFormatter={(v) => `${v}m`} 
            domain={[0, 60]} 
            ticks={[0, 15, 30, 45, 60]}
            tick={{ fill: '#B5B5B5', fontSize: 10 }}
            axisLine={false} 
            tickLine={false} 
          />
          <Tooltip 
            contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }} 
            formatter={(v) => `${v}분`} 
            labelFormatter={(label) => `${label}요일`} 
          />
          <Line
            type="monotone"
            dataKey="time"
            stroke="url(#lineGradient)"
            strokeWidth={1.8}
            dot={({ cx, cy, index }) => {
              if (data[index].highlight) {
                return (
                  <g key={`dot-group-${index}`}>
                    <circle cx={cx} cy={cy} r={5} fill="#FFFCF9" stroke="#A3D9B1" strokeWidth={2} />
                    <foreignObject  x={cx - 40} y={cy - 40} width="63" height="26">
                      <div className="bubble">멈칫 포인트!</div>
                    </foreignObject>
                  </g>
                );
              }
              return <circle key={`dot-${index}`} cx={cx} cy={cy} r={0} fill="#A6E3B3" />;
            }}
            activeDot={false}
            
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
