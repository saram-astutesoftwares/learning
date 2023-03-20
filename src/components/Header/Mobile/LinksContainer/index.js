import { AiOutlineClose, AiOutlineQuestion, AiOutlineUser } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { BsBox2Heart } from "react-icons/bs";
import {links} from "../../links";
import ParentLinks from "./ParentLinks";

const LinksContainer = ({open, setOpen}) => {
  return (
    <>
      {
        open ?
        <div onClick={() => setOpen(false)} className="z-[100] fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25">

        </div>
        : null
      }
      <div className={`transition-transform bg-white z-[101] w-[320px] fixed top-0 bottom-0 right-0 transform ${open ? "translate-x-[0]" : "translate-x-full"} block lg:hidden`}>
          <div className="space-y-8 px-5 py-5 h-full w-full overflow-y-auto">
          <div className="flex justify-end">
            <button aria-label="Close menu" onClick={() => setOpen(false)}  className="focus:outline-none">
              <AiOutlineClose className="text-2xl "/>
            </button>
          </div>
          {
            links.map((item, index) => (
              <ParentLinks key={index} data={item}/>
            ))
          } 

            <div className="space-y-5 text-center">

              <div className="text-base font-medium flex items-center space-x-5">
                <BiStore className="text-2xl"/>
                <p>
                  Find a store
                </p>
              </div>
              <div className="text-base font-medium flex items-center space-x-5">
                <AiOutlineQuestion className="text-2xl"/>
                <p>
                  Return Policy
                </p>
              </div>
              <div className="text-base font-medium flex items-center space-x-5">
                <BsBox2Heart className="text-2xl"/>
                <p>
                  Track order
                </p>
              </div>
              <div className="text-base font-medium flex items-center space-x-5">
                <AiOutlineUser className="text-2xl"/>
                <p>
                  Join Pro Club
                </p>
              </div>
            </div>

            <a href="/account/login" className="text-center block btn btn-primary">
                  Sign In
              </a>


          </div>
      </div>
    </>
  )
}

export default LinksContainer