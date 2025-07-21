import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
     return res.data;
};

const UsersList = () => {
  const { data,    isLoading,  isError } =  useQuery({
      queryKey: ['users'],
    queryFn:  fetchUsers,
    // staleTime: 50000000, // IS KY BAD HI UPADATE HO GA ! 
    // refetchInterval : 1000, // JAB TAB HUN HAIN UPADTE HOGA ! (POLLING)
    // refetchIntervalInBackground : true, // BACKGROUND MAI UPDATE HOGA  ! (POLLING)
  });
  if (isLoading) return <p className="text-yellow-600">Loading...</p>;
  if (isError) return <p className="text-red-600">Something went wrong</p>;


 

  

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 font-bold text-lg mb-4 border-b pb-2">
        <span className="text-green-600">Name</span>
        <span className="text-red-400">Email</span>
        <span className="text-blue-700">City</span>
      </div>

      <ul className="space-y-2">
        {data.map((user) => (
          <li
            key={user.id}
            className="grid grid-cols-3 border p-3 rounded-md shadow-sm hover:bg-gray-100 transition"
          >
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.address.city}</span>

 

          </li>

        ))}
      </ul>
    </div>
  );
};

export default UsersList;
