import { useContext } from "react";
import { UserContext } from "../contexts/user";

export function useUser() {
  const value = useContext(UserContext);

  return value;
}