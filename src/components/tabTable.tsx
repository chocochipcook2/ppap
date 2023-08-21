import { useState } from 'react';

const TabTable = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabList, setTabList] = useState([
    { title: 'tab1', content: 'tab1 content' },
    { title: 'tab2', content: 'tab2 content' },
    { title: 'tab3', content: 'tab3 content' },
  ]);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <div>
      <div className='flex flex-row '></div>
      {tabList.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleTabChange(index)}
          className={
            'mr-1 p-1 text-black shadow-md' +
            (tabIndex == index && 'rounded-s-md bg-slate-200')
          }
        >
          {tab.title}
        </button>
      ))}
      <div>
        <span className='text-black'>{tabList[tabIndex].content}</span>
      </div>
    </div>
  );
};

export default TabTable;
