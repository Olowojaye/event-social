import React from 'react';
import { ImCalendar, ImLocation2 } from 'react-icons/im';

export default function Event() {
  return (
    <div className="bg-[#DDDDDD] py-[44px] grid place-items-center flex-nowrap">
      <div className='w-[80%]'>
        <img
          width="593px"
          height="593px"
          alt=""
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220926T031001Z&X-Amz-Expires=86400&X-Amz-Signature=d5b9642e5bd89a2e2850211286a93d0feb74b99d2affb0adb912037e6b127d57&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
        />
        <h2 className="mt-9 text-[#240D57] event-name ">Birthday Bash</h2>
        <h6 className="event-host mt-[8.5px] ">Hosted by Elysia</h6>
        <div className="mt-[27.5px] flex flex-row place-items-center flex-nowrap gap-x-[10px] mb-[16.5px] ">
          <button className="bg-white color-[#8456EC] p-2 rounded-sm  ">
            <ImCalendar
              style={{
                color: '#8456EC',
              }}
            />
          </button>
          <div className="space-y-[1.5px] ">
            <div className='start-date'>18 August 6:00PM</div>
            <div className='end-date'>to 19 August 1:00PM UTC +10</div>
          </div>
        </div>
        <div className="mt-[27.5px] flex flex-row place-items-center flex-nowrap gap-x-[10px] mb-[16.5px] ">
          <button className="bg-white color-[#8456EC] p-2 rounded-sm  ">
            <ImLocation2
              style={{
                color: '#8456EC',
              }}
            />
          </button>
          <div className="space-y-[1.5px] ">
            <div className='start-date'>Street name</div>
            <div className='end-date'>Suburb, State, Postcode</div>
          </div>
        </div>
      </div>
    </div>
  );
}
