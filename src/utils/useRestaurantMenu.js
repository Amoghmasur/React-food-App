import { useEffect, useState } from "react"
import { Menu_url } from "./constant"


const useRestrauntMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null)

    //fetchmenu data

    useEffect(()=>{
         fetchData()
    },[])

   const fetchData=async()=>{
    const data=await fetch(Menu_url+resId)
    const json=await data.json()
    setResInfo(json.data)
   }
    return resInfo

}


export default useRestrauntMenu