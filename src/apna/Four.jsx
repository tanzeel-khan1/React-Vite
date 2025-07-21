import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Four(){

   const [visibleCount, setVisibleCount] = useState(5); 
      const handleSeeMore = () => {
        setVisibleCount((prev) => prev + 5);
      };
    
      const  navigate = useNavigate()
     
      const goNav = () => {
        navigate("/Naseem")
      }
      const products = [
        {
          id: 1,
          img: "https://i.ebayimg.com/00/s/NTIzWDgzOA==/z/3YsAAOSwMGloU0vO/$_57.JPG",
          des: "Jordan 5 Retro 2025 Grape",
                button: "Full View"
    
        },
        {
          id: 2,
          img: "https://i.ebayimg.com/images/g/C~0AAOSwYONnzWT4/s-l1600.jpg",
          des: "Jordan 4 Retro OG 2025 ",
                button: "Full View"
    
        },
        {
          id: 3,
          img: "https://i.ebayimg.com/images/g/BgcAAeSwqhVoO-eC/s-l1600.webp",
          des: "A Ma Maniére x Air Jordan ",
                button: "Full View"
    
        },
        {
          id: 4,
          img: "https://i.ebayimg.com/thumbs/images/g/YSkAAOSwpppoSgQU/s-l400.webp",
          des: "Hayley Wilson ",
                button: "Full View"
    
        },
        {
          id: 5,
          img: "https://i.ebayimg.com/images/g/EG8AAOSwmQZoKYf-/s-l1600.jpg",
          des: "Nike Lil Yachty x Air Force ",
          button: "Full View"
        },
        {
          id: 6,
          img: "https://i.ebayimg.com/thumbs/images/g/KM0AAOSwgvNoJoLQ/s-l960.webp",
          des: "Nike Air Jordan",
         button: "Full View"
    
        },
        {
          id: 7,
          img: "https://i.ebayimg.com/images/g/xsYAAOSwC-xoGmWL/s-l1600.jpg",
          des: "Jordan 12 Retro 2025 Melo",
        button: "Full View"
    
        },
         {
            id: 8,
            img: "https://i.ebayimg.com/images/g/JjoAAOSw-N5oKYe7/s-l1600.jpg",
            des: "Jordan 1 Retro OG High UNC Reimagined",
                  button: "Full View"
    
        },
    {
            id: 9,
            img: "https://i.ebayimg.com/images/g/fUYAAOSwUFpoQkO9/s-l500.webp",
            des: "IM4843-010 Nike",
        button: "Full View"
    
        },
        {
            id: 10,
            img: "https://i.ebayimg.com/images/g/Pt4AAOSwg05oU24v/s-l1600.webp",
            des: "Nike Cortez White Black",
                  button: "Full View"
    
        },
      ];
    return(
        <>
        <h1 className="text-2xl font-bold mt-[2rem] ml-[3rem] absolute">
          New and hot drops

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
      {/* next */}
      <section className="h-[18rem] w-[100%] bg-red-500 mt-[3rem] mb-[2rem]">
      <img
      src="https://i.ebayimg.com/images/g/00kAAOSw2Qlmfayb/s-l1600.webp"
      className="h-[18rem] w-[100%] absolute"
      />
      <div className="h-[18rem] w-[40%]  relative">
      <h1 className="font-bold text-3xl pt-[2rem] text-white
 ml-[4rem]">From essentials to</h1>
     <h1 className="font-bold text-3xl pt-[0.3rem] ml-[4rem] text-white
">exclusives</h1>
     <p className="text-white pl-[4rem]  pt-[1rem] font-serif
">Shop pre-loved sneakers for an everyday fit or a major flex.
</p>
<button onClick={() => goNav()} className="font-serif
 h-[3rem] w-[12rem] bg-blue-400 rounded-[30px] text-black  mt-[2rem] text-2xl ml-[4rem] hover:bg-blue-600 text-white w-[60%] mx-auto,  " > Check 'em Out</button>

      </div>

      </section>

        </>
    )
}
export default Four