import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import amazonreviews from '../public/assets/projects/Amazonreviews.jpg'
import quora from '../public/assets/projects/quora.png'
import fashion from '../public/assets/projects/fashiondiscovery.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Amazon Rating Predict'
            backgroundImg={amazonreviews}
            projectUrl='/amazon'
            tech='Machine Learning'
          />
          <ProjectItem
            title='Quora Question Pair Similarity'
            backgroundImg={quora}
            projectUrl='/quora'
            tech='Natural Language Processing'
          />
          <ProjectItem
            title='E-Commerce Fashion Discovery Engine'
            backgroundImg={fashion}
            projectUrl='/Ecommerce'
            tech='NLP / CNN / ResNet'

          />
          {/* <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
