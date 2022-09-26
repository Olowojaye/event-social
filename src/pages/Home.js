import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center bg-[#DDDDDD] relative py-8 space-y-8 ">
      <div>
        <div className="text-center home-header mt-4">
          Imagine if
          <div className="snapchat">Snapchat</div>
          had events.
        </div>
        <p className="home-desc px-[36px] mt-4 ">
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          height="262px"
          width="165.63px"
          alt=""
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220926T030957Z&X-Amz-Expires=86400&X-Amz-Signature=edde5afcaa09eb24e024d9790d199ae823f4b4006a88d850aabe3b36fa8b177b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
        />
      </div>
      <div className="flex justify-center">
        <button className="create-button"><Link to='/create'>🎉 Create my event</Link></button>
      </div>
    </div>
  );
}
