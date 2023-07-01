import React from 'react'

const SearchUserCard = () => {
    return (
        <div className='py-2 cursor-pointer'>
            <div className='flex items-center'>
                <img className='w-10 rounded-full' src='https://cdn.pixabay.com/photo/2022/06/07/14/15/food-7248455_640.png' alt=''/>
                <div className='ml-2'>
                    <p>Full Name</p>
                    <p className='opacity-70'>Username</p>
                </div>
            </div>
        </div>
    )
}

export default SearchUserCard
