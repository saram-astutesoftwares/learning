import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-16 max-w-[1600px] w-10/12 mx-auto'>
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3 space-y-5">
                <Image height={70} width={70} src="/images/pro-wears.svg" className="max-w-[70px]" />
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ab temporibus porro modi molestiae molestias?

                </p>
            </div>
            <div className="col-span-2">

            </div>
            <div className="col-span-2 space-y-4">
                <p className="font-bold">
                    Products
                </p>
                <a href="#" className="block">
                    Trending
                </a>
                <a href="#" className="block">
                    My Account
                </a>
                <a href="#" className="block">
                    Vendors
                </a>
                <a href="#" className="block">
                    Brands
                </a>
                <a href="#" className="block">
                    Storefront
                </a>
            </div>
            
            <div className="col-span-2 space-y-4">
                <p className="font-bold">
                    Legals
                </p>
                <a href="#" className="block">
                    License
                </a>
                <a href="#" className="block">
                    Refund Policy
                </a>
                <a href="#" className="block">
                    About Us
                </a>
                <a href="#" className="block">
                    Contacts
                </a>
            </div>
            
            <div className="col-span-3 space-y-4">
                <p className="font-bold">
                    Contacts
                </p>
                <p className="">
                    Feel free to get in touch with us via phone or send us a message
                </p>
                <p className="">
                    +92 333 333333
                </p>
                <p className="">
                    support@pro-wears.com
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer