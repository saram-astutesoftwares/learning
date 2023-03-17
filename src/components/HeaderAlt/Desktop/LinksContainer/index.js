import Link from "next/link";
import {links} from "../../links";
import ParentLinks from "./ParentLinks";

const LinksContainer = ({colored}) => {
  return (
    <>
      <div className="hidden lg:flex space-x-5">
        {
          links.map((item, index) => (
            <ParentLinks colored={colored} key={index} data={item} />
          ))
        }
        {/* <Link href={"/"} className={`after:transition-all relative after:content-[''] after:absolute after:w-[80%] after:transform after:translate-x-[-50%] after:left-2/4 after:bottom-0 after:h-[2px] after:bg-primary items-center flex justify-center h-full text-sm font-semibold capitalize hover:after:scale-x-[1] after:scale-x-[0]`}>
            Leggings
        </Link>
        <Link href={"/"} className={`after:transition-all relative after:content-[''] after:absolute after:w-[80%] after:transform after:translate-x-[-50%] after:left-2/4 after:bottom-0 after:h-[2px] after:bg-primary items-center flex justify-center h-full text-sm font-semibold capitalize hover:after:scale-x-[1] after:scale-x-[0]`}>
            Crop Tops
        </Link>
        <Link href={"/"} className={`after:transition-all relative after:content-[''] after:absolute after:w-[80%] after:transform after:translate-x-[-50%] after:left-2/4 after:bottom-0 after:h-[2px] after:bg-primary items-center flex justify-center h-full text-sm font-semibold capitalize hover:after:scale-x-[1] after:scale-x-[0]`}>
            Shirts
        </Link>
        <Link href={"/"} className={`after:transition-all relative after:content-[''] after:absolute after:w-[80%] after:transform after:translate-x-[-50%] after:left-2/4 after:bottom-0 after:h-[2px] after:bg-primary items-center flex justify-center h-full text-sm font-semibold capitalize hover:after:scale-x-[1] after:scale-x-[0]`}>
            Trousers
        </Link> */}
      </div>
    </>
  )
}

export default LinksContainer