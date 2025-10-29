import Sheets from './Sheets.jsx'
import Login from './Login.jsx'
import Commands from './Commands.jsx'
import { Routes, Route } from 'react-router';
import RequireAuth from './RequireAuth.jsx';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <RequireAuth>
            <Sheets />
          </RequireAuth>
        }
      />
      <Route
        path='/:sheetName'
        element={
          <RequireAuth>
            <Commands />
          </RequireAuth>
        }
      />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App
