import { AiOutlineClose } from "react-icons/ai";
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
      <div className={`space-y-8 px-5 py-5 transition-transform bg-white z-[101] w-[320px] fixed top-0 bottom-0 right-0 transform ${open ? "translate-x-[0]" : "translate-x-full"} block lg:hidden`}>
          <div className="flex justify-end">
            <button name="Close Menu" onClick={() => setOpen(false)}  className="focus:outline-none">
              <AiOutlineClose className="text-2xl "/>
            </button>
          </div>
          {
            links.map((item, index) => (
              <ParentLinks key={index} data={item}/>
            ))
          }
      </div>
    </>
  )
}

export default LinksContainer