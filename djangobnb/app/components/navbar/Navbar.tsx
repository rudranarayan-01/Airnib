import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full fixed top-0 left-0 py-6 border-b text-orange-500 bg-white z-10'>
            <div className='max-w-[1500px] mx-auto px-6'>
                <div className='flex justify-between items-center'>
                    <Link href="/" className=''>
                        <Image src={"/logo.png"} alt="Logo" width={180} height={40} className='inline-block mr-2' />
                    </Link>
                    <div className='flex space-x-6 items-center'>
                        Search filter
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar