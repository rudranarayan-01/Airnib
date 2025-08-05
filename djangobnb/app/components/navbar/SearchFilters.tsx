'use client'
import React from 'react'
import { FaSearch } from "react-icons/fa"

const SearchFilters = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row lg:items-center justify-between border border-gray-200 rounded-full hover:border-gray-300 transition'>
            {/* Filters container */}
            <div className='w-full'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                    {/* Where */}
                    <div className="w-full lg:w-[250px] h-[64px] px-6 py-2 flex flex-col hover:bg-gray-100 justify-center rounded-full transition">
                        <p className='text-xs font-semibold'>Where</p>
                        <p className='text-sm text-gray-700'>Wanted location</p>
                    </div>

                    {/* Check-in */}
                    <div className="w-full lg:w-[250px] h-[64px] px-6 py-2 flex flex-col hover:bg-gray-100 justify-center rounded-full transition">
                        <p className='text-xs font-semibold'>Check in</p>
                        <p className='text-sm text-gray-700'>Add dates</p>
                    </div>

                    {/* Check-out */}
                    <div className="w-full lg:w-[250px] h-[64px] px-6 py-2 flex flex-col hover:bg-gray-100 justify-center rounded-full transition">
                        <p className='text-xs font-semibold'>Checkout</p>
                        <p className='text-sm text-gray-700'>Add date</p>
                    </div>

                    {/* Who */}
                    <div className="w-full lg:w-[250px] h-[64px] px-6 py-2 flex flex-col hover:bg-gray-100 justify-center rounded-full transition">
                        <p className='text-xs font-semibold'>Who</p>
                        <p className='text-sm text-gray-700'>Add guests</p>
                    </div>
                </div>
            </div>

            {/* Search Icon */}
            <div className="flex justify-center lg:justify-end p-3">
                <div className='p-4 bg-rose-400 rounded-full text-white hover:bg-rose-500 transition cursor-pointer'>
                    <FaSearch />
                </div>
            </div>
        </div>
    )
}

export default SearchFilters
