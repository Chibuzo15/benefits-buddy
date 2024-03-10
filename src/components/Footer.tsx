import Link from 'next/link'

const Footer = () => {
    const navLinks = [
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Waitlist',
            href: '/waitlist'
        },
        {
            title: 'Linkedin',
            href: '/'
        },
        {
            title: 'Contact',
            href: '/contact'
        },
    ]

    return <footer
        className="sm:mx-[60px]"
    >
        <div className="bg-[#000000] h-[1px] w-full my-[37px]"></div>
        <div className="flex  justify-between mx-[10px] items-center">
            <div className='w-[53px] mr-[10px]'>
                <div
                    className="bg-black h-[53px] w-[53px] rounded-[50%]"
                ></div>
            </div>
            <div className='flex flex-wrap sm:flex-nowrap space-x-[35px] xl:space-x-[55px] font-[500] '>
                {
                    navLinks?.map((link) => {
                        return (<Link
                            key={link.title}
                            className="text-[13px] sm:text-[25px] xl:text-[32px]"
                            href={link.href}>{link.title}</Link>)
                    })
                }
            </div>
        </div>
        <div className='mx-[10px] flex flex-wrap sm:flex-nowrap mt-[118px] justify-between w-full items-center mt-[80px]'>
            <div className='text-[#928B8B] font-[500] text-[13px] sm:text-[22px] xl:text-[24px]'>
                @2024 Benefitsbuddy
            </div>
            <div className='flex items-center text-[#928B8B] font-[500] text-[13px] sm:text-[22px] xl:text-[24px]'>
                <span>Terms of condition</span> <span className='mx-[6px]'>|</span> <span>Privacy policy</span>
            </div>
        </div>
    </footer>
}

export default Footer