import Image from 'next/image';
import { Inter } from 'next/font/google';
import { AssetChart, TickerChart } from '@/components';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

const as1 = 1 * Math.pow(10, 27);
const as2 = 0.99998 * Math.pow(10, 27);
const as3 = 1.00101 * Math.pow(10, 27);

export default function Home() {
  const [chartType, setChartType] = React.useState<number>(0);
  return (
    <main
      className={` bg-slate-50 flex min-h-screen flex-col items-center justify-between p-5 ${inter.className}`}
    >
      <div className='flex flex-1 w-full flex-row m-2 rounded-lg shadow-md '>
        <div className='flex flex-1 justify-center items-center'>
          <div className='flex rounded-full p-2 shadow-inner justify-center items-center bg-slate-200'>
            <Image
              src='/profile.png'
              alt='Picture of the author'
              width={60}
              height={60}
              className='rounded-full'
            />
          </div>
        </div>
        <div className='flex flex-9 flex-col items-start justify-center w-full m-2'>
          <div className='flex flex-row justify-center items-center'>
            <span className=' text-lg font-semibold text-black'>
              0x34CCC...
            </span>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div className='flex flex-col px-1 text-black'>
              <span>user ID</span>
              <span>-</span>
            </div>
            <div className='flex flex-col px-1 text-black'>
              <span>user type</span>
              <span>-</span>
            </div>
            <div className='flex flex-col px-1 text-black'>
              <span>last connected time</span>
              <span>-</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-3 flex-col w-full p-5 m-2 rounded-lg shadow-md'>
        <div className='flex flex-row justify-between items-center text-black'>
          <span>Asset Balance</span>
          {chartType ? (
            <button onClick={() => setChartType(0)} className='gray_button'>
              My Asset
            </button>
          ) : (
            <button onClick={() => setChartType(1)} className='gray_button'>
              Buy Crypto
            </button>
          )}
        </div>

        <div className='flex flex-row flex-1 justify-start items-center'>
          {chartType ? (
            <TickerChart pair='BTC-ETC' />
          ) : (
            <AssetChart as1={as1} as2={as2} as3={as3} />
          )}
          {!chartType && (
            <div className='pt-5 text-black text-right'>
              {[as1, as2, as3].map((val, idx) => (
                <p className=' text-sm '>{val + ' USD'}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-2 w-full flex-row m-2 rounded-lg shadow-md bg-green-200'>
        c
      </div>
      <div className='flex flex-4 w-full  m-2 rounded-lg shadow-md bg-yellow-200'>
        d
      </div>
    </main>
  );
}
