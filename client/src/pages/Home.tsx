// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Halaman Beranda (Home Page) sebagai landing page awal.
import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Selamat Datang di KMIPN VIII Client!</h1>
        <p>Ini adalah halaman utama starter.</p>
        <Button onClick={() => alert('Tombol ditekan!')}>Klik Saya</Button>
      </div>
    </MainLayout>
  );
};
