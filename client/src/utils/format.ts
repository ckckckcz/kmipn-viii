// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Utilitas untuk memformat data (seperti angka, mata uang, atau tanggal).
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
};
