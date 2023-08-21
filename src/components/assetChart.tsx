import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useRef } from 'react';
ChartJS.register(ArcElement, Legend);

const options = {
  plugins: {
    legend: {
      position: 'right',
      labels: {
        generateLabels: (chart: any) => {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label: any, i: number) => {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);

              return {
                text: label + ' : ' + data.datasets[0].data[i] + ' USD',
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                index: i,
              };
            });
          }
          return [];
        },
      },
    },
  },
};

const AssetChart = ({
  as1,
  as2,
  as3,
}: {
  as1: number;
  as2: number;
  as3: number;
}) => {
  const chartRef = useRef<ChartJS>(null);

  return (
    <div className=''>
      <h1>{as1 + as2 + as3}</h1>
      <div className=' w-64 h-60'>
        <Chart
          options={{ plugins: { legend: { position: 'right' } } }}
          //   options={options}
          ref={chartRef}
          type='doughnut'
          data={{
            labels: ['USDC', 'STBC', 'STND'],
            datasets: [
              {
                label: 'Asset',
                data: [as1, as2, as3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  '#4caf50',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  '#4caf50',
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={100}
          width={100}
        />
      </div>
      {/* <Doughnut
        data={{
          labels: ['BTC', 'ETH', 'USDT'],
          datasets: [
            {
              label: 'Asset',
              data: [as1, as2, as3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                '#4caf50',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                '#4caf50',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={
          {
            //   maintainAspectRatio: false,
          }
        }
      /> */}
    </div>
  );
};

export default AssetChart;
