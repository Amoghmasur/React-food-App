import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"

import { clearItem,removeItem } from "../utils/cartSlice"

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)

    const dispatch=useDispatch()

    const handleClearCart=()=>{
        dispatch(clearItem())
    }

    return(
       <div className="text-center mt-10 mb-20 px-10">
  <div className="w-10/12 md:w-6/12 mx-auto">
    <button
      className="w-full py-3 px-4 mb-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-200"
      onClick={handleClearCart}
    >
      Clear Cart
    </button>
    <div className="bg-white shadow-lg rounded-lg">
      <ItemList items={cartItems} />
    </div>
  </div>
</div>

    )
}

export default Cart