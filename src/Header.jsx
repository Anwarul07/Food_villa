import anwar from "../public/anwar.png";

import { useState } from "react";
import { Link } from "react-router";
import UserContext from "./utilty/Context";

// const logggedin = () => {

//   return false;
// };

//Header
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  // const {user} = useContext(UserContext);
  // user must be same as name user like in usercontext

  return (
    <header className="nav bg-[#5f52c3] flex  h-12 justify-evenly text-white">
      <div className="nav-right flex flex-row gap-4 pl-12  w-1/2  align-middle pt-2">
        <div className="round w-8 h-8 bg-[greenyellow] rounded-full ">
          <img
            src={anwar}
            alt="lg"
            id="logs"
            className="round w-8 h-8 bg-[greenyellow] rounded-full"
          />
        </div>
        <h3 className="pt-1">Food Villa</h3>
        {/* <h4>{user.name}</h4>
          <h4>{user.email}</h4> */}
      </div>
      <div className="nav-left pt-2 flex flex-row gap-2.5  w-1/2 justify-center align-middle">
        <ul className="flex gap-6">
          <li>
            {/* <Link to="/home">Home</Link> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/signup">sign up</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            {isLogin ? (
              <button
                className="bg-slate-700 w-20 h-7 flex align-middle justify-center"
                onClick={() => setIsLogin(false)}
              >
                Log out
              </button>
            ) : (
              <button
                className="bg-slate-700 w-20 h-7 flex align-middle justify-center"
                onClick={() => setIsLogin(true)}
              >
                Log in
              </button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
