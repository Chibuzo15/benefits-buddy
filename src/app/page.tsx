'use client'

import * as React from 'react'

import Image from 'next/image'

import VideoBackground from '@/components/VideoBackground';
import { addClassNames } from '@/utils/functions';

import { IoMdClose } from "react-icons/io";

import { Dialog, Disclosure, Transition } from '@headlessui/react';


export default function Home() {
  const [playVideoOpen, setPlayVideoOpen] = React.useState(false)

  const renderVideoModal = () => {

    return (
      <Transition appear show={playVideoOpen} as={React.Fragment}>
        <Dialog
          className='z-[1000] absolute'
          onClose={() => {
            setPlayVideoOpen(false)
          }}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as="div"
          >
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#00000080] backdrop-blur-sm transition-opacity duration-300" />
            <div className="fixed inset-0 top-0 right-0 left-0 bottom-0 z-10 overflow-y-auto">
              <div className=" flex items-center  justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
                <button
                  className
                  onClick={() => {
                    setPlayVideoOpen(false)
                  }}>
                  <span className={
                    addClassNames(
                      " bg-[#ffffff32] text-white flex items-center justify-center h-[35px] w-[35px] focus:ring-offset-2 focus:ring-blue-500",
                      "rounded-[50%] p-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-[#ffffff54] focus:outline-none focus:ring-2 ",
                      "absolute top-[50px] right-[30px] md:right-[100px]"
                    )
                  }>
                    <IoMdClose
                      style={{ color: 'white' }}
                    />
                  </span>
                </button>
                {
                  playVideoOpen ?
                    <div className=" mt-[100px] md:h-[80vh] max-w-[800px] md:w-[75%] text-center ">
                      <VideoBackground
                        autoplay={true}
                        src={'https://firstcityhospital.ng/videos/screen_recording.mp4'} />
                    </div>
                    : undefined
                }
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    )
  }


  return (
    <main className="mt-[80px] xl:mt-[171px] flex flex-col items-center">
      {renderVideoModal()}
      <img
        src="/images/logobenefits.jpeg"
        className="rounded-[50%] h-[80px] w-[80px] md:h-[114px] md:w-[114px]" />
      <div className="mx-[20px] mt-[90px] md:mt-[132px] sm:max-w-[600px] ">
        <div className="font-[500] md:text-[32px] text-center mb-[60px] md:mb-[100px]">
          Benefits buddy is a <br />Comprehensive enterprise <br />solution that takes unstructured <br />company handbooks, benefits <br />guides, and intranet content and <br />transforms it into an elegant <br />natural language search expert
        </div>
        <div className="font-[300]  md:text-[32px] text-center">
          Picture a workspace where <br />company handbooks, benefits <br />guides, and intranet content are <br />no longer scattered and <br />confusing, but organized and <br />easily accessible.
        </div>
      </div>
      <div className="mt-[80px] sm:mt-[150px] mb-[40px] sm:mb-[70px]">
        <button
          className="bg-[#D9D9D9] px-[25px] rounded-[10px] h-[50px] font-[500] lg:h-[78px] text-[20px] lg:text-[32px]"
        >Meet Keren</button>
      </div>
      <div className="mb-[40px] sm:mb-[70px] relative"
      >
        <div className='h-[300px] w-[300px] lg:w-[507px] lg:h-[492px] '>
          <Image
            layout="fill"
            src='/images/Memoji-Keren.png'
            alt='keren memoji'
          />
        </div>
      </div>
      <div className="mx-[20px] font-[300] mb-[80px] sm:mb-[150px] md:text-[32px] text-center  sm:max-w-[600px]">
        She is an employee at a fast-<br />paced tech company, and <br />she  often finds himself lost <br />in a sea of scattered <br />documents and unclear <br />benefits information
      </div>
      <div className="mb-[80px] sm:mb-[150px]"
      >
        <div className='h-[203px] w-[300px] lg:w-[652px] lg:h-[443px] relative'>
          <Image
            layout="fill"
            src='/images/Documents.png'
            alt='Documents '
          />
        </div>
      </div>
      <div className="mx-[20px] font-[300] mb-[50px] sm:mb-[120px] md:text-[32px] text-center  sm:max-w-[600px]">
        With Benefits Buddy's powerful <br />natural language search feature, <br />keren can now find answers to <br />her questions in no time. types in <br />his query, and Benefits Buddy <br />instantly provides relevant, <br />accurate results, saving him <br />valuable time and effort.
      </div>
      <div className="px-[20px] md:px-[50px] w-full h-[250px] md:h-[400px] lg:h-[450px]  mb-[80px] sm:mb-[150px] sm:max-w-[930px]">
        <div className="relative rounded-[15px] bg-[#D9D9D9] h-full w-full"
        >
          <Image
            layout="fill"
            src='/images/typing_background.jpg'
            alt='typing animation image'
          />
        </div>
      </div>
      <div className="mx-[20px] font-[300] mb-[50px] sm:mb-[120px] md:text-[32px] text-center  sm:max-w-[600px]">
        Keren simply types in her query, <br />and Benefits Buddy instantly <br />provides relevant, accurate <br />results, saving him valuable time <br />and effort.
      </div>

      <div className="px-[20px] md:px-[50px] w-full  mb-[60px] sm:mb-[120px] sm:max-w-[600px]">
        <div className=" rounded-[15px] bg-[#D9D9D9]  w-full"
        >
          <VideoBackground
            src={'https://firstcityhospital.ng/videos/typing.mp4'} />
        </div>
      </div>
      <div className="mb-[60px] sm:mb-[120px]">
        <button
          onClick={() => setPlayVideoOpen(true)}
          className="bg-[#2DD4A2] px-[25px] rounded-[10px] h-[50px] font-[500] lg:h-[78px] text-[20px] lg:text-[32px]"
        >
          Click to see the full gist
        </button>
      </div>
      <div className="mx-[20px] font-[300] mb-[50px] sm:mb-[120px] md:text-[32px] text-center  sm:max-w-[600px]">
        Soon, more and more employees <br />like Keren will begin using Benefits <br />Buddy, experiencing the same <br />transformation in their work <br />experience.
      </div>
      <div className="font-[600] md:text-[32px] mb-[50px] sm:mb-[100px]">Powered by Lockthon</div>
    </main>
  );
}
