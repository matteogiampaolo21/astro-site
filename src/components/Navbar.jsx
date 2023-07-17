import { useState, useEffect  } from "react";

export const Navbar = () => {

    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
        } else { // if scroll up show the navbar
          setShow(true);  
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };

    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);
    
    return(
        <div className={`my-active `}>
            
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