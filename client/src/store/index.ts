// (file ini cmn starter boleh dihapus guys)
// Deskripsi: State manager sederhana menggunakan React Context untuk data global.
import { createContext } from 'react';
import type { User } from '../stypes';

interface GlobalState {
  user: User | null;
  isAuthenticated: boolean;
}

export const GlobalContext = createContext<GlobalState>({
  user: null,
  isAuthenticated: false,
});
