import React from "react";
import { CDN_URL } from "../utils/constants";
const ItemList=({items,dummy})=>{
    console.log(dummy);
   return <div className="items">
      {items.map(item=>
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between ">
           <div className="w-9/12">
        
          <div>
          <span className="py-2">{item.card.info.name}</span>
          <span >- Rs {item.card.info.price? item.card.info.price/100: item.card.info.defaultPrice}
          </span>
          </div>
          <p className="des">{item.card.info.description}</p>
          </div>
         <div className="w-2/12 p-4">
         <div className=" absolute">
         <button className= "  p-2 bg-black text-white  ">Add + </button>
         </div>
          <img src={CDN_URL+ item.card.info.imageId} className="w-full"/> 
          </div>
         
</div> )}
   </div>
}
export default ItemList;