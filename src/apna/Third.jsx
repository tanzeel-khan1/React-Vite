import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Third(){

   const [visibleCount, setVisibleCount] = useState(5); 
      const handleSeeMore = () => {
        setVisibleCount((prev) => prev + 5);
      };
    
      const  navigate = useNavigate()
     
      const goNav = () => {
        navigate("/Shaheen")
      }
      const products = [
        {
          id: 1,
          img: "https://i.ebayimg.com/images/g/vQoAAOSwvAtlnI0E/s-l1600.webp",
          des: "Sony WH-CH720N",
                button: "Full View"
    
        },
        {
          id: 2,
          img: "https://i.ebayimg.com/thumbs/images/g/25IAAOSwlVtm~rbI/s-l500.jpg",
          des: "Dyson V11 Torque ",
                button: "Full View"
    
        },
        {
          id: 3,
          img: "https://i.ebayimg.com/images/g/6VcAAOSwfwpnhsP1/s-l1600.webp",
          des: "SSG",
                button: "Full View"
    
        },
        {
          id: 4,
          img: "https://i.ebayimg.com/images/g/DDcAAOSwEjhjcrCI/s-l1600.webp",
          des: "Apple iPhone 13 A2482 128GB Network",
                button: "Full View"
    
        },
        {
          id: 5,
          img: "https://i.ebayimg.com/images/g/EWkAAOSwfztnDzdq/s-l1600.webp",
          des: "eufy 2K Outdoor Solar Security Cameras (SoloCam S230)",
          button: "Full View"
        },
        {
          id: 6,
          img: "https://i.ebayimg.com/images/g/nMcAAOSwi4lnLfAU/s-l1600.webp",
          des: "Certified Refurbished Western Digital 4TB WD Elements",
         button: "Full View"
    
        },
        {
          id: 7,
          img: "https://friendshome.pk/cdn/shop/files/Untitledproject_1_c8ea5c81-ddec-47ec-af37-a2cceaf9b5db.jpg?v=1726726586",
          des: "Haier ref",
        button: "Full View"
    
        },
         {
            id: 8,
            img: "https://electrohub.com.pk/wp-content/uploads/2022/09/12-HFP-B-2.jpg",
            des: "Haier A/C",
                  button: "Full View"
    
        },
    {
            id: 9,
            img: "data:image/jpeg;base64,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",
            des: "Haier Washing Machine",
        button: "Full View"
    
        },
        {
            id: 10,
            img: "https://static-01.daraz.pk/p/3eab4445b4d363165a9e284910b84a59.jpg",
            des: "Haier L-E-D /  TV",
                  button: "Full View"
    
        },
      ];
    return(
        <>
        <div className="h-[20rem] w-[100%]  mt-[5rem] bg-[#ff8806] flex">
        
        <div className="h-[20rem] w-[50%] ">
    <h1 className="font-bold text-3xl pt-[4rem] pl-[6rem] text-[#562501]">Sell and prep for summer</h1>
    <p className="pl-[6rem] pt-[1rem] text-[#562501]">Say 'goodbye' to last year's loves and make room for new finds.</p>
       <button className="h-[2rem] w-[15rem] bg-[#562501] ml-[6rem] mt-[2rem] text-[#ff8806] font-bold rounded-[10px]">Start Listing</button>
        </div>


{/* <img src="https://i.ebayimg.com/images/g/mhoAAeSwrC9nyxkE/s-l500.webp" 
className="h-[10rem] w-[16%] bg-[red] ml-[20rem]"
/> */}
<div className="h-[10rem] w-[16%] bg-[white] ml-[20rem] mt-[1rem] relative rounded-[20px]"
>
    <img src="https://i.ebayimg.com/images/g/mhoAAeSwrC9nyxkE/s-l500.webp" 
className="h-[10rem] w-[70%] ml-[2rem]  "
/>
</div>

<div className="h-[10rem] w-[16%] bg-[white] ml-[50rem] mt-[9rem] absolute rounded-[20px]"
>
    <img src="https://i.ebayimg.com/images/g/kscAAOSwa31k6ah9/s-l500.webp" 
className="h-[10rem] w-[70%] ml-[2rem] rounded-[20px] "
/>
</div>
        </div>



<h1 className="text-2xl font-bold mt-[2rem] ml-[3rem] absolute">
        Magical Product's
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

<section className="h-[17rem] w-[70%]  rounded-[10px]  border border-black  mt-[2rem] ml-[5.3rem] mb-[1rem] flex">
  <div  className="h-[17rem] w-[50%] ">
    <p className="font-light pl-[3rem] pt-[1rem]">Featured</p>
    <h1 className="font-bold ml-[3rem] pt-[0.3rem] text-blue-700 text-2xl ">ebay</h1>
   <h1 className="font-bold ml-[3rem] pt-[0.3rem] text-black-900 text-2xl ">Deals made easy all Year long </h1>
    <p className="font-light pl-[3rem] pt-[1rem]">Free shopping. Best Priceess</p>

<button  className="h-[3rem] w-[30%] border border-black  mt-[1rem] ml-[3rem] rounded-[50px]
  hover:bg-black hover:text-white hover:border-black-600 transition duration-300 ease-in-out">
  <a href="https://www.ebay.com/"> Get Your Things</a>
</button>



  </div>
  <img src="apna hai .png"
  className="w-[50%] rounded-[10px]" 
  />
</section>

        </>
    )
}
export default Third