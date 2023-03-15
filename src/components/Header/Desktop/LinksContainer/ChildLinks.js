import React from 'react'
import Link from "next/link";

const ChildLinks = ({data}) => {
  return (
    <div>
        <Link href={"/"} className={`relative text-lg  font-bold capitalize `}>
            {data.title}
        </Link>
        <div className="space-y-3 mt-5">
            {
                data.categories.map((item, index) => (
                    <Link href={"/"} className={`font-medium relative block font-bold capitalize `}>
                        {item.title}
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default ChildLinks