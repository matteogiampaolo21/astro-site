import './Navbar.css'

export const Navbar = () => {

    return(
       <nav className='bg-slate-700 text-white py-8'>
        <ul className='flex flex-row justify-center gap-x-5 text-lg sm:gap-x-8 md:gap-x-12'>
          <li><a href="/">Home</a></li>
          <li><a href="/secPage">Page</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
       </nav> 
    )
}