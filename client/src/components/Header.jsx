import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-7xl mx-auto p-4'> 
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
                <span className='text-slate-500'>Inn</span>
                <span className='text-slate-700'>Sight</span>
            </h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to='/'>
                <li className='hidden sm:inline rounded-lg text-slate-700 hover:text-slate-950 cursor-pointer '>Home</li>
                </Link>
                <Link to='list-hotels'>
                <li className='hidden sm:inline text-slate-700 hover:text-slate-950 cursor-pointer'>Hotels</li>
                </Link>  
                <Link to='sign-in'>
                <li className='sm:inline text-slate-700 hover:text-slate-950 cursor-pointer'>Sign in</li>
                </Link>
                <Link to='/create-listing'>
                    Create listing
                </Link>              
            </ul>
        </div>
    </header>
  )
}
