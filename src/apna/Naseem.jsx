import React, { useState } from "react";
function Babar({onAddToCart}) {
const products = [
        {
          id: 1,
          img: "https://i.ebayimg.com/00/s/NTIzWDgzOA==/z/3YsAAOSwMGloU0vO/$_57.JPG",
          des: "Jordan 5 Retro 2025 Grape",
                button: "Full View",
 price:"2933",
                    add: "Add To Cart"
    
        },
        {
          id: 2,
           img: "https://i.ebayimg.com/images/g/C~0AAOSwYONnzWT4/s-l1600.jpg",
          des: "Jordan 4 Retro OG 2025 ",
                button: "Full View",
     price:"23389",
                    add: "Add To Cart"
    
        },
        {
          id: 3,
           img: "https://i.ebayimg.com/images/g/BgcAAeSwqhVoO-eC/s-l1600.webp",
          des: "A Ma Maniére x Air Jordan ",
                button: "Full View",
         price:"2343",
                    add: "Add To Cart"
    
        },
        {
          id: 4,
          img: "https://i.ebayimg.com/thumbs/images/g/YSkAAOSwpppoSgQU/s-l400.webp",
          des: "Hayley Wilson ",
                button: "Full View",
     price:"237833",
                    add: "Add To Cart"
    
        },
        {
          id: 5,
           img: "https://i.ebayimg.com/images/g/EG8AAOSwmQZoKYf-/s-l1600.jpg",
          des: "Nike Lil Yachty x Air Force ",
          button: "Full View",
           price:"2453",
                    add: "Add To Cart"
        },
        {
          id: 6,
          img: "https://i.ebayimg.com/thumbs/images/g/KM0AAOSwgvNoJoLQ/s-l960.webp",
          des: "Nike Air Jordan",
         button: "Full View",
          price:"2033",
                    add: "Add To Cart"
    
        },
        {
          id: 7,
           img: "https://i.ebayimg.com/images/g/xsYAAOSwC-xoGmWL/s-l1600.jpg",
          des: "Jordan 12 Retro 2025 Melo",
        button: "Full View",
         price:"233323",
                    add: "Add To Cart"
    
        },
         {
            id: 8,
           img: "https://i.ebayimg.com/images/g/JjoAAOSw-N5oKYe7/s-l1600.jpg",
            des: "Jordan 1 Retro OG High UNC Reimagined",
             button: "Full View",
            price:"2333",
                    add: "Add To Cart"

    
        },
    {
            id: 9,
           img: "https://i.ebayimg.com/images/g/fUYAAOSwUFpoQkO9/s-l500.webp",
            des: "IM4843-010 Nike",
        button: "Full View",
         price:"2633",
                    add: "Add To Cart"
    
        },
        {
            id: 10,
           img: "https://i.ebayimg.com/images/g/Pt4AAOSwg05oU24v/s-l1600.webp",
            des: "Nike Cortez White Black",
                  button: "Full View",
     price:"2333",
                    add: "Add To Cart"
    
        },
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
    <>
      {/* <div className="h-[40rem] w-[100%]  mt-[2rem] overflow-auto"> */}
        <div className="flex flex-wrap gap-6 mt-[2rem] justify-center">
          {products.map((item) => (
            <div
              key={item.id}
              className="h-[40rem] w-[22%] bg-gray-100 rounded-[10px] shadow-md p-2 flex flex-col items-center">
              <img
                className="h-[20rem] w-[90%] rounded-[10%] mt-[1rem]"
                src={item.img}
                alt={item.des}/>
              <h1 className="text-center mt-[1rem] font-semibold">{item.des}</h1>
              <h3 className="text-2xl text-center text-yellow-500 mt-[0.3rem]">
                ${item.price}
              </h3>
              {/* <button onClick={() => onAddToCart(item)} className="h-[2rem] mt-[1rem] w-[60%] rounded-[10px] bg-blue-600 text-white">{item.add}</button> */}
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
                value={inputs[item.id] || ""}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                placeholder="Type here"
                className="border p-2 rounded w-[80%] mt-2"/>
              <button
                className="bg-blue-400 text-white px-4 py-2 rounded mt-[1rem]" 
                onClick={() => handleClick(item, inputs[item.id] || "")}>
                {thanks[item.id] ? "Thanks!" : "Send"}
              </button>
            </div>
          ))}
        </div>
      {/* </div> */}
    </>
  );
}

export default Babar;
