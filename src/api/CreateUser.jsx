import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fetchUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

const createUser = async (newUser) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
  return res;
};

const UsersList = () => {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ name: "", email: "", city: "" });
  const [showForm, setShowForm] = useState(false);

  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUsers,
  });

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (newData) => {
      queryClient.setQueryData(["user"], (oldData = []) => {
        const nextId = Math.max(...oldData.map((u) => u.id ?? 0)) + 1;
        return [...oldData, { ...newData.data, id: nextId }];
      });
      setForm({ name: "", email: "", city: "" });
      setShowForm(false);
    },
  });

  const handleCreate = () => {
    const { name, email, city } = form;
    if (name && email && city) {
      createMutation.mutate({ name, email, city });
    } else {
      alert("Please fill all fields");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users</p>;

  return (
  <div className="p-6 max-w-7xl mx-auto">

      <h2 className="text-xl font-bold mb-4">User Management</h2>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-3 px-4 py-2 bg-purple-600 text-white rounded"
      >
        {showForm ? "Close" : " Add User"}
      </button>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 border p-3 rounded space-y-2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full border p-2 rounded"
            />
            <button
              onClick={handleCreate}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
               Create
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="space-y-2"
      >
        {data.map((user) => (
          <motion.li
            key={user.id}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="grid grid-cols-3 gap-2 border p-2 rounded"
          >
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.address?.city || user.city}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default UsersList;
