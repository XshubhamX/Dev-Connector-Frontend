import { createContext } from "react";

export const TempContext = createContext({
  name: "",
  username: "",
  databaseId: "",
  set: () => {},
});
