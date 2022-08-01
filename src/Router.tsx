import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Initial from './pages/Initial';
import Success from './pages/Success';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </Router>
  );
}
