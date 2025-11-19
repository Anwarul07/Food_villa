import { Cloudimg } from "./constant";
import { useState, useContext } from "react";
import UserContext from "./utilty/Context";


const Cards = ({
    cloudinaryImageId,
    id,
    name,
    locality,
    areaName,
    costForTwo,
    avgRating,
    sla,
    aggregatedDiscountInfoV3,
    drill,
}) => {
    // const { user } = useContext(UserContext)

    return (
        <div className="cards h-[600px] w-52 border-2 p-3">
            <img className="food-img w-48 h-48" src={Cloudimg + cloudinaryImageId} />
            <br />
            <br />
            <p>Id : {id} </p>
            <p>Name : {name}</p>
            {/* <p>Cusines : {cuisines.join(",")}</p> */}
            <p>Locality : {locality}</p>
            <p>Area : {areaName}</p>
            <p>Cost : {costForTwo}</p>
            <br />

            <p>Avg Ratings : {avgRating} star</p>
            <p>Sla time : {sla.deliveryTime} minute</p>
            <p>Sla Strig : {sla.slaString}</p>

            <p>offer : {aggregatedDiscountInfoV3?.header}</p>
            <p>coupan : {aggregatedDiscountInfoV3?.subHeader}</p>
            {/* <p>props drill : {drill.name}</p> */}
            {/* <p>props drill : {drill.email}</p> */}
            {/* <p>usercontxt : {user.name}</p> */}
            {/* <p>usercontxt : {user.email}</p> */}
        </div>
    );
};

export default Cards;




//Cards
// const Cards = (anyprops) =>{  ------> anyprops.cds.info
//   const data=anyprops.cds.info  ------>  {data.name}
// }  un structured  ------ 1

// const Cards = ({cds}) =>{
//   const data = cds.info;  ------> {data.name}
// }  level 1 where we can use {data.name}    ---- 2

// const Cards = ({cds}) =>{
// const{id, name, locality,areaName, costForTwo, avgRating, deliveryTime, aggregatedDiscountInfoV3, header, subHeader}=cds.info;   ----->{name}  ----> direct

// }  level 2 where we can use {name}   ---- 3

// const Cards = ({id,
//     name,
//     locality, ...
//     sla,})={

//     return(
//       {id}
//       {name}
//       {locality}
//     )}

// const Body = () => {
//   <Cards
//     cloudinaryImageId={apiList[0].info.cloudinaryImageId}
//     id={apiList[0].info.id} .....
//   />;
// };
// }  level 4 where we can use {name}   ---- 4

// const Cards = ({id,
//     name,
//     locality, ...
//     sla,})={

//     return(
//       {id}
//       {name}
//       {locality}
//     )}

// const Body = () => {
//   <Cards {...apiList[0].info.} />;
//   <Cards {...apiList[1].info.} />; ...
// };

// }  level 5 where we can use {name}   ---- 5



// const Cards = ({id,
//     name,
//     locality, ...
//     sla,})={

//     return(
//       {id}
//       {name}
//       {locality}
//     )}

// const Body = () => {
// {
//     apiList.map((e) => {
//         return <Cards key={e.info.id} {...e.info} />;
//     })
// }


// }  level 6 where we can use {name}   ---- 6
// using map function 
