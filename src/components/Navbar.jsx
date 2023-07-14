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
        <nav className={`my-active ${show && 'my-hidden'}`}>
            
            <div className='flex flex-row  items-center '>
                <div className="bg-slate-700 mt-2 ml-2  border-neutral-300 border-2 rounded-sm">
                    <button className="py-1 px-2"><i className="fa-solid fa-bars-staggered text-neutral-200"></i></button>
                </div>
            </div>
                
        </nav>
        
    )
}