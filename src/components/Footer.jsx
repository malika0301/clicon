import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../context/ChangeLanguage'
import languages from '../translations/languages'

const Footer = () => {
  const { lang } = useContext(LanguageContext)
  const lan = languages[lang]

  return (
    <footer className='bg-gray-100'>
      <div className='container mx-auto px-6 sm:px-6 lg:px-8 py-10 flex justify-between gap-10 flex-wrap'>

        {/* LOGO */}
        <ul className='flex flex-col gap-3 text-[18px] max-w-[250px]'>
          <li className='text-[22px] font-bold'>
            {lan.footer_title}
          </li>
          <li className='text-gray-600'>
            {lan.title}
          </li>
        </ul>

        {/* КОМПАНИЯ */}
        <ul className='flex flex-col gap-2 text-[18px]'>
          <li className='text-[22px] font-bold'>
            {lan.footer_title1}
          </li>
          <li className='hover:text-orange-500 transition cursor-pointer'>
            {lan.footer_title2}
          </li>
          <li className='hover:text-orange-500 transition cursor-pointer'>
            {lan.footer_title3}
          </li>
          <li className='hover:text-orange-500 transition cursor-pointer'>
            {lan.footer_title4}
          </li>
        </ul>

        {/* ПОМОЩЬ */}
        <ul className='flex flex-col gap-2 text-[18px]'>
          <li className='text-[22px] font-bold'>
            {lan.footer_title7}
          </li>
          <li className='hover:text-orange-500 transition cursor-pointer'>
            {lan.footer_title8}
          </li>
        </ul>

        {/* КОНТАКТЫ */}
        <ul className='flex flex-col gap-3 text-[18px]'>
          <li className='text-[22px] font-bold'>
            {lan.footer_title6}
          </li>

          <li className='flex gap-2 items-center'>
            <img className='w-[20px]' src='./img/Group 55.svg' alt='' />
            +7 (926) 223-10-11
          </li>

          <li className='flex gap-2 items-center'>
            <img className='w-[15px]' src='./img/Group 5.svg' alt='' />
            {lan.footer_title10}
          </li>

          <div className='flex gap-4 mt-2'>
            <span className='hover:text-orange-500 transition cursor-pointer'>
              Facebook
            </span>
            <span className='hover:text-orange-500 transition cursor-pointer'>
              Instagram
            </span>
          </div>
        </ul>

      </div>
    </footer>
  )
}

export default Footer
