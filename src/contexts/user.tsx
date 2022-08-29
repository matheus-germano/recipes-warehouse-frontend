import { useState, useEffect, createContext } from 'react';

interface UserContextProps {
  children: React.ReactNode
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  image: string;
}

interface UserCreateContextProps {
  user: UserProps | null;
  setUser: (user: UserProps | null) => void;
}

export const UserContext = createContext<UserCreateContextProps>({
  user: null,
  setUser: (user: UserProps | null) => { }
});

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