// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Komponen layout utama yang membungkus header, main content, dan footer.
import React from 'react';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '16px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
        <strong>My App Header</strong>
      </header>
      <main style={{ flex: 1, padding: '16px' }}>
        {children}
      </main>
      <footer style={{ padding: '16px', backgroundColor: '#f0f0f0', borderTop: '1px solid #ccc', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} KMIPN Client</p>
      </footer>
    </div>
  );
};
