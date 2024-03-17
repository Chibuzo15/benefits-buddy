'use client'

import { addClassNames } from '@/utils/functions';
import Link from 'next/link'
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathName = usePathname();

    const navLinks = [
        {
            title: 'Home',
            href: '/'
        },
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
            href: '#linkedin'
        },
        {
            title: 'Contact',
            href: 'mailto:contact@benefitsbuddy.com'
        },
    ]

    return <footer
        className="sm:mx-[60px] flex flex-col items-center"
    >
        <div className="bg-[#000000] h-[1px] w-full my-[37px] max-w-[575px]"></div>
        <div className="flex px-[19px] sm:px-[0] w-full justify-between mx-[10px] items-center max-w-[575px]">
            <div className='w-[53px] mr-[10px]'>
                <img
                    className="h-[53px] w-[53px] rounded-[50%]"
                    src="/images/logobenefits.jpeg"
                />
            </div>
            <div className='flex flex-wrap sm:flex-nowrap space-x-[14px] md:space-x-[35px] xl:space-x-[55px] font-[500] '>
                {
                    navLinks?.map((link) => {
                        const isActive = pathName === link.href;
                        return (<Link
                            key={link.title}
                            className={
                                addClassNames("text-[13px] ",
                                    isActive ? 'text-[#928B8B]' : ''
                                )
                            }
                            href={link.href}>{link.title}</Link>)
                    })
                }
            </div>
        </div>
        <div className='mx-[10px] max-w-[575px] px-[19px] sm:px-[0] w-full flex flex-wrap sm:flex-nowrap mt-[118px] justify-between items-center mt-[80px] mb-[30px]'>
            <div className='text-[#928B8B] font-[500] text-[13px] '>
                @2024 Benefitsbuddy
            </div>
            <div className='flex items-center text-[#928B8B] font-[500] text-[13px] '>
                <span>Terms of condition</span> <span className='mx-[6px]'>|</span> <span>Privacy policy</span>
            </div>
        </div>
    </footer>
}

export default Footer