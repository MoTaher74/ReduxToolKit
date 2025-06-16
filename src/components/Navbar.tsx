
import type {RootState}  from '../store/store'
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {
    const {cartItem} = useSelector((state:RootState)=> state.cart)
    const navigate = useNavigate();
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <Link to="/">
                <h1 className="text-2xl">Cart Shop</h1> 
            </Link>


            <div className="flex items-center gap-12 text-xl">
                <Link to="/">Home</Link>

                <div className="relative cursor-pointer" onClick={()=> navigate("/cart")}>
                    <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">{cartItem.length}</button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;