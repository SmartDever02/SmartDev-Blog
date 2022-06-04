import React, { useCallback, useEffect, useState, useTransition } from 'react';
import { debounce } from 'lodash';

import ResultView from '.';

const UseTransition = () => {
  const [size, setSize] = useState(3);
  const [data, setData] = useState([{}]);
  const [realData, setRealData] = useState([{}]);
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const fetchData = useCallback(() => {
    // console.log('fetch function triggered, size:', size);
    fetch(`https://random-data-api.com/api/users/random_user?size=${size}`)
      .then((res) => res.json())
      .then(setData)
      .then(setRealDataFunc);
  }, [size]);

  useEffect(() => {
    // console.log('Example rendered(Top-level)...', size, data);
    fetchData();
  }, [size, realData]);

  const setRealDataFunc = () => {
    console.log('setRealDataFunc:', data);
    // let _data = data.filter(
    //   (one: any, index: number) => one
    //   // {
    //   //   // index === 0 ?? console.log(one);
    //   //   // one.username.includes(query);
    //   //   //console.log(one);
    //   //   return true;
    //   // }
    // );
    // setData(_data);
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      // setQuery(e.target.value);
      setQuery(query);
      setRealDataFunc();
    });
  }, []);
  const handleChangeBounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    const debounceFunc = debounce(handleChange, 500);
    debounceFunc(e);
  };

  const handleSize = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(~~e.target.value);
  }, []);

  const handleSizeBounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    const debouncedFunc = debounce(handleSize, 500);
    debouncedFunc(e);
  };

  return (
    <div className='p-[100px_5%_0px_5%]'>
      <div className='w-[50vw] flex flex-col gap-[20px]'>
        {isPending ?? <p>Pending Now...</p>}
        <div className='p-[10px_30px] bg-darker flex justify-between items-center text-lg'>
          <p>
            Number Of Users' Data From API:{' '}
            <input
              type='number'
              className='w-[100px] bg-primary rounded-full pl-[15px]'
              defaultValue={size}
              onChange={(e) => handleSizeBounce(e)}
            />
          </p>
          <button
            className='p-[10px_20px] bg-primary rounded-full'
            onClick={() => console.log(data)}
          >
            Add Data
          </button>
        </div>

        <input
          className='bg-[#ffffff30] p-[20px_40px] rounded-full'
          onChange={handleChangeBounce}
        />
        <ResultView data={data} />
      </div>
    </div>
  );
};

export default UseTransition;
