// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Konfigurasi session user (secret, lifetime).
export const sessionConfig = {
  secret: process.env.SESSION_SECRET || 'my-super-secret-session-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 86400000 },
};
