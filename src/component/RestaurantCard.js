import {Image_url} from "../utils/constant"
const RestaurantCard=(props)=>{
    const {resData}=props;

    const {cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        locality,
        avgRating,areaName}=resData?.info
     return(
        <div className='m-2 p-4 w-[250px] h-[400px] bg-zinc-200 rounded-lg hover:bg-slate-400 flex flex-col justify-between'>
        <img className='rounded-lg object-cover h-[180px]' alt='res-logo' src={Image_url + cloudinaryImageId} />
        <div className="flex flex-col">
            <h3 className="font-bold text-lg">{name}</h3>
            <h4 className="text-sm">{cuisines.join(", ")}</h4>
            <h4 className="text-sm">Cost for Two: {costForTwo}</h4>
            <h4 className="text-sm">Locality: {locality}</h4>
            <h5 className="text-xs">Average Rating: {avgRating}</h5>
            <h5 className="text-xs">Area Name: {areaName}</h5>
        </div>
    </div>

     )
}


//hoc

 export const withpromotedlabel=(RestaurantCard)=>{
    return(props)=>{
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}



export default RestaurantCard;