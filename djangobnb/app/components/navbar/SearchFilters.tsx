import React from 'react'

const SearchFilters = () => {
    return (
        <div className='h-[64px] flex flex-row items-center justify-between border rounded-full'>
            <div className='flex flex-row items-center justify-between'>
                <div className="w-[250px] h-[64px] px-8 flex flex-col rounded-full hover:bg-gray-100 justify-center">
                    <p className='text-xs font-semibold'>Where</p>
                    <p className='text-sm'>Wanted location</p>
                </div>

                <div className="w-[250px] h-[64px] px-8 flex flex-col rounded-full hover:bg-gray-100 justify-center">
                    <p className='text-xs font-semibold'>Check in</p>
                    <p className='text-sm'>Add dates</p>
                </div>

                <div className="h-[64px] px-8 flex flex-col rounded-full hover:bg-gray-100 justify-center">
                    <p className='text-xs font-semibold'>Checkout</p>
                    <p className='text-sm'>Add date</p>
                </div>

                <div className="h-[64px] px-8 flex flex-col rounded-full hover:bg-gray-100 justify-center">
                    <p className='text-xs font-semibold'>Who</p>
                    <p className='text-sm'>Add guests</p>
                </div>

            </div>
        </div>
    )
}

export default SearchFilters