import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto my-12 sm:my-16 lg:my-20">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8">
                    Browse by <span className="text-[#6A38C2]">Category</span>
                </h2>
                <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent className="gap-2">
                        {
                            category.map((cat, index) => (
                                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
                                    <Button 
                                        onClick={()=>searchJobHandler(cat)} 
                                        variant="outline" 
                                        className="rounded-full w-full text-xs sm:text-sm py-2 hover:bg-[#6A38C2] hover:text-white transition-colors"
                                    >
                                        {cat}
                                    </Button>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </div>
    )
}

export default CategoryCarousel