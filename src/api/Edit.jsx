import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchUsers = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
};
const editUser = async ({ id, newName }) => {
  const res = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    name: newName,
  });
  return res.data;
};

const App = () => {
  const queryClient = useQueryClient();

  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const mutation = useMutation({
    mutationFn: editUser,
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(['users'], (oldUsers) =>
        oldUsers.map((user) =>
          user.id === updatedUser.id ? { ...user, ...updatedUser } : user
        )
      );
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users.</p>;

  const handleEdit = (id) => {
    const newName = prompt('Enter new name:');
    if (newName) {
      mutation.mutate({ id, newName });
    }
  };


  return (
    <div style={{ padding: '20px' }}>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: '10px', padding: '10px', background: '#eee', borderRadius: '6px' }}>
          <p><strong>{user.name}</strong></p>
          <p>{user.email}</p>
          <button style={{
              background: 'blue',
              color: 'white',
              padding: '6px 12px',
              marginTop: '6px',
              border: 'none',
              borderRadius: '4px',
            }} onClick={() => handleEdit(user.id)}> Edit </button>
        </div>
      ))}
    </div>
  );
};

export default App;
