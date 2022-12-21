import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import App from './App';
import NotFound from './NotFound';

function Layout() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Landing />}
      />
      <Route
        path="/restaurant/:restaurantId"
        element={<App />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default Layout;
