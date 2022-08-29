import { useState, useEffect, createContext } from 'react';

export const UserContext = createContext({});

interface UserContextProps {
  children: React.ReactNode
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  image: string;
}

export function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<UserProps | null>(() => {
    try {
      return JSON.parse(localStorage.getItem('user') || '');
    } catch { return null }
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}