// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Komponen/Fitur Otentikasi untuk login/logout user.
import React from 'react';
import { Button } from '../../components/Button';

export const AuthFeature: React.FC = () => {
  const handleLogin = () => {
    console.log('User logged in');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Fitur Otentikasi</h3>
      <Button onClick={handleLogin}>Log In</Button>
    </div>
  );
};
