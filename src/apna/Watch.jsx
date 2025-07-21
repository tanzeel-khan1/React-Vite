import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Watch(){

   const [visibleCount, setVisibleCount] = useState(5); 
      const handleSeeMore = () => {
        setVisibleCount((prev) => prev + 5);
      };
    
      const  navigate = useNavigate()
     
      const goNav = () => {
        navigate("/Haris")
      }
      const products = [
        {
          id: 1,
          img: "https://i.ebayimg.com/images/g/EWIAAeSw5udoUiL0/s-l960.webp",
          des: "Rolex Submariner Date",
                button: "Full View"
    
        },
        {
          id: 2,
          img: "https://i.ebayimg.com/images/g/eccAAOSwWMVnjpYV/s-l960.webp",
          des: "Rolex Submariner Date Steel Green Dial",
                button: "Full View"
    
        },
        {
          id: 3,
          img: "https://assets.ajio.com/medias/sys_master/root/20231117/7PMF/65577b45afa4cf41f59025b3/-473Wx593H-469457000-blue-MODEL.jpg",
          des: "Blue Dial Analogue Fashion Watch For Men",
                button: "Full View"
    
        },
        {
          id: 4,
          img: "https://i.ebayimg.com/images/g/CWAAAeSwbMZoVZiT/s-l960.webp",
          des: "GRAND SEIKO SBGA059 GRAND",
                button: "Full View"
    
        },
        {
          id: 5,
          img: "https://i.ebayimg.com/images/g/nFAAAeSwrYdoWN1K/s-l960.webp",
          des: "Grand Seiko SBGA227 822722",
          button: "Full View"
        },
        {
          id: 6,
          img: "https://i.ebayimg.com/images/g/f-gAAOSwO2poUdxq/s-l1600.webp",
          des: "Grand Seiko Heritage",
         button: "Full View"
    
        },
        {
          id: 7,
          img: "https://i.ebayimg.com/images/g/CoIAAOSwM3JoUe9i/s-l1600.webp",
          des: "Grand Seiko Evolution 9 Hi-Beat Anniv",
        button: "Full View"
    
        },
         {
            id: 8,
            img: "https://i.ebayimg.com/images/g/3NgAAOSwJhVoEB7~/s-l960.webp",
            des: "Grand Seiko Superman",
                  button: "Full View"
    
        },
    {
            id: 9,
             img: "https://assets.ajio.com/medias/sys_master/root/20250114/NBfQ/678595bf0431850e0d9b079f/-473Wx593H-701051070-blue-MODEL.jpg",
            des: "TREX Women's Watch",
        button: "Full View"
    
        },
        {
            id: 10,
            img: "https://assets.ajio.com/medias/sys_master/root/20250114/GPRz/6785921f0431850e0d9aa4d0/-473Wx593H-701050579-white-MODEL.jpg",
            des: "Women Analogue Watch",
                  button: "Full View"
    
        },
      ];
    return(
        <>
        <h1 className="text-2xl font-bold mt-[2rem] ml-[3rem] absolute">
          Watches

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
    )
}
export default Watch;