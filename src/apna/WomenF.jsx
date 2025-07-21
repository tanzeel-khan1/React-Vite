import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function WomenF(){

   const [visibleCount, setVisibleCount] = useState(5); 
      const handleSeeMore = () => {
        setVisibleCount((prev) => prev + 5);
      };
    
      const  navigate = useNavigate()
     
      const goNav = () => {
        navigate("/Saim")
      }
      const products = [
        {
          id: 1,
          img: "https://bluefery.com/cdn/shop/files/1_0ffa3122-9740-4278-b16d-e09b77a77a7f.png?v=1734418925",
          des: "Baroque - 3PC Lawn Embroidered Suit - BFU0068",
                button: "Full View"
    
        },
        {
          id: 2,
          img: "https://bluefery.com/cdn/shop/files/1_f78d75c2-fcdc-4db7-a6ba-1b947c5fc9b2.png?v=1750146851",
          des: "QalamKar - 3PC Lawn ChickenKari",
                button: "Full View"
    
        },
        {
          id: 3,
          img: "https://bluefery.com/cdn/shop/files/1_5864ca21-fd2f-43dc-af61-c3b31ed4edc1.png?v=1748076037",
          des: "LLYS - 3PC Lawn Embroidered Suit- BFB0",
                button: "Full View"
    
        },
        {
          id: 4,
          img: "https://bluefery.com/cdn/shop/files/89.png?v=1694068631",
          des: "Sapphire - 3PC ",
                button: "Full View"
    
        },
        {
          id: 5,
          img: "https://bluefery.com/cdn/shop/files/98_ea69859f-4a31-405c-8b43-a169b9d69a09.png?v=1738910013",
          des: "Sapphire - 3PC Lawn ",
          button: "Full View"
        },
        {
          id: 6,
          img: "https://bluefery.com/cdn/shop/files/7_879a8592-41ad-4892-9991-6d1af4866cb1.png?v=1746432583",
          des: "Allys - 3PC Lawn",
         button: "Full View"
    
        },
        {
          id: 7,
          img: "https://bluefery.com/cdn/shop/files/1_b87b71f4-b26f-4ddc-a995-7bf1bf660862.png?v=1744703005",
          des: "Mohagni - 3PC Lawn",
        button: "Full View"
    
        },
         {
            id: 8,
            img: "https://bluefery.com/cdn/shop/files/2_12696a3b-310b-4bee-9c06-39742b457728_640x.png?v=1747296052",
            des: "Mohagni - 3PC Lawn ",
                  button: "Full View"
    
        },
    {
            id: 9,
             img: "https://bluefery.com/cdn/shop/files/13_4bc0d6ca-4d34-4226-97fb-32be3d7e940b.png?v=1746615505",
            des: "work Suit",
        button: "Full View"
    
        },
        {
            id: 10,
            img: "https://bluefery.com/cdn/shop/files/14_d66e8771-ecd9-4f3f-8706-ff65d6c83938.png?v=1746429156",
            des: "Nureh - 3PC Lawn",
                  button: "Full View"
    
        },
      ];
    return(
        <>
        <h1 className="text-2xl font-bold mt-[25rem] ml-[3rem] absolute">
        Women's Fashion
      </h1>


<img
className="h-[20rem] w-[100%] mt-[3rem]"
src="https://bluefery.com/cdn/shop/files/1_ab3d7043-d26a-44e1-a18e-081b0304653d.png?v=1734670802&width=1370"
/>
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
export default WomenF;