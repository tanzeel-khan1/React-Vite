import React, { useState } from "react";
function Saim({onAddToCart}) {
const products = [
        {
          id: 1,
         img: "https://bluefery.com/cdn/shop/files/1_0ffa3122-9740-4278-b16d-e09b77a77a7f.png?v=1734418925",
          des: "Baroque - 3PC Lawn Embroidered Suit - BFU0068",
                button: "Full View",
 price:"29933",
                    add: "Add To Cart"
    
        },
        {
          id: 2,
            img: "https://bluefery.com/cdn/shop/files/1_f78d75c2-fcdc-4db7-a6ba-1b947c5fc9b2.png?v=1750146851",
          des: "QalamKar - 3PC Lawn ChickenKari",
                button: "Full View",
     price:"23189",
                    add: "Add To Cart"
    
        },
        {
          id: 3,
             img: "https://bluefery.com/cdn/shop/files/1_5864ca21-fd2f-43dc-af61-c3b31ed4edc1.png?v=1748076037",
          des: "LLYS - 3PC Lawn Embroidered Suit- BFB0",
                button: "Full View",
         price:"2343",
                    add: "Add To Cart"
    
        },
        {
          id: 4,
         img: "https://bluefery.com/cdn/shop/files/89.png?v=1694068631",
          des: "Sapphire - 3PC ",
                button: "Full View",
     price:"237833",
                    add: "Add To Cart"
    
        },
        {
          id: 5,
         img: "https://bluefery.com/cdn/shop/files/98_ea69859f-4a31-405c-8b43-a169b9d69a09.png?v=1738910013",
          des: "Sapphire - 3PC Lawn ",
          button: "Full View",
           price:"2453",
                    add: "Add To Cart"
        },
        {
          id: 6,
           img: "https://bluefery.com/cdn/shop/files/7_879a8592-41ad-4892-9991-6d1af4866cb1.png?v=1746432583",
          des: "Allys - 3PC Lawn",
         button: "Full View",
          price:"2033",
                    add: "Add To Cart"
    
        },
        {
          id: 7,
          img: "https://bluefery.com/cdn/shop/files/1_b87b71f4-b26f-4ddc-a995-7bf1bf660862.png?v=1744703005",
          des: "Mohagni - 3PC Lawn",
        button: "Full View",
         price:"233323",
                    add: "Add To Cart"
    
        },
         {
            id: 8,
         img: "https://i.ebayimg.com/images/g/3NgAAOSwJhVoEB7~/s-l960.webp",
            des: "Grand Seiko Superman",
             button: "Full View",
            price:"2333",
                    add: "Add To Cart"

    
        },
    {
            id: 9,
            img: "https://assets.ajio.com/medias/sys_master/root/20250114/NBfQ/678595bf0431850e0d9b079f/-473Wx593H-701051070-blue-MODEL.jpg",
            des: "TREX Women's Watch",
        button: "Full View",
         price:"2633",
                    add: "Add To Cart"
    
        },
        {
            id: 10,
            img: "https://assets.ajio.com/medias/sys_master/root/20250114/GPRz/6785921f0431850e0d9aa4d0/-473Wx593H-701050579-white-MODEL.jpg",
            des: "Women Analogue Watch",
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

export default Saim;
