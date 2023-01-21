import Image from 'next/image';
import React from 'react';
import amazonreviews from '../public/assets/projects/Amazonreviews.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={amazonreviews}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Predicting Amazon Reviews</h2>
          <h3>NLP / Random Forest / KNN / Naive Bayes</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Quora is a place to gain and share knowledge—about anything. 
          It is a platform to ask questions and connect with people who contribute unique insights and quality answers. 
          This empowers people to learn from each other and to better understand the world. 
          Over 100 million people visit Quora every month, 
          so it's no surprise that many people ask similarly worded questions. 
          Multiple questions with the same intent can cause seekers to spend more time finding the best answer to their question, and make writers feel they need to answer multiple versions of the same question. 
          Quora values canonical questions because they provide a better experience to active seekers and writers, and offer more value to both of these groups in the long term.
          Identify which questions asked on Quora are duplicates of questions that have already been asked. 
          This could be useful to instantly provide answers to questions that have already been answered. 
          We are tasked with predicting whether a pair of questions are duplicates or not. Machine Learning Problem.
            Used advanced feature extraction (NLP).
            used logistic regression, Linear-SVM and XGBoost.
          </p>
          <a
            href='https://github.com/sumanitian/Quora-Question-Pair-Similarity-Problem'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          {/* <a
            href='https://github.com/sumanitian/Predict-Rating-Given-Product-Reviews-On-Amazon'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a> */}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Algorithms</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Logistic Regression
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Linear-SVM
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> XGBoost
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
