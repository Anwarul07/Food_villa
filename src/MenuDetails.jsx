import React, { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Cloudimg } from "./constant";
import { Shimmer } from "./Shimmer";
import { addItem, clearCart } from "./utilty/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const MenuDetails = () => {
  const param = useParams();
  const { sk } = param;
  const [api, setApi] = useState([]);

  const cartitem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addItem("new"));
  };
  const remove = () => {
    dispatch(clearCart());
  };

  async function getingapi() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setApi(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  console.log(api);
  console.log(param);

  useEffect(() => {
    getingapi();
  }, []);

  const data = api.map((e) => e.info).find((e) => e.id === sk);
  console.log("data is :", data);

  return !api ? (
    <Shimmer />
  ) : (
    <div className="min-80 min-h-80 m-10 ">
      <div className="cards cards h-[600px] w-52 border-2 p-3">
        <img
          className="food-img w-48 h-48"
          src={Cloudimg + data?.cloudinaryImageId}
        />

        <p>{data?.name}</p>
        <p>{data?.costForTwo}</p>
        <p>{data?.avgRating} Star</p>
        <p>{data?.areaName}</p>
        <p>{data?.locality}</p>
        <p>{data?.sla?.slaString}</p>
        <br />
        <br />
        <p>Id : {data?.id} </p>
        {/* <p>Cusines : {data?.cuisines.join(",")}</p> */}
        <p>Avg Ratings : {data?.avgRating} star</p>
        <p>Sla time : {data?.sla.deliveryTime} minute</p>
        <p>offer : {data?.aggregatedDiscountInfoV3?.header}</p>
        <p>coupan : {data?.aggregatedDiscountInfoV3?.subHeader}</p>
        {/* <h1 className="px-4">Menu</h1>
        <ul>
          {Object.values(data?.menu?.items)?.map((item) => (
            <li key={item?.card?.id}>{item?.name}</li>
          ))}
        </ul> */}

        <div className="flex">
          <button
            className="bg-slate-700 text-white my-2 w-20 h-7 flex align-middle justify-center"
            onClick={() => add()}
          >
            add items{" "}
          </button>
          <h4 className="pt-2.5 ml-3">{cartitem.length}</h4>
        </div>
        <div className="flex">
          <button
            className="bg-slate-700 text-white my-2 w-20 h-7 flex align-middle justify-center"
            onClick={() => remove()}
          >
            remove items{" "}
          </button>
          <h4 className="pt-2.5 ml-3">{cartitem.length}</h4>
        </div>
      </div>
    </div>
  );
};
export default MenuDetails;
