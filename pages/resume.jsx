import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import ResumeImg from '../public/assets/mypic.jpg';
import resumeimg from '../public/assets/resume.jpg'

const resume = () => {
  return (
    <>
      <Head>
        <title>Suman | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>
  
      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Suman Prasad</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/sumanitian/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/sumanitian'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='w-1/2 h-auto m-auto shadow-xl shadow-gray-50 rounded-xl flex items-center justify-center p-4 hover:scale-90 ease-in duration-300'>
          <Image src={resumeimg} className='rounded-xl' alt='/' />
      </div>
      <button class="w-full rounded-md shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
        <a href="https://drive.google.com/file/d/1YfM60t8vshCdRnRUPUJO27_g9Xs2SMkA/view?usp=share_link" target="_blank" rel="noreferrer">Download</a>
      </button>
      {/* <button className='w-full p-4 text-gray-100 mt-4'>

                  <a href="https://drive.google.com/file/d/1YfM60t8vshCdRnRUPUJO27_g9Xs2SMkA/view?usp=share_link" target="_blank">Send Message</a>
      </button>      */}
      {/* {/* <div class="rounded-md shadow-lg shadow-blue-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">Download My Resume</div> */}
      </div> 
    </>
  );
};

export default resume;
