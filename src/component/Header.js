import { Link } from "react-router-dom"
import { useState} from "react"
import { CDN_URL } from "../utils/constant"
import useOnlineStatus from "../utils/useOnlinestatus"
import UserContext from "../utils/UserContext"
import {  useSelector } from "react-redux"
import appstore from "../utils/appstore"



const Header=()=>{
    const [btnNameReact,setBtnNameReact]=useState("Login")

    const onlineStatus=useOnlineStatus()

    const cartItems= useSelector((store)=>store.cart.items)

    // const data=UserContext(UserContext)

    return(
        <div className='flex justify-between bg-pink-100 shadow-xl'>
            <div className='p-4'>
            <img className='w-24' src={CDN_URL}/>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4 font-semibold text-xl">
                        online status: {onlineStatus ?'✅':'🔴'}
                    </li>
                    <li className="px-4 font-semibold text-xl">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="px-4 font-semibold text-xl">
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li className="px-4 font-semibold text-xl">
                        <Link to={'/grocery'}>Grocery</Link>
                    </li>
                    <li className="px-4 font-semibold text-xl">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4 font-semibold text-xl">
                        <Link to="/cart">Cart {cartItems.length} </Link>
                    </li>
                    <button className="px-3 py-1 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out" onClick={()=>{
                        btnNameReact==="Login" ? setBtnNameReact("Logout") :
                        setBtnNameReact("Login")
                    }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default  Header