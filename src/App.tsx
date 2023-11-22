import { Layout } from "components";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "routes";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/posts" />}
        />
      </Routes>

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
