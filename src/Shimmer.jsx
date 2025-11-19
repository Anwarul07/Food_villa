export const Shimmer = () => {
  return (
    <div className="body my-4 flex flex-row flex-wrap justify-center gap-3.5 align-middle min-h-80 m-10">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="cards h-[600px] w-52 border-2 p-3">
            <div className="food-card w-40 h-40 m-auto  bg-gray-300"></div>
          </div>
        ))}
    </div>
  );
};
