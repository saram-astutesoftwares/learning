import Header from '../Header'
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
        <Header/>
        <main className='flex-grow'>
            <div className="pb-5">
                {children}
            </div>
        </main>
        <footer className="flex-shrink-0 p-4 text-center font-bold text-base">
            {/* Footer */}
        </footer>

    </div>
  )
}

export default Layout