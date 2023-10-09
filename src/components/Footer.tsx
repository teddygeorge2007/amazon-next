import Image from "next/image"
import logo from "../images/logo.png"
const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
<Image className="w-24" src={logo} alt="logo"/>
<p> All rights reserved 
  {""}<a className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300" href="https://teddygeorge.netlify.app/" target="_blank"> @Tewodros George</a></p>
  
  <div className="flex flex-col justify-center items-center">
        <div>
          <ul className="text-gray-300 text-sm gap-4 py-2 mt-4 flex">
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Conditions of Use
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Privacy Notice
            </li>
            <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
              Your Ads Privacy Choices
            </li>
          </ul>
        </div>
        <div>
          <p className="font-normal text-[12px] text-[#DDD] leading-3">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer