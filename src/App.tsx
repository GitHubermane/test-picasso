import { Route, Routes } from "react-router-dom";
import { routes } from "routes";

const App = () => {
  return (
    <>
      {routes.map(({ path, Component }) => (
        <Routes key={path}>
          <Route
            path={path}
            element={<Component />}
          />
        </Routes>
      ))}
    </>
  );
};

export default App;
