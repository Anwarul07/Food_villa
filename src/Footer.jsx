import { Link } from "react-router"
import UserContext from "./utilty/Context";
import { useContext } from "react";




//Box element
const Box = () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <div className="box-1 align-middle text-white">
        <ul className=" flex flex-col w-50 p-2 pl-16 ">
          <li>
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
          <p> {user.name}</p>
        </ul>
      </div>
    </>
  );
};




//Footer
const Footer = () => {
  return (
    <footer className="footer flex bg-[#5f52c3] ">
      <div className="empty w-1/2 ">


      </div>
      <Box />
      <Box />
      <Box />
    </footer>
  );
};

export default Footer;