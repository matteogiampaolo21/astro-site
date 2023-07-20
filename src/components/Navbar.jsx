import './Navbar.css'

export const Navbar = () => {

    return(
        <div className=" fixed z-50">
            
            <label className="hamburger-menu">
              <input type="checkbox" />
            </label>
            <aside className="sidebar">
              <nav className="flex flex-col gap-5 text-xl pb-3">
                <div><a href="/" className="w-full block">Home</a></div>
                <div><a href="/secPage" className="w-full block">Second Page</a></div>
                <div><a href="/about" className="w-full block">About</a></div>
                <div><a href="/contact" className="w-full block">Contact</a></div>
              </nav>
            </aside>
                
        </div>
        
    )
}