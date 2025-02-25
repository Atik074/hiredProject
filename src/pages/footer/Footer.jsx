import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#7b7878] mt-12 flex justify-between gap-12'>
           <div className='w-[30%]'>
           <h2 className="text-[23px] font-semibold">HIRRED</h2>
           <p className='text-xl'>Jobs are shown here, You select the job according to your skill. Apply by clicking on & Apply.If you eligible for job,It is your best platform.So,highlight your skill and get your dream job</p>
            </div>

           <div className='w-[30%]'>
           <h3 className="text-[23px] font-semibold">EJOBS IN</h3>
           <ul>
            <li className='list-none text-xl'>Dhaka</li>
            <li className='list-none text-xl'>San Fransisco</li>
            <li className='list-none text-xl'>New York</li>
            <li className='list-none text-xl'>Los Angeles</li>
            <li className='list-none text-xl'>Chicago</li>
            <li className='list-none text-xl'>San Diego</li>
            <li className='list-none text-xl'>Portland</li> 
            <li className='list-none text-xl'>Seattle</li> 
            <li className='list-none text-xl'>Austin</li>
           </ul>
           </div>

           <div  className='w-[30%]'>
           <h3 className="text-[23px] font-semibold" >FOLLOW US</h3>

           </div>
        </div>
    );
};

export default Footer;