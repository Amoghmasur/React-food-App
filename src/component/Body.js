import RestaurantCard, {withpromotedlabel} from "./RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import resObj from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlinestatus";
import { swiggy_api , Cors_api} from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurant,setListOfrestraunt]=useState([]);
    // to use mockdata use resobj in usestate

    const[searchText,setSearchText]=useState("")

    const RestaurantCardPromoted=withpromotedlabel(RestaurantCard)


    useEffect(() => {
      fetchData()
    },[])

    const fetchData = async () => {
      const data=await fetch(swiggy_api);

      const json= await data.json()
      setListOfrestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // '?' this is called option chaining

    // conditional rendering means- rendering upon the condition of the component

const onlineStatus=useOnlineStatus()
if (onlineStatus===false)
return (<h1>Looks like your're offline</h1>)


    return  listOfRestaurant?.length===0 ?
     ( <Shimmer/>)
    :
    (
        <div className='body'>

            <div className='filter flex'>
              <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-gray-500 rounded-lg px-4 py-2"
                onChange={(e)=>{
                  setSearchText(e.target.value)
                }}/>
                <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 m-4 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out"
                onClick={()=>{
                  console.log(searchText)

                  const filterRestaurant = listOfRestaurant.filter((res)=>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                  setListOfrestraunt(filterRestaurant)

                }}>Search</button>
              <button
              className="px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-700 rounded-md text-white font-semibold shadow-md transition duration-300 ease-in-out"
              onClick={()=>{
                const filteredList =listOfRestaurant.filter(
                  (res)=>res.info.avgRating > 4.4
                )
                setListOfrestraunt(filteredList)
              }}>
                Top Rated Resto
                </button>
                </div>
              </div>
            <div className='flex flex-wrap'>
              {listOfRestaurant?.map((Restaurant)=>(
                <Link to={'/restaurants/'+Restaurant.info.id} key={Restaurant.info.id}>
                  { Restaurant.info.promoted ? (<RestaurantCardPromoted  resData={Restaurant}/> ):

                  (<RestaurantCard  resData={Restaurant}/>)
                  }
                </Link>)
              )}

            </div>
        </div>
    )
}

export default  Body;