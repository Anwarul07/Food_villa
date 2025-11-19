import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import useOnline from "./utilty/useOnline";
import UserContext from "./utilty/Context";
import { Provider } from "react-redux";
import { store } from "./utilty/store";
import Body from "./Body";

//Combined layout
const Layout = () => {
  const [ctxtdynamic, setCtxtdynamic] = useState({
    name: "dyanmic usernamectxt",
    email: "dynamic mailctxt",
  });

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="min-80 min-h-80 m-10">
        <p>Sorry please check internet </p>
      </div>
    );
  }
  return (
    //  This  Fragment is used to avoid one parent system
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: ctxtdynamic,
            setUser: setCtxtdynamic,
          }}
        >
          {/*value prop must come with value */}
          <Header />
          <Outlet />
        </UserContext.Provider>
        <Footer />
        {/* </UserContext.Provider>  *this is used to dynamic usercontext data to these coponent inside only  */}
      </Provider>
      {/**Providing store of all componnent  */}
    </>
  );
};

export default Layout;

// const Layout2 = () => {

//   return (
//     <React.Fragment>
//       {/* This Fragment is used to avoid one parent system it can be <> </> */}
//       <Header />
//       <Body />
//       <Footer />
//     </React.Fragment>
//   );
// };
