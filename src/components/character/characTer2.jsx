import React, { useState } from 'react';
import bgr from '../../assets/images/CHARACTER/BGR 2.png';
import logo from '../../assets/images/CHARACTER/logo.png'
import the9 from '../../assets/images/CHARACTER/The bai 9.png';
import the10 from '../../assets/images/CHARACTER/The bai 10.png';
import the12 from '../../assets/images/CHARACTER/The bai 11.png';
import the11 from '../../assets/images/CHARACTER/The bai 12.png';
import CharacterImage2 from './charcterImage2';


const CharacterPage = () => {
  return (
    <>
      <div className='relative w-screen h-screen overflow-hidden '>
        {/* Ảnh logo */}
        <img
            className={`top-0 mx- my-4 z-40 transition-opacity duration-500 ease-in-out  absolute shadow-sm bottom-4 bg-cover`}
            src={logo}
            alt=''
        />
        {/* ảnh nền */}
        <img
          className='absolute object-cover w-full h-full bg-center bg-no-repeat bg-full'
          src={bgr}
          alt="bgrphai"
        />
        {/* ảnh thẻ bài trên bên trái */}
         <img src={the12} alt="bai" className='absolute top-0 left-0 z-30 w-1/2 bg-cover h-1/2'/>
         {/* thẻ bài bên trái */}
         <img src={the9} alt="bai" className='absolute bottom-0 left-0 z-30 h-auto bg-cover '/>
         {/* thẻ bài ở giữa  */}
         <img src={the10} alt="bai" className="absolute bottom-0 z-30 w-1/2 transform -translate-x-1/2 bg-cover left-1/2"/>
         {/* thẻ bài bên phải */}
         <img src={the11} alt="bai" className="absolute bottom-0 right-0 z-30 w-1/3 h-auto bg-cover"/>
          <CharacterImage2 className=""/>
      </div>
    </>  );
};

export default CharacterPage;
