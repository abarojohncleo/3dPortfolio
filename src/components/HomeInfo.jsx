import React from 'react';
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>
      {text}
    </p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>John</span> 👋 
      <br/>
      A Software Developer from the Philippines
    </h1>
  ),
  2: (
    <InfoBox 
      text="Worked with many companies and picked up a lot of skills along the way"
      link={'/about'}
      btnText='Learn More'
    />
  ),
  3: (
    <InfoBox 
      text="Have developed multiple projects to success over the years. Curios about the impact?"
      link={'/projects'}
      btnText='Visit My Portfolio'
    />
  ),
  4: (
    <InfoBox 
      text="Need a project done or looking for a dev? I am just a few clicks away"
      link={'/contact'}
      btnText={`Let's Chat`}
    />
  )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
