import React, { useState } from "react";

function Babar({ onAddToCart }) {
  const products = [
    { id: 1, img: "https://i.ebayimg.com/thumbs/images/g/ScAAAOSwXl1mj7C~/s-l960.webp", des: "outdoor cooking", price: "123" },
    { id: 2, img: "https://i.ebayimg.com/thumbs/images/g/poAAAOSwWu5kWViF/s-l225.webp", des: "patio furniture", price: "173" },
    { id: 3, img: "https://i.ebayimg.com/thumbs/images/g/3qYAAOSwllRnUTzX/s-l960.webp", des: "Firepits", price: "133" },
    { id: 4, img: "https://i.ebayimg.com/images/g/oskAAOSw9MRduA2E/s-l960.jpg", des: "hedge trimmers", price: "223" },
    { id: 5, img: "https://i.ebayimg.com/thumbs/images/g/ONQAAOSwWTRn4M7U/s-l960.webp", des: "Garden tools", price: "223" },
    { id: 6, img: "https://i.ebayimg.com/thumbs/images/g/sYkAAOSwl~dn0aTx/s-l960.webp", des: "Outdoor rugs", price: "193" },
    { id: 7, img: "https://i.ebayimg.com/thumbs/images/g/8AUAAOSwzjRn~4xN/s-l960.webp", des: "Pools", price: "11123" },
    { id: 8, img: "https://i.ebayimg.com/thumbs/images/g/HS0AAOSwkfFmA7qV/s-l960.webp", des: "Storage", price: "523" },
    { id: 9, img: "https://i.ebayimg.com/images/g/uu4AAOSwkNNf-DU-/s-l500.webp", des: "Soup Dispenser", price: "11223" },
    { id: 10, img: "https://i.ebayimg.com/images/g/A~IAAOSw6H5nygjv/s-l1600.webp", des: "Food factory", price: "1123" },
  ];

  const [inputs, setInputs] = useState({});
    const [thanks, setThanks] = useState({}); 
  
    const handleInputChange = (id, value   ) => {
      setInputs((prev) => ({
        ...prev,
        [id]: value,
      }));
    };
  
    const handleClick = (item, inputData) => {
      const dataToSave = {
        product: item,
        input: inputData,
      };
      localStorage.setItem("myProduct", JSON.stringify(dataToSave));
  
    setInputs((prev) => ({
        ...prev,
        [item.id]: "",
      }));
  
      setThanks((prev) => ({
        ...prev,
        [item.id]: true,
      }));
  
      
      setTimeout(() => {
        setThanks((prev) => ({
          ...prev,
          [item.id]: false,
        }));
      }, 5000);
    };
  
  return (
    <div className="flex flex-wrap gap-6 mt-[2rem] justify-center">
      {products.map((item) => (
        <div key={item.id} className="h-[40rem] w-[22%] bg-gray-100 rounded-[10px] shadow-md p-2 flex flex-col items-center">
          <img className="h-[20rem] w-[90%] rounded-[10%] mt-[1rem]" src={item.img} alt={item.des} />
          <h1 className="text-center mt-[1rem] font-semibold">{item.des}</h1>
          <h3 className="text-2xl text-center text-yellow-500 mt-[0.3rem]">${item.price}</h3>

          {/* <button
            onClick={() =>  onAddToCart(item)
            }
            className="h-[2rem] mt-[1rem] w-[60%] rounded-[10px] bg-blue-600 text-white"
          >
            Add To Cart
          </button> */}
{/* <button
  onClick={() => {
    alert("Added to cart!");
    onAddToCart(item);
  }}
  className="h-[2rem] mt-[1rem] w-[60%] rounded-[10px] bg-blue-600 text-white"
>
  Add To Cart
</button> */}
 <button
  onClick={() => {
    alert("Added to cart!");
    onAddToCart(item);
  }}
  className="h-[2rem] mt-[1rem] w-[60%] rounded-[10px] bg-blue-600 text-white"
>
  Add To Cart
</button>


          <h2 className="text-center mt-[1rem]">You talk about this product</h2>
          <input
            type="text"
            placeholder="Type here"
            className="border p-2 rounded w-[80%] mt-2"
          />
          {/* <button className="bg-blue-400 text-white px-4 py-2 rounded mt-[1rem]">
            Send
          </button> */}
            <button
                className="bg-blue-400 text-white px-4 py-2 rounded mt-[1rem]" 
                onClick={() => handleClick(item, inputs[item.id] || "")}>
                {thanks[item.id] ? "Thanks!" : "Send"}
              </button>
        </div>
      ))}
    </div>
  );
}

export default Babar;
