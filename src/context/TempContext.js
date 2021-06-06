import { createContext } from "react";

export const TempContext = createContext({
  name: "",
  userName: "",
  databaseId: "",
  set: () => {},
});
