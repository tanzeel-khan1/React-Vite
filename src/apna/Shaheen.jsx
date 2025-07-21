import React, { useState } from "react";
function Babar({onAddToCart}) {
const products = [
        {
          id: 1,
          img: "https://i.ebayimg.com/images/g/vQoAAOSwvAtlnI0E/s-l1600.webp",
          des: "Sony WH-CH720N",
                button: "Full View",
 price:"2933",
                    add: "Add To Cart"
    
        },
        {
          id: 2,
          img: "https://i.ebayimg.com/thumbs/images/g/25IAAOSwlVtm~rbI/s-l500.jpg",
          des: "Dyson V11 Torque ",
                button: "Full View",
     price:"23389",
                    add: "Add To Cart"
    
        },
        {
          id: 3,
          img: "https://i.ebayimg.com/images/g/6VcAAOSwfwpnhsP1/s-l1600.webp",
          des: "SSG",
                button: "Full View",
         price:"2343",
                    add: "Add To Cart"
    
        },
        {
          id: 4,
          img: "https://i.ebayimg.com/images/g/DDcAAOSwEjhjcrCI/s-l1600.webp",
          des: "Apple iPhone 13 A2482 128GB Network",
                button: "Full View",
     price:"237833",
                    add: "Add To Cart"
    
        },
        {
          id: 5,
          img: "https://i.ebayimg.com/images/g/EWkAAOSwfztnDzdq/s-l1600.webp",
          des: "eufy 2K Outdoor Solar Security Cameras (SoloCam S230)",
          button: "Full View",
           price:"2453",
                    add: "Add To Cart"
        },
        {
          id: 6,
          img: "https://i.ebayimg.com/images/g/nMcAAOSwi4lnLfAU/s-l1600.webp",
          des: "Certified Refurbished Western Digital 4TB WD Elements",
         button: "Full View",
          price:"2033",
                    add: "Add To Cart"
    
        },
        {
          id: 7,
          img: "https://friendshome.pk/cdn/shop/files/Untitledproject_1_c8ea5c81-ddec-47ec-af37-a2cceaf9b5db.jpg?v=1726726586",
          des: "Haier ref",
        button: "Full View",
         price:"233323",
                    add: "Add To Cart"
    
        },
         {
            id: 8,
            img: "https://electrohub.com.pk/wp-content/uploads/2022/09/12-HFP-B-2.jpg",
            des: "Haier A/C",
             button: "Full View",
            price:"2333",
                    add: "Add To Cart"

    
        },
    {
            id: 9,
            img: "data:image/jpeg;base64,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",
            des: "Haier Washing Machine",
        button: "Full View",
         price:"2633",
                    add: "Add To Cart"
    
        },
        {
            id: 10,
            img: "https://static-01.daraz.pk/p/3eab4445b4d363165a9e284910b84a59.jpg",
            des: "Haier L-E-D /  TV",
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
