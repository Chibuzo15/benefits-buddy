
import Image from 'next/image'


export default function Home() {
  return (
    <main className="mt-[80px] xl:mt-[171px] flex flex-col items-center">

      <div className="bg-black rounded-[50%] h-[80px] w-[80px] md:h-[114px] md:w-[114px]"></div>
      <div className="mx-[20px] mt-[90px] md:mt-[132px] sm:max-w-[60%] ">
        <div className="font-[500] md:text-[32px] text-center mb-[60px] md:mb-[100px]">
          Benefits buddy is a Comprehensive enterprise solution that takes unstructured company handbooks, benefits guides, and intranet content and transforms it into an elegant natural language search expert
        </div>
        <div className="font-[300]  md:text-[32px] text-center">
          Picture a workspace where company handbooks, benefits guides, and intranet content are no longer scattered and confusing, but organized and easily accessible.
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
      <div className="mx-[20px] font-[300] mb-[80px] sm:mb-[150px] md:text-[32px] text-center  sm:max-w-[60%]">
        She is an employee at a fast-paced tech company, and she  often finds himself lost in a sea of scattered documents and unclear benefits information
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
      <div className="mx-[20px] font-[500] mb-[50px] sm:mb-[120px] md:text-[32px] text-center  sm:max-w-[60%]">
        With Benefits Buddy's powerful natural language search feature, keren can now find answers to her questions in no time. types in his query, and Benefits Buddy instantly provides relevant, accurate results, saving him valuable time and effort.
      </div>
      <div className="px-[20px] md:px-[50px] w-full  mb-[80px] sm:mb-[150px]">
        <div className=" rounded-[15px] bg-[#D9D9D9] lg:h-[500px] h-[300px] w-full"
        >
          Animation
        </div>
      </div>
      <div className="mx-[20px] font-[500] mb-[50px] sm:mb-[120px] md:text-[32px] text-center  sm:max-w-[60%]">
        Keren simply types in her query, and Benefits Buddy instantly provides relevant, accurate results, saving him valuable time and effort.
      </div>

      <div className="px-[20px] md:px-[50px] w-full  mb-[60px] sm:mb-[120px]">
        <div className=" rounded-[15px] bg-[#D9D9D9] lg:h-[500px] h-[300px] w-full"
        >
          Typing Animation
        </div>
      </div>
      <div className="mb-[60px] sm:mb-[120px]">
        <button
          className="bg-[#2DD4A2] px-[25px] rounded-[10px] h-[50px] font-[500] lg:h-[78px] text-[20px] lg:text-[32px]"
        >
          Click to see the full gist
        </button>
      </div>
      <div className="mx-[20px] font-[300] mb-[50px] sm:mb-[120px] md:text-[32px] text-center  sm:max-w-[60%]">
        Soon, more and more employees like Keren will begin using Benefits Buddy, experiencing the same transformation in their work experience.
      </div>
      <div className="font-[600] md:text-[32px] mb-[50px] sm:mb-[100px]">Powered by Lockthon</div>
    </main>
  );
}
