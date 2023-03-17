// import Header from '../Header'
import HeaderAlt from '../HeaderAlt'
import Footer from '../Footer'
import localFont from 'next/font/local'
import { useRouter } from 'next/router'

const poppins = localFont({
  src: [
    {
      path: '../../../public/fonts/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../../public/fonts/Poppins-Semibold.ttf',
      weight: '600'
    },
    {
      path: '../../../public/fonts/Poppins-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})

const Layout = ({children}) => {
  const router = useRouter();

  return (
    <div className={`min-h-screen w-full flex flex-col ${poppins.variable} font-sans`}>
        <HeaderAlt/>
        {/* <main className='pt-9 flex-grow'> */}
        <main className='flex-grow'>
            <div className={router.asPath === "/" ? "" : "pb-5 pt-[120px]"}>
                {children}
            </div>
        </main>
        <Footer/>

    </div>
  )
}

export default Layout