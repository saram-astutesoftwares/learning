import {links} from "../../links";
import ParentLinks from "./ParentLinks";

const LinksContainer = () => {
  return (
    <>
      <div className="hidden lg:flex space-x-5">
        {
          links.map((data, index) => (
            <ParentLinks data={data} key={index}/>
          ))
        }
      </div>
    </>
  )
}

export default LinksContainer