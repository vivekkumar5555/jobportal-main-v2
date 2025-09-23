import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// const skills = ["Html", "Css", "Javascript", "Reactjs"]
const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const {user} = useSelector(store=>store.auth);

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='bg-white border border-gray-200 rounded-2xl my-5 p-4 sm:p-6 lg:p-8'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                            <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
                                <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
                            </Avatar>
                            <div className="min-w-0 flex-1">
                                <h1 className='font-medium text-lg sm:text-xl truncate'>{user?.fullname}</h1>
                                <p className="text-sm sm:text-base text-gray-600 line-clamp-2">{user?.profile?.bio}</p>
                            </div>
                        </div>
                        <Button onClick={() => setOpen(true)} variant="outline" size="sm">
                            <Pen className="h-4 w-4" />
                            <span className="ml-2 hidden sm:inline">Edit</span>
                        </Button>
                    </div>
                    
                    <div className='my-5 space-y-3'>
                        <div className='flex items-center gap-3'>
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span className="text-sm sm:text-base truncate">{user?.email}</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Contact className="h-4 w-4 text-gray-500" />
                            <span className="text-sm sm:text-base">{user?.phoneNumber}</span>
                        </div>
                    </div>
                    
                    <div className='my-5'>
                        <h1 className="text-base sm:text-lg font-semibold mb-3">Skills</h1>
                        <div className='flex flex-wrap items-center gap-2'>
                            {
                                user?.profile?.skills?.length > 0 ? 
                                    user?.profile?.skills.map((item, index) => (
                                        <Badge key={index} className="text-xs">{item}</Badge>
                                    )) : 
                                    <span className="text-gray-500">No skills added</span>
                            }
                        </div>
                    </div>
                    
                    <div className='w-full'>
                        <Label className="text-sm sm:text-base font-semibold">Resume</Label>
                        <div className="mt-1">
                            {
                                isResume ? (
                                    <a 
                                        target='blank' 
                                        href={user?.profile?.resume} 
                                        className='text-blue-500 hover:underline cursor-pointer text-sm sm:text-base break-all'
                                    >
                                        {user?.profile?.resumeOriginalName}
                                    </a>
                                ) : (
                                    <span className="text-gray-500 text-sm sm:text-base">No resume uploaded</span>
                                )
                            }
                        </div>
                    </div>
                </div>
                
                <div className='bg-white rounded-2xl p-4 sm:p-6'>
                    <h1 className='font-bold text-base sm:text-lg my-3 sm:my-5'>Applied Jobs</h1>
                    <AppliedJobTable />
                </div>
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile