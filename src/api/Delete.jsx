import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};
const deleteUser = async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  return id;
};
const App = () => {
  const queryClient = useQueryClient();

  const { data: users, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 50000,
  });

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (deletedId) => {
      queryClient.setQueryData(['users'], (oldData) =>
        oldData.filter((user) => user.id !== deletedId)
      );
    },
  });

  if (isLoading) return <p className="text-yellow-600">Loading...</p>;
  if (isError) return <p className="text-red-600">Something went wrong</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>User List</h2>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            background: '#eee',
            marginBottom: '10px',
            borderRadius: '6px',
          }}
        >
          <div>
            <p><strong>{user.name}</strong></p>
            <p style={{ fontSize: '14px' }}>{user.email}</p>
          </div>
          <button
            style={{
              background: 'red',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '4px',
              border: 'none',
            }}
            onClick={() => mutation.mutate(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
