import React, { useEffect, useState } from "react";
import AppRouter from "./Router";

const App = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, [])
  return (
    <>
      {init ? (
        <AppRouter />
      ) : (
        "Initiallizing..."
      )}
    </>
  );
}

export default App;