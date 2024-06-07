import React from 'react';
import {FaUser} from "react-icons/fa";
import { BsFillCreditCardFill } from 'react-icons/bs';
import checkIconMobile from "../../assets/mobile/checkpoint.svg"

const Content = () => {
    return (
        <section className=''>
            <div className='ml-16 mr-16 text-bold bg-purple-800 flex flex-col items-center bg-gradient-to-b shadow-md rounded-[24px] from-white/30 to-transparent'>
                <div className="mt-12 gap-8 flex items-start" >
                    <FaUser size={"24px"} className='mt-[12px]'/>
                    <p className='text-26'>12345
                        <p className="text-13 font-semibold mb-[36px]">Customers</p>
                    </p>
                </div>
            <div className='flex gap-8 items-center mb-16'>
                <BsFillCreditCardFill size={"24px"} className='mt-3'/>
                <p className="text-26">12345
                    <p className="text-13 font-semibold">Card Issued</p>
                </p>
            </div>
            </div>
            <div className='text-13 flex flex-col w-[100%] mt-[90px] font-semibold'>
                <p className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>Card reports sent to your phone every weeks</p>
                </p>
                <p className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>Set spending limits and restrictions</p>
                </p>
                <p className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>No external fees</p>
                </p>
            </div>
        </section>
    );
};

export default Content;