import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Second() {
  const [visibleCount, setVisibleCount] = useState(5); 
  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const  navigate = useNavigate()
 
  const goNav = () => {
    navigate("/Babar")
  }
  const products = [
    {
      id: 1,
      img: "https://i.ebayimg.com/thumbs/images/g/ScAAAOSwXl1mj7C~/s-l960.webp",
      des: "outdoor cooking",
            button: "Full View"

    },
    {
      id: 2,
      img: "https://i.ebayimg.com/thumbs/images/g/poAAAOSwWu5kWViF/s-l225.webp",
      des: "patio furniture",
            button: "Full View"

    },
    {
      id: 3,
      img: "https://i.ebayimg.com/thumbs/images/g/3qYAAOSwllRnUTzX/s-l960.webp",
      des: "Firepits",
            button: "Full View"

    },
    {
      id: 4,
      img: "https://i.ebayimg.com/images/g/oskAAOSw9MRduA2E/s-l960.jpg",
      des: "hedge trimmers",
            button: "Full View"

    },
    {
      id: 5,
      img: "https://i.ebayimg.com/thumbs/images/g/ONQAAOSwWTRn4M7U/s-l960.webp",
      des: "Garden tools",
      button: "Full View"
    },
    {
      id: 6,
      img: "https://i.ebayimg.com/thumbs/images/g/sYkAAOSwl~dn0aTx/s-l960.webp",
      des: "Outdoor rugs",
     button: "Full View"

    },
    {
      id: 7,
      img: "https://i.ebayimg.com/thumbs/images/g/8AUAAOSwzjRn~4xN/s-l960.webp",
      des: "Pools",
    button: "Full View"

    },
     {
        id: 8,
        img: "https://i.ebayimg.com/thumbs/images/g/HS0AAOSwkfFmA7qV/s-l960.webp",
        des: "Storage",
              button: "Full View"

    },
{
        id: 9,
        img: "https://i.ebayimg.com/images/g/uu4AAOSwkNNf-DU-/s-l500.webp",
        des: "Soup Dispenser",
    button: "Full View"

    },
    {
        id: 10,
        img: "https://i.ebayimg.com/images/g/A~IAAOSw6H5nygjv/s-l1600.webp",
        des: "Food factory",
              button: "Full View"

    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mt-[2rem] ml-[3rem] absolute">
        Make EveryDay a staycation
      </h1>

      {visibleCount < products.length && (
        <div className="flex justify-center mt-6">
                <p onClick={handleSeeMore} className="ml-[71rem] underline mt-[1rem] cursor-pointer">See All</p>

        </div>
      )}

      <div className="flex flex-wrap gap-6 mt-[6rem] justify-center ">
        {products.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="h-[20rem] w-[16%] grid  rounded-[10px] hover:scale-105 transition duration-{ms}
 shadow-md  shadow-[rgba(3,2,4,0.3)]
">
            <img
              className="h-[10rem] w-[90%] rounded-[10%] mt-[2rem] mx-auto"
              src={item.img}/>
            <h1 className="text-center mt-[0.1rem] font-semibold">{item.des}</h1>
             <button
              onClick={() => goNav()}
              className=" shadow-lg shadow-[rgba(173,216,230,0.8)]   px-4 py-2 bg-blue-500 h-[3rem] text-white mt-[0.2rem] rounded hover:bg-blue-600 w-[60%] mx-auto mt-auto">
             {item.button}
           </button>
          </div>
        ))}
      </div>

      
    </>
  );
}

export default Second;


