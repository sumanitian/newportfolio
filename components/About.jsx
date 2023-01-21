import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '../public/assets/about.jpg';
import AboutImg from '../public/assets/mypic.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          A passionate Data Science Enthusiast, who opt to build a fruitful career in the field with the discipline, passion, and hardworking skills. To reach miles and achieve my dreams, I have made minor progressive steps and post-graduation in Big data analytics from the Central University of Rajasthan. My inquisitive personality is the only reason for contributing to the team and individual projects throughout different education levels. The exploration I acquired by doing some case studies and projects that has shown me the other side of Data Science by solving different use-cases.
I love learning new skills that drive me closer to my goals and dreams. I have been continuously evolving myself by actively participating in various projects, short-term courses and workshops. All these show that I am passionate about Data Science, which I enjoy doing.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
