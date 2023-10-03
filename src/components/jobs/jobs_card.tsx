import React from 'react'
import { Jobsimage } from './jobs_image'

export const JobsCard = () => {
  return (
    <section className="flex flex-row-3 items-center justify-center">
        <div className="className='border border-teal-700/30 rounded-lg w-[25rem] h-[20rem] mb-[5rem] mt-[2rem] bg-teal-950/20 shadow-lg shadow-teal-800 relative">
                <Jobsimage />
        </div>
                
        </section>
  )
}
