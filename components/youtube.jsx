import React from 'react';
import YouTubePlayer from '../components/YouTubePlayer';
const HomePage = () => {
    return (
      <div id='youtube' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5'>
                Youtube
            </p>
            <h2>Amazing Contents</h2>
            {/* <YouTubePlayer videoId="MLWznmAsfJk" /> */}
            <div className='grid md:grid-cols-2 gap-8'>
                <YouTubePlayer videoId="MLWznmAsfJk" />
            </div>
        </div>
        
      </div>
    );
  };
  
  export default HomePage;