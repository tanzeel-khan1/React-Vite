import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:7000/api/auth/product");
  return res.data;
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Products = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <div className="text-center py-10">Loading...</div>


  if (isError) return <div className="text-center py-10 text-red-500">Error fetching products</div>;

  const firstSix = data.slice(0, 6);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {firstSix.map((product, index) => (
        <motion.div
          key={product._id}
          className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          custom={index}>


          <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4"/>

          <h3 className="text-lg font-bold">{product.name}</h3>

          <p className="text-gray-600">{product.description}</p>


          <p className="text-blue-600 font-semibold mt-2">${product.price}</p>

        </motion.div>
      ))}

    </div>


  );
};

export default Products;
