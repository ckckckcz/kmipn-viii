// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Komponen tombol (Button) reusable dengan styling dasar.
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  style,
  ...props
}) => {
  const baseStyle: React.CSSProperties = {
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: variant === 'primary' ? '#0070f3' : '#666',
    color: '#fff',
    ...style,
  };

  return (
    <button style={baseStyle} {...props}>
      {children}
    </button>
  );
};
