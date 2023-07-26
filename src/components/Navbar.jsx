import './Navbar.css'

export const Navbar = () => {

    return(
       <nav className='bg-slate-800 text-white py-8'>
        <ul className='flex flex-row justify-center gap-x-5 text-xl sm:gap-x-8 md:gap-x-12 '>
          <li className='mr-auto nav-xl:hidden'></li>
          <img src="/logo-no-background.png" className='object-contain h-111 nav-xl:ml-10 nav-xl:mr-16' alt="" />
          <li className='hidden flex-col justify-center hover:text-red-500 my-transition nav-xl:flex'><a href="/">Home</a></li>
          <li className='hidden flex-col justify-center hover:text-red-500 my-transition nav-xl:flex'><a href="/secPage">Page</a></li>
          <li className='hidden flex-col justify-center hover:text-red-500 my-transition nav-xl:flex'><a href="/about">About</a></li>
          <li className='hidden flex-col justify-center hover:text-red-500 my-transition nav-xl:flex'><a href="/contact">Contact</a></li>
          <li className='ml-auto items-center hidden flex-row gap-x-6  mr-10 nav-xl:flex'>
            <i className="fa-brands text-3xl fa-facebook hover:text-red-500 my-transition ml-16"></i>
            <i className="fa-brands text-3xl fa-twitter hover:text-red-500 my-transition"></i>
            <i className="fa-brands text-3xl fa-instagram hover:text-red-500 my-transition"></i>
          </li>
        <li className="ml-auto flex flex-col mr-5 justify-center nav-xl:hidden">
          <input className='w-8 h-8 rounded' type="checkbox" />
        </li>
        </ul>
       </nav> 
    )
}