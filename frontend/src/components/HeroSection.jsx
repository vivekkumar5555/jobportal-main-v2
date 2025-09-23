import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col gap-5 my-8 sm:my-10 max-w-4xl mx-auto'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium text-sm sm:text-base'>No. 1 Job Hunt Website</span>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
                    Search, Apply & <br className='hidden sm:block' /> 
                    <span className='sm:hidden'> </span>Get Your <span className='text-[#6A38C2]'>Dream Jobs</span>
                </h1>
                <p className='text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                    Find your perfect job opportunity with our comprehensive job search platform. 
                    Connect with top employers and advance your career today.
                </p>
                <div className='flex flex-col sm:flex-row w-full sm:w-[80%] lg:w-[60%] xl:w-[50%] shadow-lg border border-gray-200 rounded-full items-center gap-2 sm:gap-0 mx-auto bg-white'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full px-4 py-3 sm:py-2 rounded-full sm:rounded-l-full sm:rounded-r-none text-sm sm:text-base'

                    />
                    <Button 
                        onClick={searchJobHandler} 
                        className="w-full sm:w-auto rounded-full sm:rounded-r-full sm:rounded-l-none bg-[#6A38C2] hover:bg-[#5b30a6] px-6 py-3 sm:py-2"
                    >
                        <Search className='h-4 w-4 sm:h-5 sm:w-5' />
                        <span className='ml-2 sm:hidden'>Search Jobs</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection