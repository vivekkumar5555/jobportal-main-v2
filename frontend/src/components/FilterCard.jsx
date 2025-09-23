import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
    },[selectedValue]);
    return (
        <div className='w-full bg-white p-3 sm:p-4 rounded-md shadow-sm border border-gray-100'>
            <h1 className='font-bold text-base sm:text-lg mb-3'>Filter Jobs</h1>
            <hr className='mb-4' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler} className="space-y-4">
                {
                    fitlerData.map((data, index) => (
                        <div key={index} className="space-y-2">
                            <h2 className='font-semibold text-sm sm:text-base text-gray-800'>{data.fitlerType}</h2>
                            <div className="space-y-2">
                                {
                                    data.array.map((item, idx) => {
                                        const itemId = `id${index}-${idx}`
                                        return (
                                            <div key={idx} className='flex items-center space-x-2'>
                                                <RadioGroupItem value={item} id={itemId} className="h-4 w-4" />
                                                <Label htmlFor={itemId} className="text-xs sm:text-sm cursor-pointer">{item}</Label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default FilterCard