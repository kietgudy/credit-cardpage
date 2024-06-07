import React from 'react';
import Cards from "../../assets/desktop/isocard.svg"

const Slogan = () => {
    return (
        <section className='text-34 my-14 font-extrabold'>
            <div className='text-center'>
                <p>
                    Earn <span className='text-purple-300'>More</span>
                </p>
                <p>Pay Less</p>
                <button className='text-20 px-6 py-1 font-bold mt-7 bg-purple-500 hover:bg-purple-700 transition-all duration-300 rounded-lg'>Start</button>
            </div>
            <div className='mt-16'>
                <img src={Cards} alt="" />
            </div>
        </section>
    );
};

export default Slogan;