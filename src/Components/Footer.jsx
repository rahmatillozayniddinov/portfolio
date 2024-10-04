import React from 'react'
import { FooterData } from '../util/Footer'
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
function Footer() {
  return (
    <div id='footer' className=' Footer flex w-full  justify-center flex-col sm:pl-0 pl-[25px] sm:pt-0 pt-[25px]'>
      <div className='w-[90% ] footer-line h-[10px] sm:flex flex-wrap ' ></div>
      {FooterData.map((FooterData) => (
          <div className='sm:flex flex-wrap  items-center justify-center pt-5 sm:gap-[150px] gap-[25px] text-white'>
            <p className='italic'>{FooterData.Number}</p>
            <p className='italic'>{FooterData.email}</p>
            <p className='italic'>{FooterData.design}</p>
            <div className="flex   gap-5 text-[22px]">
          <BsFacebook className="text-white cursor-pointer" />
          <BsGithub className="text-white cursor-pointer" />
          <BsInstagram className="text-white cursor-pointer" />
        </div>
          </div>
          
        ))}
    </div>
  )
}

export default Footer