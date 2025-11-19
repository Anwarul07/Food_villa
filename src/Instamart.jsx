import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2  m-10">
      <h5 className="font-bold text-xl">{title}</h5>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("career");
  //   const [setConfig, setSectionConfig] = useState({
  //   showAbout:true,
  //   showteam:false,
  //   sowCareer:true,
  // });  2  ---
  return (
    <div className="min-80 min-h-80 m-10">
      <div className="mr-80">
        <h1 className="ml-4">Instamart Page</h1>
      </div>

      <Section
        title={"About  first instamart"}
        description={
          "Fisrt description about sections  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain."
        }
        // isVisible={true}
        // isVisible={setConfig.showAbout}

        // setIsVisible={()=>
        //   setSectionConfig({
        //   showAbout:true,
        //   showteam:false,
        //   sowCareer:false,
        // })}

        isVisible={visibleSection === "about"}
        setIsVisible={() => setIsVisibleSection("about")}
      />
      <Section
        title={"About  second  Career instamart"}
        description={
          "Second  description about sections  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment."
        }
        // isVisible={false}
        // isVisible={setConfig.showteam}

        // setIsVisible={()=>
        //   setSectionConfig({
        //   showAbout:false,
        //   showteam:true,
        //   sowCareer:false,
        // })}

        isVisible={visibleSection === "team"}
        setIsVisible={() => setIsVisibleSection("team")}
      />
      <Section
        title={"About  Third  Team instamart"}
        description={
          "Third  description about sections  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment."
        }
        // isVisible={false}

        // isVisible={setConfig.sowCareer}  2 -----
        // setIsVisible={()=>
        //   setSectionConfig({
        //   showAbout:false,
        //   showteam:false,
        //   sowCareer:true,
        // })}

        isVisible={visibleSection === "career"}
        setIsVisible={() => setIsVisibleSection("career")}
      />

      {/* <AboutInstaMart/>
      <DetailsofInstaart/>
      <TeamInstamart/>
      <Product/>
      <Careers/> */}
    </div>
  );
};
export default Instamart;
