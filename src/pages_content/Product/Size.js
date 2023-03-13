import React from 'react'

const Size = () => {
  return (
    <>
        <span className="font-bold uppercase mb-2 block">
            Select Size
        </span>
        <div className="gap-4 grid grid-cols-6 items-center">
            <Block value={"S"}/>
            <Block value={"M"}/>
            <Block value={"L"}/>
            <Block value={"XL"}/>
        </div>
    </>
  )
}

export default Size

const Block = ({value}) => {
    return (
        <button name="size" className="hover:bg-black hover:text-white py-2 px-4 text-center rounded-sm border-[1px] border-black font-bold">
            {value}
        </button>
    )
}