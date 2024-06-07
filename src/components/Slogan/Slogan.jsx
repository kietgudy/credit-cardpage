import React from 'react';
import Cards from "../../assets/desktop/isocard.svg"

const Slogan = () => {
    return (
        <section className='relative text-34 my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-[48px]'>
            <div className='text-center md:col-span-1 md:col-start-2'>
                <p>
                    Earn <span className='text-purple-300'>More</span>
                </p>
                <p>Pay Less</p>
                <button className='text-white text-20 px-6 py-1 font-bold mt-7 bg-purple-500 hover:bg-purple-700 transition-all duration-300 rounded-lg md:text-[25px] md:px-8 md:py-[8px]'>Start</button>
            </div>
            <div className='mt-16 md:absolute md:right-[-5rem]'>
                <img src={Cards} alt="" />
            </div>
        </section>
    );
};

export default Slogan;