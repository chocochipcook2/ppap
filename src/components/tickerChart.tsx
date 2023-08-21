import React from 'react';
import chartjs from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const TickerChart = (props: any) => {
  const [tick, setTick] = React.useState<any>(0);
  React.useEffect(() => {
    axios
      .get('https://api.upbit.com/v1/ticker?markets=BTC-ETC')
      .then((res: any) => {
        console.log(res.data);
        // setTick(res.data);
      });
  }, []);
  return (
    <div className='TickerChart'>
      <p>Chart</p>
    </div>
  );
};

export default TickerChart;
