import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-sky-50 text-slate-900 px-4 sm:px-8'>
        <div className='flex justify-between items-center max-w-7xl font-mono mx-auto py-7'> 
            <Link to='/'>
            <h1 className='font-bold text-md sm:text-2xl flex flex-wrap'>
                <span>Inn</span>
                <span>Sight</span>
            </h1>
            </Link>
            <ul className='flex gap-2'>
                <Link to='/'>
                <li className='hidden sm:inline py-2 px-7 rounded-xl  uppercase hover:text-sky-500 cursor-pointer'>Home</li>
                </Link>
                <Link to='list-properties'>
                <li className='hidden sm:inline py-2 px-7 rounded-xl uppercase  hover:text-sky-500 cursor-pointer'>Listings</li>
                </Link>  
                <Link to='sign-in'>
                <li className='sm:inline py-2 px-7 rounded-xl uppercase hover:text-sky-500 cursor-pointer'>Sign in</li>
                </Link>             
            </ul>
        </div>
    </header>
  )
}
