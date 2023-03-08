import Header from '../Header'

const Layout = ({children}) => {
  return (
    <div className='min-h-screen w-full flex flex-col'>
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