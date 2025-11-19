import Cards from "./Cards";
import apiList from "./constant";
import { swiggy } from "./constant";
import { useState, useEffect, useContext } from "react";
import filterdata from "./Filterdata";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import useOnline from "./utilty/useOnline";
import UserContext from "./utilty/Context";

//  Body
const Body = ({ drill }) => {
  const [filterapi, setFilterapi] = useState([]);
  const [allapi, setAllapi] = useState([]);
  const [srcstr, setSrcstr] = useState("");
  // const {user, setUser}=useContext(UserContext)

  console.log("render()");
  async function Apicall() {
    const datas = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await datas.json();
    console.log(json);
    setAllapi(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterapi(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    Apicall();
  }, []);

  // if (filterapi?.length === 0) return <h3>No Items matched</h3>
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="min-80 min-h-80 m-10 bg-gray-200 ">
        <p>Sorry please check internet or check internet </p>
      </div>
    );
  }
  if (!allapi) return null;
  return allapi?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="srch ml-24 mt-3">
        <input
          type="text"
          className="srchInput h-10 w-96 p-2 mr-3 bg-gray-400 outline-none text-sm  border-2 border-[#5f52c3]"
          placeholder="search"
          value={srcstr}
          onChange={(e) => setSrcstr(e.target.value)}
        />
        <button
          className="srchBtn h-10 w-18 px-2 text-sm bg-gray-600 text-white border-2 border-[#5f52c3]"
          onClick={() => {
            const data = filterdata(srcstr, allapi);
            setFilterapi(data);
          }}
        >
          search
        </button>

        {/* <input type="text" className="m-5"  value={user.name} onChange={(e)=>setUser({
          name:e.target.value,
          email:"dynamic email using inpt"
        })

        }/> */}
      </div>

      <main className="body my-4 flex flex-row flex-wrap justify-center gap-3.5 align-middle min-h-80 m-10">
        {filterapi.map((e, index) => {
          return (
            <Link to={"/menu/" + e.info.id} key={e.info.id}>
              <Cards {...e.info} drill={drill} />
            </Link>
          );
        })}
      </main>
    </>
  );
};
export default Body;
