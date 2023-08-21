import React from 'react';
import axios from 'axios';
import { ArcElement, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useRef } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
ChartJS.register(Legend);

const TickerChart = (props: any) => {
  const [tick, setTick] = React.useState<any>([]);
  const [priceLabels, setPriceLabels] = React.useState<any>([]);

  const { pair } = props;

  const tickerChartRef = useRef<ChartJS>(null);

  const options = {
    scales: {
      // x: {
      //     type: 'linear',
      //     position: 'bottom'
      // },
      //   y: {
      //     beginAtZero: true,
      //   },
    },
  };
  var data = {
    labels: [],
    datasets: [
      {
        label: '시장가',
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        data: [],
      },
    ],
  };

  React.useEffect(() => {
    const tickInterval = setInterval(() => {
      axios
        .get(`https://api.upbit.com/v1/ticker?markets=${pair}`)
        .then((res: any) => {
          console.log(res.data);
          //   setTick((prev: any[]) => [...prev, res.data[0].trade_price]);
          tickerChartRef.current?.data.datasets[0].data.push(
            res.data[0].trade_price
          );
          tickerChartRef.current?.data.labels!.push(res.data[0].trade_volume);

          tickerChartRef.current?.update();
        });
    }, 1000);
    return () => clearInterval(tickInterval);
  }, []);

  return (
    <div className='TickerChart w-full h-full'>
      <Chart type='line' data={data} options={options} ref={tickerChartRef} />
    </div>
  );
};

export default TickerChart;
