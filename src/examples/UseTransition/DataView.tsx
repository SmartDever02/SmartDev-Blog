import { useEffect, memo } from 'react';

const DataView = (props: propsType) => {
  useEffect(() => {
    // console.log('Result View Rendered...');
    console.log(props?.data);
  });
  return (
    <div className='h-[60vh] bg-darker rounded-[32px] p-3'>
      <ul className='h-full rounded-[20px] overflow-x-hidden'>
        {props.data?.map((one, index) => (
          <li
            className='p-[10px_30px] bg-primary even:bg-darker rounded-[30px]'
            key={one?.id || index}
          >
            {one?.username}
          </li>
        ))}
      </ul>
    </div>
  );
};
interface propsType {
  data?: Array<any> | null;
}
export default memo(DataView);
