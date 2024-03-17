import Link from 'next/link'


const Header = () => {

    return <header
        className="flex items-center justify-between sm:justify-center mt-[30px] xl:mt-[45px] mx-[24px]"
    >
        <Link
            href='/about'
            className="text-[18px] lg:text-[20px] font-[500]">
            About
        </Link>
        <Link href='/' className="w-[150px] flex justify-center" >
            {/* <div className="bg-black h-[40px] w-[40px] rounded-[50%]" /> */}
        </Link>
        <Link
            href='/waitlist'
            className=" text-[18px] lg:text-[20px] font-[500]">Waitlist</Link>
    </header>
}

export default Header