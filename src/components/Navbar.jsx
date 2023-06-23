import { useRef } from "react"

export const Navbar = () => {

    const dialogeRef = useRef();

    const handleOpen = () => {
        dialogeRef.current.showModal();
    }
    const handleClose = () => {
        dialogeRef.current.close();
    }
    
    return(
        <nav className="bg-gray-100 shadow-md">
            <ul className="flex flex-row gap-x-10 justify-between p-5">
            <li className="brand"><h1></h1></li>

                <li className="mr-3"><button onClick={handleOpen} className="w-full h-full"><i className="fa-brands fa-empire text-4xl text-gray-700"></i></button></li>

                
            </ul>

            <dialog ref={dialogeRef} className="bg-zinc-100  shadow-sm p-5 " >
                <div className="flex flex-col text-gray-700">
                    <div className="w-60 flex flex-col  gap-y-5">
                        <a href="/" className="bg-zinc-50 shadow-md px-3 py-2 rounded-sm text-center"> <span className="font-bold text-xl ml-2">Home</span> </a>
                        <a href="#" className="bg-zinc-50 shadow-md px-3 py-2 rounded-sm text-center"> <span className="font-bold text-xl ml-2">Page</span></a>
                        <a href="/about" className="bg-zinc-50 shadow-md px-3 py-2 rounded-sm text-center"> <span className="font-bold text-xl ml-2">About</span></a>
                        <a href="#" className="bg-zinc-50 shadow-md px-3 py-2 rounded-sm text-center"> <span className="font-bold text-xl ml-2">Contact</span></a>
                    </div>
                    <button className=" px-3 py-2 rounded-md  mt-5" onClick={handleClose}><i className="fa-solid fa-xmark fa-lg"></i></button>
                </div>
            </dialog>

             
        </nav>
        
    )
}