import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
};

const UpdatePost = (id) => {
  return axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    name: "I have Updated",
  });
};

const UsersList = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const updateMutation = useMutation({
    mutationFn: UpdatePost,
    onSuccess: (response, updatedId) => {
      queryClient.setQueryData(['users'], (oldData) =>
        oldData.map((user) =>
          user.id === updatedId
            ? { ...user, name: "I have Updated" }
            : user
        )
      );
    },
  });

  if (isLoading) return <p className="text-yellow-600">Loading...</p>;
  if (isError) return <p className="text-red-600">Something went wrong</p>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 font-bold text-lg mb-4 border-b pb-2">
        <span className="text-green-600">Name</span>
        <span className="text-red-400">Email</span>
        <span className="text-blue-700">City</span>
        <span className="text-gray-700">Action</span>
      </div>

      <ul className="space-y-2">
        {data.map((user) => (
          <li
            key={user.id}
            className="grid grid-cols-4 items-center border p-3 rounded-md shadow-sm hover:bg-gray-100 transition"
          >
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.address.city}</span>
            <button
              onClick={() => updateMutation.mutate(user.id)}
              className="text-sm text-white bg-blue-500 px-2 py-1 rounded"
            >
              Update Name
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
