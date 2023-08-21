const ethValue = 2.4039;
const gasValue = 0.0101;

const NetWorkBalance = () => {
  return (
    <div className='flex flex-1 flex-col'>
      <div className='flex flex-row justify-between items-center text-black'>
        <span>Network Balance</span>

        <button onClick={() => null} className='gray_button'>
          wrap
        </button>
      </div>
      <div className='flex flex-row items-center text-black'>
        <div className='pr-5 pt-3'>
          <p>Testnet</p>
          <div className='flex flex-row items-center'>
            <p>{ethValue + ' ETH'}</p>
            <img
              src='https://cdn-icons-png.flaticon.com/512/6001/6001599.png'
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className='pr-5 pt-3'>
          <p>Gas</p>
          <div className='flex flex-row items-center'>
            <p>{gasValue + ' Gwei'}</p>
            <img
              src='https://cdn-icons-png.flaticon.com/512/8376/8376630.png'
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetWorkBalance;
