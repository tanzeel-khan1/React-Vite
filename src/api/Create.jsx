import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

// Fetch users from API
const fetchUsers = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
};

// Create a new user
const createUser = async () => {
  const newUser = {
    name: 'New User',
    email: 'newuser@example.com',
  };
  const res = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
  return res.data; // contains new user object
};

const App = () => {
  const queryClient = useQueryClient();

  // Fetch users
  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  // Create user mutation
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      // Update UI without refetch
      queryClient.setQueryData(['users'], (oldData = []) => [...oldData, newUser]);
    },
  });

  if (isLoading) return <p className="text-yellow-600">Loading...</p>;
  if (isError) return <p className="text-red-600">Something went wrong</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>User List</h2>
      <button
        onClick={() => mutation.mutate()}
        style={{
          background: 'green',
          color: 'white',
          padding: '10px 20px',
          marginBottom: '20px',
          border: 'none',
          borderRadius: '6px',
        }}>
        Create User
      </button>

      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: '12px', background: '#eee', padding: '10px', borderRadius: '6px' }}>
          <p><strong>{user.name}</strong></p>
          <p style={{ fontSize: '14px' }}>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
