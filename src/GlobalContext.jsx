import { createContext, useContext } from "preact/compat";
import { useState } from "preact/hooks";

const AppContext = createContext();

export const GlobalContext = ({ children }) => {
  const [gameStatus, setGameStatus] = useState("start");
  const [gameScores, setGameScores] = useState(0);
  const [gameLevel, setGameLevel] = useState("");

  const values = {
    gameStatus: {
      value: gameStatus,
      setValue: setGameStatus,
    },
    scores: {
      value: gameScores,
      setValue: setGameScores,
    },
    level: {
      value: gameLevel,
      setValue: setGameLevel,
    },
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
