import { useDispatch } from "react-redux"
import { Image_url } from "../utils/constant"
import { addItem } from "../utils/cartSlice"

const ItemList=( {items})=>{


    const dispatch=useDispatch()

    const handleadditem=(item)=>{
       dispatch(addItem(item))
    }

    return(
   <div>
    {items.map((item) =>
    (<div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
        <div className="w-9/12">
        <div className="py-2">
            <span className="text-lg font-bold">{item.card.info.name}</span>--
            <span className="text-lg font-bold">
                {item.card.info.price
                ? item.card.info.price/100
            : item.card.info.defaultPrice}
            </span>
        </div>
        <p className="text-xs">
            {item.card.info.description}
        </p>
        </div>
        <div className="w-3/12 p-4">
            <div className="absolute">
            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
            onClick={()=>
            handleadditem(item)}>
                Add+
            </button>
            </div>
        <img src={Image_url +item.card.info.imageId} className="w-full" />
        </div>
    </div>
    ))}
   </div>
    )
}

export default ItemList