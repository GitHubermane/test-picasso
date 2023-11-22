import { Layout } from "components";
import { Route, Routes } from "react-router-dom";
import { routes } from "routes";

const App = () => {
  return (
    <Layout>
      {routes.map(({ path, Component }) => (
        <Routes key={path}>
          <Route
            path={path}
            element={<Component />}
          />
        </Routes>
      ))}
    </Layout>
  );
};

export default App;
