import Header from '../Header'
import Header2 from '../Header2'
import Footer from '../Footer'
import localFont from 'next/font/local'

const poppins = localFont({
  src: [
    {
      path: '../../../public/fonts/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../../public/fonts/Poppins-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})

const Layout = ({children}) => {
  return (
    <div className={`min-h-screen w-full flex flex-col ${poppins.variable} font-sans`}>
        {/* <Header/> */}
        <Header2/>
        <main className='pt-[79px] flex-grow'>
            <div className="pb-5">
                {children}
            </div>
        </main>
        <Footer/>

    </div>
  )
}

export default Layout