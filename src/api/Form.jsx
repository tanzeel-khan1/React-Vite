// import React, { useState } from "react";
// import axios from "axios";
// import { useMutation } from "@tanstack/react-query";

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [message, setMessage] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const loginUser = async (data) => {
//     const response = await axios.post("http://localhost:5000/api/auth/login", data);
//     return response.data;
//   };

//   const signupUser = async (data) => {
//     const response = await axios.post("http://localhost:5000/api/auth/register", data);
//     return response.data;
//   };

//   const mutation = useMutation({
//     mutationFn: isLogin ? loginUser : signupUser,
//     onSuccess: (data) => {
//       setMessage(`${isLogin ? "Login" : "Signup"} Successful!`);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//       });
//     },
//     onError: (error) => {
//       setMessage(error.response?.data?.message || "Something went wrong");
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const dataToSend = isLogin
//       ? { email: formData.email, password: formData.password }
//       : formData;

//     mutation.mutate(dataToSend);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           {isLogin ? "Login" : "Signup"}
//         </h2>

//         {!isLogin && (
//           <>
          
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               className="w-full mb-4 p-2 border border-gray-300 rounded"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

       
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="w-full mb-4 p-2 border border-gray-300 rounded"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             {/* Phone */}
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               className="w-full mb-4 p-2 border border-gray-300 rounded"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </>
//         )}

//         {isLogin && (
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full mb-4 p-2 border border-gray-300 rounded"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         )}

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="w-full mb-4 p-2 border border-gray-300 rounded"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

     
//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded mb-3"
//           disabled={mutation.isLoading}
//         >
//           {mutation.isLoading
//             ? isLogin
//               ? "Logging in..."
//               : "Signing up..."
//             : isLogin
//             ? "Login"
//             : "Signup"}
//         </button>

      
//         <p className="text-sm text-center">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button
//             type="button"
//             className="text-blue-500 underline"
//             onClick={() => {
//               setIsLogin(!isLogin);
//               setMessage("");
//             }}
//           >
//             {isLogin ? "Signup" : "Login"}
//           </button>
//         </p>

       
//         {message && (
//           <p className="text-center text-green-600 font-medium mt-3">{message}</p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default AuthForm;
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2 second delay
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const res = await axios.get("http://localhost:7000/api/auth/product", {
            withCredentials: true,
          });
          setProducts(res.data);
          setLoading(false);
        }, 2000); // 2 second delay
      } catch (err) {
        console.error("Error fetching product data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h2 className="text-xl font-semibold text-blue-600 animate-pulse">
          Loading products...
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Product List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">Address: {item.Address}</p>
              <p className="text-gray-600">Phone: {item.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

