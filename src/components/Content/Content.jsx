import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { useSpring, animated } from "react-spring";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";

const Content = () => {
  const customer = useSpring({ customers: 99999, from: { customers: 0 } });
  const card = useSpring({ cards: 99999, from: { cards: 0 } });
  return (
    <section className="md:flex md:flex-row">
      <div className="ml-16 mr-16 text-bold bg-purple-800 flex flex-col items-center bg-gradient-to-b shadow-md rounded-[24px] from-white/30 to-transparent md:w-[25%]">
        <div className="mt-12 gap-8 flex items-start">
          <FaUser size={"24px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px] md:text-16">Customers</p>
          </div>
        </div>
        <div className="flex gap-8 items-center mb-16">
          <BsFillCreditCardFill size={"24px"} className="mt-3" />
          <div className="text-26">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16">Card Issued</p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] md:mt-0 font-semibold md:w-[30%] md:text-16 md:ml-[20%]">
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Set spending limits and restrictions</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>No external fees</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
